/* Magic Beauty — root app + routing + tweaks */
const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "goldTone": ["#C29A4D", "#9B7733", "#E6D3A4"],
  "displayFont": "Cormorant Garamond",
  "homeBlur": 5,
  "overlay": 0.42
}/*EDITMODE-END*/;

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [view, setView] = useStateA(() => {
    const h = (window.location.hash || '').replace('#','');
    return ['lashes','nails'].includes(h) ? h : 'home';
  });

  const go = (v) => {
    setView(v);
    window.location.hash = v === 'home' ? '' : v;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffectA(() => {
    const onPop = () => {
      const h = (window.location.hash || '').replace('#','');
      setView(['lashes','nails'].includes(h) ? h : 'home');
    };
    window.addEventListener('hashchange', onPop);
    return () => window.removeEventListener('hashchange', onPop);
  }, []);

  useEffectA(() => {
    document.body.style.overflow = view === 'home' ? 'hidden' : 'auto';
  }, [view]);

  // apply tweaks -> CSS variables
  useEffectA(() => {
    const r = document.documentElement.style;
    const [gold, deep, soft] = t.goldTone;
    r.setProperty('--gold', gold);
    r.setProperty('--gold-deep', deep);
    r.setProperty('--gold-soft', soft);
    r.setProperty('--serif', `'${t.displayFont}', Georgia, serif`);
    r.setProperty('--blur', t.homeBlur + 'px');
    r.setProperty('--overlay', String(t.overlay));
  }, [t]);

  let screen;
  if (view === 'lashes') screen = <Lashes go={go} key="lashes" />;
  else if (view === 'nails') screen = <Nails go={go} key="nails" />;
  else screen = <Home go={go} key="home" />;

  return (
    <React.Fragment>
      {screen}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Marca" />
        <TweakColor label="Tono dorado" value={t.goldTone}
          options={[
            ["#C29A4D", "#9B7733", "#E6D3A4"],
            ["#CDA13F", "#8F6E29", "#EAD9A6"],
            ["#C49A78", "#9A6E4C", "#E8D2BD"],
            ["#B08D57", "#7E6334", "#E3D2A8"]
          ]}
          onChange={(v)=>setTweak('goldTone', v)} />
        <TweakSelect label="Tipografía" value={t.displayFont}
          options={["Cormorant Garamond", "Playfair Display", "EB Garamond"]}
          onChange={(v)=>setTweak('displayFont', v)} />
        <TweakSection label="Portada" />
        <TweakSlider label="Desenfoque" value={t.homeBlur} min={0} max={12} step={1} unit="px"
          onChange={(v)=>setTweak('homeBlur', v)} />
        <TweakSlider label="Oscurecer" value={t.overlay} min={0.2} max={0.7} step={0.02}
          onChange={(v)=>setTweak('overlay', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
