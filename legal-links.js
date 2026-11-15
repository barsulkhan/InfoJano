(()=>{"use strict";
const links=[["Privacy Policy","./privacy-policy.html"],["About","./about.html"],["Contact","./contact.html"],["Terms of Use","./terms-of-use.html"]];
function mount(){
 let footer=document.querySelector("footer");
 if(!footer){footer=document.createElement("footer");footer.className="ij-legal-footer";document.body.appendChild(footer);}
 if(footer.querySelector(".ij-legal-links"))return;
 const style=document.createElement("style");style.textContent=".ij-legal-links{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 20px;margin:16px auto 4px;padding:14px 8px;border-top:1px solid #dce6f2;font:600 13px/1.5 system-ui,-apple-system,Segoe UI,sans-serif}.ij-legal-links a{color:#24558d;text-decoration:none}.ij-legal-links a:hover{text-decoration:underline}.ij-legal-footer{margin:24px auto 0;padding:8px 14px;color:#63718b;text-align:center;font:13px/1.6 system-ui,-apple-system,Segoe UI,sans-serif}";
 document.head.appendChild(style);
 const nav=document.createElement("nav");nav.className="ij-legal-links";nav.setAttribute("aria-label","Legal and information");
 links.forEach(([label,href])=>{const a=document.createElement("a");a.href=href;a.textContent=label;nav.appendChild(a)});
 footer.appendChild(nav);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});else mount();
})();