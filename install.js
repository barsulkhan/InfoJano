/* InfoJano shared page helpers: no top install banner; apply theme and contextual related apps. */
(()=> {
/* Resolve the deployed root for the custom domain and legacy GitHub Pages path. */
  const ROOT=location.hostname==="barsulkhan.github.io"?"/InfoJano/":"/";
  /* Register the site-wide worker from every page that loads this shared helper. */
  function registerServiceWorker(){
    if(!("serviceWorker" in navigator))return;
    navigator.serviceWorker.register(ROOT+"sw.js",{scope:ROOT})
      .catch(error=>console.error("Service Worker registration failed:",error));
  }
  if(document.readyState==="complete")registerServiceWorker();
  else window.addEventListener("load",registerServiceWorker,{once:true});
  function ensureAdSenseTag(){
    const selector='script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';
    if(document.querySelector(selector))return;
    const script=document.createElement("script");
    script.async=true;
    script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2908196513377151";
    script.crossOrigin="anonymous";
    script.setAttribute("data-ij-adsense","1");
    (document.head||document.documentElement).insertBefore(script,(document.head||document.documentElement).firstChild);
  }
  function removeInstallBanner(){
    document.querySelectorAll(".ij-install-card, #ij-install-button").forEach(el=>{
      const card=el.matches(".ij-install-card")?el:el.closest(".ij-install-card");
      if(card)card.remove();else el.remove();
    });
  }
  function loadScript(name,attr){
    if(document.querySelector('script['+attr+']'))return;
    const script=document.createElement("script");script.src=ROOT+name;script.defer=true;script.setAttribute(attr,"1");document.head.appendChild(script);
  }
  function run(){ensureAdSenseTag();removeInstallBanner();loadScript("theme.js","data-ij-theme");if(!document.body.hasAttribute("data-ij-hide-related-apps"))loadScript("related-apps.js","data-ij-related-apps");loadScript("legal-links.js","data-ij-legal-links");}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
  const observer=new MutationObserver(removeInstallBanner);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();