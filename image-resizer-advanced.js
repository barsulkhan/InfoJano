/* InfoJano Advanced Image Resizer — physical sizing, crop, target KB and batch */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const preview=$('preview'),width=$('width'),height=$('height'),format=$('format'),quality=$('quality'),resizeBtn=$('resizeBtn'),download=$('download'),status=$('status');
if(!preview||!width||!height||!resizeBtn)return;
let activeImage=null,cropRect=null,batchUrls=[];
const host=document.createElement('section');host.className='ij-advanced';host.id='ijAdvanced';
host.innerHTML=`
<h3>✨ Advanced Image Studio</h3><p class="ij-sub">Precise print sizing, crop tools, target file size and multi-image processing — all inside your browser.</p>
<div class="ij-adv-grid">
 <section class="ij-adv-card"><h4>📐 Physical size &amp; DPI</h4>
  <div class="ij-adv-row"><div><label for="ijUnit">Measurement</label><select id="ijUnit"><option value="px">Pixels</option><option value="cm">Centimetres</option><option value="mm">Millimetres</option><option value="in">Inches</option></select></div><div><label for="ijDpi">DPI</label><input id="ijDpi" type="number" min="30" max="1200" value="300"></div></div>
  <div class="ij-adv-row"><div><label for="ijPhysicalW">Width (pixels)</label><input id="ijPhysicalW" type="number" min="0.01" step="0.01" value="413"></div><div><label for="ijPhysicalH">Height (pixels)</label><input id="ijPhysicalH" type="number" min="0.01" step="0.01" value="531"></div></div>
  <button class="ij-adv-btn primary" id="ijApplyPhysical" type="button">Apply physical size</button><p class="ij-adv-note">Converts the selected physical size and DPI into pixel dimensions. Print software may still need its own DPI setting.</p>
 </section>
 <section class="ij-adv-card"><h4>🎯 Target file size</h4>
  <label for="ijTargetKB">Maximum target (KB)</label><input id="ijTargetKB" type="number" min="5" max="20000" value="100">
  <label for="ijTargetEnabled"><input id="ijTargetEnabled" type="checkbox" style="width:auto;vertical-align:middle;margin-right:6px">Try to fit output under target KB</label>
  <p class="ij-adv-note">Best effort for JPG/WebP. Exact size depends on image content; PNG does not use the quality search.</p>
 </section>
 <section class="ij-adv-card"><h4>✂️ Crop image</h4>
  <label for="ijCropRatio">Crop ratio</label><select id="ijCropRatio"><option value="free">Original / no crop</option><option value="1:1">Square 1:1</option><option value="4:3">Landscape 4:3</option><option value="16:9">Widescreen 16:9</option><option value="3:4">Portrait 3:4</option><option value="2:3">Portrait 2:3</option><option value="3:2">Landscape 3:2</option></select>
  <button class="ij-adv-btn primary" id="ijApplyCrop" type="button">Apply centred crop</button><button class="ij-adv-btn" id="ijResetCrop" type="button">Reset original image</button>
  <p class="ij-adv-note">Centred crop keeps the selected ratio. Check the preview before resizing.</p>
 </section>
 <section class="ij-adv-card"><h4>🗂️ Batch resize</h4>
  <label for="ijBatchFiles">Choose multiple images</label><input id="ijBatchFiles" type="file" accept="image/jpeg,image/png,image/webp" multiple>
  <button class="ij-adv-btn primary" id="ijRunBatch" type="button">Process selected images</button>
  <div class="ij-batch-status" id="ijBatchStatus" aria-live="polite">Select multiple images to prepare individual downloads.</div><div class="ij-batch-list" id="ijBatchList"></div>
  <p class="ij-adv-note">Batch output uses the current pixel dimensions, format and quality. Each result has its own download link.</p>
 </section>
</div>`;
const anchor=document.querySelector('.workspace');
if(anchor)anchor.insertAdjacentElement('afterend',host);
function setStatus(message){if(status)status.textContent=message}
function getImage(src){return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=src})}
async function syncImage(){if(!preview.src||preview.hidden)return null;try{activeImage=await getImage(preview.src);return activeImage}catch(e){return null}}
preview.addEventListener('load',()=>{activeImage=preview;cropRect=null});
document.addEventListener('change',e=>{if(e.target&&e.target.id==='file'){setTimeout(syncImage,50)}});
function canvasBlob(canvas,type,q){return new Promise(resolve=>canvas.toBlob(resolve,type,q))}
async function encodeTarget(canvas,type,q,targetKB){
 if(!targetKB||type==='image/png')return {blob:await canvasBlob(canvas,type,q),quality:q,met:false};
 let low=.08,high=q,best=null,bestQ=low;
 for(let i=0;i<12;i++){const mid=(low+high)/2,b=await canvasBlob(canvas,type,mid);if(!b)break;if(b.size<=targetKB*1024){best=b;bestQ=mid;low=mid}else high=mid}
 if(!best){best=await canvasBlob(canvas,type,.08);bestQ=.08}
 return {blob:best,quality:bestQ,met:best.size<=targetKB*1024};
}
function drawSource(img,w,h){
 const c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d',{alpha:format.value!=='image/jpeg'});
 if(format.value==='image/jpeg'){ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h)}
 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(img,0,0,w,h);return c;
}
function setDownload(blob,name){
 const old=download.href;if(old&&old.startsWith('blob:'))URL.revokeObjectURL(old);
 const url=URL.createObjectURL(blob);download.href=url;download.download=name;download.hidden=false;
 const state=$('downloadState');if(state){state.hidden=false;state.innerHTML='<span aria-hidden="true">✓</span><span>Advanced result ready. Tap Download below.</span>'}
}
function applyPhysical(){
 const unit=$('ijUnit').value,dpi=Number($('ijDpi').value),pw=Number($('ijPhysicalW').value),ph=Number($('ijPhysicalH').value);
 if(!Number.isFinite(dpi)||dpi<30||dpi>1200||pw<=0||ph<=0){setStatus('Enter a valid physical size and DPI (30–1200).');return}
 const factor=unit==='cm'?dpi/2.54:unit==='mm'?dpi/25.4:unit==='in'?dpi:1;
 const w=Math.round(pw*factor),h=Math.round(ph*factor);
 if(w>10000||h>10000||w*h>40000000){setStatus('Calculated dimensions exceed the safe output limit. Reduce size or DPI.');return}
 width.value=w;height.value=h;document.querySelector('[data-mode="custom"]')?.click();
 setStatus('Physical size converted: '+w+' × '+h+' pixels at '+dpi+' DPI calculation.');
}
$('ijApplyPhysical').addEventListener('click',applyPhysical);
$('ijUnit').addEventListener('change',e=>{const u=e.target.value;const labels={px:'pixels',cm:'cm',mm:'mm',in:'inches'};const unit=u;const sample=unit==='cm'?[2.9,3.6]:unit==='mm'?[29,36]:unit==='in'?[1.14,1.42]:[413,531];$('ijPhysicalW').value=sample[0];$('ijPhysicalH').value=sample[1];$('ijPhysicalW').previousElementSibling.textContent='Width ('+labels[u]+')';$('ijPhysicalH').previousElementSibling.textContent='Height ('+labels[u]+')'});
$('ijApplyCrop').addEventListener('click',async()=>{
 const img=activeImage||await syncImage();if(!img){setStatus('Upload an image before cropping.');return}
 const ratioValue=$('ijCropRatio').value;if(ratioValue==='free'){setStatus('Choose a crop ratio first.');return}
 const [rw,rh]=ratioValue.split(':').map(Number),target=rw/rh,sw=img.naturalWidth||img.width,sh=img.naturalHeight||img.height;
 let sx=0,sy=0,cw=sw,ch=sh;if(sw/sh>target){cw=Math.round(sh*target);sx=Math.round((sw-cw)/2)}else{ch=Math.round(sw/target);sy=Math.round((sh-ch)/2)}
 const c=document.createElement('canvas');c.width=cw;c.height=ch;c.getContext('2d').drawImage(img,sx,sy,cw,ch,0,0,cw,ch);
 const url=c.toDataURL('image/png');preview.src=url;preview.hidden=false;activeImage=await getImage(url);width.value=cw;height.value=ch;setStatus('Centred crop applied: '+cw+' × '+ch+' pixels.');if(download)download.hidden=true;
});
$('ijResetCrop').addEventListener('click',async()=>{const file=$('file').files&&$('file').files[0];if(!file){setStatus('Choose the original image again to reset crop.');return}const url=URL.createObjectURL(file);preview.src=url;preview.hidden=false;activeImage=await getImage(url);width.value=activeImage.naturalWidth;height.value=activeImage.naturalHeight;setStatus('Original image restored.')});
resizeBtn.addEventListener('click',async e=>{
 e.preventDefault();e.stopImmediatePropagation();
 const img=activeImage||await syncImage();if(!img){setStatus('Upload an image first.');return}
 const w=Number(width.value),h=Number(height.value),type=format.value,q=Number(quality.value)/100,target=$('ijTargetEnabled').checked?Number($('ijTargetKB').value):0;
 if(!Number.isInteger(w)||!Number.isInteger(h)||w<1||h<1||w>10000||h>10000||w*h>40000000){setStatus('Enter valid dimensions within the 40-megapixel safe limit.');return}
 if(target&&(!Number.isFinite(target)||target<5||target>20000)){setStatus('Target size must be between 5 and 20,000 KB.');return}
 resizeBtn.disabled=true;resizeBtn.textContent='Processing…';setStatus('Resizing and checking output size…');
 try{const canvas=drawSource(img,w,h),result=await encodeTarget(canvas,type,q,target);if(!result.blob)throw Error('Output encoding failed');setDownload(result.blob,'infojano-resized.'+(type==='image/jpeg'?'jpg':type==='image/png'?'png':'webp'));const kb=(result.blob.size/1024).toFixed(1);setStatus('Ready: '+w+' × '+h+' px · '+kb+' KB'+(target?(result.met?' · target met':' · target could not be met at minimum quality'):'')+(type!=='image/png'&&target?' · quality '+Math.round(result.quality*100)+'%':''));}
 catch(err){setStatus('Could not process this image. Try a smaller output size.')}
 finally{resizeBtn.disabled=false;resizeBtn.innerHTML='<span class="btn-icon" aria-hidden="true">↔</span> Resize Image'}
},true);
$('ijRunBatch').addEventListener('click',async()=>{
 const files=Array.from($('ijBatchFiles').files||[]),list=$('ijBatchList'),label=$('ijBatchStatus');list.innerHTML='';batchUrls.forEach(URL.revokeObjectURL);batchUrls=[];
 if(!files.length){label.textContent='Choose two or more images first.';return}
 const w=Number(width.value),h=Number(height.value),type=format.value,q=Number(quality.value)/100,target=$('ijTargetEnabled').checked?Number($('ijTargetKB').value):0;
 if(!Number.isInteger(w)||!Number.isInteger(h)||w<1||h<1||w>10000||h>10000||w*h>40000000){label.textContent='Set valid output dimensions before batch processing.';return}
 if(files.length>30){label.textContent='For mobile stability, process up to 30 images per batch.';return}
 label.textContent='Processing 0 of '+files.length+' images…';
 for(let i=0;i<files.length;i++){
  const file=files[i];if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>10*1024*1024){label.textContent='Skipped unsupported or over-10MB file: '+file.name;continue}
  try{const img=await getImage(URL.createObjectURL(file)),canvas=drawSource(img,w,h),result=await encodeTarget(canvas,type,q,target);if(!result.blob)throw Error('encode');const url=URL.createObjectURL(result.blob);batchUrls.push(url);const row=document.createElement('div');row.className='ij-batch-item';const name=document.createElement('span');name.textContent=file.name+' · '+(result.blob.size/1024).toFixed(1)+' KB';const a=document.createElement('a');a.href=url;a.download=file.name.replace(/\.[^.]+$/,'')+'-resized.'+(type==='image/jpeg'?'jpg':type==='image/png'?'png':'webp');a.textContent='Download';row.append(name,a);list.append(row);img.src='';}
  catch(err){const row=document.createElement('div');row.className='ij-batch-item';row.textContent=file.name+' · Could not process';list.append(row)}
  label.textContent='Processed '+(i+1)+' of '+files.length+' images.';
 }
 label.textContent='Batch complete. Download each resized image below.';
});
window.addEventListener('beforeunload',()=>batchUrls.forEach(URL.revokeObjectURL));
})();
