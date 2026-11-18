/* InfoJano shared footer and privacy-settings entry point. */
(function(){
  if(window.__ijSiteFooterReady)return;
  window.__ijSiteFooterReady=true;
  const ROOT=location.hostname==='barsulkhan.github.io'?'/InfoJano/':'/';
  const css=`
  .ij-global-footer{box-sizing:border-box;width:100%;margin:0;padding:24px 14px 28px;text-align:center;color:#718096;font:12px/1.6 Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;background:transparent;clear:both}
  .ij-global-footer a{color:#52627b;text-decoration:underline;text-underline-offset:2px}
  .ij-global-footer a:hover,.ij-global-footer a:focus-visible{color:#075fc4}
  .ij-global-footer-intro{display:grid;gap:3px;justify-items:center;line-height:1.55;margin:0 auto 10px}
  .ij-global-footer-brand{font-size:14px;font-weight:600;color:#52627b}
  .ij-global-footer-tagline{font-size:13px;color:#52627b}
  .ij-global-footer-languages{margin-top:8px;font-size:12px}
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
  function ensureGooglePrivacyMessaging(){
    window.googlefc=window.googlefc||{};
    window.googlefc.callbackQueue=window.googlefc.callbackQueue||[];
    const exists=[...document.scripts].some(s=>s.src.includes('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'));
    if(!exists){
      const script=document.createElement('script');
      script.async=true;
      script.crossOrigin='anonymous';
      script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2908196513377151';
      script.dataset.ijAdsense='true';
      (document.head||document.documentElement).appendChild(script);
    }
  }
  function bindPrivacySettings(link,status){
    link.addEventListener('click',function(event){
      event.preventDefault();
      status.hidden=false;
      status.textContent='Opening Google privacy settings…';
      ensureGooglePrivacyMessaging();
      let finished=false;
      const finish=()=>{finished=true;status.hidden=true;};
      const openRevocation=()=>{
        const current=window.googlefc;
        if(current&&typeof current.showRevocationMessage==='function'){
          current.showRevocationMessage();
          finish();
        }else{
          status.textContent='Google privacy settings could not load. Please check the AdSense Privacy & messaging setup or whether a browser extension is blocking Google scripts.';
        }
      };
      window.googlefc.callbackQueue.push({'CONSENT_API_READY':openRevocation});
      window.setTimeout(function(){
        if(!finished)status.textContent='Google privacy settings are still unavailable. Check the AdSense Privacy & messaging setup or whether a browser extension is blocking Google scripts.';
      },12000);
    });
  }
  function mount(){
    if(!document.head.querySelector('#ij-global-footer-style')){
      const style=document.createElement('style');style.id='ij-global-footer-style';style.textContent=css;document.head.appendChild(style);
    }
    let footer=document.querySelector('footer');
    if(!footer){footer=document.createElement('footer');document.body.appendChild(footer);footer.textContent='© InfoJano';}
    ensureGooglePrivacyMessaging();
    footer.classList.add('ij-global-footer');
    let intro=footer.querySelector('.ij-global-footer-intro');
    if(!intro){
      intro=document.createElement('div');intro.className='ij-global-footer-intro';
      const oldNodes=[...footer.children];
      const brand=oldNodes.find(el=>el.textContent.includes('InfoJano')&&el.textContent.includes('Global Everyday Utility Portal'));
      const tagline=oldNodes.find(el=>el.textContent.includes('Privacy-minded')&&el.textContent.includes('Mobile-first'));
      const languages=oldNodes.find(el=>el.textContent.includes('Português:')&&el.querySelector('a[href*="discount-pt-br"]'));
      if(brand){brand.classList.add('ij-global-footer-brand');intro.appendChild(brand);}
      else{const el=document.createElement('div');el.className='ij-global-footer-brand';el.textContent='InfoJano • Global Everyday Utility Portal';intro.appendChild(el);}
      if(tagline){tagline.classList.add('ij-global-footer-tagline');intro.appendChild(tagline);}
      else{const el=document.createElement('div');el.className='ij-global-footer-tagline';el.textContent='Privacy-minded • Mobile-first • Built for everyone';intro.appendChild(el);}
      if(languages){languages.classList.add('ij-global-footer-languages');intro.appendChild(languages);}
      else{
        const el=document.createElement('div');el.className='ij-global-footer-languages';el.append('Português: ');
        const a=document.createElement('a');a.href=ROOT+'discount-pt-br.html';a.textContent='Calculadora de Desconto';el.appendChild(a);
        el.append(' · ');
        const b=document.createElement('a');b.href=ROOT+'percentage-pt-br.html';b.textContent='Calculadora de Porcentagem';el.appendChild(b);
        intro.appendChild(el);
      }
      footer.prepend(intro);
    }
    let nav=footer.querySelector('.ij-global-footer-nav');
    if(!nav){nav=document.createElement('nav');nav.className='ij-global-footer-nav';nav.setAttribute('aria-label','Footer navigation');footer.appendChild(nav);}
    if(nav.dataset.ijBuilt==='true')return;
    nav.dataset.ijBuilt='true';
    addLink(nav,'Home',ROOT+'index.html');addSep(nav);
    addLink(nav,'All Tools',ROOT+'index.html#tools');addSep(nav);
    addLink(nav,'Privacy Policy',ROOT+'privacy-policy.html');addSep(nav);
    addLink(nav,'Contact',ROOT+'contact.html');addSep(nav);
    const settings=addLink(nav,'Privacy and cookie settings','#ij-privacy-revocation','ij-privacy-revocation');
    const status=document.createElement('span');status.className='ij-privacy-settings-status';status.setAttribute('role','status');status.hidden=true;footer.appendChild(status);
    bindPrivacySettings(settings,status);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
