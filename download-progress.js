(function(){
  let timer=null;
  if(!document.getElementById('ijInlineDownloadStyle')){
    const style=document.createElement('style');
    style.id='ijInlineDownloadStyle';
    style.textContent=`
      @keyframes ijInlineDownloadSpin{to{transform:rotate(360deg)}}
      a.ij-download-box{box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;width:100%!important;min-height:48px!important;margin:12px 0!important;padding:12px 16px!important;border:1px solid #bfdbfe!important;border-radius:12px!important;background:#eff6ff!important;color:#0756c9!important;text-decoration:none!important;font:700 15px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif!important;box-shadow:0 3px 10px #1d4ed80d!important;overflow-wrap:anywhere}
      a.ij-download-box .ij-dl-icon{display:inline-grid;place-items:center;flex:0 0 24px;width:24px;height:24px}
      a.ij-download-box .ij-dl-spinner{width:21px;height:21px;border:3px solid #bfdbfe;border-top-color:#0756d9;border-right-color:#0891b2;border-radius:50%;animation:ijInlineDownloadSpin .75s linear infinite}
      a.ij-download-box.ij-dl-finished{background:#ecfdf5!important;border-color:#bbf7d0!important;color:#166534!important}
      a.ij-download-box.ij-dl-finished .ij-dl-icon{font-size:22px}
      @media(prefers-reduced-motion:reduce){a.ij-download-box .ij-dl-spinner{animation:none}}
    `;
    document.head.appendChild(style);
  }
  function prepare(link){
    if(link.dataset.ijDownloadReady)return;
    link.dataset.ijDownloadReady='1';
    link.classList.add('ij-download-box');
    const label=(link.textContent||'Download file').replace(/\s+/g,' ').trim();
    link.dataset.ijDownloadLabel=label;
    link.innerHTML='<span class="ij-dl-icon" aria-hidden="true">⬇</span><span>'+label.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</span>';
  }
  function findLinks(){
    document.querySelectorAll('a[download],a[href*=".apk" i],a[href*="/releases/download/"]').forEach(prepare);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',findLinks,{once:true});else findLinks();
  const observer=new MutationObserver(findLinks);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',function(event){
    const link=event.target.closest&&event.target.closest('a[download],a[href*=".apk" i],a[href*="/releases/download/"]');
    if(!link||link.hidden||!link.href)return;
    prepare(link);
    clearTimeout(timer);
    link.classList.remove('ij-dl-finished');
    link.innerHTML='<span class="ij-dl-icon" aria-hidden="true"><span class="ij-dl-spinner"></span></span><span>Downloading… Please wait</span>';
    timer=setTimeout(function(){
      link.classList.remove('ij-dl-finished');
      link.innerHTML='<span class="ij-dl-icon" aria-hidden="true">ℹ</span><span>Your browser handles the download now — check Downloads for its actual status.</span>';
    },2600);
  },true);
})();