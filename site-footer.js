/* InfoJano shared footer and privacy-settings entry point. */
(function(){
  if(window.__ijSiteFooterReady)return;
  window.__ijSiteFooterReady=true;
  const ROOT=location.hostname==='barsulkhan.github.io'?'/InfoJano/':'/';
  const css=`
  .ij-global-footer{box-sizing:border-box;width:100%;margin:0;padding:24px 14px 28px;text-align:center;color:#718096;font:12px/1.6 Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;background:transparent;clear:both}
  .ij-global-footer a{color:#52627b;text-decoration:underline;text-underline-offset:2px}
  .ij-global-footer a:hover,.ij-global-footer a:focus-visible{color:#075fc4}
  .ij-global-footer-nav{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:7px 12px;margin:12px auto 0;padding:0;max-width:100%}
  .ij-global-footer-nav a{display:inline-block;overflow-wrap:anywhere}
  .ij-global-footer-nav .ij-footer-separator{color:#a0aec0;text-decoration:none}
  .ij-privacy-settings-status{display:block;margin:8px auto 0;max-width:620px;color:#718096;font-size:12px}
  @media(max-width:520px){.ij-global-footer{padding:20px 12px 26px}.ij-global-footer-nav{gap:8px 10px;font-size:12px}}
  `;
  function addLink(nav,label,href,id){
    const a=document.createElement('a');a.textContent=label;a.href=href;
    if(id)a.id=id;nav.appendChild(a);return a;
  }
  function addSep(nav){
    const s=document.createElement('span');s.className='ij-footer-separator';s.setAttribute('aria-hidden','true');s.textContent='·';nav.appendChild(s);
  }
  function mount(){
    if(!document.head.querySelector('#ij-global-footer-style')){
      const style=document.createElement('style');style.id='ij-global-footer-style';style.textContent=css;document.head.appendChild(style);
    }
    let footer=document.querySelector('footer');
    if(!footer){footer=document.createElement('footer');document.body.appendChild(footer);footer.textContent='© InfoJano';}
    footer.classList.add('ij-global-footer');
    let nav=footer.querySelector('.ij-global-footer-nav');
    if(!nav){nav=document.createElement('nav');nav.className='ij-global-footer-nav';nav.setAttribute('aria-label','Footer navigation');footer.appendChild(nav);}
    if(nav.dataset.ijBuilt==='true')return;
    nav.dataset.ijBuilt='true';
    addLink(nav,'Home',ROOT+'index.html');addSep(nav);
    addLink(nav,'All Tools',ROOT+'index.html#tools');addSep(nav);
    addLink(nav,'Privacy Policy',ROOT+'privacy-policy.html');addSep(nav);
    addLink(nav,'Contact',ROOT+'contact.html');addSep(nav);
    const isHome=location.pathname==='/'||location.pathname===ROOT||location.pathname===ROOT+'index.html'||location.pathname.endsWith('/index.html');
    if(isHome){
      const a=addLink(nav,'Privacy and cookie settings','#ij-privacy-revocation','ij-privacy-revocation');
      const status=document.createElement('span');status.className='ij-privacy-settings-status';status.setAttribute('role','status');status.hidden=true;footer.appendChild(status);
      a.addEventListener('click',function(event){
        event.preventDefault();
        if(window.googlefc&&typeof window.googlefc.showRevocationMessage==='function'){
          status.hidden=true;window.googlefc.showRevocationMessage();return;
        }
        status.textContent='Google privacy settings are not ready on this page. If this message remains, the site’s consent settings need to be checked in Google AdSense.';
        status.hidden=false;
        window.googlefc=window.googlefc||{};
        window.googlefc.callbackQueue=window.googlefc.callbackQueue||[];
        window.googlefc.callbackQueue.push({'CONSENT_API_READY':function(){
          status.hidden=true;
          if(window.googlefc&&typeof window.googlefc.showRevocationMessage==='function')window.googlefc.showRevocationMessage();
        }});
      });
    }else{
      addLink(nav,'Privacy and cookie settings',ROOT+'index.html#ij-privacy-revocation');
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();