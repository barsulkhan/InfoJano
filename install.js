/* InfoJano: install the current tool on supported mobile and desktop browsers. */
(()=>{
  const base="/InfoJano/";
  const ua=navigator.userAgent||"";
  const isIOS=/iPad|iPhone|iPod/.test(ua);
  const isAndroid=/Android/i.test(ua);
  const isWindows=/Windows/i.test(ua);
  const isMac=/Macintosh|Mac OS X/i.test(ua);
  let promptEvent=null;
  let button=document.getElementById("ij-install-button");
  let help=document.querySelector(".ij-install-help");
  let card=button?.closest(".ij-install-card");
  const installed=()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===true;
  const instructions=()=>{
    if(installed()) return "This tool is already installed on this device. Open it from your home screen or apps list.";
    if(isAndroid) return "Android: in Chrome, tap ⋮ (menu) → Install app or Add to Home screen. If an Install app prompt appears, use the button above. This adds this tool to your phone; it does not download an APK.";
    if(isIOS) return "iPhone/iPad: open this page in Safari, tap Share, then Add to Home Screen. This adds a shortcut for this tool; it does not download an App Store app.";
    if(isWindows) return "Windows: in Microsoft Edge or Chrome, open the browser menu and choose Apps → Install this site as an app (Edge) or Install page as app (Chrome), if available. This creates an app-style shortcut, not an .exe installer.";
    if(isMac) return "Mac: in a supported browser, use its Install app option if shown. In Safari on iPhone/iPad, use Share → Add to Home Screen.";
    return "Open this page in a supported browser and look for Install app or Add to Home Screen in the browser menu. This installs a web app shortcut, not a separate APK or EXE file.";
  };
  if(!button){
    card=document.createElement("section");
    card.className="ij-install-card";
    card.setAttribute("aria-label","Install this tool");
    card.style.cssText="max-width:760px;margin:18px auto;padding:16px;display:grid;grid-template-columns:42px minmax(0,1fr) auto;gap:12px;align-items:center;background:#eff6ff;border:1px solid #bfdbfe;border-radius:16px;color:#172033;font:14px/1.5 system-ui,Arial,sans-serif";
    const mark=document.createElement("div");mark.textContent="⬇";mark.setAttribute("aria-hidden","true");mark.style.cssText="font-size:28px;text-align:center;color:#1458c8";
    const copy=document.createElement("div");
    const title=document.createElement("strong");title.textContent="Install this tool on your device";title.style.display="block";
    const subtitle=document.createElement("span");subtitle.textContent="Use it like an app on your phone or computer.";subtitle.style.color="#52627a";
    copy.append(title,subtitle);
    button=document.createElement("button");button.id="ij-install-button";button.type="button";button.textContent="Install this tool";
    button.style.cssText="border:0;border-radius:10px;background:#1458c8;color:#fff;padding:12px 14px;font-weight:750;font-size:14px;cursor:pointer";
    help=document.createElement("details");help.className="ij-install-help";help.style.cssText="grid-column:1/-1;font-size:12px;color:#52627a";
    const summary=document.createElement("summary");summary.textContent="Installation instructions";summary.style.cursor="pointer";
    const paragraph=document.createElement("p");paragraph.style.cssText="margin:8px 0 0;line-height:1.6";
    help.append(summary,paragraph);card.append(mark,copy,button,help);
    const target=document.querySelector("main")||document.querySelector(".wrap")||document.body;
    if(target===document.body) target.insertBefore(card,document.body.firstChild); else target.insertBefore(card,target.firstChild);
  }
  if(!help && card){help=document.createElement("details");help.className="ij-install-help";const summary=document.createElement("summary");summary.textContent="Installation instructions";const p=document.createElement("p");help.append(summary,p);card.appendChild(help);}
  const paragraph=help?.querySelector("p");
  if(paragraph) paragraph.textContent=instructions();
  if(installed()){button.textContent="Tool installed ✓";button.disabled=true;}
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();promptEvent=e;button.textContent="Install this tool";});
  window.addEventListener("appinstalled",()=>{button.textContent="Tool installed ✓";button.disabled=true;promptEvent=null;});
  button.addEventListener("click",async()=>{
    if(installed()){if(help)help.open=true;return;}
    if(promptEvent){promptEvent.prompt();const choice=await promptEvent.userChoice;button.textContent=choice&&choice.outcome==="accepted"?"Installing…":"Install this tool";promptEvent=null;return;}
    if(help){help.open=true;help.scrollIntoView({behavior:"smooth",block:"nearest"});}
  });
})();