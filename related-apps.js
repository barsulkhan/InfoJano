/* InfoJano contextual Related Apps: show four other tools, excluding the current tool. */
(()=> {
  const base=location.hostname==="barsulkhan.github.io"?"/InfoJano/":"/";
  const release="https://github.com/barsulkhan/InfoJano/releases/download/infojano-tool-apps-v1.1.1/";
  const desktopRelease="https://github.com/barsulkhan/InfoJano/releases/download/infojano-desktop-apps-v1.0.0/";
  const apps=[
    {id:"age",name:"Age Calculator",page:"age.html",apk:"InfoJano-Age-Calculator.apk",icon:"age.svg",desc:"Calculate exact age in years, months and days.",group:"everyday",emoji:"🎂"},
    {id:"bmi",name:"BMI Calculator",page:"bmi.html",apk:"InfoJano-BMI-Calculator.apk",icon:"bmi.svg",desc:"Estimate body mass index from height and weight.",group:"health",emoji:"⚖️"},
    {id:"currency-converter",name:"Currency Converter",page:"currency-converter.html",apk:"InfoJano-Currency-Converter.apk",icon:"currency-converter.svg",desc:"Convert amounts between currencies.",group:"money",emoji:"💱"},
    {id:"date-difference",name:"Date Difference Calculator",page:"date-difference.html",apk:"InfoJano-Date-Difference-Calculator.apk",icon:"date-difference.svg",desc:"Find the time between two dates.",group:"everyday",emoji:"📅"},
    {id:"discount",name:"Discount Calculator",page:"discount.html",apk:"InfoJano-Discount-Calculator.apk",icon:"discount.svg",desc:"Calculate sale prices and discounts.",group:"money",emoji:"🏷️"},
    {id:"emi",name:"EMI Calculator",page:"emi.html",apk:"InfoJano-EMI-Calculator.apk",icon:"emi.svg",desc:"Estimate monthly loan payments.",group:"money",emoji:"🧮"},
    {id:"gst-calculator",name:"GST Calculator",page:"gst-calculator.html",apk:"InfoJano-GST-Calculator.apk",icon:"gst-calculator.svg",desc:"Calculate GST amounts and totals.",group:"money",emoji:"🧾"},
    {id:"id-card-print-studio",name:"ID Card Print Studio",page:"id-card-print-studio.html",apk:"InfoJano-ID-Card-Print-Studio.apk",icon:"id-card-print-studio.svg",desc:"Prepare ID-card layouts for printing.",group:"documents",emoji:"🪪"},
    {id:"image-compressor",name:"Image Compressor",page:"image-compressor.html",apk:"InfoJano-Image-Compressor.apk",icon:"image-compressor.svg",desc:"Reduce image file size for sharing.",group:"images",emoji:"🗜️"},
    {id:"image-resizer",name:"Image Resizer",page:"image-resizer.html",apk:"InfoJano-Image-Resizer.apk",icon:"image-resizer.svg",desc:"Resize images to your required dimensions.",group:"images",emoji:"📐"},
    {id:"image-to-pdf",name:"Image to PDF",page:"image-to-pdf.html",apk:"InfoJano-Image-to-PDF.apk",icon:"image-to-pdf.svg",desc:"Turn images into a PDF document.",group:"documents",emoji:"📄"},
    {id:"loan-eligibility",name:"Loan Eligibility Calculator",page:"loan-eligibility.html",apk:"InfoJano-Loan-Eligibility-Calculator.apk",icon:"loan-eligibility.svg",desc:"Estimate possible loan eligibility.",group:"money",emoji:"🏦"},
    {id:"loan-interest",name:"Loan Interest Calculator",page:"loan-interest.html",apk:"InfoJano-Loan-Interest-Calculator.apk",icon:"loan-interest.svg",desc:"Calculate interest on a loan.",group:"money",emoji:"📈"},
    {id:"number-to-words",name:"Number to Words",page:"number-to-words.html",apk:"InfoJano-Number-to-Words.apk",icon:"number-to-words.svg",desc:"Convert numbers into words.",group:"everyday",emoji:"🔢"},
    {id:"password-generator",name:"Password Generator",page:"password-generator.html",apk:"InfoJano-Password-Generator.apk",icon:"password-generator.svg",desc:"Generate a strong random password.",group:"security",emoji:"🔐"},
    {id:"percentage",name:"Percentage Calculator",page:"percentage.html",apk:"InfoJano-Percentage-Calculator.apk",icon:"percentage.svg",desc:"Solve everyday percentage calculations.",group:"money",emoji:"％"},
    {id:"percentage-change",name:"Percentage Change Calculator",page:"percentage-change.html",apk:"InfoJano-Percentage-Change-Calculator.apk",icon:"percentage-change.svg",desc:"Calculate percentage increase or decrease.",group:"money",emoji:"📊"},
    {id:"qr-maker",name:"QR Code Maker",page:"qr-maker.html",apk:"InfoJano-QR-Code-Maker.apk",icon:"qr-maker.svg",desc:"Create QR codes for text and links.",group:"documents",emoji:"▦"},
    {id:"savings",name:"Savings Calculator",page:"savings.html",apk:"InfoJano-Savings-Calculator.apk",icon:"savings.svg",desc:"Estimate how your savings may grow.",group:"money",emoji:"🐷"},
    {id:"text-counter",name:"Text Counter",page:"text-counter.html",apk:"InfoJano-Text-Counter.apk",icon:"text-counter.svg",desc:"Count words, characters and spaces.",group:"everyday",emoji:"📝"},
    {id:"time-calculator",name:"Time Calculator",page:"time-calculator.html",apk:"InfoJano-Time-Calculator.apk",icon:"time-calculator.svg",desc:"Add and subtract hours and minutes.",group:"everyday",emoji:"⏱️"},
    {id:"tip-calculator",name:"Tip Calculator",page:"tip-calculator.html",apk:"InfoJano-Tip-Calculator.apk",icon:"tip-calculator.svg",desc:"Calculate tips and split a bill.",group:"money",emoji:"🍽️"},
    {id:"unit-converter",name:"Unit Converter",page:"unit-converter.html",apk:"InfoJano-Unit-Converter.apk",icon:"unit-converter.svg",desc:"Convert common units of measurement.",group:"everyday",emoji:"📏"}
  ];
  const preferred={
    "age":["date-difference","time-calculator","bmi","percentage"],
    "bmi":["age","savings","percentage","date-difference"],
    "currency-converter":["emi","discount","gst-calculator","percentage"],
    "date-difference":["age","time-calculator","savings","percentage-change"],
    "discount":["percentage","percentage-change","gst-calculator","tip-calculator"],
    "emi":["loan-interest","loan-eligibility","savings","percentage"],
    "gst-calculator":["percentage","discount","currency-converter","emi"],
    "id-card-print-studio":["image-resizer","image-compressor","image-to-pdf","qr-maker"],
    "image-compressor":["image-resizer","image-to-pdf","id-card-print-studio","qr-maker"],
    "image-resizer":["image-compressor","image-to-pdf","id-card-print-studio","qr-maker"],
    "image-to-pdf":["image-compressor","image-resizer","id-card-print-studio","qr-maker"],
    "loan-eligibility":["emi","loan-interest","savings","percentage"],
    "loan-interest":["emi","loan-eligibility","savings","percentage"],
    "number-to-words":["text-counter","percentage","age","unit-converter"],
    "password-generator":["qr-maker","text-counter","number-to-words","unit-converter"],
    "percentage":["percentage-change","discount","gst-calculator","emi"],
    "percentage-change":["percentage","discount","savings","gst-calculator"],
    "qr-maker":["image-to-pdf","image-compressor","image-resizer","password-generator"],
    "savings":["emi","loan-interest","percentage","date-difference"],
    "text-counter":["number-to-words","password-generator","qr-maker","unit-converter"],
    "time-calculator":["date-difference","age","tip-calculator","unit-converter"],
    "tip-calculator":["discount","percentage","currency-converter","emi"],
    "unit-converter":["time-calculator","number-to-words","age","currency-converter"]
  };
  const path=location.pathname.split("/").pop()||"";
  const current=apps.find(a=>a.page===path);
  if(!current)return;
  const isDesktop=window.matchMedia("(min-width: 900px)").matches && !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  function addStyles(){
    if(document.getElementById("ij-related-apps-style"))return;
    const style=document.createElement("style");style.id="ij-related-apps-style";
    style.textContent=`
      #ij-home-return{position:fixed;left:18px;top:18px;z-index:99990;display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 18px;border-radius:999px;background:#10458e;color:#fff;text-decoration:none;font:700 15px/1.2 Arial,sans-serif;box-shadow:0 5px 18px #102a5040;border:1px solid #ffffff55}
      #ij-home-return:hover{background:#0b3472;transform:translateY(-1px)}
      @media(max-width:700px){#ij-home-return{top:10px;left:10px;min-height:40px;padding:9px 14px;font-size:14px}}
      #ij-related-apps{margin:28px 0;padding:20px 16px;border:1px solid #dbeafe;border-radius:20px;background:linear-gradient(180deg,#f8fbff,#fff);color:#172033}
      #ij-related-apps h2{margin:0 0 7px;font-size:22px;line-height:1.25;color:#0f172a}
      #ij-related-apps .ij-related-intro{margin:0 0 16px;color:#64748b;font-size:14px;line-height:1.5}
      #ij-related-apps .ij-related-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      #ij-related-apps .ij-related-card{display:grid;grid-template-columns:44px minmax(0,1fr) 18px;grid-template-rows:auto auto;align-items:center;column-gap:11px;row-gap:4px;min-width:0;min-height:94px;padding:13px 14px;border:1px solid #e0e8f7;border-radius:16px;background:linear-gradient(145deg,#fff,#f7f9ff);color:#172554;text-decoration:none;box-shadow:0 4px 14px rgba(37,75,145,.055);transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}
      #ij-related-apps .ij-related-card:hover,#ij-related-apps .ij-related-card:focus-visible{transform:translateY(-2px);border-color:#a8c4ff;box-shadow:0 9px 20px rgba(37,99,235,.12)}
      #ij-related-apps .ij-related-icon{grid-column:1;grid-row:1/3;width:44px;height:44px;border-radius:14px;background:linear-gradient(145deg,#e9f2ff,#f1edff);box-shadow:inset 0 1px 0 #fff}
      #ij-related-apps .ij-related-name{grid-column:2;grid-row:1;align-self:end;font-size:13px;line-height:1.35;font-weight:800;color:#17264b}
      #ij-related-apps .ij-related-desc{grid-column:2;grid-row:2;align-self:start;font-size:11px;line-height:1.45;color:#68758d}
      #ij-related-apps .ij-related-arrow{grid-column:3;grid-row:1/3;display:grid;place-items:center;margin:0;color:#245bd4;font-size:23px;font-weight:800}
      #ij-related-apps .ij-related-icon{display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:#eff6ff;overflow:hidden} #ij-related-apps .ij-related-icon img{display:block!important;visibility:visible!important;opacity:1!important;width:36px!important;height:36px!important;max-width:36px!important;max-height:36px!important;object-fit:contain!important}#ij-related-apps .ij-related-icon .ij-icon-fallback{display:grid;place-items:center;width:36px;height:36px;font-size:25px;line-height:1}
      #ij-related-apps .ij-related-name{font-size:14px;line-height:1.35;font-weight:750}
      #ij-related-apps .ij-related-desc{font-size:12px;line-height:1.45;color:#64748b}
      #ij-related-apps .ij-related-arrow{display:grid;place-items:center;margin-top:auto;color:#245bd4;font-size:22px;font-weight:800}\n      
      @media(max-width:560px){#ij-related-apps{padding:16px 12px}#ij-related-apps .ij-related-grid{gap:9px}#ij-related-apps .ij-related-card{grid-template-columns:36px minmax(0,1fr) 13px;column-gap:8px;min-height:88px;padding:10px 9px}#ij-related-apps .ij-related-icon{width:36px;height:36px;border-radius:11px}#ij-related-apps .ij-related-icon img{width:31px!important;height:31px!important;max-width:31px!important;max-height:31px!important}#ij-related-apps .ij-related-name{font-size:11px}#ij-related-apps .ij-related-desc{font-size:10px}#ij-related-apps .ij-related-arrow{font-size:18px}}
      @media(max-width:360px){#ij-related-apps .ij-related-grid{grid-template-columns:1fr}} 
      @media(prefers-reduced-motion:reduce){#ij-related-apps .ij-related-card{transition:none}}
    `;document.head.appendChild(style);
  }
  function addHomeReturn(){
    if(location.pathname.endsWith("/index.html")||location.pathname===base||location.pathname===base.slice(0,-1))return;
    if(document.getElementById("ij-home-return"))return;
    const a=document.createElement("a");
    a.id="ij-home-return";a.href=base+"index.html";a.textContent="← Home";
    a.setAttribute("aria-label","Back to InfoJano homepage");
    a.addEventListener("click",e=>{e.preventDefault();location.href=base+"index.html";});
    document.body.appendChild(a);
  }
  function render(){
    if(!document.body)return;
    addStyles();
    addHomeReturn();
    let section=document.getElementById("ij-related-apps");
    if(!section){
      const old=document.querySelector('[aria-labelledby="related-tools-title"]');
      section=document.createElement("section");section.id="ij-related-apps";section.setAttribute("aria-labelledby","ij-related-title");
      if(old)old.replaceWith(section);
      else {const main=document.querySelector("main")||document.body;const guide=main.querySelector(".ij-practical-guide,footer");if(guide)main.insertBefore(section,guide);else main.appendChild(section);}
    }
    const h2=document.createElement("h2");h2.id="ij-related-title";h2.textContent="Related Apps";
    const p=document.createElement("p");p.className="ij-related-intro";p.textContent="Try four other useful InfoJano tools. This page’s current app is not repeated below.";
    const grid=document.createElement("div");grid.className="ij-related-grid";
    const order=(preferred[current.id]||[]).slice();
    apps.filter(a=>a.id!==current.id&&!order.includes(a.id)).forEach(a=>order.push(a.id));
    const selected=order.map(id=>apps.find(a=>a.id===id)).filter(Boolean).filter(a=>a.id!==current.id).slice(0,4);
    selected.forEach(a=>{
      const link=document.createElement("a");link.className="ij-related-card";link.href=base+a.page;link.setAttribute("aria-label",a.name+" details and device app download");
      const icon=document.createElement("span");icon.className="ij-related-icon";icon.setAttribute("aria-hidden","true");const iconImg=document.createElement("img");iconImg.src=base+"app-icons/"+a.icon;iconImg.alt="";iconImg.width=36;iconImg.height=36;iconImg.loading="eager";iconImg.onerror=()=>{iconImg.remove();const fallback=document.createElement("span");fallback.className="ij-icon-fallback";fallback.textContent=a.emoji||"▦";icon.appendChild(fallback);};icon.appendChild(iconImg);
      const name=document.createElement("span");name.className="ij-related-name";name.textContent=a.name;
      const desc=document.createElement("span");desc.className="ij-related-desc";desc.textContent=a.desc;
      const arrow=document.createElement("span");arrow.className="ij-related-arrow";arrow.setAttribute("aria-hidden","true");arrow.textContent="›";
      link.setAttribute("aria-label","Open "+a.name);
      link.append(icon,name,desc,arrow);grid.appendChild(link);
    });
    section.replaceChildren(h2,p,grid);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",render,{once:true});else render();
})();