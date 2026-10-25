/* InfoJano shared page helper: remove the obsolete install banner and load contextual related-app cards. */
(()=> {
  function removeInstallBanner(){
    document.querySelectorAll(".ij-install-card, #ij-install-button").forEach(el=>{
      const card=el.matches(".ij-install-card")?el:el.closest(".ij-install-card");
      if(card)card.remove();else el.remove();
    });
  }
  function loadRelatedApps(){
    if(document.querySelector('script[data-ij-related-apps]'))return;
    const script=document.createElement("script");
    script.src="/InfoJano/related-apps.js";
    script.defer=true;script.dataset.ijRelatedApps="1";
    document.head.appendChild(script);
  }
  function run(){removeInstallBanner();loadRelatedApps();}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
  const observer=new MutationObserver(removeInstallBanner);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();