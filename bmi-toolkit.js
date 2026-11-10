(function(){
'use strict';
const root=document.getElementById('ij-bmi-toolkit');
if(!root)return;
const panel=document.getElementById('ij-bmi-tool-panel');
const content=document.getElementById('ij-bmi-tool-content');
const buttons=[...root.querySelectorAll('[data-bmi-tool]')];
const descriptions={
 prime:['BMI Prime','Compare your adult BMI with the upper reference value of 25. BMI Prime is a ratio, not a diagnosis.'],
 waist:['Waist-to-Height Ratio','Enter your waist measurement and use the height already entered in the main BMI calculator. Use the same unit for both measurements.'],
 history:['BMI History','Save a dated BMI reading on this device and review your recent progress. Entries stay in this browser unless you clear its site data.'],
 report:['BMI Result Report','Print or save a PDF copy of your current BMI result and health guidance.']
};
function currentBMI(){
 const w=Number(document.getElementById('weight')?.value),h=Number(document.getElementById('height')?.value);
 if(!Number.isFinite(w)||!Number.isFinite(h)||w<=0||h<=0)return null;
 return {weight:w,height:h,bmi:w/Math.pow(h/100,2)};
}
function output(html){const box=document.createElement('div');box.className='ij-bmi-tool-output';box.innerHTML=html;content.appendChild(box)}
function field(label,id,placeholder,step='0.1'){return '<div class="ij-bmi-tool-field"><label for="'+id+'">'+label+'</label><input id="'+id+'" type="number" min="0" step="'+step+'" placeholder="'+placeholder+'"></div>'}
function setActive(tool){
 const d=descriptions[tool];if(!d)return;
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bmiTool===tool)));
 panel.hidden=false;document.getElementById('ij-bmi-tool-eyebrow').textContent='BMI TOOLKIT';
 document.getElementById('ij-bmi-tool-name').textContent=d[0];
 document.getElementById('ij-bmi-tool-description').textContent=d[1];
 content.replaceChildren();
 if(tool==='prime'){
  const r=currentBMI();
  if(!r){output('Enter your weight and height in the main BMI calculator first.');return}
  const prime=r.bmi/25;
  output('Your BMI: <strong>'+r.bmi.toFixed(1)+'</strong><br>BMI Prime: <strong>'+prime.toFixed(2)+'</strong><br><span>'+(prime<=1?'At or below the reference BMI of 25.':'Above the reference BMI of 25.')+'</span><p>Formula: BMI ÷ 25. BMI Prime does not replace clinical assessment.</p>');
 }else if(tool==='waist'){
  const r=currentBMI();
  content.insertAdjacentHTML('beforeend','<div class="ij-bmi-tool-grid">'+field('Waist measurement (cm)','ij-bmi-waist','e.g. 82')+field('Height (cm)','ij-bmi-waist-height','Uses main calculator height')+'</div><div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-waist-calc">Calculate ratio</button></div>');
  const h=document.getElementById('ij-bmi-waist-height');if(r)h.value=r.height;
  document.getElementById('ij-bmi-waist-calc').addEventListener('click',()=>{
   const w=Number(document.getElementById('ij-bmi-waist').value),ht=Number(h.value);
   if(!w||!ht||w<=0||ht<=0){output('Please enter valid waist and height measurements.');return}
   const ratio=w/ht;content.querySelector('.ij-bmi-tool-output')?.remove();
   output('Waist-to-height ratio: <strong>'+ratio.toFixed(2)+'</strong><br>Waist: '+w+' cm · Height: '+ht+' cm<p>For adults, a ratio below 0.5 is commonly used as a general guide, but it is not a diagnosis and may not apply to everyone. Discuss personal risk with a healthcare professional.</p>');
  });
 }else if(tool==='history'){
  const r=currentBMI();
  content.insertAdjacentHTML('beforeend','<p>Save your current BMI ('+(r?r.bmi.toFixed(1):'not calculated')+') to this device.</p><div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-history-save" '+(r?'':'disabled')+'>Save current BMI</button><button type="button" class="secondary" id="ij-bmi-history-clear">Clear history</button></div><div id="ij-bmi-history-list" class="ij-bmi-history-list"></div>');
  const key='infojano_bmi_history_v1';
  function render(){let list=[];try{list=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){list=[]}
   const target=document.getElementById('ij-bmi-history-list');if(!target)return;
   target.replaceChildren();
   if(!list.length){target.textContent='No saved readings yet.';return}
   list.slice().reverse().forEach(item=>{const row=document.createElement('div');row.className='ij-bmi-history-row';const left=document.createElement('span');left.textContent=item.date+' · '+item.weight+' kg';const right=document.createElement('strong');right.textContent='BMI '+item.bmi;row.append(left,right);target.appendChild(row)});
  }
  document.getElementById('ij-bmi-history-save').addEventListener('click',()=>{if(!r)return;let list=[];try{list=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){};list.push({date:new Date().toISOString().slice(0,10),weight:r.weight,height:r.height,bmi:r.bmi.toFixed(1)});localStorage.setItem(key,JSON.stringify(list.slice(-100)));render()});
  document.getElementById('ij-bmi-history-clear').addEventListener('click',()=>{localStorage.removeItem(key);render()});render();
 }else if(tool==='report'){
  const r=currentBMI();
  output(r?'Current BMI: <strong>'+r.bmi.toFixed(1)+'</strong><br>Weight: '+r.weight+' kg<br>Height: '+r.height+' cm<br><br>Use the button below to print or choose “Save as PDF” in your browser.':'Enter your weight and height in the main BMI calculator before creating a report.');
  content.insertAdjacentHTML('beforeend','<div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-print" '+(r?'':'disabled')+'>Print / Save as PDF</button></div>');
  document.getElementById('ij-bmi-print').addEventListener('click',()=>window.print());
 }
}
buttons.forEach(b=>b.addEventListener('click',()=>{setActive(b.dataset.bmiTool);panel.scrollIntoView({behavior:'smooth',block:'nearest'})}));
document.getElementById('ij-bmi-tool-close').addEventListener('click',()=>{panel.hidden=true;buttons.forEach(b=>b.setAttribute('aria-pressed','false'));const url=new URL(location.href);url.searchParams.delete('tool');history.replaceState({},'',url)});
const requested=new URLSearchParams(location.search).get('tool');
if(requested&&descriptions[requested]){setActive(requested);setTimeout(()=>root.scrollIntoView({behavior:'smooth',block:'start'}),250)}
})();
