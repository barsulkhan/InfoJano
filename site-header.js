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
  /* Replace legacy top-level page headers with the unified ID Studio header. */
  body>header.header,body>header.top,body>header.topbar,body>header.brand,body>header.idg-top,body>header.sitebar,body>header.site-nav,body>header.site-header,body>header.ij-head,body>header:not([class]){display:none!important}
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

  /* 25 Nov ID Card Print Studio reference: unify every tool-page header and hero. */
  html body .ij-global-header{
    background:#fff!important;color:#0f172a!important;border:0!important;
    border-bottom:1px solid #e5e7eb!important;border-radius:0!important;
    box-shadow:none!important;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif!important
  }
  html body .ij-global-header .ij-global-header-inner,
  html body[data-ij-header-align] .ij-global-header .ij-global-header-inner{
    width:100%!important;max-width:none!important;min-height:0!important;
    margin:0 auto!important;padding:12px 24px!important;display:flex!important;
    flex-direction:row!important;align-items:center!important;justify-content:space-between!important;
    gap:15px!important;box-sizing:border-box!important
  }
  html body .ij-global-header .ij-global-logo,
  html body[data-ij-header-align] .ij-global-header .ij-global-logo{
    display:block!important;width:220px!important;height:77px!important;
    flex:0 1 220px!important;object-fit:contain!important;object-position:left center!important
  }
  html body .ij-global-header .ij-global-nav,
  html body[data-ij-header-align] .ij-global-header .ij-global-nav{
    display:flex!important;align-items:center!important;justify-content:flex-end!important;
    flex:0 1 auto!important;flex-wrap:wrap!important;gap:12px!important;
    width:auto!important;min-width:0!important;margin-left:auto!important
  }
  html body .ij-global-header .ij-global-tools,
  html body .ij-global-header .ij-global-home{
    display:inline-flex!important;align-items:center!important;justify-content:center!important;
    gap:8px!important;min-width:0!important;height:auto!important;min-height:40px!important;
    padding:8px 20px!important;border:1px solid #cbd5e1!important;border-radius:50px!important;
    background:#fff!important;color:#1e293b!important;box-shadow:none!important;
    font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif!important;font-size:15px!important;
    font-weight:600!important;line-height:1.2!important;text-decoration:none!important;white-space:nowrap!important
  }
  html body .ij-global-header .ij-global-tools:hover,
  html body .ij-global-header .ij-global-home:hover{background:#f8fafc!important;border-color:#94a3b8!important}
  html body .ij-global-header .ij-global-tools svg,
  html body .ij-global-header .ij-global-home svg{width:18px!important;height:18px!important;flex:0 0 18px!important}
  html body .ij-global-header .ij-global-language-wrap{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important}
  html body .ij-global-header .ij-global-language{
    display:block!important;box-sizing:border-box!important;align-self:center!important;
    width:145px!important;max-width:145px!important;height:40px!important;min-height:40px!important;
    margin:0!important;padding:8px 35px 8px 20px!important;border:1px solid #cbd5e1!important;
    border-radius:50px!important;background-color:#fff!important;color:#1e293b!important;
    font:600 15px 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif!important;cursor:pointer!important;
    appearance:none!important;-webkit-appearance:none!important
  }
  html body .ij-global-header .ij-global-divider{display:none!important}

  /* Exact ID Card Print Studio hero frame applied to tool-page hero containers. */
  html body .ij-unified-currency-hero,
  html body .ij-reference-hero,
  html body .ij-loan-reference-hero,
  html body .ij-loan-hero,
  html body .ij-pct-showcase,
  html body .hero-banner,
  html body .ij-pdf-hero,
  html body .pt-hero,
  html body .url-hero,
  html body .dd-hero,
  html body .wh-hero{
    box-sizing:border-box!important;width:min(calc(100% - 28px),1200px)!important;
    max-width:1200px!important;min-height:340px!important;height:auto!important;
    margin:14px auto 26px!important;padding:42px 46px!important;
    border:1px solid #cfe5fb!important;border-radius:30px!important;
    background:radial-gradient(ellipse at 78% 22%,#d9efff 0%,transparent 38%),linear-gradient(118deg,#eaf6ff 0%,#f8fcff 55%,#e5f3ff 100%)!important;
    box-shadow:0 18px 44px rgba(32,104,174,.12)!important;color:#101d42!important;
    position:relative!important;isolation:isolate!important;overflow:hidden!important;animation:none!important
  }
  html body .ij-unified-currency-hero h1,
  html body .ij-reference-hero h1,
  html body .ij-loan-reference-hero h1,
  html body .ij-loan-hero h1,
  html body .ij-pct-showcase h1,
  html body .hero-banner h1,
  html body .ij-pdf-hero h1,
  html body .pt-hero h1,
  html body .url-hero h1,
  html body .dd-hero h1,
  html body .wh-hero h1{
    color:#101b43!important;font-size:clamp(34px,4vw,56px)!important;
    line-height:1.06!important;letter-spacing:-1.8px!important;font-weight:850!important;text-align:left!important
  }
  html body .ij-unified-currency-hero p,
  html body .ij-reference-hero p,
  html body .ij-loan-reference-hero p,
  html body .ij-loan-hero p,
  html body .ij-pct-showcase p,
  html body .hero-banner p,
  html body .ij-pdf-hero p,
  html body .pt-hero p,
  html body .url-hero p,
  html body .dd-hero p,
  html body .wh-hero p{
    color:#4c607c!important;font-size:clamp(15px,1.4vw,18px)!important;line-height:1.55!important
  }
  @media(max-width:768px){
    html body .ij-global-header .ij-global-header-inner,
    html body[data-ij-header-align] .ij-global-header .ij-global-header-inner{
      flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important;
      padding:12px 18px!important;gap:12px!important
    }
    html body .ij-global-header .ij-global-logo,
    html body[data-ij-header-align] .ij-global-header .ij-global-logo{
      width:200px!important;height:70px!important;flex:0 1 200px!important
    }
    html body .ij-global-header .ij-global-nav,
    html body[data-ij-header-align] .ij-global-header .ij-global-nav{
      width:100%!important;justify-content:flex-start!important;flex-wrap:wrap!important;gap:10px!important;margin:0!important
    }
    html body .ij-global-header .ij-global-tools,
    html body .ij-global-header .ij-global-home{min-height:40px!important;padding:8px 16px!important;font-size:14px!important}
    html body .ij-global-header .ij-global-language{width:130px!important;max-width:130px!important;height:40px!important;min-height:40px!important;font-size:14px!important;padding:8px 32px 8px 16px!important}
    html body .ij-unified-currency-hero,
    html body .ij-reference-hero,
    html body .ij-loan-reference-hero,
    html body .ij-loan-hero,
    html body .ij-pct-showcase,
    html body .hero-banner,
    html body .ij-pdf-hero,
    html body .pt-hero,
    html body .url-hero,
    html body .dd-hero,
    html body .wh-hero{
      width:calc(100% - 20px)!important;min-height:0!important;
      margin:12px auto 20px!important;padding:23px 17px 35px!important;border-radius:23px!important
    }
    html body .ij-unified-currency-hero h1,
    html body .ij-reference-hero h1,
    html body .ij-loan-reference-hero h1,
    html body .ij-loan-hero h1,
    html body .ij-pct-showcase h1,
    html body .hero-banner h1,
    html body .ij-pdf-hero h1,
    html body .pt-hero h1,
    html body .url-hero h1,
    html body .dd-hero h1,
    html body .wh-hero h1{
      text-align:center!important;font-size:clamp(31px,8.5vw,42px)!important;letter-spacing:-1.1px!important
    }
  }
  @media(max-width:380px){
    html body .ij-global-header .ij-global-header-inner,
    html body[data-ij-header-align] .ij-global-header .ij-global-header-inner{padding:10px 12px!important}
    html body .ij-global-header .ij-global-logo,
    html body[data-ij-header-align] .ij-global-header .ij-global-logo{width:180px!important;height:63px!important;flex-basis:180px!important}
    html body .ij-global-header .ij-global-nav{gap:8px!important}
    html body .ij-global-header .ij-global-tools,
    html body .ij-global-header .ij-global-home{padding:7px 12px!important;font-size:13px!important}
    html body .ij-global-header .ij-global-language{width:118px!important;max-width:118px!important;font-size:13px!important}
  }
  /* Homepage reference: shared Header and Hero frame across standalone pages. */
  html body .ij-global-header{
    position:sticky!important;top:0!important;z-index:100000!important;width:100%!important;
    margin:0!important;padding:0 20px!important;background:#fff!important;color:#111!important;
    border:0!important;border-bottom:1px solid #edf2f8!important;border-radius:0!important;
    box-shadow:0 2px 10px rgba(0,0,0,.05)!important;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif!important;
  }
  html body .ij-global-header .ij-global-header-inner{
    display:flex!important;align-items:center!important;justify-content:space-between!important;
    width:100%!important;max-width:1200px!important;min-height:0!important;margin:0 auto!important;
    padding:15px 0!important;gap:12px!important;box-sizing:border-box!important;
  }
  html body .ij-global-header .ij-global-brand{display:flex!important;align-items:center!important;gap:12px!important;
    min-width:0!important;flex:0 1 auto!important;margin:0!important;color:#111!important;text-decoration:none!important}
  html body .ij-global-header .ij-global-logo{display:block!important;width:45px!important;height:45px!important;
    flex:0 0 45px!important;object-fit:contain!important;border:0!important;border-radius:0!important;box-shadow:none!important}
  html body .ij-global-header .ij-global-brand-copy{display:flex!important;flex-direction:column!important}
  html body .ij-global-header .ij-global-brand-name{font-size:22px!important;font-weight:800!important;color:#111!important;
    line-height:1.2!important;letter-spacing:-.4px!important}
  html body .ij-global-header .ij-global-brand-name span{color:#e63946!important}
  html body .ij-global-header .ij-global-brand-tagline{display:block!important;width:auto!important;max-width:none!important;
    margin-top:3px!important;background:none!important;color:#666!important;-webkit-text-fill-color:#666!important;
    font-size:12px!important;font-weight:500!important;line-height:1.25!important;letter-spacing:0!important}
  html body .ij-global-header .ij-global-divider,html body .ij-global-header .ij-global-language-wrap{display:none!important}
  html body .ij-global-header .ij-global-nav{display:flex!important;align-items:center!important;justify-content:flex-end!important;
    flex:0 1 auto!important;gap:7px!important;margin-left:auto!important;min-width:0!important;flex-wrap:wrap!important}
  html body .ij-global-header .ij-global-nav a{display:inline-flex!important;align-items:center!important;justify-content:center!important;
    gap:6px!important;min-height:0!important;height:auto!important;padding:9px 12px!important;border:1px solid #e0eafa!important;
    border-radius:10px!important;background:#f2f7ff!important;color:#173a70!important;box-shadow:none!important;
    font:600 13px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif!important;text-decoration:none!important;white-space:nowrap!important}
  html body .ij-global-header .ij-global-nav a.ij-global-home{background:#0876e8!important;color:#fff!important;border-color:#0876e8!important}
  html body .ij-global-header .ij-global-nav a.ij-global-search{background:#eaf5ff!important;color:#0876e8!important}
  html body .ij-global-header .ij-global-nav svg{width:16px!important;height:16px!important;flex:0 0 16px!important}
  html body .ij-unified-currency-hero{
    box-sizing:border-box!important;width:calc(100% - 36px)!important;max-width:1200px!important;min-height:0!important;height:auto!important;
    margin:20px auto 28px!important;padding:60px 20px!important;border:0!important;border-radius:24px!important;
    background:linear-gradient(180deg,#f0f7ff 0%,#fff 100%)!important;color:#111!important;
    box-shadow:none!important;overflow:hidden!important;isolation:isolate!important;
  }
  html body .ij-unified-currency-hero h1,html body .ij-unified-currency-hero .ij-unified-currency-title{
    color:#111!important;-webkit-text-fill-color:#111!important;font-size:clamp(32px,3.5vw,42px)!important;
    line-height:1.2!important;letter-spacing:-.7px!important;font-weight:800!important;text-align:center!important;
  }
  html body .ij-unified-currency-hero h1 span{background:linear-gradient(90deg,#0876e8,#19c8f5)!important;
    -webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;color:transparent!important}
  html body .ij-unified-currency-hero p{font-size:18px!important;color:#555!important;line-height:1.45!important;text-align:center!important}
  html body .ij-unified-currency-hero .ij-unified-currency-pill{background:#fff!important;border:1px solid #eaeaea!important;
    border-radius:20px!important;color:#333!important;box-shadow:0 2px 10px rgba(0,0,0,.05)!important}
  @media(max-width:768px){
    html body .ij-global-header{padding:0 14px!important}
    html body .ij-global-header .ij-global-header-inner{padding:12px 0!important;gap:10px!important}
    html body .ij-global-header .ij-global-nav{display:none!important}
    html body .ij-global-header .ij-global-logo{width:45px!important;height:45px!important;flex-basis:45px!important}
    html body .ij-global-header .ij-global-brand-name{font-size:23px!important;line-height:1.05!important}
    html body .ij-global-header .ij-global-brand-tagline{font-size:12px!important;margin-top:3px!important}
    html body .ij-unified-currency-hero{width:calc(100% - 24px)!important;max-width:none!important;
      margin:16px 12px 22px!important;padding:34px 18px!important;gap:0!important;border-radius:24px!important}
    html body .ij-unified-currency-hero h1,html body .ij-unified-currency-hero .ij-unified-currency-title{
      font-size:32px!important;text-align:center!important;line-height:1.2!important}
    html body .ij-unified-currency-hero p{font-size:16px!important;text-align:center!important;color:#465a73!important}
    html body .ij-unified-currency-hero .hero-art,html body .ij-unified-currency-hero .ij-reference-art,
    html body .ij-unified-currency-hero .ij-id-hero-art,html body .ij-unified-currency-hero .ij-master-visual{
      display:none!important}
  }


`;

  function mount(){
    // Load the same footer implementation used by pages without the shared header.
    if(!document.querySelector('script[data-ij-site-footer],script[src*="site-footer.js"]')){
      const footerScript=document.createElement('script');
      footerScript.src=ROOT+'site-footer.js';
      footerScript.defer=true;
      footerScript.dataset.ijSiteFooter='true';
      document.body.appendChild(footerScript);
    }
    const heroes=document.querySelectorAll('.hero,.hero-banner,.ij-age-hero,.ij-bmi-hero,.ij-discount-hero,.emi-hero,.ij-qr-hero,.ij-full-hero,.ij-master-hero,.ij-tool-hero,.ij-id-hero,.ij-social-hero,.idg-hero,.ij-reference-hero,.ij-loan-reference-hero,.ij-loan-hero,.ij-pct-showcase,.ij-pdf-hero,.pt-hero,.url-hero,.dd-hero,.wh-hero');
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
          <svg class="ij-global-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="InfoJano logo">
            <defs><linearGradient id="ij-shared-brand-bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#19c8f5"/><stop offset=".5" stop-color="#0876e8"/><stop offset="1" stop-color="#06358f"/></linearGradient></defs>
            <path d="M120 60 Q96 60 80 80 L48 120 Q36 136 36 156 V356 Q36 420 104 420 H320 Q356 420 378 392 L452 296 Q474 268 444 244 L168 84 Q148 70 120 60Z" fill="url(#ij-shared-brand-bg)"/>
            <rect x="150" y="150" width="52" height="200" rx="14" fill="#fff"/>
            <path d="M250 150 H302 V300 Q302 360 242 360 H222 V310 H242 Q250 310 250 300 Z" fill="#fff"/>
          </svg>
          <span class="ij-global-brand-copy"><span class="ij-global-brand-name">Info<span>Jano</span></span><span class="ij-global-brand-tagline">Smart Online Tools for Everyday Life</span></span>
        </a>
        <nav class="ij-global-nav" aria-label="Main navigation">
          <a class="ij-global-home" href="${ROOT}index.html"><span aria-hidden="true">⌂</span> Home</a>
          <a href="${ROOT}index.html#toolGrid"><span aria-hidden="true">▦</span> All Tools</a>
          <a href="${ROOT}index.html#guides"><span aria-hidden="true">▤</span> Guides</a>
          <a href="${ROOT}index.html#about"><span aria-hidden="true">ⓘ</span> About</a>
          <a class="ij-global-search" href="${ROOT}index.html#search" aria-label="Search tools"><span aria-hidden="true">⌕</span></a>
        </nav>
      </div>`;
    document.body.insertBefore(header,header.nextSibling===document.body.firstChild?header:document.body.firstChild);
  }
  if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount,{once:true});
})();