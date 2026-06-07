/* Magic Beauty — Landings: Pestañas & Uñas */
const { useState: useStateL } = React;

const waHref = (msg) =>
  `https://wa.me/${window.MB.contact.whatsapp}?text=${encodeURIComponent(msg)}`;

function TopBar({ go }){
  return (
    <header className="topbar">
      <button className="back-btn" onClick={()=>go('home')}>
        <span className="ar">←</span> Inicio
      </button>
      <img className="topbar-logo" src="assets/logo-dark.png" alt="Magic Beauty" onClick={()=>go('home')} style={{cursor:'pointer'}} />
      <a className="wa-mini" href={waHref('Hola Magic Beauty, quiero agendar una cita ✨')} target="_blank" rel="noopener">
        <WAIcon /> <span>Agendar</span>
      </a>
    </header>
  );
}

function Price({ label, value }){
  return (
    <div className="price-cell">
      <span className="pl">{label}</span>
      <span className="pv">${value}</span>
    </div>
  );
}

/* Two-price row (extensiones: montura / retoque) */
function ExtRow({ item }){
  return (
    <div className="svc-row">
      <div>
        <div className="svc-name">{item.name}</div>
        <div className="svc-desc">{item.desc}</div>
      </div>
      <div className="price-set">
        <Price label="Montura" value={item.montura} />
        <Price label="Retoque" value={item.retoque} />
      </div>
    </div>
  );
}

/* Single-price row */
function SimpleRow({ item }){
  return (
    <div className="svc-row">
      <div>
        <div className="svc-name">{item.name}</div>
        <div className="svc-desc">{item.desc}</div>
      </div>
      <div className="price-set">
        <Price label="Precio" value={item.price} />
      </div>
    </div>
  );
}

/* Variable price set row (uñas) */
function MultiRow({ item }){
  return (
    <div className="svc-row">
      <div>
        <div className="svc-name">{item.name}</div>
        <div className="svc-desc">{item.desc}</div>
      </div>
      <div className="price-set">
        {item.prices.map(([l,v],i)=>(<Price key={i} label={l} value={v} />))}
      </div>
    </div>
  );
}

function CTA({ kind }){
  const bg = kind === 'lashes' ? 'assets/tex-lashes.jpg' : 'assets/tex-nails.jpg';
  const msg = kind === 'lashes'
    ? 'Hola Magic Beauty, quiero agendar un servicio de pestañas ✨'
    : 'Hola Magic Beauty, quiero agendar un servicio de uñas 💅';
  const c = window.MB.contact;
  return (
    <section className="cta">
      <div className="cta-bg" style={{backgroundImage:`url('${bg}')`}}></div>
      <div className="cta-inner">
        <div className="kicker">Tu cita, a un mensaje</div>
        <h2>Reserva tu experiencia</h2>
        <p>Diseños a medida, atención sin prisa y un acabado impecable. Escríbenos y agenda tu espacio.</p>
        <a className="wa-btn" href={waHref(msg)} target="_blank" rel="noopener">
          <WAIcon /> Agendar por WhatsApp
        </a>
        <div className="cta-meta">
          <a href={waHref(msg)} target="_blank" rel="noopener">{c.whatsappDisplay}</a>
          <span className="sep">·</span>
          <a href={`https://instagram.com/${c.instagram}`} target="_blank" rel="noopener">@{c.instagram}</a>
          <span className="sep">·</span>
          <span>{c.city}</span>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="l-foot">
      <img src="assets/logo-dark.png" alt="Magic Beauty" />
      <p>Magic Beauty · Estética premium · Jamundí</p>
    </footer>
  );
}

function PriceNote(){
  return (
    <div className="price-note"><span>Precios en pesos colombianos (COP). Sujetos a valoración según el diseño y la duración del servicio.</span></div>
  );
}

/* ---------------- PESTAÑAS ---------------- */
function Lashes({ go }){
  const d = window.MB.lashes;
  return (
    <div className="landing view">
      <TopBar go={go} />
      <section className="l-hero">
        <div>
          <div className="kicker l-hero-kicker">Magic Beauty — Pestañas</div>
          <h1 className="serif">Pesta&ntilde;as</h1>
          <div className="l-hero-sub">Precisión que se nota en cada mirada.</div>
          <p className="l-hero-intro">{d.intro}</p>
          <div className="unisex-badge"><span className="dot"></span>Para ella y para él</div>
        </div>
        <div className="l-hero-media">
          <div className="l-hero-frame"></div>
          <img className="l-hero-img" src="assets/hero-lashes.jpg" alt="Pestañas Magic Beauty" />
        </div>
      </section>

      <PriceNote />

      <div className="services">
        {d.groups.map((g)=>(
          <div className="svc-group" key={g.id}>
            <div className="svc-head">
              <h2 className="serif">{g.title}</h2>
              {g.note && <div className="gnote">{g.note}</div>}
            </div>
            {g.items.map((it,i)=>(
              g.twoPrice ? <ExtRow item={it} key={i} /> : <SimpleRow item={it} key={i} />
            ))}
          </div>
        ))}
      </div>

      <CTA kind="lashes" />
      <Footer />
    </div>
  );
}

/* ---------------- UÑAS ---------------- */
function Nails({ go }){
  const d = window.MB.nails;
  const [tab, setTab] = useStateL('dama');
  const list = tab === 'dama' ? d.dama : d.caballero;
  return (
    <div className="landing view">
      <TopBar go={go} />
      <section className="l-hero">
        <div>
          <div className="kicker l-hero-kicker">Magic Beauty — Uñas</div>
          <h1 className="serif">U&ntilde;as</h1>
          <div className="l-hero-sub">Lujo cotidiano en manos y pies.</div>
          <p className="l-hero-intro">{d.intro}</p>
        </div>
        <div className="l-hero-media">
          <div className="l-hero-frame"></div>
          <img className="l-hero-img" src="assets/hero-nails.jpg" alt="Uñas Magic Beauty" />
        </div>
      </section>

      <div className="switch-wrap">
        <div className={"switch " + tab}>
          <div className="switch-thumb"></div>
          <button className={tab==='dama'?'active':''} onClick={()=>setTab('dama')}>
            <span className="sg">Dama</span>
          </button>
          <button className={tab==='caballero'?'active':''} onClick={()=>setTab('caballero')}>
            <span className="sg">Caballero</span>
          </button>
        </div>
      </div>

      <PriceNote />

      <div className="services">
        <div className="svc-group nail-list" key={tab}>
          <div className="svc-head">
            <h2 className="serif">{tab==='dama' ? 'Uñas Dama' : 'Uñas Caballero'}</h2>
            <div className="gnote">{tab==='dama' ? 'Manicure, pedicure y diseño' : 'Manicure & pedicure prolijo'}</div>
          </div>
          {list.map((it,i)=>(<MultiRow item={it} key={i} />))}
        </div>
      </div>

      <CTA kind="nails" />
      <Footer />
    </div>
  );
}

Object.assign(window, { Lashes, Nails, TopBar, CTA });
