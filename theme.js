/* InfoJano shared visual system — polished mobile-first tool pages. */
(()=> {
  if(document.getElementById("ij-pro-theme"))return;
  const style=document.createElement("style");style.id="ij-pro-theme";
  style.textContent=`
    :root{color-scheme:light;--ij-ink:#15223b;--ij-muted:#61718a;--ij-blue:#245be8;--ij-blue-dark:#1746bd;--ij-line:#dfe7f4;--ij-surface:#fff;--ij-soft:#f4f7ff;--ij-mint:#e8fbf5;--ij-shadow:0 14px 38px rgba(31,65,125,.09)}
    html{background:#eef3fb;scroll-behavior:smooth}
    body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;color:var(--ij-ink)!important;background:radial-gradient(ellipse at 12% 0%,rgba(91,143,255,.13),transparent 34%),radial-gradient(ellipse at 95% 10%,rgba(85,219,183,.12),transparent 30%),#f2f6fd!important;line-height:1.65!important;-webkit-font-smoothing:antialiased}
    main{max-width:780px!important;margin:20px auto!important}
    body>header,main>header,header:first-child{background:linear-gradient(125deg,#101b38 0%,#173d86 65%,#2165d8 100%)!important;color:#fff!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:22px!important;padding:22px!important;box-shadow:0 14px 32px rgba(20,48,104,.18)!important}
    header h1,header h2{color:#fff!important;letter-spacing:-.035em!important;line-height:1.2!important}
    header a{color:#bde9ff!important}
    h1,h2,h3,h4{color:#14213b!important;letter-spacing:-.025em;line-height:1.25}
    h1{font-size:clamp(1.8rem,5vw,2.55rem)!important}
    h2{font-size:clamp(1.35rem,4vw,1.85rem)!important}
    p,li,label,small{line-height:1.7}
    main>.card,main>section,.card,.tool-card,.content-card,article,.ij-practical-guide{background:rgba(255,255,255,.96)!important;border:1px solid rgba(213,224,243,.95)!important;border-radius:22px!important;box-shadow:var(--ij-shadow)!important}
    .card{padding:clamp(18px,4vw,30px)!important}
    input:not([type=checkbox]):not([type=radio]),select,textarea{width:100%;max-width:100%;min-height:52px;border:1.5px solid #d4deef!important;border-radius:13px!important;background:#fbfdff!important;color:#17233d!important;padding:13px 15px!important;font:inherit!important;box-shadow:inset 0 1px 2px rgba(24,50,95,.025)!important;transition:border-color .18s,box-shadow .18s}
    input:focus,select:focus,textarea:focus{outline:none!important;border-color:#4c7df0!important;box-shadow:0 0 0 4px rgba(57,106,236,.13)!important}
    button,.button,input[type=button],input[type=submit],a.button{border:0!important;border-radius:13px!important;background:linear-gradient(115deg,#2164ec,#1749c4)!important;color:#fff!important;font-weight:750!important;min-height:48px;padding:12px 18px!important;box-shadow:0 7px 16px rgba(36,91,232,.18)!important;transition:transform .16s,filter .16s}
    button:hover,.button:hover,input[type=submit]:hover{filter:brightness(1.04);transform:translateY(-1px)}
    button:active,.button:active,input[type=submit]:active{transform:translateY(0)}


    /* Strong Windows WebView containment: reset fixed/intrinsic widths inside tool content. */
    *,*::before,*::after{box-sizing:border-box}
    html{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
    body{width:100%!important;max-width:100%!important;min-width:0!important;margin:0!important;overflow-x:hidden!important}
    body>main,main{display:block!important;width:100%!important;max-width:1100px!important;min-width:0!important;margin:20px auto!important;padding:16px!important;overflow:visible!important}
    main>*{width:100%!important;max-width:100%!important;min-width:0!important;margin-left:0!important;margin-right:0!important}
    main section,main article,main .card,main form,main .result{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;overflow-wrap:break-word!important;word-wrap:break-word!important;box-sizing:border-box!important}
    main h1,main h2,main h3,main h4,main p,main li,main label,main small,main strong,main span,main div{max-width:100%!important;min-width:0!important;white-space:normal!important;overflow-wrap:break-word!important;word-wrap:break-word!important;box-sizing:border-box!important}
    main ul,main ol{padding-left:24px!important}
    main input,main select,main textarea,main button{width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important}

    /* Desktop/Windows WebView overflow fix: keep all text and cards inside the viewport. */
    html,body{width:100%;max-width:100%;overflow-x:hidden}
    body{min-width:0!important}
    main{width:calc(100% - 32px)!important;max-width:1100px!important;min-width:0!important;padding:16px!important;box-sizing:border-box!important}
    main>*{max-width:100%!important;min-width:0!important;box-sizing:border-box!important}
    main h1,main h2,main h3,main h4,main p,main li,main label,main small,main strong,main span{max-width:100%;overflow-wrap:anywhere;word-break:normal}
    main h1,main h2,main h3{white-space:normal!important}
    main section,main article,main .card,main .result,main form{width:100%;min-width:0;box-sizing:border-box;overflow-wrap:anywhere}
    main input,main select,main textarea,main button{max-width:100%;box-sizing:border-box}
    main table{display:block;max-width:100%;overflow-x:auto}
    #ij-related-apps{width:100%;max-width:100%;box-sizing:border-box;overflow:hidden}

    a{overflow-wrap:anywhere}
    hr{border:0;border-top:1px solid var(--ij-line);margin:24px 0}
    table{width:100%;border-collapse:collapse;overflow:hidden;border-radius:12px}
    th{background:#edf3ff;color:#18356b}td,th{padding:10px;border-bottom:1px solid var(--ij-line);text-align:left}
    .result,.output,.result-box,[id*=result],[class*=result]{border-radius:15px}
    #ij-related-apps{background:linear-gradient(145deg,#f9fbff,#eef5ff)!important;border-color:#d8e5ff!important;box-shadow:0 12px 28px rgba(33,77,155,.08)!important}
    @media(max-width:520px){body{padding:14px!important}main{margin:12px auto!important}body>header,main>header,header:first-child{padding:18px!important;border-radius:18px!important}.card{border-radius:18px!important}button,.button,input[type=submit]{width:100%;min-height:50px}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important}}
  `;document.head.appendChild(style);
})();