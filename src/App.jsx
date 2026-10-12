import {useState,useEffect,useRef} from 'react';
import {content,links} from './content.js';
import {photos,detail,testimonials} from './photos.js';

const mg=(a,b)=>a.map((x,i)=>({...x,...b[i]}));
const get=l=>{const e=content.en,f=content[l];if(l==='en')return e;
  return {...e,...f,projects:mg(e.projects,f.projects),earlier:mg(e.earlier,f.earlier),volunteering:mg(e.volunteering,f.volunteering),
  lang:{fi:{...e.lang.fi,...f.lang.fi},other:mg(e.lang.other,f.lang.other)}};};
const B=s=>s.split('**').map((p,i)=>i%2?<b key={i}>{p}</b>:p);
const ph=k=>k.replace(/^photos\./,'').split('.').reduce((o,x)=>o?.[x],photos);

function useReveal(dep){useEffect(()=>{const els=document.querySelectorAll('.rv:not(.in)');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  els.forEach(e=>io.observe(e));return()=>io.disconnect();},[dep]);}

function Carousel({list=[],ratio='16/10'}){
  const [i,setI]=useState(0);const n=list.slice(0,8);
  useEffect(()=>{if(n.length<2||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    const t=setInterval(()=>setI(x=>(x+1)%n.length),4000);return()=>clearInterval(t)},[n.length]);
  return <div className="car" style={{aspectRatio:ratio}}>
    {n.length?<div className="track" style={{transform:`translateX(-${i*100}%)`}}>{n.map((s,k)=><img key={k} src={s} alt="" loading="lazy" decoding="async"/>)}</div>
    :<div className="empty"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="m21 16-5-5-8 8"/></svg></div>}
    {n.length>1&&<div className="dots">{n.map((_,k)=><i key={k} className={k===i?'on':''} onClick={()=>setI(k)}/>)}</div>}
  </div>;}

const Flag=({c})=>{const f={
fi:<><rect width="24" height="16" fill="#fff"/><path d="M0 6h24v4H0zM7 0h4v16H7z" fill="#003580"/></>,
bd:<><rect width="24" height="16" fill="#006a4e"/><circle cx="11" cy="8" r="4.5" fill="#f42a41"/></>,
uk:<><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0 0 16" stroke="#fff" strokeWidth="3"/><path d="M0 0l24 16M24 0 0 16" stroke="#c8102e" strokeWidth="1"/><path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5"/><path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="3"/></>,
in:<><rect width="24" height="5.4" fill="#ff9933"/><rect y="5.3" width="24" height="5.4" fill="#fff"/><rect y="10.6" width="24" height="5.4" fill="#138808"/><circle cx="12" cy="8" r="1.8" fill="none" stroke="#000080" strokeWidth=".6"/></>}[c];
return <svg className="flag" viewBox="0 0 24 16">{f}</svg>;};

function Cursor(){const d=useRef(),r=useRef();
  useEffect(()=>{if(matchMedia('(hover:none),(prefers-reduced-motion:reduce)').matches)return;
    let x=0,y=0,px=0,py=0,on=false,raf;const m=e=>{x=e.clientX;y=e.clientY;on=!!e.target.closest('a,button,.btn,.card[tabindex]')};
    const t=()=>{px+=(x-px)*.18;py+=(y-py)*.18;if(d.current){d.current.style.transform=`translate(${x}px,${y}px)`;
      r.current.style.transform=`translate(${px}px,${py}px) scale(${on?1:.35})`;r.current.style.opacity=on?1:.6}raf=requestAnimationFrame(t)};
    addEventListener('mousemove',m,{passive:true});raf=requestAnimationFrame(t);return()=>{removeEventListener('mousemove',m);cancelAnimationFrame(raf)}},[]);
  return <><i ref={d} className="cd"/><i ref={r} className="cr"/></>;}

function Projects({L}){return <section id="projects" className="sec s-proj"><h2 className="rv">{L.t.projects}</h2>
  <div className="grid4">{L.projects.map((p,i)=>{const href=p.href?links[p.href]:null;
    const A=({children})=>href?<a className="btn pulse" href={href} target="_blank" rel="noreferrer">{children}</a>:<a className="btn pulse" href={p.to}>{children}</a>;
    return <article key={p.id} className={`card pc c-${p.id} rv`} style={{'--d':i*70+'ms'}}>
      <Carousel list={ph(p.k)} ratio="4/3"/>
      <div className="cb"><span className="chip">{p.tag}</span><h3>{p.title}</h3>{p.role&&<p className="role2">{p.role}</p>}<p className="meta">{p.meta}</p><p>{B(p.text)}</p>
      {p.impact&&<p className="imp"><b>{L.impact}:</b> {B(p.impact)}</p>}{p.foot&&<p className="foot">{p.foot}</p>}
      <A>{p.cta} <span>→</span></A></div></article>})}</div>
  <a href="#/earlier" className="earlier rv"><span><b>{L.earlierCard.kicker}</b>: {L.earlierCard.text}</span><span>→</span></a></section>;}

function Quotes({L}){const q=testimonials.length?testimonials:[{},{},{}];
  return <section id="quotes" className="sec s-quote"><h2 className="rv">{L.t.quotes}</h2>
  <div className="qrow">{q.map((t,i)=><figure key={i} className="qc rv" style={{'--d':i*80+'ms'}}><span className="qm">“</span>{t.quote&&<blockquote>{L.code==='fi'&&t.quoteFi?t.quoteFi:t.quote}</blockquote>}{t.name&&<figcaption><b>{t.name}</b>{t.role&&<small>{L.code==='fi'&&t.roleFi?t.roleFi:t.role}</small>}</figcaption>}</figure>)}</div></section>;}

function Vol({L}){return <section id="volunteering" className="sec s-vol"><h2 className="rv">{L.t.volunteering}</h2>
  <div className="grid3">{L.volunteering.map((v,i)=><article key={v.k} className="card vc rv" style={{'--d':i*60+'ms'}}>
    <div className="vh"><Carousel list={photos.volunteering[v.k]} ratio="16/9"/><div className="vt"><h3>{v.title}</h3><p>{v.meta}</p></div></div>
    <div className="cb"><span className="chip">{v.tag}</span><p>{B(v.text)}</p>{v.impact&&<p className="imp"><b>{L.impact}:</b> {v.impact}</p>}</div></article>)}</div></section>;}

function Exp({L}){return <section id="experience" className="sec"><h2 className="rv">{L.t.experience}</h2>
  <div className="grid2">{L.experience.map((e,i)=><article key={i} className="card ec rv" style={{'--d':i*80+'ms'}}><span className="date">{e.date}</span><h3>{e.title}</h3>{(()=>{const [w,...r]=e.org.split(" · ");return <><span className="org">{w}</span>{r.length>0&&<p className="meta">{r.join(" · ")}</p>}</>})()}<ul>{e.pts.map((p,k)=><li key={k}>{B(p)}</li>)}</ul></article>)}</div></section>;}

function Edu({L}){return <section id="education" className="sec"><h2 className="rv">{L.t.education}</h2>
  <div className="tl">{L.education.map((e,i)=><div key={i} className="tli rv" style={{'--d':i*90+'ms'}}><span className="node"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m2 9 10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5"/></svg></span>
    <article className="card"><div className="eh">{e.badge&&<span className="chip ok">● {e.badge}</span>}{e.year&&<span className="date">{e.year}</span>}</div>{e.parts?e.parts.map(q=><div key={q.y} className="eh"><h3>{q.t}</h3><span className="date">{q.y}</span></div>):<h3>{e.title}</h3>}<p className="meta">{e.org}</p><p>{e.text}</p></article></div>)}</div></section>;}

function Lang({L}){const f=L.lang.fi;return <section id="languages" className="sec"><h2 className="rv">{L.t.languages}</h2>
  <div className="langs"><article className="card fin rv"><div><h3><Flag c="fi"/>{f.name}</h3><p className="lvl">{f.level} <span className="chip ok">● {f.badge}</span></p><p>{f.text}</p></div>
    <div><h4>{f.qh}</h4>{f.q.map(q=><div key={q.n} className="qual"><b>{q.n}</b> · {q.d}<br/><small>{q.s}</small></div>)}</div></article>
    <div className="others">{L.lang.other.map((o,i)=><article key={i} className="card ol rv" style={{'--d':(i+1)*80+'ms'}}><h3><Flag c={o.f}/>{o.name}</h3><p className="lvl">{o.level}{o.sub&&<><br/><small>{o.sub}</small></>}</p></article>)}</div></div></section>;}

function Skills({L}){return <section id="skills" className="sec"><h2 className="rv">{L.t.skills}</h2>
  <div className="grid4">{L.skills.map((s,i)=><article key={i} className={`card sk k${i} rv`} style={{'--d':i*80+'ms'}}><h3>{s.t}</h3><div className="pills">{s.i.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>;}

function Contact({L}){const c=L.contact;const [ok,setOk]=useState(false);
  return <section id="contact" className="sec"><h2 className="rv">{L.t.contact}</h2>
  <div className="cgrid rv"><div className="cph"><Carousel list={photos.contact} ratio="16/9"/><div className="loc"><small>{c.loc}</small><b>Jyväskylä, Finland</b><span className="chip ok">● {c.here}</span></div></div>
    <div className="cl"><div className="card"><small>{c.email}</small><p><a href="mailto:swarna9393@gmail.com">swarna9393@gmail.com</a> <button className="cp" onClick={()=>{navigator.clipboard?.writeText('swarna9393@gmail.com');setOk(true);setTimeout(()=>setOk(false),1800)}}>{ok?c.copied:c.copy}</button></p></div>
      <div className="card"><small>{c.linkedin}</small><p><a href="https://linkedin.com/in/swarna-dey/" target="_blank" rel="noreferrer">linkedin.com/in/swarna-dey ↗</a></p></div>
      <div className="card"><small>{c.phone}</small><p><a href="tel:+358414994615">+358 41 499 4615</a></p></div>
      <div className="card ref"><small>{c.ref}</small><p><b>{c.refText}</b><br/>sanna.rasinkangas@evl.fi · 0505497033</p></div></div></div></section>;}

function Hero({L}){return <header className="hero"><div className="hbg" style={photos.heroBg[0]?{backgroundImage:`url(${photos.heroBg[0]})`}:null}/><div className="hcard"><div className="ht"><h1>{L.hero.hi}</h1><p className="role">{L.hero.role}</p>{L.hero.text.split('\n').map((t,i)=><p key={i}>{t}</p>)}
  
  <div className="cta"><a className="btn solid" href="#projects">{L.hero.c1} <span>↗</span></a><a className="btn ghost" href="#contact">{L.hero.c2}</a></div></div>
  <div className="hp"><Carousel list={photos.hero} ratio="4/5"/></div></div></header>;}

function Detail({L,id}){const d=detail[id],p=L.projects.find(x=>x.id===id),t=L.det,pg=L.pages[id];
  const Empty=({n=1})=>[...Array(n)].map((_,i)=><div key={i} className="ph"><span>{t.soon}</span></div>);
  return <main className="page dp"><a className="back" href="#/">{L.back}</a><h1>{p.title}</h1><p className="meta">{pg.role} · {p.meta}</p><p className="lead">{B(pg.text)}</p><p className="imp lead"><b>{L.impact}:</b> {pg.impact}</p>
  <div className="dgrid"><section className="card pane"><span className="chip">{t.gallery}</span><div className="gal">{d.gallery.length?d.gallery.slice(0,8).map((g,i)=><figure key={i}><img src={g.src} alt={g.caption||''} loading="lazy"/>{g.caption&&<figcaption>{g.caption}</figcaption>}</figure>):<Empty n={3}/>}</div></section>
  <section className="card pane"><span className="chip">{t.videos}</span>{d.videos.length?d.videos.map((v,i)=><a key={i} className="vid" href={v.url} target="_blank" rel="noreferrer"><div className="th" style={v.thumb?{backgroundImage:`url(${v.thumb})`}:null}><i className="pl">▶</i><b>{v.title}</b></div><span className="btn solid wide">{t.watch} ↗</span></a>):<Empty n={2}/>}</section>
  <section className="card pane"><span className="chip">{t.blogs}</span>{d.blogs.length?d.blogs.map((b,i)=><div key={i} className="bl"><h3>Finding Sisu</h3><a className="btn dark" href={b.url} target="_blank" rel="noreferrer">{t.read} →</a></div>):<Empty n={2}/>}</section></div></main>;}

function Earlier({L}){return <main className="page"><a className="back" href="#/">{L.back}</a><h1>{L.earlierTitle}</h1>
  <div className="grid3">{L.earlier.map((e,i)=><article key={e.k} className="card pc rv" style={{'--d':i*80+'ms'}}><Carousel list={photos.earlier[e.k]} ratio="4/3"/><div className="cb">
  {e.period&&<span className="date">{e.period}</span>}<h3>{e.title}</h3><p className="meta">{e.role}</p><p>{B(e.text)}</p>{e.tags&&<div className="tags">{e.tags.map(x=><span key={x}>{x}</span>)}</div>}{e.loc&&<p className="foot">📍 {e.loc} · {e.status}</p>}</div></article>)}</div></main>;}

export default function App(){
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('lang')||'en'}catch{return 'en'}});
  const [route,setRoute]=useState(location.hash.slice(2));const [act,setAct]=useState('');
  const L={...get(lang),code:lang};
  useEffect(()=>{const h=()=>{const r=location.hash.startsWith('#/');setRoute(r?location.hash.slice(2):'');if(r)scrollTo(0,0)};addEventListener('hashchange',h);return()=>removeEventListener('hashchange',h)},[]);
  useEffect(()=>{document.documentElement.lang=lang;try{localStorage.setItem('lang',lang)}catch{}},[lang]);
  useReveal(route+lang);
  useEffect(()=>{if(route)return;const ids=['projects','quotes','volunteering','experience','education','languages','skills','contact'];
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setAct(e.target.id)),{rootMargin:'-40% 0px -55% 0px'});
    ids.forEach(i=>{const e=document.getElementById(i);e&&io.observe(e)});return()=>io.disconnect()},[route]);
  const go=id=>e=>{e.preventDefault();if(route){location.hash='#/';setTimeout(()=>document.getElementById(id)?.scrollIntoView(),50)}else document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
  const ids=['projects','volunteering','experience','education','languages','skills','contact'];
  return <><Cursor/>
  <nav className="side"><a className="logo" href="#/" onClick={e=>{if(!route){e.preventDefault();scrollTo({top:0,behavior:'smooth'})}}}>Swarna Dey</a>
    <ul>{ids.map(i=><li key={i}><a href={'#'+i} className={act===i?'on':''} onClick={go(i)}>{L.nav[i]}</a></li>)}</ul>
    <div className="lt" role="group" aria-label="Language"><button className={lang==='en'?'on':''} onClick={()=>setLang('en')}>EN</button><button className={lang==='fi'?'on':''} onClick={()=>setLang('fi')}>FI</button></div></nav>
  <div className="main">{route==='earlier'?<Earlier L={L}/>:route==='cafe'||route==='art'?<Detail L={L} id={route}/>:<>
    <Hero L={L}/><Projects L={L}/><Quotes L={L}/><Vol L={L}/><Exp L={L}/><Edu L={L}/><Lang L={L}/><Skills L={L}/><Contact L={L}/>
    <footer>© 2026 Swarna Dey</footer></>}</div></>;}
