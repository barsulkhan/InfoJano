/* InfoJano shared sticky header for every tool page. */
(function(){
  const ROOT=(location.hostname==='barsulkhan.github.io')?'/InfoJano/':'/';
  const css=`
  .ij-global-header{position:sticky;top:0;z-index:100000;width:100%;background:linear-gradient(105deg,#073b9c 0%,#0759d8 58%,#063b9a 100%);color:#fff;box-shadow:0 5px 22px rgba(5,32,91,.22);font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif}
  .ij-global-header *{box-sizing:border-box}
  .ij-global-header-inner{max-width:1440px;min-height:72px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:18px}
  .ij-global-brand{display:flex;align-items:center;gap:11px;min-width:0;color:#fff;text-decoration:none;flex:1}
  .ij-global-logo{width:46px;height:46px;flex:0 0 46px;border-radius:14px;box-shadow:0 3px 10px #001b5b55}
  .ij-global-brand-copy{display:flex;flex-direction:column;line-height:1.08;min-width:0}
  .ij-global-brand-name{font-size:23px;font-weight:850;letter-spacing:-.6px;white-space:nowrap}
  .ij-global-tagline{font-size:11px;font-weight:550;opacity:.88;margin-top:4px;white-space:nowrap}
  .ij-global-divider{width:1px;height:38px;background:#ffffff50}
  .ij-global-tools{display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border:1px solid #ffffff65;border-radius:30px;color:#fff;text-decoration:none;font-size:14px;font-weight:750;white-space:nowrap;background:#ffffff12}
  .ij-global-tools:hover,.ij-global-tools:focus-visible{background:#ffffff25;outline:2px solid #fff;outline-offset:2px}
  .ij-global-home{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-width:122px;padding:11px 19px;border:1px solid #ffffff75;border-radius:30px;background:linear-gradient(135deg,#13a9f4 0%,#0870e9 55%,#3154e8 100%);color:#fff;text-decoration:none;font-weight:850;font-size:15px;white-space:nowrap;box-shadow:0 4px 14px #001b5b45,inset 0 1px 0 #ffffff45}
  .ij-global-home:hover,.ij-global-home:focus-visible{background:linear-gradient(135deg,#31baff 0%,#126ff0 55%,#5267f4 100%);outline:2px solid #fff;outline-offset:2px}
  .ij-global-home svg,.ij-global-tools svg{width:19px;height:19px;flex:0 0 auto}
  .ij-global-header-spacer{height:0}
  .ij-site-brand{display:none!important}
  @media(max-width:620px){
    .ij-global-header-inner{min-height:62px;padding:8px 11px;gap:9px}
    .ij-global-logo{width:39px;height:39px;flex-basis:39px;border-radius:12px}
    .ij-global-brand{gap:8px}
    .ij-global-brand-name{font-size:19px;letter-spacing:-.4px}
    .ij-global-tagline{font-size:9px;margin-top:3px}
    .ij-global-divider{height:30px}
    .ij-global-tools{font-size:0;padding:10px;width:40px;height:40px;justify-content:center;gap:0;border-radius:13px}
    .ij-global-tools svg{width:20px;height:20px}
    .ij-global-home{min-width:0;padding:10px 12px;font-size:13px;gap:6px;border-radius:13px}
    .ij-global-home svg{width:17px;height:17px}
  }
  @media(max-width:360px){
    .ij-global-header-inner{gap:6px;padding-left:8px;padding-right:8px}
    .ij-global-brand-name{font-size:17px}
    .ij-global-tagline{font-size:8px}
    .ij-global-home{padding:9px 10px;font-size:12px}
    .ij-global-tools{width:36px;height:38px}
  }`;
  function mount(){
    if(document.querySelector('.ij-global-header'))return;
    const style=document.createElement('style');style.id='ij-global-header-style';style.textContent=css;document.head.appendChild(style);
    const header=document.createElement('header');header.className='ij-global-header';header.setAttribute('role','banner');
    header.innerHTML=`
      <div class="ij-global-header-inner">
        <a class="ij-global-brand" href="${ROOT}index.html" aria-label="InfoJano home">
          <img class="ij-global-logo" src="${ROOT}infojano-mark.svg" alt="InfoJano logo">
          <span class="ij-global-brand-copy"><span class="ij-global-brand-name">InfoJano</span><span class="ij-global-tagline">Smart Tools for Everyday Life</span></span>
        </a>
        <span class="ij-global-divider" aria-hidden="true"></span>
        <a class="ij-global-tools" href="${ROOT}index.html#tools" aria-label="Browse all tools">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
          All Tools
        </a>
        <a class="ij-global-home" href="${ROOT}index.html" aria-label="Go to InfoJano Home">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 11h2v10h6v-6h4v6h6V11h2L12 3z"/></svg>
          Home
        </a>
      </div>`;
    document.body.insertBefore(header,document.body.firstChild);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();