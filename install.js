/* InfoJano shared page helpers: no top install banner; apply theme and contextual related apps. */
(()=> {
/* Register the site-wide worker from every page that loads this shared helper. */
  function registerServiceWorker(){
    if(!("serviceWorker" in navigator))return;
    const root=location.hostname==="barsulkhan.github.io"?"/InfoJano/":"/";
    navigator.serviceWorker.register(root+"sw.js",{scope:root})
      .catch(error=>console.error("Service Worker registration failed:",error));
  }
  if(document.readyState==="complete")registerServiceWorker();
  else window.addEventListener("load",registerServiceWorker,{once:true});
  function removeInstallBanner(){
    document.querySelectorAll(".ij-install-card, #ij-install-button").forEach(el=>{
      const card=el.matches(".ij-install-card")?el:el.closest(".ij-install-card");
      if(card)card.remove();else el.remove();
    });
  }
  function loadScript(name,attr){
    if(document.querySelector('script['+attr+']'))return;
    const script=document.createElement("script");script.src=(location.hostname==="barsulkhan.github.io"?"/InfoJano/":"/")+name;script.defer=true;script.setAttribute(attr,"1");document.head.appendChild(script);
  }
  function run(){removeInstallBanner();loadScript("theme.js","data-ij-theme");if(!document.body.hasAttribute("data-ij-hide-related-apps"))loadScript("related-apps.js","data-ij-related-apps");}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
  const observer=new MutationObserver(removeInstallBanner);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();