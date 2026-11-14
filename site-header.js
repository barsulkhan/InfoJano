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
  }

  /* Unified tool hero standard: Currency Converter reference dimensions and light sweep */
  .ij-unified-currency-hero{box-sizing:border-box!important;min-height:250px!important;height:auto!important;padding:26px 34px!important;border-radius:30px!important;position:relative!important;isolation:isolate!important;overflow:hidden!important;border:2px solid #08d7f4!important;box-shadow:0 0 8px #00dfff66,0 0 18px #765cff33,0 12px 30px rgba(12,45,120,.18)!important;animation:ijUnifiedNeonLife 8s linear infinite!important}
  @keyframes ijUnifiedNeonLife{0%,100%{box-shadow:0 0 7px #00dfff44,0 0 14px #765cff22,0 12px 30px rgba(12,45,120,.18)}50%{box-shadow:0 0 12px #00dfff99,0 0 24px #765cff66,0 12px 30px rgba(12,45,120,.18)}}
  .ij-unified-currency-title{position:relative!important;isolation:isolate!important;overflow:hidden!important}
  .ij-unified-currency-title:after{content:""!important;position:absolute!important;top:-12%!important;bottom:-12%!important;left:-55%!important;width:34%!important;pointer-events:none!important;z-index:5!important;background:linear-gradient(105deg,transparent 0%,#ffffff18 28%,#ffffffc9 49%,#b8f7ff72 58%,transparent 100%)!important;filter:blur(2px)!important;transform:skewX(-18deg)!important;animation:ijUnifiedTitleSweep 12s linear infinite!important}
  @keyframes ijUnifiedTitleSweep{0%{left:-55%;opacity:0}3%{opacity:1}18%{left:125%;opacity:0}100%{left:125%;opacity:0}}
  .ij-unified-currency-pill{position:relative!important;isolation:isolate!important;overflow:hidden!important}
  .ij-unified-currency-pill:after{content:""!important;position:absolute!important;top:-35%!important;bottom:-35%!important;left:-75%!important;width:42%!important;pointer-events:none!important;background:linear-gradient(105deg,transparent 0%,#ffffff20 28%,#ffffffd9 50%,#ffffff35 63%,transparent 100%)!important;filter:blur(1px)!important;transform:skewX(-18deg)!important;animation:ijUnifiedPillSweep 12s linear infinite!important}
  .ij-unified-currency-pill:nth-child(1):after{animation-delay:2.4s!important}.ij-unified-currency-pill:nth-child(2):after{animation-delay:4.8s!important}.ij-unified-currency-pill:nth-child(3):after{animation-delay:7.2s!important}.ij-unified-currency-pill:nth-child(4):after{animation-delay:9.6s!important}
  @keyframes ijUnifiedPillSweep{0%{left:-75%;opacity:0}3%{opacity:1}18%{left:135%;opacity:0}100%{left:135%;opacity:0}}
  @media(max-width:950px){.ij-unified-currency-hero{padding:23px!important;min-height:250px!important}}
  @media(max-width:600px){.ij-unified-currency-hero{min-height:220px!important;height:auto!important;padding:21px 17px!important;border-radius:23px!important;display:flex!important;align-items:center!important}.ij-unified-currency-title{font-size:clamp(29px,8vw,38px)!important;letter-spacing:-.8px!important;line-height:1.12!important}}
  @media(max-width:600px){.ij-unified-currency-hero.emi-hero{min-height:220px!important;aspect-ratio:auto!important;padding:20px 17px!important}.ij-unified-currency-hero.emi-hero .emi-hero-copy{width:62%!important;margin-left:3%!important}.ij-unified-currency-hero.emi-hero .emi-hero-copy h1{font-size:clamp(30px,8vw,40px)!important}}
  @media(prefers-reduced-motion:reduce){.ij-unified-currency-hero,.ij-unified-currency-title:after,.ij-unified-currency-pill:after{animation:none!important}}
  /* One shared header only: remove the legacy ID Studio brand strip under it. */
  .ij-brandbar{display:none!important}
  /* Restore a consistent, wide hero frame across tool pages on desktop/tablet. */
  @media screen and (min-width:1001px){
    main:has(.ij-unified-currency-hero){
      width:calc(100% - 64px)!important;
      max-width:1600px!important;
      margin:0 auto!important;
      padding:28px 24px 36px!important;
      box-sizing:border-box!important;
    }
    .ij-unified-currency-hero{
      display:block;
      width:100%!important;
      max-width:none!important;
      min-height:250px!important;
      height:auto!important;
      margin:12px 0 28px!important;
      padding:30px 46px!important;
      box-sizing:border-box!important;
    }
  }
  @media screen and (max-width:1000px){
    main:has(.ij-unified-currency-hero){
      width:calc(100% - 32px)!important;
      max-width:none!important;
      margin:0 auto!important;
      padding:20px 0 30px!important;
      box-sizing:border-box!important;
    }
    .ij-unified-currency-hero{
      width:100%!important;
      max-width:none!important;
      margin:12px 0 22px!important;
      box-sizing:border-box!important;
    }
  }
  @media screen and (max-width:600px){
    main:has(.ij-unified-currency-hero){
      width:calc(100% - 20px)!important;
      padding:14px 0 26px!important;
    }
    .ij-unified-currency-hero{
      width:100%!important;
      min-height:220px!important;
      margin:10px 0 20px!important;
      padding:21px 17px!important;
    }
  }
`;
  function mount(){
    const heroes=document.querySelectorAll('.hero,.ij-age-hero,.ij-bmi-hero,.ij-discount-hero,.emi-hero,.ij-qr-hero,.ij-full-hero,.ij-master-hero');
    heroes.forEach((hero)=>{
      hero.classList.add('ij-unified-currency-hero');
      const title=hero.querySelector('h1');
      if(title)title.classList.add('ij-unified-currency-title');
      const pills=hero.querySelectorAll('.perks .perk,.ij-master-pills span,.ij-age-hero-pills > *,[class*="pills"] > *');
      pills.forEach((pill)=>pill.classList.add('ij-unified-currency-pill'));
    });
    if(!document.getElementById('ij-global-header-style')){const style=document.createElement('style');style.id='ij-global-header-style';style.textContent=css;document.head.appendChild(style);}
    if(!document.getElementById('ij-related-apps-script')){
      const relatedAppsScript=document.createElement('script');
      relatedAppsScript.id='ij-related-apps-script';
      relatedAppsScript.src=ROOT+'related-apps.js';
      relatedAppsScript.async=true;
      document.head.appendChild(relatedAppsScript);
    }
    if(document.querySelector('.ij-global-header'))return;
    const header=document.createElement('header');header.className='ij-global-header';header.setAttribute('role','banner');
    header.innerHTML=`
      <div class="ij-global-header-inner">
        <a class="ij-global-brand" href="${ROOT}index.html" aria-label="InfoJano home">
          <img class="ij-global-logo" src="${ROOT}infojano-mark.svg" alt="InfoJano logo">
          <span class="ij-global-brand-copy"><span class="ij-global-brand-name">InfoJano</span><span class="ij-global-tagline">Smart Tools for Everyday Life</span></span>
        </a>
        <span class="ij-global-divider" aria-hidden="true"></span>
        <a class="ij-global-tools" href="${ROOT}index.html#toolGrid" aria-label="Browse all tools">
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