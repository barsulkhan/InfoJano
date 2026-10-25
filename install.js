/* InfoJano shared page helpers: no top install banner; apply theme and contextual related apps. */
(()=> {
  function removeInstallBanner(){
    document.querySelectorAll(".ij-install-card, #ij-install-button").forEach(el=>{
      const card=el.matches(".ij-install-card")?el:el.closest(".ij-install-card");
      if(card)card.remove();else el.remove();
    });
  }
  function loadScript(name,attr){
    if(document.querySelector('script['+attr+']'))return;
    const script=document.createElement("script");script.src="/InfoJano/"+name;script.defer=true;script.setAttribute(attr,"1");document.head.appendChild(script);
  }
  function run(){removeInstallBanner();loadScript("theme.js","data-ij-theme");loadScript("related-apps.js","data-ij-related-apps");}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
  const observer=new MutationObserver(removeInstallBanner);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();