/* InfoJano: keep tool pages clean. Native browser install remains available from the browser menu.
   The old in-page "Install this tool" banner was intentionally removed at the user's request. */
(()=> {
  function removeInstallBanner(){
    document.querySelectorAll(".ij-install-card, #ij-install-button").forEach(el=>{
      const card=el.matches(".ij-install-card")?el:el.closest(".ij-install-card");
      if(card) card.remove(); else el.remove();
    });
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",removeInstallBanner,{once:true});
  } else removeInstallBanner();
  const observer=new MutationObserver(removeInstallBanner);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();