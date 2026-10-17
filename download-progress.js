(function(){
  let timer=null;
  function getNotice(){
    let box=document.getElementById('ijGlobalDownloadNotice');
    if(box)return box;
    box=document.createElement('div');
    box.id='ijGlobalDownloadNotice';
    box.setAttribute('role','status');
    box.setAttribute('aria-live','polite');
    box.style.cssText='position:fixed;left:16px;right:16px;bottom:22px;z-index:99998;display:none;align-items:center;gap:12px;max-width:520px;margin:0 auto;padding:13px 16px;border-radius:15px;background:#0b1220;color:#fff;box-shadow:0 8px 28px #0003;font:600 14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
    box.innerHTML='<span class="ij-global-dl-icon" aria-hidden="true" style="width:30px;height:30px;flex:0 0 30px;display:grid;place-items:center;border:3px solid #475569;border-top-color:#38bdf8;border-radius:50%;animation:ijGlobalDlSpin .8s linear infinite"></span><span class="ij-global-dl-text">Preparing your download…</span>';
    if(!document.getElementById('ijGlobalDlStyle')){const style=document.createElement('style');style.id='ijGlobalDlStyle';style.textContent='@keyframes ijGlobalDlSpin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){#ijGlobalDownloadNotice .ij-global-dl-icon{animation:none!important}}';document.head.appendChild(style);}
    document.body.appendChild(box);return box;
  }
  function show(text,done){
    const box=getNotice(),icon=box.querySelector('.ij-global-dl-icon'),label=box.querySelector('.ij-global-dl-text');
    clearTimeout(timer);label.textContent=text;box.style.display='flex';
    if(done){icon.style.animation='none';icon.style.border='0';icon.style.background='#16a34a';icon.style.color='#fff';icon.style.fontSize='20px';icon.style.fontWeight='800';icon.textContent='✓';timer=setTimeout(()=>box.style.display='none',4200);}
    else{icon.style.animation='ijGlobalDlSpin .8s linear infinite';icon.style.border='3px solid #475569';icon.style.borderTopColor='#38bdf8';icon.style.background='transparent';icon.textContent='';}
  }
  document.addEventListener('click',function(event){
    const link=event.target.closest&&event.target.closest('a[download], a[href*=".apk" i], a[href*="/releases/download/"]');
    if(!link||link.hidden||!link.href)return;
    show('Starting your download…',false);
    timer=setTimeout(()=>show('Download started. Check your Downloads folder.',true),2200);
  },true);
})();