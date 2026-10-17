(()=>{const b=document.getElementById("ij-install-button");let p=null;const h=document.querySelector(".ij-install-help");if(b){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();p=e});window.addEventListener("appinstalled",()=>{b.textContent="Tool installed ✓";b.disabled=true});b.addEventListener("click",async()=>{if(p){p.prompt();const r=await p.userChoice;b.textContent=r&&r.outcome==="accepted"?"Installing…":"Install this tool";p=null;return}if(h){h.open=true;h.scrollIntoView({behavior:"smooth",block:"nearest"})}})}
const tools={
"age.html":["Age Calculator","age-calculator-v1.0.0","InfoJano-Age-Calculator.apk"],
"bmi.html":["BMI Calculator","infojano-tool-apps-v1.0.0","InfoJano-BMI-Calculator.apk"],
"currency-converter.html":["Currency Converter","infojano-tool-apps-v1.0.0","InfoJano-Currency-Converter.apk"],
"date-difference.html":["Date Difference Calculator","infojano-tool-apps-v1.0.0","InfoJano-Date-Difference-Calculator.apk"],
"discount.html":["Discount Calculator","infojano-tool-apps-v1.0.0","InfoJano-Discount-Calculator.apk"],
"emi.html":["EMI Calculator","infojano-tool-apps-v1.0.0","InfoJano-EMI-Calculator.apk"],
"gst-calculator.html":["GST Calculator","infojano-tool-apps-v1.0.0","InfoJano-GST-Calculator.apk"],
"image-compressor.html":["Image Compressor","infojano-tool-apps-v1.0.0","InfoJano-Image-Compressor.apk"],
"image-resizer.html":["Image Resizer","infojano-tool-apps-v1.0.0","InfoJano-Image-Resizer.apk"],
"image-to-pdf.html":["Image to PDF","infojano-tool-apps-v1.0.0","InfoJano-Image-to-PDF.apk"],
"loan-eligibility.html":["Loan Eligibility Calculator","infojano-tool-apps-v1.0.0","InfoJano-Loan-Eligibility-Calculator.apk"],
"loan-interest.html":["Loan Interest Calculator","infojano-tool-apps-v1.0.0","InfoJano-Loan-Interest-Calculator.apk"],
"number-to-words.html":["Number to Words","infojano-tool-apps-v1.0.0","InfoJano-Number-to-Words.apk"],
"password-generator.html":["Password Generator","infojano-tool-apps-v1.0.0","InfoJano-Password-Generator.apk"],
"percentage.html":["Percentage Calculator","infojano-tool-apps-v1.0.0","InfoJano-Percentage-Calculator.apk"],
"percentage-change.html":["Percentage Change Calculator","infojano-tool-apps-v1.0.0","InfoJano-Percentage-Change-Calculator.apk"],
"qr-maker.html":["QR Code Maker","infojano-tool-apps-v1.0.0","InfoJano-QR-Code-Maker.apk"],
"savings.html":["Savings Calculator","infojano-tool-apps-v1.0.0","InfoJano-Savings-Calculator.apk"],
"text-counter.html":["Text Counter","infojano-tool-apps-v1.0.0","InfoJano-Text-Counter.apk"],
"time-calculator.html":["Time Calculator","infojano-tool-apps-v1.0.0","InfoJano-Time-Calculator.apk"],
"tip-calculator.html":["Tip Calculator","infojano-tool-apps-v1.0.0","InfoJano-Tip-Calculator.apk"],
"unit-converter.html":["Unit Converter","infojano-tool-apps-v1.0.0","InfoJano-Unit-Converter.apk"]
};
const base="https://github.com/barsulkhan/InfoJano/releases/download/";
const appMode=new URLSearchParams(location.search).get("app")==="1";
if(appMode){const style=document.createElement("style");style.textContent=".ij-install-card,.ij-apk-card,.ij-app-download-link,#ij-install-card{display:none!important}";document.head.appendChild(style);return}
const heading=document.getElementById("related-tools-title");if(!heading)return;
let section=heading.closest("section")||heading.parentElement.parentElement;
const grids=[...section.querySelectorAll("div")].filter(el=>{const s=getComputedStyle(el);return s.display==="grid"&&[...el.children].some(ch=>ch.matches&&ch.matches('a[href$=".html"]'))});
const grid=grids.sort((a,b)=>a.querySelectorAll('a[href$=".html"]').length-b.querySelectorAll('a[href$=".html"]').length)[0];if(!grid)return;
const css=document.createElement("style");css.textContent=".ij-tool-card-wrap{display:flex;flex-direction:column;min-width:0;gap:7px}.ij-app-download-link{display:flex;align-items:center;justify-content:center;gap:7px;padding:10px 8px;border-radius:11px;background:#0b5bd3;color:#fff!important;text-decoration:none!important;font-size:13px;font-weight:700;line-height:1.3;text-align:center;box-shadow:0 2px 7px rgba(37,99,235,.13)}.ij-app-download-link:active{transform:scale(.98)}.ij-app-download-link svg{width:16px;height:16px;flex:none}";document.head.appendChild(css);
[...grid.children].filter(el=>el.matches&&el.matches('a[href$=".html"]')).forEach(card=>{const path=(card.getAttribute("href")||"").split("/").pop().split("?")[0];const info=tools[path];if(!info||card.parentElement.classList.contains("ij-tool-card-wrap"))return;const wrap=document.createElement("div");wrap.className="ij-tool-card-wrap";card.parentNode.insertBefore(wrap,card);wrap.appendChild(card);const link=document.createElement("a");link.className="ij-app-download-link";link.href=base+info[1]+"/"+info[2];link.setAttribute("download",info[2]);link.setAttribute("aria-label","Download "+info[0]+" Android app");link.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></svg><span>Download app</span>';wrap.appendChild(link)});
})();