/* Magic Beauty — Home: 50/50 split hero */
const { useState } = React;

function WAIcon({ style }){
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.16c-.25.69-1.45 1.32-2 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.53.28-.3.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.69.53.25.61.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.39-.45.53-.15.15-.31.31-.13.61.18.3.79 1.3 1.69 2.11 1.16 1.03 2.14 1.35 2.44 1.5.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.76.83 2.06.98.3.15.5.22.58.35.07.13.07.74-.18 1.43z"/>
    </svg>
  );
}

function Split({ side, title, sub, bg, onOpen }){
  const open = () => onOpen();
  return (
    <button
      className={"split " + side}
      onClick={open}
      onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } }}
      aria-label={"Ver servicios de " + title}
    >
      <div className={"split-bg " + bg}></div>
      <div className="split-overlay"></div>
      <div className="split-content">
        <div className="split-title serif">{title}</div>
        <div className="split-sub">{sub}</div>
        <div className="split-cta"><span className="ln"></span>Ver servicios</div>
      </div>
    </button>
  );
}

function Home({ go }){
  return (
    <div className="home view">
      <Split
        side="left"
        title="Pestañas"
        sub="Mirada a medida"
        bg="lashes"
        onOpen={()=>go('lashes')}
      />
      <Split
        side="right"
        title="Uñas"
        sub="Manos & pies de lujo"
        bg="nails"
        onOpen={()=>go('nails')}
      />
      <div className="home-seam"></div>
      <img className="home-logo" src="assets/logo-light.png" alt="Magic Beauty" />
      <div className="home-tag">Estética premium · Jamundí · Desde 2016</div>
    </div>
  );
}

Object.assign(window, { Home, WAIcon });
