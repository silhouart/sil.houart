/* DATI DELLE OPERE: per aggiungere un quadro, copia un blocco e cambia i valori.
   stato: 'disponibile' | 'non-in-vendita' | 'venduta'   tipo: 'originale' | 'studio'
   w, h: larghezza e altezza in cm (attivano il confronto dimensioni nella scheda)
   prezzo: numero in euro oppure null (= "Su richiesta").  img: file nella cartella img/ */
const OPERE=[
 {id:'occhi-01',titolo:'Titolo da definire',serie:'Occhi',tipo:'originale',stato:'disponibile',anno:'2026',tecnica:'Olio su tela',misure:'misure da inserire',w:null,h:null,prezzo:null,img:'img/occhi.jpg',storia:''},
 {id:'volti-01',titolo:'Titolo da definire',serie:'Volti tagliati',tipo:'originale',stato:'disponibile',anno:'2026',tecnica:'Olio su tela',misure:'misure da inserire',w:null,h:null,prezzo:null,img:'img/volti-tagliati-1.jpg',storia:''},
 {id:'volti-02',titolo:'Titolo da definire',serie:'Volti tagliati',tipo:'originale',stato:'non-in-vendita',anno:'2026',tecnica:'Olio su tela',misure:'misure da inserire',w:null,h:null,prezzo:null,img:'img/volti-tagliati-2.jpg',storia:''},
 {id:'corpi-01',titolo:'Titolo da definire',serie:'Corpi-paesaggio',tipo:'originale',stato:'non-in-vendita',anno:'2026',tecnica:'Olio su tela',misure:'misure da inserire',w:null,h:null,prezzo:null,img:'img/corpi-paesaggio.jpg',storia:''}
];
const ST={disponibile:['Disponibile','sv'],'non-in-vendita':['Non in vendita','nv'],venduta:['In collezione privata','vd']};
const card=o=>`<a class="opera" href="opera.html?id=${o.id}"><div class="cornice"><span class="badge ${ST[o.stato][1]}">${ST[o.stato][0]}</span><img src="${o.img}" alt="${o.titolo}" loading="lazy"></div><div class="cap">${o.titolo}<span>${o.serie} · ${o.tecnica} · ${o.anno}</span></div></a>`;
const flt=f=>OPERE.filter(o=>f==='tutte'||(f==='studio'?o.tipo==='studio':o.stato===f));
function mount(el,f,max){let l=flt(f);if(max)l=l.slice(0,max);el.innerHTML=l.length?l.map(card).join(''):'<p class="vuoto">Nuove opere in arrivo. <a href="#news">Iscriviti</a> per vederle per prime.</p>'}
document.querySelectorAll('[data-opere]').forEach(e=>mount(e,e.dataset.filtro||'tutte',+e.dataset.max||0));
const tabs=document.querySelectorAll('[data-tab]'),lista=document.getElementById('lista');
if(tabs.length&&lista){const go=f=>{tabs.forEach(t=>t.classList.toggle('on',t.dataset.tab===f));mount(lista,f,0);history.replaceState(null,'','#'+f)};tabs.forEach(t=>t.onclick=()=>go(t.dataset.tab));go(location.hash.slice(1)||'disponibile')}
const q=new URLSearchParams(location.search),o=OPERE.find(x=>x.id===q.get('id')),$=i=>document.getElementById(i);
if($('o-titolo')&&o){document.title=o.titolo+' · SA sil.houart';$('o-img').src=o.img;$('o-img').alt=o.titolo;$('o-titolo').textContent=o.titolo;$('o-serie').textContent=o.serie;
$('o-meta').textContent=[o.tecnica,o.misure,o.anno].join(' · ');$('o-stato').textContent=ST[o.stato][0];$('o-stato').className='badge '+ST[o.stato][1];
$('o-prezzo').textContent=o.stato==='disponibile'?(o.prezzo?'€ '+o.prezzo.toLocaleString('it-IT'):'Prezzo su richiesta'):'';$('o-storia').textContent=o.storia;
if(o.w&&o.h){const S=1.1,H=220,P=170*S;$('scala-box').hidden=false;$('o-scala').innerHTML=`<svg viewBox="0 0 ${o.w*S+160} ${H}" style="width:100%;max-height:280px" role="img" aria-label="Confronto dimensioni"><rect x="0" y="${H-o.h*S}" width="${o.w*S}" height="${o.h*S}" fill="#86B0A2" stroke="#B8956A"/><g fill="#0F1B19" transform="translate(${o.w*S+50},${H-P})"><circle cx="30" cy="14" r="14"/><rect x="8" y="32" width="44" height="${P-32}" rx="14"/></g></svg>`}
$('o-cta').href='contatti.html?opera='+o.id;if(o.stato!=='disponibile')$('o-cta').textContent='Chiedi di opere simili';
mount($('o-rel'),'tutte',0);$('o-rel').innerHTML=OPERE.filter(x=>x.serie===o.serie&&x.id!==o.id).map(card).join('')||'<p class="vuoto">Altre opere in arrivo.</p>'}
const fc=$('contatto');if(fc){const t=q.get('tipo'),a=OPERE.find(x=>x.id===q.get('opera'));if(a){fc.tipo.value='opera';fc.messaggio.value='Vorrei informazioni su: '+a.titolo+' ('+a.serie+').'}else if(t)fc.tipo.value=t}
