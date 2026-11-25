/* InfoJano shared sticky header for every tool page. */
(function(){
  const ROOT=(location.hostname==='barsulkhan.github.io')?'/InfoJano/':'/';
  const css=`
  .ij-global-header{position:sticky;top:0;z-index:100000;width:100%;margin:0!important;padding:0!important;background:#fff!important;color:#14264a!important;box-shadow:0 3px 16px rgba(15,40,80,.08);border:0;border-bottom:1px solid #e6edf6;font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;text-align:left!important;line-height:normal!important}
  .ij-global-header *{box-sizing:border-box}
  .ij-global-header-inner{width:min(calc(100% - 28px),1200px);max-width:1200px;min-height:84px;margin:0 auto!important;padding:10px 0!important;display:flex;align-items:center;gap:18px}
  .ij-global-brand{display:flex;align-items:center;gap:10px;min-width:0;color:#14264a;text-decoration:none;flex:1;margin-left:0}
  .ij-global-logo{width:164px;height:58px;flex:0 0 164px;object-fit:contain;object-position:left center;border-radius:0;box-shadow:none}
  .ij-global-brand-copy{display:none!important}
  /* Keep the loan-only hamburger icon out of every other tool header. */
  .ij-global-brand > .ij-loan-menu-icon{display:none!important}
  .ij-global-brand-name{font-size:23px;font-weight:850;letter-spacing:-.6px;white-space:nowrap}
  .ij-global-brand-tagline{display:inline-block;width:max-content;max-width:100%;font-size:11px;font-weight:850;line-height:1.25;letter-spacing:0;background:linear-gradient(100deg,#0756c9 0%,#0786d8 52%,#0b9b86 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
  .ij-global-divider{width:1px;height:38px;background:#dbe4ef}
  .ij-global-tools{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:1;gap:8px;height:44px;min-height:44px;padding:0 16px;border:1px solid #dbe6f2;border-radius:30px;color:#24456e;text-decoration:none;font-size:14px;font-weight:750;white-space:nowrap;background:#f8fbff}
  .ij-global-tools:hover,.ij-global-tools:focus-visible{background:#eef6ff;outline:2px solid #93c5fd;outline-offset:2px}
  .ij-global-home{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:1;gap:9px;height:44px;min-height:44px;min-width:116px;margin-right:0;padding:0 17px;border:1px solid #d5e5f5;border-radius:28px;background:#f3f8fe;color:#174a78;text-decoration:none;font-weight:850;font-size:14px;white-space:nowrap;box-shadow:0 3px 10px rgba(15,60,110,.06)}
  .ij-global-home:hover,.ij-global-home:focus-visible{background:#e8f3ff;outline:2px solid #93c5fd;outline-offset:2px}
  .ij-global-home svg,.ij-global-tools svg{width:19px;height:19px;flex:0 0 auto}

  .ij-global-language{display:block;box-sizing:border-box;align-self:center;vertical-align:middle;line-height:1;height:44px;min-height:44px;max-width:126px;margin:0;padding:0 30px 0 11px;border:1px solid #dbe6f2;border-radius:12px;background:#fff;color:#24456e;font:650 13px Inter,system-ui,sans-serif;cursor:pointer}
  .ij-global-language:focus-visible{outline:2px solid #93c5fd;outline-offset:2px}

  .ij-global-nav{display:flex;align-items:center;justify-content:flex-end;gap:14px;flex:0 0 auto;min-width:0;align-self:center}
  .ij-global-header-spacer{height:0}
  /* On reference-hero tool pages, align the shared header edges to the hero. */
  .ij-global-header--hero-aligned .ij-global-header-inner{width:min(calc(100% - 28px),1200px);max-width:1200px;gap:18px}
  .ij-global-header--hero-aligned .ij-global-brand{flex:0 1 auto}
  .ij-global-header--hero-aligned .ij-global-nav{margin-left:auto}
  .ij-global-header--hero-aligned .ij-global-divider{display:none}

  .ij-site-brand,.ij-brandbar{display:none!important}
  /* Hide legacy install-this-tool prompts across every tool page. */
  .ij-install-card,#ij-install-card{display:none!important}
  @media(max-width:620px){
    .ij-global-header-inner{width:calc(100% - 24px);min-height:62px;padding:8px 0;gap:8px}
    .ij-global-header--hero-aligned .ij-global-header-inner{width:calc(100% - 8px)}
    .ij-global-nav{gap:7px;align-items:center}
    .ij-global-logo{width:128px;height:46px;flex-basis:128px;border-radius:0}
    .ij-global-brand{gap:6px;margin-left:0}
    .ij-global-brand-name{font-size:19px;letter-spacing:-.4px}
    .ij-global-brand-tagline{font-size:9px;line-height:1.15}
    .ij-global-divider{height:30px}
    .ij-global-tools{font-size:0;padding:0;width:40px;height:40px;justify-content:center;gap:0;border-radius:13px}
    .ij-global-tools svg{width:20px;height:20px}
    .ij-global-home{min-width:0;margin-right:0;padding:0 11px;height:40px;font-size:12px;gap:6px;border-radius:13px}
    .ij-global-home svg{width:17px;height:17px}.ij-global-language{max-width:100px;height:40px;min-height:40px;padding:0 22px 0 8px;font-size:12px;border-radius:11px}
  }
  @media(max-width:360px){
    .ij-global-header-inner{gap:5px;width:calc(100% - 16px)}
    .ij-global-nav{gap:5px}
    .ij-global-brand-name{font-size:17px}.ij-global-logo{width:112px;height:40px;flex-basis:112px}
    .ij-global-home{height:38px;min-height:38px;padding:0 8px;font-size:11px}.ij-global-language{height:38px;min-height:38px;max-width:88px;font-size:11px}
    .ij-global-tools{width:36px;height:38px}
  }

  /* Unified light hero standard based on the approved ID Card Print Studio layout. */
  .ij-unified-currency-hero{box-sizing:border-box!important;width:100%!important;max-width:none!important;min-height:220px!important;height:auto!important;margin:12px 0 28px!important;padding:42px 46px!important;border-radius:22px!important;position:relative!important;isolation:isolate!important;overflow:hidden!important;border:1px solid #cfe5fb!important;background:radial-gradient(ellipse at 78% 22%,#d9efff 0%,transparent 38%),linear-gradient(118deg,#eaf6ff 0%,#f8fcff 55%,#e5f3ff 100%)!important;box-shadow:0 18px 44px rgba(32,104,174,.12)!important;color:#101d42!important;animation:none!important}
  .ij-unified-currency-hero h1{color:#101b43!important;text-align:left!important}
  .ij-unified-currency-hero .ij-unified-currency-title{font-size:clamp(36px,4.3vw,62px)!important;line-height:1.04!important;letter-spacing:-1.2px!important;font-weight:850!important}
  .ij-unified-currency-hero p,.ij-unified-currency-hero .hero-kicker,.ij-unified-currency-hero .ij-tool-hero-kicker{color:#53647d!important}
  .ij-unified-currency-hero p{max-width:660px;font-size:clamp(16px,1.55vw,20px)!important;line-height:1.55!important}
  .ij-unified-currency-hero .ij-unified-currency-title{background:none!important;-webkit-text-fill-color:initial!important;color:#101b43!important}
  .ij-unified-currency-hero .ij-unified-currency-title .ij-lightword{color:#087ce5!important;-webkit-text-fill-color:#087ce5!important}
  .ij-unified-currency-title{position:relative!important;isolation:isolate!important;overflow:hidden!important}
  .ij-unified-currency-title:after{content:""!important;position:absolute!important;top:-12%!important;bottom:-12%!important;left:-55%!important;width:34%!important;pointer-events:none!important;z-index:5!important;background:linear-gradient(105deg,transparent 0%,#ffffff18 28%,#ffffffc9 49%,#b8f7ff72 58%,transparent 100%)!important;filter:blur(2px)!important;transform:skewX(-18deg)!important;animation:ijUnifiedTitleSweep 12s linear infinite!important}
  @keyframes ijUnifiedTitleSweep{0%{left:-55%;opacity:0}3%{opacity:1}18%{left:125%;opacity:0}100%{left:125%;opacity:0}}
  .ij-unified-currency-pill{position:relative!important;isolation:isolate!important;overflow:hidden!important}
  .ij-unified-currency-pill:after{content:""!important;position:absolute!important;top:-35%!important;bottom:-35%!important;left:-75%!important;width:42%!important;pointer-events:none!important;background:linear-gradient(105deg,transparent 0%,#ffffff20 28%,#ffffffd9 50%,#ffffff35 63%,transparent 100%)!important;filter:blur(1px)!important;transform:skewX(-18deg)!important;animation:ijUnifiedPillSweep 12s linear infinite!important}
  .ij-unified-currency-pill:nth-child(1):after{animation-delay:2.4s!important}.ij-unified-currency-pill:nth-child(2):after{animation-delay:4.8s!important}.ij-unified-currency-pill:nth-child(3):after{animation-delay:7.2s!important}.ij-unified-currency-pill:nth-child(4):after{animation-delay:9.6s!important}
  @keyframes ijUnifiedPillSweep{0%{left:-75%;opacity:0}3%{opacity:1}18%{left:135%;opacity:0}100%{left:135%;opacity:0}}
  @media(max-width:950px){.ij-unified-currency-hero{padding:28px 26px!important;min-height:220px!important}}
  @media(max-width:640px){.ij-unified-currency-hero{width:100%!important;min-height:0!important;height:auto!important;margin:12px 0 22px!important;padding:24px 18px 34px!important;border-radius:24px!important}.ij-unified-currency-hero h1,.ij-unified-currency-title{text-align:center!important;font-size:clamp(32px,9vw,43px)!important;letter-spacing:-.8px!important;line-height:1.08!important}.ij-unified-currency-hero p{text-align:center!important;margin-left:auto!important;margin-right:auto!important}}
  @media(max-width:600px){.ij-unified-currency-hero.emi-hero{min-height:220px!important;aspect-ratio:auto!important;padding:20px 17px!important}.ij-unified-currency-hero.emi-hero .emi-hero-copy{width:62%!important;margin-left:3%!important}.ij-unified-currency-hero.emi-hero .emi-hero-copy h1{font-size:clamp(30px,8vw,40px)!important}}
  @media(prefers-reduced-motion:reduce){.ij-unified-currency-hero,.ij-unified-currency-title:after,.ij-unified-currency-pill:after{animation:none!important}}
`;

  function mount(){
    // Load the same footer implementation used by pages without the shared header.
    if(!document.querySelector('script[data-ij-site-footer]')){
      const footerScript=document.createElement('script');
      footerScript.src=ROOT+'site-footer.js';
      footerScript.defer=true;
      footerScript.dataset.ijSiteFooter='true';
      document.body.appendChild(footerScript);
    }
    const heroes=document.querySelectorAll('.hero,.ij-age-hero,.ij-bmi-hero,.ij-discount-hero,.emi-hero,.ij-qr-hero,.ij-full-hero,.ij-master-hero,.ij-tool-hero,.ij-id-hero,.ij-social-hero,.idg-hero');
    heroes.forEach((hero)=>{
      hero.classList.add('ij-unified-currency-hero');
      const title=hero.querySelector('h1');
      if(title)title.classList.add('ij-unified-currency-title');
      const pills=hero.querySelectorAll('.perks .perk,.ij-master-pills span,.ij-age-hero-pills > *,[class*="pills"] > *');
      pills.forEach((pill)=>pill.classList.add('ij-unified-currency-pill'));
    });
    if(!document.getElementById('ij-global-header-style')){const style=document.createElement('style');style.id='ij-global-header-style';style.textContent=css;document.head.appendChild(style);}
    if(document.querySelector('.ij-global-header'))return;
    const header=document.createElement('header');header.className='ij-global-header'+((document.body.hasAttribute('data-ij-header-align')||document.querySelector('.ij-reference-hero,.ij-social-hero,.ij-loan-reference-hero'))?' ij-global-header--hero-aligned':'');header.setAttribute('role','banner');
    header.innerHTML=`
      <div class="ij-global-header-inner">
        <a class="ij-global-brand" href="${ROOT}index.html" aria-label="InfoJano home">
          <svg class="ij-loan-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          <img class="ij-global-logo" src="${ROOT}infojano-logo.svg" alt="InfoJano logo">
          <span class="ij-global-brand-copy"><span class="ij-global-brand-name">InfoJano</span><span class="ij-global-brand-tagline">Smart Online Tools for Everyday Life</span></span>
        </a>
        <span class="ij-global-divider" aria-hidden="true"></span>
        <nav class="ij-global-nav" aria-label="Main navigation">
        <a class="ij-global-tools" href="${ROOT}index.html#tools" aria-label="Browse all tools">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
          All Tools
        </a>
        <label class="ij-global-language-wrap" style="display:flex;align-items:center;justify-content:center;height:44px;min-height:44px;margin:0;padding:0">
          <span class="ij-sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">Select language</span>
          <select class="ij-global-language" aria-label="Select language">
            <option value="en">English</option><option value="hi">हिन्दी</option><option value="bn">বাংলা</option>
          </select>
        </label>
        <a class="ij-global-home" href="${ROOT}index.html" aria-label="Go to InfoJano Home">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 11h2v10h6v-6h4v6h6V11h2L12 3z"/></svg>
          Home
        </a>
        
        </nav>
      </div>`;
    if(location.pathname.endsWith('/loan-eligibility.html')){
      header.classList.add('ij-loan-reference-header');
      const nav=header.querySelector('.ij-global-nav');
      const blog=document.createElement('a');blog.className='ij-global-blog';blog.href=ROOT+'blog/';blog.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg><span>Blog</span>';nav.appendChild(blog);
      const search=document.createElement('a');search.className='ij-global-search';search.href=ROOT+'index.html#tools';search.setAttribute('aria-label','Search tools');search.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7.5"/><path d="m20 20-4.2-4.2"/></svg>';nav.appendChild(search);
      const pageStyle=document.createElement('style');pageStyle.textContent='.ij-loan-reference-header .ij-global-header-inner{width:min(calc(100% - 64px),1600px)!important;max-width:1600px!important;min-height:92px;gap:18px;padding-left:24px!important;padding-right:24px!important;box-sizing:border-box!important;margin-left:auto!important;margin-right:auto!important}.ij-loan-reference-header .ij-global-brand{display:flex;align-items:center;gap:18px;flex:0 1 auto}.ij-loan-reference-header .ij-loan-menu-icon{display:block;width:27px;height:27px;flex:0 0 27px;color:#14243b}.ij-loan-reference-header .ij-global-logo{width:230px;height:62px;flex:0 0 230px}.ij-loan-reference-header .ij-global-nav{gap:28px;margin-left:auto}.ij-loan-reference-header .ij-global-blog,.ij-loan-reference-header .ij-global-search{display:inline-flex;align-items:center;gap:9px}.ij-loan-reference-header .ij-global-blog svg,.ij-loan-reference-header .ij-global-search svg{display:block;width:22px;height:22px;flex:0 0 22px}.ij-loan-reference-header .ij-global-home svg,.ij-loan-reference-header .ij-global-tools svg{display:block;width:22px;height:22px;flex:0 0 22px}.ij-loan-reference-header .ij-global-tools,.ij-loan-reference-header .ij-global-home,.ij-loan-reference-header .ij-global-blog,.ij-loan-reference-header .ij-global-search{border:0;background:transparent;box-shadow:none;border-radius:0;color:#17243b;font-size:20px;font-weight:600;padding:0 4px}.ij-loan-reference-header .ij-global-home{order:1}.ij-loan-reference-header .ij-global-tools{order:2}.ij-loan-reference-header .ij-global-blog{order:3;text-decoration:none}.ij-loan-reference-header .ij-global-search{order:4;font-size:28px;text-decoration:none}.ij-loan-reference-header .ij-global-language-wrap,.ij-loan-reference-header .ij-global-divider,.ij-loan-reference-header .ij-global-back-home{display:none!important}@media(max-width:620px){.ij-loan-reference-header .ij-global-header-inner{width:calc(100% - 18px)!important;padding-left:0!important;padding-right:0!important;min-height:64px}.ij-loan-reference-header .ij-global-brand{gap:7px}.ij-loan-reference-header .ij-loan-menu-icon{width:22px;height:22px;flex-basis:22px}.ij-loan-reference-header .ij-global-logo{width:145px;height:44px;flex-basis:145px}.ij-loan-reference-header .ij-global-nav{gap:6px}.ij-loan-reference-header .ij-global-home,.ij-loan-reference-header .ij-global-tools,.ij-loan-reference-header .ij-global-blog{font-size:0;width:34px;height:38px;display:inline-flex;justify-content:center}.ij-loan-reference-header .ij-global-search svg{width:20px;height:20px}}';document.head.appendChild(pageStyle);
    }
    document.body.insertBefore(header,document.body.firstChild);
    // Loan calculator keeps the primary Home button and omits the duplicate Back to Home action.
    if(location.pathname.endsWith('/loan-interest.html')||location.pathname.endsWith('/loan-eligibility.html')||location.pathname.endsWith('/savings.html')) header.querySelector('.ij-global-back-home')?.remove();
    const languageSelect=header.querySelector('.ij-global-language');
    const supported=['en','hi','bn'];
    let saved='en';try{saved=localStorage.getItem('infojano-language')||'en'}catch(e){}
    const params=new URLSearchParams(location.search);
    const initial=(params.get('lang')||saved).toLowerCase();
    languageSelect.value=supported.includes(initial)?initial:'en';
    languageSelect.addEventListener('change',function(){
      const lang=this.value;
      try{localStorage.setItem('infojano-language',lang)}catch(e){}
      const url=new URL(location.href);
      if(lang==='en')url.searchParams.delete('lang');else url.searchParams.set('lang',lang);
      location.href=url.pathname+url.search+url.hash;
    });
  }
  if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount,{once:true});
})();