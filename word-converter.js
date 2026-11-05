/* InfoJano Word Converter — browser-side DOCX rendering and export. */
(() => {
"use strict";
const $=id=>document.getElementById(id),labels={pdf:"PDF",jpg:"JPG",png:"PNG"};let mode=new URLSearchParams(location.search).get("format")||document.body.dataset.output||"pdf";
const state={file:null,pages:[],selected:new Set(),busy:false,formatChoice:mode};
const ensureLibrary=(key,urls,ready)=>{if(ready())return Promise.resolve();if(typeof window.__ijLoadLibrary!=="function")return Promise.reject(Error("Library loader is unavailable. Reload and try again."));return window.__ijLoadLibrary(key,urls,ready)};
const status=(m,t="")=>{$("status").textContent=m;$("status").className="status "+t};
/* Read original Word page size (DOCX twips), rather than trusting preview CSS. */
/* Normalize Word's legacy floating horizontal-rule VML before preview.
   docx-preview can mispaint this VML connector as a filled blue block. Convert
   only very thin, wide VML line shapes to a native paragraph bottom border. */
const normalizeLegacyLines=async file=>{
  const zip=await window.JSZip.loadAsync(file);
  const W="http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const V="urn:schemas-microsoft-com:vml";
  const O="urn:schemas-microsoft-com:office:office";
  let changed=0;
  for(const name of Object.keys(zip.files)){
    if(!/^word\/(?:document|header\d*|footer\d*)\.xml$/.test(name))continue;
    const entry=zip.file(name);if(!entry)continue;
    const source=await entry.async("text");
    if(!source.includes("<w:pict")||!source.includes("<v:shape"))continue;
    const doc=new DOMParser().parseFromString(source,"application/xml");
    if(doc.querySelector("parsererror"))continue;
    const shapes=[...doc.getElementsByTagNameNS(V,"shape")];
    for(const shape of shapes){
      const style=shape.getAttribute("style")||"";
      const type=(shape.getAttribute("type")||"").replace(/^#/,"");
      const width=Number((style.match(/(?:^|;)\\s*width\\s*:\\s*([\\d.]+)pt/i)||[])[1]||0);
      const height=Number((style.match(/(?:^|;)\\s*height\\s*:\\s*([\\d.]+)pt/i)||[])[1]||0);
      const shapeType=[...doc.getElementsByTagNameNS(V,"shapetype")].find(x=>x.getAttribute("id")===type);
      const isLine=shapeType&&shapeType.getAttributeNS(O,"spt")==="32"&&width>=50&&height>0&&height<=2;
      if(!isLine)continue;
      let pict=shape.parentNode;
      while(pict&&pict.localName!=="pict")pict=pict.parentNode;
      const paragraph=shape.parentNode;
      let p=shape;
      while(p&&p.localName!=="p")p=p.parentNode;
      if(!pict||!p)continue;
      pict.parentNode.removeChild(pict);
      let pPr=[...p.childNodes].find(n=>n.nodeType===1&&n.namespaceURI===W&&n.localName==="pPr");
      if(!pPr){pPr=doc.createElementNS(W,"w:pPr");p.insertBefore(pPr,p.firstChild)}
      let pBdr=[...pPr.childNodes].find(n=>n.nodeType===1&&n.namespaceURI===W&&n.localName==="pBdr");
      if(!pBdr){pBdr=doc.createElementNS(W,"w:pBdr");const first=[...pPr.childNodes].find(n=>n.nodeType===1&&n.namespaceURI===W&&n.localName!=="pStyle");pPr.insertBefore(pBdr,first||null)}
      const bottom=doc.createElementNS(W,"w:bottom");
      bottom.setAttributeNS(W,"w:val","single");
      bottom.setAttributeNS(W,"w:sz","6");
      bottom.setAttributeNS(W,"w:space","0");
      bottom.setAttributeNS(W,"w:color","000000");
      const prior=[...pBdr.childNodes].find(n=>n.nodeType===1&&n.namespaceURI===W&&n.localName==="bottom");
      if(prior)pBdr.replaceChild(bottom,prior);else pBdr.appendChild(bottom);
      changed++;
    }
    if(changed)zip.file(name,new XMLSerializer().serializeToString(doc));
  }
  return changed?await zip.generateAsync({type:"blob"}):file;
};
const readDocxPageSize=async file=>{
  try{
    const zip=await window.JSZip.loadAsync(file),xml=await zip.file("word/document.xml")?.async("text");
    if(!xml)return null;
    const m=xml.match(/<w:pgSz\b([^>]*)\/?\s*>/i);if(!m)return null;
    const w=Number((m[1].match(/w:w=["'](\d+)["']/)||[])[1]);
    const h=Number((m[1].match(/w:h=["'](\d+)["']/)||[])[1]);
    return w>0&&h>0?{width:w*25.4/1440,height:h*25.4/1440}:null;
  }catch(_){return null}
};
const waitForPageAssets=async page=>{
  await document.fonts.ready;
  const imgs=[...page.querySelectorAll("img")];
  await Promise.all(imgs.map(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.onload=img.onerror=resolve})));
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
};
const captureWordPage=async(page,scale=3)=>{
  await waitForPageAssets(page);
  const rect=page.getBoundingClientRect();
  if(!(rect.width>0&&rect.height>0))throw Error("Could not read the original Word page layout.");
  const pageIndex=[...document.querySelectorAll("#renderArea section.docx")].indexOf(page);
  return html2canvas(page,{
    scale:Math.max(1,Math.min(4,scale)),useCORS:true,allowTaint:false,backgroundColor:"#fff",logging:false,
    width:Math.ceil(rect.width),height:Math.ceil(rect.height),
    scrollX:0,scrollY:0,
    windowWidth:Math.ceil(rect.width),windowHeight:Math.ceil(rect.height),
    onclone:clonedDoc=>{
      const area=clonedDoc.getElementById("renderArea");
      if(area){area.style.position="static";area.style.left="0";area.style.top="0";area.style.width=Math.ceil(rect.width)+"px";area.style.height="auto";area.style.opacity="1";area.style.zIndex="auto";area.style.overflow="visible";area.style.pointerEvents="auto"}
      const wrapper=clonedDoc.querySelector("#renderArea .docx-wrapper");
      if(wrapper){wrapper.style.width=Math.ceil(rect.width)+"px";wrapper.style.padding="0";wrapper.style.margin="0"}
      const clonedPage=clonedDoc.querySelectorAll("#renderArea section.docx")[pageIndex]||clonedDoc.querySelector("#renderArea section.docx");
      if(clonedPage){clonedPage.style.margin="0";clonedPage.style.transform="none";clonedPage.style.boxShadow="none"}
    }
  });
};
const safeStem=name=>{let s=(name||"document.docx").replace(/\.[^.]+$/,"");s=s.replace(/[\/:*?"<>|\x00-\x1f]/g," ").replace(/[. ]+$/,"").trim()||"document";return s};
const outputName=(ext,page=null)=>{const stem=safeStem(state.file?.name).replace(/-InfoJano$/i,"");return stem+(page===null?"":"-page-"+String(page).padStart(3,"0"))+"-InfoJano."+ext};
const parsePages=(s,n)=>{if(!s.trim())return Array.from({length:n},(_,i)=>i+1);const set=new Set();for(const part of s.split(",")){const m=part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);if(!m)throw Error("Use page numbers like 1-3, 6, 9-11.");const a=+m[1],b=m[2]?+m[2]:a;if(a<1||b<a||b>n)throw Error("Page numbers must be between 1 and "+n+".");for(let i=a;i<=b;i++)set.add(i)}return [...set].sort((a,b)=>a-b)};
const sync=()=>{const a=[...state.selected].sort((x,y)=>x-y);$("range").value=a.join(", ");document.querySelectorAll(".page-card").forEach(c=>{const yes=state.selected.has(+c.dataset.page);c.classList.toggle("selected",yes);c.querySelector("input").checked=yes});$("convert").disabled=!a.length||state.busy;$("selectionInfo").textContent=a.length+" of "+state.pages.length+" page(s) selected"};
const busy=v=>{state.busy=v;$("convert").disabled=v||!state.selected.size;$("file").disabled=v};
const modal=$("formatModal");
const chooseFormat=next=>{state.formatChoice=next;document.querySelectorAll(".format-option").forEach(b=>{const active=b.dataset.format===next;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));const hint=b.querySelector(".select-state");if(hint)hint.textContent=active?"✓ SELECTED":"Tap to select"});$("formatContinue").disabled=!labels[next]};
const openFormatPicker=()=>{chooseFormat(mode);modal.hidden=false};
document.querySelectorAll(".format-option").forEach(b=>b.addEventListener("click",()=>chooseFormat(b.dataset.format)));
$("formatCancel").addEventListener("click",()=>{modal.hidden=true;setMode(state.formatChoice||mode);$("previewPanel").hidden=false;$("downloadPanel").hidden=false;status("Default format selected. You can change PDF, JPG or PNG above.","success")});
$("formatContinue").addEventListener("click",()=>{if(!labels[state.formatChoice])return;setMode(state.formatChoice);modal.hidden=true;$("previewPanel").hidden=false;$("downloadPanel").hidden=false;status("Format selected. Review your pages, then convert.","success");$("previewPanel").scrollIntoView({behavior:"smooth",block:"start"})});
$("file").addEventListener("change",async e=>{const f=e.target.files?.[0];if(!f)return;state.file=null;state.pages=[];state.selected.clear();$("preview").innerHTML="";$("downloads").innerHTML="";$("convert").disabled=true;const ext=f.name.split(".").pop().toLowerCase();if(ext!=="docx"){status("Please choose a .docx file. Older .doc files are not supported yet; save a copy as .docx first.","error");e.target.value="";return}if(f.size>30*1024*1024){status("This file is over 30 MB. Try a smaller DOCX to avoid phone memory problems.","error");e.target.value="";return}state.file=f;try{if(!window.docx?.renderAsync)throw Error("Word preview library did not load. Check your internet connection and reload.");status("Loading Word document support…");await ensureLibrary("Word document ZIP",["https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js","https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js","https://unpkg.com/jszip@3.10.1/dist/jszip.min.js"],()=>typeof window.JSZip==="function"&&typeof window.JSZip.loadAsync==="function");status("Checking Word layout and preparing page previews…");$("renderArea").innerHTML="";$("renderStyles").innerHTML="";const previewFile=await normalizeLegacyLines(f);await window.docx.renderAsync(previewFile,$("renderArea"),$("renderStyles"),{className:"docx",inWrapper:true,breakPages:true,ignoreLastRenderedPageBreak:false,renderHeaders:true,renderFooters:true,renderFootnotes:true,renderEndnotes:true,ignoreFonts:false,useBase64URL:true});await document.fonts.ready;let nodes=[...$("renderArea").querySelectorAll("section.docx")];if(!nodes.length){const w=$("renderArea").querySelector(".docx-wrapper");if(w)nodes=[...w.children].filter(x=>x.nodeType===1)}if(!nodes.length)throw Error("Could not identify the Word pages. Try saving the document again from Microsoft Word.");state.pages=nodes;state.selected=new Set(nodes.map((_,i)=>i+1));$("pageCount").textContent=nodes.length+" page(s)";$("fileInfo").textContent=f.name+" · "+(f.size/1048576).toFixed(2)+" MB · "+nodes.length+" page(s)";$("preview").innerHTML="";for (const [i,p] of nodes.entries()) {const c=document.createElement("label");c.className="page-card selected";c.dataset.page=i+1;const cb=document.createElement("input");cb.type="checkbox";cb.checked=true;cb.setAttribute("aria-label","Select page "+(i+1));cb.addEventListener("change",()=>{cb.checked?state.selected.add(i+1):state.selected.delete(i+1);sync()});const thumb=document.createElement("div");thumb.className="page-thumb";thumb.textContent="PAGE "+(i+1);c.append(cb,thumb);$("preview").append(c)}sync();status("Word document ready. Choose PDF, JPG or PNG to continue.","success");openFormatPicker()}catch(err){state.file=null;status(err.message||"Could not read this Word document.","error")}});
$("range").addEventListener("change",()=>{if(!state.pages.length)return;try{state.selected=new Set(parsePages($("range").value,state.pages.length));sync();status(state.selected.size+" page(s) selected")}catch(e){status(e.message,"error")}});
$("all").onclick=()=>{state.selected=new Set(state.pages.map((_,i)=>i+1));sync();status("All pages selected")};
$("none").onclick=()=>{state.selected.clear();sync();status("Selection cleared. Choose at least one page.")};
$("convert").addEventListener("click",async()=>{if(!state.file||!state.selected.size||state.busy)return;busy(true);$("downloads").innerHTML="";const chosen=[...state.selected].sort((a,b)=>a-b);try{if(mode==="pdf"){await ensureLibrary("PDF export",["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js","https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js","https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js"],()=>!!window.jspdf?.jsPDF);const {jsPDF}=window.jspdf||{};if(!jsPDF)throw Error("PDF export library did not load. Tap Retry or reload and try again.");let pdf=null;const originalSize=await readDocxPageSize(state.file);for(let i=0;i<chosen.length;i++){const p=state.pages[chosen[i]-1],rect=p.getBoundingClientRect(),pageW=originalSize?.width||rect.width*25.4/96,pageH=originalSize?.height||rect.height*25.4/96;if(!(pageW>0&&pageH>0))throw Error("Could not read the original Word page size.");status("Rendering Word page carefully — "+(i+1)+" of "+chosen.length+"…");await ensureLibrary("Image rendering",["https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"],()=>typeof window.html2canvas==="function");const canvas=await captureWordPage(p);if(!pdf)pdf=new jsPDF({orientation:pageW>pageH?"landscape":"portrait",unit:"mm",format:[pageW,pageH],compress:true});else pdf.addPage([pageW,pageH],pageW>pageH?"landscape":"portrait");pdf.addImage(canvas.toDataURL("image/png"),"PNG",0,0,pageW,pageH,undefined,"FAST");canvas.width=1;canvas.height=1}addDownload(pdf.output("blob"),outputName("pdf"),"Download PDF")}else{await ensureLibrary("ZIP export",["https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js","https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js","https://unpkg.com/jszip@3.10.1/dist/jszip.min.js"],()=>typeof window.JSZip==="function");if(!window.JSZip)throw Error("ZIP library did not load. Tap Retry or reload and try again.");const zip=new JSZip(),ext=mode==="jpg"?"jpg":"png",mime=mode==="jpg"?"image/jpeg":"image/png";for(let i=0;i<chosen.length;i++){const p=state.pages[chosen[i]-1];status("Creating "+labels[mode]+" page "+(i+1)+" of "+chosen.length+"…");const dpi=Number($("dpi")?.value||192),quality=Number($("quality")?.value||.94);await ensureLibrary("Image rendering",["https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"],()=>typeof window.html2canvas==="function");const rect=p.getBoundingClientRect();if(!(rect.width>0&&rect.height>0))throw Error("Could not read the original Word page size.");const source=await captureWordPage(p,dpi/96);const blob=await new Promise(r=>source.toBlob(r,mime,mode==="jpg"?quality:undefined));if(!blob)throw Error("Could not create image for page "+chosen[i]);zip.file(outputName(ext,chosen[i]),blob);source.width=1;source.height=1;}if(chosen.length===1){const blob=await zip.file(outputName(ext,chosen[0])).async("blob");addDownload(blob,outputName(ext,chosen[0]),"Download "+labels[mode])}else{status("Packing "+chosen.length+" images into a ZIP…");addDownload(await zip.generateAsync({type:"blob"}),outputName("zip"),"Download all "+labels[mode]+" images (ZIP)")}}status("Conversion complete. Your original Word file was not changed.","success")}catch(e){status(e.message||"Conversion failed. Try a smaller or simpler DOCX file.","error");const retry=document.createElement("button");retry.type="button";retry.className="btn secondary";retry.textContent="Retry conversion";retry.onclick=()=>$("convert").click();$("status").append(" ");$("status").append(retry)}finally{busy(false)}});
function addDownload(blob,name,label){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.className="download-link";a.textContent="↓ "+label+" — "+name;$("downloads").append(a)}
function setMode(next){if(!labels[next])next="pdf";mode=next;document.body.dataset.output=mode;document.querySelectorAll("[data-mode]").forEach(b=>{const active=b.dataset.mode===mode;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))});$("convert").textContent="Convert to "+labels[mode];document.querySelectorAll(".image-settings").forEach(x=>x.hidden=mode==="pdf");document.querySelectorAll(".jpg-quality").forEach(x=>x.hidden=mode!=="jpg");}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
setMode(mode);
})();