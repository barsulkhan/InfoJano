/* InfoJano Number to Words locale layer v1 */
(function(){
'use strict';
const params=new URLSearchParams(location.search),lang=params.get('lang');
if(!['bn','hi'].includes(lang)){
 const qSystem=params.get('system'),qCurrency=params.get('currency'),qCase=params.get('case'),qFocus=params.get('focus');
 const byId=id=>document.getElementById(id);
 if(qSystem&&byId('nw-system'))byId('nw-system').value=qSystem==='international'?'international':'indian';
 if(qCurrency&&byId('nw-currency'))byId('nw-currency').value=qCurrency==='USD'?'USD':'INR';
 if(qCase&&byId('nw-case'))byId('nw-case').value=qCase==='upper'?'upper':'sentence';
 if(qFocus){const mode=byId('nw-mode'),map={words:'plain',currency:'currency',cheque:'cheque',ordinal:'ordinal',roman:'roman',bulk:'plain'};if(mode&&map[qFocus])mode.value=map[qFocus];const field=qFocus==='bulk'?'nw-bulk':qFocus==='reverse'?'nw-reverse':'nw-num';if(byId(field))byId(field).focus();}
 return;
}
const bn=lang==='bn'?["শূন্য","এক","দুই","তিন","চার","পাঁচ","ছয়","সাত","আট","নয়","দশ","এগারো","বারো","তেরো","চৌদ্দ","পনেরো","ষোলো","সতেরো","আঠারো","উনিশ","বিশ","একুশ","বাইশ","তেইশ","চব্বিশ","পঁচিশ","ছাব্বিশ","সাতাশ","আঠাশ","ঊনত্রিশ","ত্রিশ","একত্রিশ","বত্রিশ","তেত্রিশ","চৌত্রিশ","পঁয়ত্রিশ","ছত্রিশ","সাঁইত্রিশ","আটত্রিশ","ঊনচল্লিশ","চল্লিশ","একচল্লিশ","বিয়াল্লিশ","তেতাল্লিশ","চুয়াল্লিশ","পঁয়তাল্লিশ","ছেচল্লিশ","সাতচল্লিশ","আটচল্লিশ","ঊনপঞ্চাশ","পঞ্চাশ","একান্ন","বাহান্ন","তিপ্পান্ন","চুয়ান্ন","পঞ্চান্ন","ছাপ্পান্ন","সাতান্ন","আটান্ন","ঊনষাট","ষাট","একষট্টি","বাষট্টি","তেষট্টি","চৌষট্টি","পঁয়ষট্টি","ছেষট্টি","সাতষট্টি","আটষট্টি","ঊনসত্তর","সত্তর","একাত্তর","বাহাত্তর","তিয়াত্তর","চুয়াত্তর","পঁচাত্তর","ছিয়াত্তর","সাতাত্তর","আটাত্তর","ঊনআশি","আশি","একাশি","বিরাশি","তিরাশি","চুরাশি","পঁচাশি","ছিয়াশি","সাতাশি","আটাশি","ঊননব্বই","নব্বই","একানব্বই","বিরানব্বই","তিরানব্বই","চুরানব্বই","পঁচানব্বই","ছিয়ানব্বই","সাতানব্বই","আটানব্বই","নিরানব্বই"]:["शून्य","एक","दो","तीन","चार","पाँच","छह","सात","आठ","नौ","दस","ग्यारह","बारह","तेरह","चौदह","पंद्रह","सोलह","सत्रह","अठारह","उन्नीस","बीस","इक्कीस","बाईस","तेईस","चौबीस","पच्चीस","छब्बीस","सत्ताईस","अट्ठाईस","उनतीस","तीस","इकतीस","बत्तीस","तैंतीस","चौंतीस","पैंतीस","छत्तीस","सैंतीस","अड़तीस","उनतालीस","चालीस","इकतालीस","बयालीस","तैंतालीस","चवालीस","पैंतालीस","छियालीस","सैंतालीस","अड़तालीस","उनचास","पचास","इक्यावन","बावन","तिरपन","चौवन","पचपन","छप्पन","सत्तावन","अट्ठावन","उनसठ","साठ","इकसठ","बासठ","तिरसठ","चौंसठ","पैंसठ","छियासठ","सड़सठ","अड़सठ","उनहत्तर","सत्तर","इकहत्तर","बहत्तर","तिहत्तर","चौहत्तर","पचहत्तर","छिहत्तर","सतहत्तर","अठहत्तर","उनासी","अस्सी","इक्यासी","बयासी","तिरासी","चौरासी","पचासी","छियासी","सत्तासी","अट्ठासी","नवासी","नब्बे","इक्यानवे","बानवे","तिरानवे","चौरानवे","पचानवे","छियानवे","सत्तानवे","अट्ठानवे","निन्यानवे"];
const bnMode=lang==='bn',w=bnMode?bn:hi;
const d=bnMode?{
tag:'দৈনন্দিন কাজের সহজ অনলাইন টুল',promise:'সহজ টুল। পরিষ্কার ফলাফল।',back:'← হোমে ফিরুন',crumb:'সংখ্যাকে কথায় লেখার কনভার্টার',kicker:'সংখ্যা রূপান্তর টুল',hero:'সংখ্যা, টাকার অঙ্ক এবং চেকের পরিমাণ সহজে কথায় রূপান্তর করুন।',num:'সংখ্যা লিখুন',sys:'সংখ্যা পদ্ধতি',mode:'ফলাফলের ধরন',cur:'মুদ্রা',reverse:'কথা থেকে সংখ্যায় (English)',bulk:'এক লাইনে একটি সংখ্যা লিখুন',convert:'রূপান্তর করুন',copy:'কপি',speak:'শুনুন',txt:'TXT ডাউনলোড',csv:'CSV ডাউনলোড',print:'প্রিন্ট',bulkgo:'একসঙ্গে রূপান্তর',reversego:'কথা → সংখ্যা',result:'রূপান্তরিত ফলাফল',home:'InfoJano হোম'
}:{
tag:'रोज़मर्रा के कामों के लिए आसान ऑनलाइन टूल',promise:'आसान टूल। साफ़ नतीजे।',back:'← होम पर जाएँ',crumb:'नंबर को शब्दों में बदलने वाला कन्वर्टर',kicker:'नंबर कन्वर्ज़न टूल',hero:'नंबर, रकम और चेक की राशि को आसानी से शब्दों में बदलें।',num:'नंबर दर्ज करें',sys:'नंबर सिस्टम',mode:'आउटपुट का प्रकार',cur:'मुद्रा',reverse:'शब्दों से नंबर (English)',bulk:'हर लाइन में एक नंबर लिखें',convert:'कन्वर्ट करें',copy:'कॉपी',speak:'सुनें',txt:'TXT डाउनलोड',csv:'CSV डाउनलोड',print:'प्रिंट',bulkgo:'सूची कन्वर्ट करें',reversego:'शब्द → नंबर',result:'कन्वर्ट किया गया परिणाम',home:'InfoJano होम'
};
const $=id=>document.getElementById(id),set=(id,v)=>{const e=$(id);if(e)e.textContent=v;};
document.documentElement.lang=lang;
const brand=document.querySelector('.ij-brandtag');if(brand)brand.textContent=d.tag;
const promise=document.querySelector('.ij-brand-promise');if(promise)promise.textContent=d.promise;
const back=document.querySelector('.ij-home-back');if(back)back.textContent=d.back;
const crumb=document.querySelector('.ij-hero-breadcrumb');if(crumb){const a=crumb.querySelector('a');if(a)a.textContent='⌂ '+d.home;crumb.lastChild.textContent=' › '+d.crumb;}
const hero=document.querySelector('.ij-reference-hero');if(hero){const k=hero.querySelector('.ij-reference-kicker'),h=hero.querySelector('h1'),p=hero.querySelector('.ij-reference-copy p');if(k)k.textContent=d.kicker;if(h)h.innerHTML=bnMode?'সংখ্যাকে <span>কথায়</span> লিখুন':'नंबर को <span>शब्दों</span> में लिखें';if(p)p.textContent=d.hero;}
const labelMap={'nw-num':d.num,'nw-system':d.sys,'nw-mode':d.mode,'nw-currency':d.cur,'nw-reverse':d.reverse,'nw-bulk':d.bulk};
Object.entries(labelMap).forEach(([id,v])=>{const e=$(id),l=e&&document.querySelector('label[for="'+id+'"]');if(l)l.textContent=v;if(e&&e.tagName==='TEXTAREA')e.placeholder=v;});
['nw-go','nw-copy','nw-speak','nw-txt','nw-csv','nw-print','nw-bulkgo','nw-reversego'].forEach((id,i)=>set(id,[d.convert,d.copy,d.speak,d.txt,d.csv,d.print,d.bulkgo,d.reversego][i]));
const resultLabel=document.querySelector('#nwapp .ij-nw-result small');if(resultLabel)resultLabel.textContent=d.result;
const opts={'nw-system':bnMode?['ভারতীয় (হাজার, লক্ষ, কোটি)','আন্তর্জাতিক (মিলিয়ন, বিলিয়ন)']:['भारतीय (हज़ार, लाख, करोड़)','अंतरराष्ट्रीय (मिलियन, बिलियन)'],'nw-mode':bnMode?['কথায় সংখ্যা','মুদ্রার পরিমাণ','চেকের ভাষা (Only)','ক্রমবাচক সংখ্যা','রোমান সংখ্যা']:['नंबर शब्दों में','मुद्रा की राशि','चेक फ़ॉर्मेट (Only)','क्रमसूचक संख्या','रोमन अंक'],'nw-currency':bnMode?['ভারতীয় রুপি / পয়সা','মার্কিন ডলার / সেন্ট']:['भारतीय रुपये / पैसे','अमेरिकी डॉलर / सेंट']};
Object.entries(opts).forEach(([id,arr])=>{const e=$(id);if(e)e.querySelectorAll('option').forEach((o,i)=>{if(arr[i])o.textContent=arr[i];});});
const focus=params.get('focus'),mode=$('nw-mode');
const system=params.get('system'),currency=params.get('currency'),letterCase=params.get('case');
if(system&&$('nw-system'))$('nw-system').value=system==='international'?'international':'indian';
if(currency&&$('nw-currency'))$('nw-currency').value=currency==='USD'?'USD':'INR';
if(letterCase&&$('nw-case'))$('nw-case').value=letterCase==='upper'?'upper':'sentence';
if(focus&&mode){const map={words:'plain',currency:'currency',cheque:'cheque',ordinal:'ordinal',roman:'roman',bulk:'plain'};if(map[focus])mode.value=map[focus];if(focus==='bulk')$('nw-bulk').focus();else if(focus==='reverse')$('nw-reverse').focus();else $('nw-num').focus();}
function integerWords(raw){
let s=String(raw).replace(/,/g,'').trim(),negative=s[0]==='-';if(negative)s=s.slice(1);
if(!/^\d+$/.test(s))throw Error(bnMode?'পূর্ণসংখ্যা লিখুন':'कृपया पूर्ण संख्या दर्ज करें');
s=s.replace(/^0+(?=\d)/,'');if(s==='0')return w[0];
const group=(n)=>{n=+n;if(n<100)return w[n];const h=Math.floor(n/100),r=n%100;return (bnMode?w[h]+'শ':w[h]+' सौ')+(r?' '+w[r]:'');};
let groups=[],first=true;while(s.length){const size=first?3:2;groups.unshift(s.slice(-size));s=s.slice(0,-size);first=false;}
const names=bnMode?['','হাজার','লক্ষ','কোটি','আরব','খরব']:['','हज़ार','लाख','करोड़','अरब','खरब'];
const out=[];groups.forEach((g,i)=>{const n=+g,ix=groups.length-i-1;if(n)out.push((group(n)+(ix>0?' '+(names[ix]||''):'')).trim());});
return (negative?(bnMode?'ঋণাত্মক ':'माइनस '):'')+out.join(' ');
}
const old=window.numWords;
window.numWords=function(raw,o={}){let s=String(raw).trim().replace(/,/g,'');if(!/^-?\d+(\.\d{1,2})?$/.test(s))throw Error(bnMode?'সর্বোচ্চ দুই ঘর দশমিকসহ সংখ্যা লিখুন':'अधिकतम दो दशमलव अंकों वाली संख्या दर्ज करें');let neg=s[0]==='-';if(neg)s=s.slice(1);let [whole,dec='']=s.split('.');let out=integerWords(whole);
if(o.mode==='currency'||o.mode==='cheque'){const major=bnMode?(o.currency==='USD'?'ডলার':'টাকা'):(o.currency==='USD'?'डॉलर':'रुपये'),minor=bnMode?(o.currency==='USD'?'সেন্ট':'পয়সা'):(o.currency==='USD'?'सेंट':'पैसे'),v=+(dec.padEnd(2,'0')||0);out+=' '+major;if(v)out+=(bnMode?' এবং ':' और ')+integerWords(String(v))+' '+minor;if(o.mode==='cheque')out+=bnMode?' মাত্র':' मात्र';}
else if(dec)out+=(bnMode?' দশমিক ':' दशमलव ')+dec.split('').map(x=>w[+x]).join(' ');
return (neg?(bnMode?'ঋণাত্মক ':'माइनस '):'')+out;};
const oldHandler=$('nw-go').onclick;
$('nw-go').onclick=function(){try{const m=$('nw-mode').value,raw=$('nw-num').value;let v;if(m==='roman')v=window.roman(raw);else if(m==='ordinal'){v=integerWords(raw)+' '+(bnMode?'তম':'वाँ');}else v=window.numWords(raw,{system:$('nw-system').value,mode:m,currency:$('nw-currency').value});const casing=$('nw-case').value;$('nw-output').textContent=casing==='upper'?v.toLocaleUpperCase():casing==='lower'?v.toLocaleLowerCase():v;window.__ijLast=v;}catch(e){$('nw-output').textContent=e.message;}};
$('nw-num').dispatchEvent(new Event('input'));
})();

(function(){const s=document.getElementById("ij-language-select");if(!s)return;const p=new URLSearchParams(location.search),c=p.get("lang")||"en";s.value=["en","bn","hi"].includes(c)?c:"en";s.addEventListener("change",function(){if(this.value==="en")p.delete("lang");else p.set("lang",this.value);const q=p.toString();location.href=location.pathname+(q?"?"+q:"")+location.hash;});})();
