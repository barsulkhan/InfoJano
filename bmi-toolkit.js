(function(){
'use strict';
const root=document.getElementById('ij-bmi-toolkit');
if(!root)return;
const panel=document.getElementById('ij-bmi-tool-panel');
const content=document.getElementById('ij-bmi-tool-content');
const buttons=[...root.querySelectorAll('[data-bmi-tool]')];
const descriptions={
 prime:['BMI Prime','An adult BMI comparison ratio using 25 as the reference value.'],
 waist:['Waist-to-Height Ratio','Compare waist measurement with height using the same unit. This is an adult screening guide, not a diagnosis.'],
 history:['BMI History','Save dated BMI readings on this device and review your recent progress.'],
 healthy:['Healthy Weight Range','Estimate the adult reference weight range for your entered height using BMI 18.5–24.9.'],
 report:['BMI Result Report','Print or save a copy of your BMI result and health guidance as PDF.'],
 bodyfat:['Body Fat Calculator','Estimate adult body fat percentage using the circumference-based US Navy method.']
};
function values(){
 const w=Number(document.getElementById('weight')?.value),h=Number(document.getElementById('height')?.value);
 const age=Number(document.getElementById('bmi-age')?.value);
 if(!Number.isFinite(w)||!Number.isFinite(h)||w<=0||h<=0)return null;
 return {weight:w,height:h,age:age||null,bmi:w/Math.pow(h/100,2)};
}
function output(html){const box=document.createElement('div');box.className='ij-bmi-tool-output';box.innerHTML=html;content.appendChild(box)}
function field(label,id,placeholder,step='0.1'){return '<div class="ij-bmi-tool-field"><label for="'+id+'">'+label+'</label><input id="'+id+'" type="number" min="0" step="'+step+'" placeholder="'+placeholder+'"></div>'}
function adultCheck(r){const age=Number(document.getElementById('bmi-age')?.value);return (r&&r.age!==null&&r.age<20)||(age>=2&&age<20)}
function setActive(tool){
 const d=descriptions[tool];if(!d)return;
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bmiTool===tool)));
 panel.hidden=false;
 document.getElementById('ij-bmi-tool-eyebrow').textContent='BMI TOOLKIT';
 document.getElementById('ij-bmi-tool-name').textContent=d[0];
 document.getElementById('ij-bmi-tool-description').textContent=d[1];
 content.replaceChildren();
 const r=values();
 if(tool==='prime'){
  if(!r){output('Enter weight and height in the main BMI calculator first.');return}
  if(adultCheck(r)){output('BMI Prime is intended here for adults aged 20 and over. For children and teens, BMI must be interpreted using age- and sex-specific percentiles.');return}
  const prime=r.bmi/25;
  output('Your BMI: <strong>'+r.bmi.toFixed(1)+'</strong><br>BMI Prime: <strong>'+prime.toFixed(2)+'</strong><p>Formula: BMI ÷ 25. A value of 1.00 corresponds to BMI 25. This ratio is not a diagnosis.</p>'+(r.age===null?'<p>Adult reference only. Confirm that this tool is appropriate for your age.</p>':''));
 }else if(tool==='waist'){
  content.insertAdjacentHTML('beforeend','<div class="ij-bmi-tool-grid">'+field('Waist measurement (cm)','ij-bmi-waist','e.g. 82')+field('Height (cm)','ij-bmi-waist-height','e.g. 170')+'</div><div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-waist-calc">Calculate ratio</button></div>');
  const h=document.getElementById('ij-bmi-waist-height');
  if(r)h.value=r.height;
  document.getElementById('ij-bmi-waist-calc').addEventListener('click',()=>{
   const w=Number(document.getElementById('ij-bmi-waist').value),ht=Number(h.value);
   content.querySelector('.ij-bmi-tool-output')?.remove();
   if(!w||!ht||w<=0||ht<=0){output('Please enter valid waist and height measurements in centimetres.');return}
   if(adultCheck(r)){output('This adult waist-to-height reference is not intended for children and teens.');return}
   const ratio=w/ht;
   output('Waist-to-height ratio: <strong>'+ratio.toFixed(2)+'</strong><br>Waist: '+w+' cm · Height: '+ht+' cm<p>For many adults, keeping waist measurement below half of height (ratio below 0.5) is used as a general guide. This is not a diagnosis and may not apply to everyone.</p>');
  });
 }else if(tool==='healthy'){
  if(!r){output('Enter your height in the main BMI calculator first.');return}
  if(adultCheck(r)){output('This healthy weight range uses adult BMI references and is not intended for children or teens.');return}
  const metres=r.height/100,low=18.5*metres*metres,high=24.9*metres*metres;
  output('For height <strong>'+r.height+' cm</strong>, the estimated adult reference weight range is <strong>'+low.toFixed(1)+'–'+high.toFixed(1)+' kg</strong>.<p>Based on BMI 18.5–24.9. This is a screening estimate, not an individual medical target. '+(r.age===null?'Adult reference only; confirm age suitability.':'')+'</p>');
 }else if(tool==='history'){
  const key='infojano_bmi_history_v1';
  content.insertAdjacentHTML('beforeend','<p>'+(r?'Current BMI: <strong>'+r.bmi.toFixed(1)+'</strong>.':'Enter weight and height in the main calculator to save a reading.')+'</p><div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-history-save" '+(r?'':'disabled')+'>Save current BMI</button><button type="button" class="secondary" id="ij-bmi-history-clear">Clear history</button></div><div id="ij-bmi-history-list" class="ij-bmi-history-list"></div>');
  function read(){try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v:[]}catch(e){return null}}
  function render(){
   const target=document.getElementById('ij-bmi-history-list');if(!target)return;
   target.replaceChildren();const list=read();
   if(list===null){target.textContent='Local storage is unavailable in this browser session.';return}
   if(!list.length){target.textContent='No saved readings yet.';return}
   list.slice().reverse().forEach(item=>{const row=document.createElement('div');row.className='ij-bmi-history-row';const left=document.createElement('span');left.textContent=item.date+' · '+item.weight+' kg';const right=document.createElement('strong');right.textContent='BMI '+item.bmi;row.append(left,right);target.appendChild(row)});
  }
  document.getElementById('ij-bmi-history-save').addEventListener('click',()=>{
   if(!r)return;const list=read();if(list===null){render();return}
   try{list.push({date:new Date().toISOString().slice(0,10),weight:r.weight,height:r.height,bmi:r.bmi.toFixed(1)});localStorage.setItem(key,JSON.stringify(list.slice(-100)));render()}catch(e){render()}
  });
  document.getElementById('ij-bmi-history-clear').addEventListener('click',()=>{try{localStorage.removeItem(key)}catch(e){}render()});render();
 }else if(tool==='bodyfat'){
  content.insertAdjacentHTML('beforeend',
   '<div class="ij-bmi-tool-grid">'+
   '<div class="ij-bmi-tool-field"><label for="ij-bf-equation">Equation</label><select id="ij-bf-equation"><option value="male">Male</option><option value="female">Female</option></select></div>'+
   field('Age (years)','ij-bf-age','18 or older','1')+
   field('Height (cm)','ij-bf-height','e.g. 175')+
   field('Waist / abdomen (cm)','ij-bf-waist','Measure at navel for male equation')+
   field('Neck (cm)','ij-bf-neck','Measure below larynx')+
   '<div class="ij-bmi-tool-field" id="ij-bf-hip-wrap" hidden><label for="ij-bf-hip">Hip circumference (cm)</label><input id="ij-bf-hip" type="number" min="1" step="0.1" placeholder="Measure widest point"></div>'+
   '</div><div class="ij-bmi-tool-actions"><button type="button" id="ij-bf-calc">Estimate body fat</button></div>'+
   '<p class="ij-bmi-tool-note">Use a flexible tape without compressing the skin. Measurements must be in centimetres. This adult estimate is not a diagnosis or a substitute for a clinical body-composition assessment.</p>');
  const equation=document.getElementById('ij-bf-equation');
  const hipWrap=document.getElementById('ij-bf-hip-wrap');
  const heightInput=document.getElementById('ij-bf-height');
  const waistInput=document.getElementById('ij-bf-waist');
  const neckInput=document.getElementById('ij-bf-neck');
  const hipInput=document.getElementById('ij-bf-hip');
  if(r)heightInput.value=r.height;
  equation.addEventListener('change',()=>{hipWrap.hidden=equation.value!=='female';});
  document.getElementById('ij-bf-calc').addEventListener('click',()=>{
   content.querySelector('.ij-bmi-tool-output')?.remove();
   const age=Number(document.getElementById('ij-bf-age').value);
   const ht=Number(heightInput.value),waist=Number(waistInput.value),neck=Number(neckInput.value),hip=Number(hipInput.value);
   if(!Number.isInteger(age)||age<18){output('This estimate is designed for adults aged 18 and over. It is not suitable for children or teens.');return}
   if(!ht||!waist||!neck||ht<=0||waist<=0||neck<=0||(equation.value==='female'&&(!hip||hip<=0))){output('Please enter valid height, waist and neck measurements. The female equation also requires hip circumference.');return}
   const inch=cm=>cm/2.54, H=inch(ht), W=inch(waist), N=inch(neck), Hip=inch(hip);
   let bf;
   if(equation.value==='male'){
    if(W<=N){output('Waist / abdomen measurement must be greater than neck measurement. Check your tape measurements.');return}
    bf=86.010*Math.log10(W-N)-70.041*Math.log10(H)+36.76;
   }else{
    if(W+Hip<=N){output('Waist plus hip measurement must be greater than neck measurement. Check your tape measurements.');return}
    bf=163.205*Math.log10(W+Hip-N)-97.684*Math.log10(H)-78.387;
   }
   if(!Number.isFinite(bf)||bf<2||bf>75){output('These measurements produce an out-of-range estimate. Please recheck the measurements; this method may not suit everyone.');return}
   const weight=r?.weight;
   output('Estimated body fat: <strong>'+bf.toFixed(1)+'%</strong>'+
    (weight?'<br>Estimated fat mass: <strong>'+(weight*bf/100).toFixed(1)+' kg</strong><br>Estimated lean mass: <strong>'+(weight*(1-bf/100)).toFixed(1)+' kg</strong>':'')+
    '<p>Calculated with the US Navy circumference equation. This is a rough estimate and can differ from measurements made with professional equipment. It is intended for adults aged 18 and over; do not use during pregnancy or for children and teens.</p>');
  });
 }else if(tool==='report'){
  output(r?'Current BMI: <strong>'+r.bmi.toFixed(1)+'</strong><br>Weight: '+r.weight+' kg<br>Height: '+r.height+' cm<br><br>Choose Print, then select “Save as PDF” in your browser.':'Enter your weight and height in the main BMI calculator before creating a report.');
  content.insertAdjacentHTML('beforeend','<div class="ij-bmi-tool-actions"><button type="button" id="ij-bmi-print" '+(r?'':'disabled')+'>Print / Save as PDF</button></div>');
  document.getElementById('ij-bmi-print').addEventListener('click',()=>window.print());
 }
}
buttons.forEach(b=>b.addEventListener('click',()=>{setActive(b.dataset.bmiTool);panel.scrollIntoView({behavior:'smooth',block:'nearest'})}));
document.getElementById('ij-bmi-tool-close').addEventListener('click',()=>{
 panel.hidden=true;buttons.forEach(b=>b.setAttribute('aria-pressed','false'));
 const url=new URL(location.href);url.searchParams.delete('tool');history.replaceState({},'',url);
});
const params=new URLSearchParams(location.search),requested=params.get('tool');
if(requested&&descriptions[requested]){setActive(requested);setTimeout(()=>root.scrollIntoView({behavior:'smooth',block:'start'}),250)}
else if(params.get('focus')==='calculator'){setTimeout(()=>document.getElementById('ij-bmi-form')?.scrollIntoView({behavior:'smooth',block:'center'}),250)}
})();
