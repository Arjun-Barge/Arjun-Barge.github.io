import{r as s,j as n}from"./react-vendor-Bsy9czSr.js";const y="modulepreload",x=function(i){return"/"+i},u={},b=function(p,l,m){let f=Promise.resolve();if(l&&l.length>0){let t=function(e){return Promise.all(e.map(c=>Promise.resolve(c).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");f=t(l.map(e=>{if(e=x(e),e in u)return;u[e]=!0;const c=e.endsWith(".css"),v=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${v}`))return;const o=document.createElement("link");if(o.rel=c?"stylesheet":y,c||(o.as="script"),o.crossOrigin="",o.href=e,a&&o.setAttribute("nonce",a),document.head.appendChild(o),c)return new Promise((g,h)=>{o.addEventListener("load",g),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})}))}function d(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return f.then(r=>{for(const a of r||[])a.status==="rejected"&&d(a.reason);return p().catch(d)})},w=({onClose:i,onOpenGuide:p,selectedHue:l="noir"})=>{const[m,f]=s.useState(null),[d,r]=s.useState(null),a=s.useRef(null);return s.useEffect(()=>{let t=!1;return b(()=>Promise.resolve().then(()=>C),void 0).then(e=>{!t&&typeof e.default=="string"&&f(e.default)}).catch(e=>{t||r(e?.message||"Failed to load platform")}),()=>{t=!0}},[]),s.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),s.useEffect(()=>{const t=e=>{e.key==="Escape"&&i()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[i]),s.useEffect(()=>{const t=e=>{e.data?.type==="CLOSE_PLATFORM"&&e.origin===window.location.origin&&i(),e.data?.type==="SCROLL_TO_FINANCIAL_GUIDE"&&p&&p()};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[i,p]),s.useEffect(()=>{const t=a.current?.contentWindow;t&&t.postMessage({type:"SET_HUE",hue:l},"*")},[l,m]),n.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"radial-gradient(circle at 12% -8%, rgba(201, 169, 98, 0.2), transparent 28%), radial-gradient(circle at 88% 0%, rgba(142, 200, 216, 0.12), transparent 30%), #0a0a0a",display:"flex",flexDirection:"column"},role:"dialog","aria-modal":"true","aria-label":"Financial Intelligence Platform",children:[n.jsx("style",{children:`@keyframes fpPulse {
            0% { box-shadow: 0 0 0 0 rgba(201, 169, 98, 0.48); }
            70% { box-shadow: 0 0 0 12px rgba(201, 169, 98, 0); }
            100% { box-shadow: 0 0 0 0 rgba(201, 169, 98, 0); }
          }
          @keyframes fpSweep {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
          .fp-loading-shell {
            width: min(420px, calc(100% - 2.5rem));
            padding: 1.1rem 1rem;
            border: 1px solid #2f2f2f;
            border-radius: 12px;
            background: linear-gradient(180deg, rgba(201, 169, 98, 0.06), transparent 45%), #101010;
            box-shadow: 0 22px 44px rgba(0, 0, 0, 0.35);
          }
          .fp-loading-line {
            position: relative;
            overflow: hidden;
            height: 2px;
            border-radius: 999px;
            background: linear-gradient(90deg, rgba(223, 200, 138, 0.14), rgba(223, 200, 138, 0.34), rgba(223, 200, 138, 0.14));
            margin-bottom: 0.7rem;
          }
          .fp-loading-line::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 30%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 244, 213, 0.95), transparent);
            animation: fpSweep 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          }
          .fp-loading-meta {
            display: flex;
            align-items: center;
            gap: 0.55rem;
            color: #a39a88;
            font-family: var(--font-mono);
            font-size: 0.68rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .fp-loading-dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #c9a962;
            animation: fpPulse 1.8s ease-out infinite;
          }`}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem clamp(0.9rem, 2vw, 1.25rem)",borderBottom:"1px solid #2d2d2d",backdropFilter:"blur(10px)",background:"linear-gradient(180deg, rgba(201, 169, 98, 0.08), transparent 55%), rgba(9, 9, 9, 0.92)",flexShrink:0,gap:"0.75rem"},children:[n.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.16em",textTransform:"uppercase",color:"#c9a962",flex:"1",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"Financial Intelligence Platform"}),n.jsx("button",{onClick:i,style:{background:"transparent",border:"1px solid #333333",color:"#b0a287",cursor:"pointer",fontSize:"1.125rem",padding:"0.375rem 0.625rem",lineHeight:1,borderRadius:"8px"},"aria-label":"Close",children:"✕"})]}),n.jsxs("div",{style:{flex:1,minHeight:0,position:"relative"},children:[d&&n.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"1rem",color:"#a3a3a3",fontFamily:"var(--font-sans)",fontSize:"0.875rem"},children:[n.jsx("span",{children:d}),n.jsx("button",{type:"button",onClick:i,style:{padding:"0.5rem 1rem",background:"#262626",border:"1px solid #404040",color:"#e5e5e5",cursor:"pointer",borderRadius:"4px"},children:"Close"})]}),!d&&!m&&n.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{className:"fp-loading-shell","aria-live":"polite",children:[n.jsx("div",{className:"fp-loading-line"}),n.jsxs("div",{className:"fp-loading-meta",children:[n.jsx("span",{className:"fp-loading-dot"}),n.jsx("span",{children:"Loading financial platform"})]})]})}),!d&&m&&n.jsx("iframe",{ref:a,srcDoc:m,title:"Financial Intelligence Platform",style:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none",display:"block"},sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox",onLoad:()=>{a.current?.contentWindow?.postMessage({type:"SET_HUE",hue:l},"*")}})]})]})},R=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),E=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ARJUN — Financial Intelligence Platform</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://data.sec.gov">
<link rel="dns-prefetch" href="https://efts.sec.gov">
<link rel="dns-prefetch" href="https://api.allorigins.win">
<link rel="dns-prefetch" href="https://stream.binance.com">
<link rel="dns-prefetch" href="https://api.coingecko.com">
<link rel="dns-prefetch" href="https://fred.stlouisfed.org">
<link rel="dns-prefetch" href="https://query1.finance.yahoo.com">
<style>
:root {
  --bg:#090909;
  --s1:#101010;
  --s2:#151515;
  --surface:#1b1b1b;
  --border:#232323;
  --border2:#313131;
  --text:#f5f2eb;
  --muted:#4b4b4b;
  --muted2:#a39a88;
  --accent:#c9a962;
  --accent2:#dfc88a;
  --green:#6fd3aa;
  --red:#e07c73;
  --yellow:#e5c77d;
  --cyan:#8ec8d8;
  --orange:#d8a06a;
  --display:'Cormorant Garamond',serif;
  --mono:'JetBrains Mono',monospace;
  --body:'Inter',sans-serif;
  --shadow-soft:0 20px 45px rgba(0,0,0,.32);
  --shadow-panel:0 16px 32px rgba(0,0,0,.25);
}

:root[data-hue='midnight'] {
  --bg:#090d16;
  --s1:#10192b;
  --s2:#152136;
  --surface:#1a2943;
  --border:#243250;
  --border2:#30446c;
  --text:#f2f7ff;
  --muted:#2e3f63;
  --muted2:#9ab1db;
  --accent:#7ea8ff;
  --accent2:#a9c3ff;
  --green:#6ec8b2;
  --red:#e1827f;
  --yellow:#e6cd8d;
  --cyan:#8fc5eb;
  --orange:#d9a372;
}

:root[data-hue='emerald'] {
  --bg:#09140f;
  --s1:#102119;
  --s2:#163026;
  --surface:#1d3a30;
  --border:#244438;
  --border2:#345d4f;
  --text:#f2fff8;
  --muted:#29453a;
  --muted2:#8fbda9;
  --accent:#74c6a5;
  --accent2:#9ee2c5;
  --green:#79dcb7;
  --red:#dd8c80;
  --yellow:#dfcd8f;
  --cyan:#87cfc4;
  --orange:#d3a06d;
}

:root[data-hue='daylight'] {
  --bg:#f6f2e8;
  --s1:#fffdfa;
  --s2:#efe7d8;
  --surface:#f4ebdc;
  --border:#d8cab0;
  --border2:#ccb892;
  --text:#201a12;
  --muted:#bcae94;
  --muted2:#6f5f4a;
  --accent:#a67b36;
  --accent2:#bf9553;
  --green:#328f6b;
  --red:#b85d4f;
  --yellow:#ad893d;
  --cyan:#3d839b;
  --orange:#b37a38;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:radial-gradient(circle at 20% -10%, rgba(201,169,98,.13), transparent 32%),radial-gradient(circle at 82% 0%, rgba(142,200,216,.08), transparent 34%),var(--bg);color:var(--text);font-family:var(--body);min-height:100vh;overflow-x:hidden;}
body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(223,200,138,.03)1px,transparent 1px),linear-gradient(90deg,rgba(223,200,138,.03)1px,transparent 1px);background-size:42px 42px;pointer-events:none;z-index:0;}

/* NAV */
.nav{position:-webkit-sticky;position:sticky;top:0;z-index:200;background:rgba(9,9,9,.9);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom:1px solid var(--border2);display:flex;align-items:center;padding:0 clamp(16px,3vw,40px);height:60px;gap:clamp(8px,1.6vw,18px);box-shadow:0 10px 24px rgba(0,0,0,.3);}
.nav-brand{font-family:var(--display);font-size:17px;font-weight:700;letter-spacing:2px;color:var(--text);text-transform:uppercase;margin-right:clamp(22px,3vw,44px);flex-shrink:0;}
.nav-brand span{color:var(--accent2);}
.nav-tabs{display:flex;gap:0;flex:1;overflow-x:auto;min-width:0;}
.nav-tab{padding:0 18px;height:60px;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:1.1px;text-transform:uppercase;color:var(--muted2);cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;white-space:nowrap;flex-shrink:0;}
.nav-tab:hover{color:var(--text);}
.nav-tab.active{color:var(--accent2);border-bottom-color:var(--accent);background:linear-gradient(180deg,transparent,rgba(201,169,98,.06));}
.nav-tab .dot{width:5px;height:5px;border-radius:50%;background:var(--muted);flex-shrink:0;}
.nav-tab.active .dot{background:var(--green);animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
.nav-right{margin-left:auto;font-family:var(--mono);font-size:12px;color:var(--muted2);letter-spacing:1px;flex-shrink:0;padding-left:24px;}
.nav-back-link{margin-left:clamp(22px,3vw,34px)!important;padding-left:18px!important;flex-shrink:0;}

/* LAYOUT */
.main{position:relative;z-index:1;}
.tool-pane{display:none;padding:clamp(24px,4vw,52px) clamp(14px,3vw,44px) 100px;max-width:1220px;margin:0 auto;}
.tool-pane.active{display:block;animation:fadeUp .3s ease;}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

/* TYPOGRAPHY */
.pane-title{font-family:var(--display);font-size:clamp(36px,5vw,62px);font-weight:700;line-height:.93;margin-bottom:12px;letter-spacing:-.7px;}
.pane-title em{color:var(--accent2);font-style:normal;}
.pane-sub{font-size:14px;color:#beb4a2;font-weight:400;line-height:1.82;max-width:700px;margin-bottom:32px;}
.source-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px;}
.stag{font-family:var(--mono);font-size:11px;letter-spacing:1.1px;border:1px solid var(--border2);padding:4px 10px;color:var(--muted2);text-transform:uppercase;border-radius:3px;}
.stag.live{border-color:rgba(0,229,160,.3);color:var(--green);}
.stag.ws{border-color:rgba(34,221,255,.3);color:var(--cyan);}
.stag.dalio{border-color:rgba(255,204,68,.3);color:var(--yellow);}

/* SECTION HEADER */
.sh{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:var(--accent);display:flex;align-items:center;gap:10px;margin-bottom:18px;}
.sh::after{content:'';flex:1;height:1px;background:var(--border);}

/* INPUT */
.input-card{background:linear-gradient(180deg,rgba(255,255,255,.015),transparent),var(--s1);border:1px solid var(--border2);margin-bottom:36px;border-radius:10px;box-shadow:var(--shadow-panel);overflow:hidden;}
.input-card:focus-within{border-color:var(--accent);}
.ig-row{display:grid;border-bottom:1px solid var(--border);align-items:stretch;}
.ig-row:last-child{border-bottom:none;}
.ig-cell{padding:16px 20px;border-right:1px solid var(--border);min-height:86px;display:flex;flex-direction:column;justify-content:center;}
.ig-cell:last-child{border-right:none;}
.ig-label{font-family:var(--mono);font-size:11px;letter-spacing:1.1px;color:var(--muted2);text-transform:uppercase;margin-bottom:7px;}
.ig-cell input,.ig-cell select{background:transparent;border:none;outline:none;font-family:var(--mono);font-size:14px;color:var(--text);width:100%;}
.ig-cell input::placeholder{color:var(--muted);}
.ig-cell select option{background:#0e0e18;}
.run-btn{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#14110b;border:none;padding:17px 40px;font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;cursor:pointer;width:100%;transition:transform .18s ease,filter .18s ease;}
.run-btn:hover{transform:translateY(-1px);filter:brightness(1.04);}
.run-btn:disabled{background:var(--muted);cursor:not-allowed;}

/* METRICS */
.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:1px;background:var(--border);margin-bottom:36px;border-radius:10px;overflow:hidden;}
.metric{background:var(--s1);padding:18px 20px;min-height:124px;display:flex;flex-direction:column;justify-content:space-between;}
.m-lbl{font-family:var(--mono);font-size:11px;letter-spacing:1.1px;color:var(--muted2);text-transform:uppercase;margin-bottom:5px;}
.m-val{font-family:var(--display);font-size:28px;font-weight:700;line-height:1;}
.m-sub{font-size:13px;color:var(--muted2);margin-top:3px;}
.cA{color:var(--accent2);} .cG{color:var(--green);} .cR{color:var(--red);} .cY{color:var(--yellow);} .cC{color:var(--cyan);}

/* PANELS */
.two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:var(--border);margin-bottom:36px;border-radius:10px;overflow:hidden;align-items:stretch;}
.three-col{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--border);margin-bottom:36px;border-radius:10px;overflow:hidden;align-items:stretch;}
.panel{background:var(--s1);padding:24px;height:100%;}
.panel-row{display:flex;justify-content:space-between;border-bottom:1px solid var(--border);padding:7px 0;font-size:13px;color:var(--muted2);}
.panel-row:last-child{border-bottom:none;}
.panel-row span{color:var(--text);font-weight:500;font-family:var(--mono);font-size:12px;}
.panel-title{font-family:var(--mono);font-size:11px;color:var(--accent);letter-spacing:1.3px;margin-bottom:14px;text-transform:uppercase;}

/* VERDICT */
.verdict-wrap{border:1px solid var(--border2);padding:30px;margin-bottom:36px;position:relative;border-radius:10px;background:linear-gradient(180deg,rgba(201,169,98,.04),transparent 48%),var(--s1);box-shadow:var(--shadow-soft);}
.verdict-wrap::before{content:attr(data-label);position:absolute;top:-10px;left:20px;background:var(--bg);padding:0 12px;font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--accent);}
.verdict-inner{display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:start;}
.verdict-badge{font-family:var(--display);font-size:40px;font-weight:800;padding:14px 22px;border:2px solid;letter-spacing:2px;text-align:center;min-width:150px;white-space:nowrap;}
.v-buy{border-color:var(--green);color:var(--green);}
.v-hold{border-color:var(--yellow);color:var(--yellow);}
.v-avoid{border-color:var(--red);color:var(--red);}
.v-active{border-color:var(--cyan);color:var(--cyan);}
.verdict-list{font-size:14px;line-height:1.85;color:var(--muted2);list-style:none;padding-top:4px;}
.verdict-list li{padding-left:16px;position:relative;margin-bottom:4px;}
.verdict-list li::before{content:'›';position:absolute;left:0;color:var(--accent);}

/* TABLE */
.data-table{width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px;margin-bottom:36px;table-layout:fixed;}
.data-table th{font-size:9px;letter-spacing:1.8px;text-transform:uppercase;color:var(--accent);padding:9px 13px;background:var(--s2);border:1px solid var(--border);text-align:left;font-weight:700;}
.data-table td{padding:9px 13px;border:1px solid var(--border);color:var(--muted2);}
.data-table td.hi{color:var(--text);} .data-table td.up{color:var(--green);} .data-table td.dn{color:var(--red);}
.data-table tr:hover td{background:var(--s2);}

/* TICKER STRIP */
.ticker-strip{background:linear-gradient(180deg,rgba(223,200,138,.05),transparent),var(--s2);border:1px solid var(--border2);padding:14px 18px;margin-bottom:28px;display:flex;gap:20px;align-items:center;flex-wrap:wrap;font-family:var(--mono);font-size:13px;border-radius:10px;}
.ti{display:flex;gap:7px;align-items:center;}
.ti-sym{color:var(--accent2);font-weight:700;letter-spacing:1px;}
.ti-px{color:var(--text);}
.ti-chg{} .ti-up{color:var(--green);} .ti-dn{color:var(--red);}
.strip-src{font-size:10px;color:var(--muted);margin-left:auto;display:flex;align-items:center;gap:6px;flex-shrink:0;}
.dot-live{width:5px;height:5px;border-radius:50%;background:var(--green);}

/* CRYPTO */
.crypto-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(196px,1fr));gap:1px;background:var(--border);margin-bottom:36px;border-radius:10px;overflow:hidden;}
.cc{background:var(--s1);padding:18px;min-height:150px;display:flex;flex-direction:column;justify-content:space-between;}
.cc-sym{font-family:var(--display);font-size:20px;font-weight:700;color:var(--text);margin-bottom:4px;}
.cc-px{font-family:var(--mono);font-size:24px;font-weight:600;margin-bottom:4px;}
.cc-chg{font-family:var(--mono);font-size:12px;margin-bottom:8px;}
.cc-meta{font-family:var(--mono);font-size:10px;color:var(--muted2);display:flex;flex-direction:column;gap:2px;}

/* PREDICT IT */
.predict-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:36px;align-items:stretch;}
.pc{background:var(--s1);border:1px solid var(--border2);padding:18px;border-radius:10px;min-height:186px;}
.pc-title{font-family:var(--display);font-size:12px;font-weight:600;margin-bottom:12px;line-height:1.4;color:var(--text);}
.pc-row{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
.pc-name{font-size:11px;color:var(--muted2);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.pc-track{width:70px;height:5px;background:var(--border2);border-radius:3px;flex-shrink:0;}
.pc-fill{height:5px;border-radius:3px;}
.pc-price{font-family:var(--mono);font-size:12px;color:var(--accent2);width:40px;text-align:right;flex-shrink:0;}

/* DALIO */
.dalio-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:var(--border);margin-bottom:36px;border-radius:10px;overflow:hidden;}
.dalio-cell{background:var(--s1);padding:20px;position:relative;min-height:182px;}
.dalio-label{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:1px;margin-bottom:6px;}
.dalio-desc{font-size:12px;color:var(--muted2);line-height:1.6;margin-bottom:10px;}
.dalio-assets{font-family:var(--mono);font-size:10px;color:var(--muted2);letter-spacing:1px;}
.dalio-active{border:1px solid var(--yellow) !important;background:rgba(255,204,68,.04) !important;}
.dalio-active .dalio-label{color:var(--yellow);}
.dalio-active::before{content:'◀ CURRENT';position:absolute;top:8px;right:8px;font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--yellow);}
.regime-bar{height:4px;border-radius:2px;margin-bottom:14px;}

/* SEC FEED */
.filing-row{display:grid;grid-template-columns:minmax(56px,72px) minmax(0,1fr) minmax(96px,110px) minmax(74px,88px);gap:12px;align-items:center;padding:11px 16px;border-bottom:1px solid var(--border);font-size:12px;transition:background .1s;}
.filing-row:hover{background:var(--s2);}
.f-type{font-family:var(--mono);font-weight:700;letter-spacing:1px;}
.f-entity{color:var(--muted2);}
.f-date{font-family:var(--mono);color:var(--muted);}
.f-link{color:var(--accent2);text-decoration:none;font-family:var(--mono);font-size:11px;}
.f-link:hover{text-decoration:underline;}

/* FOOTBALL FIELD */
.ff-row{margin-bottom:12px;}
.ff-lbl{display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--muted2);margin-bottom:4px;}
.ff-lbl strong{color:var(--text);}
.ff-track{height:22px;background:var(--s2);border:1px solid var(--border);position:relative;overflow:hidden;}
.ff-fill{position:absolute;top:3px;height:16px;display:flex;align-items:center;padding:0 7px;transition:all .5s;}
.ff-fill span{font-family:var(--mono);font-size:10px;white-space:nowrap;}

/* VISUALIZATIONS */
.viz-wrap{background:var(--s1);border:1px solid var(--border2);padding:20px 24px;margin-bottom:24px;border-radius:10px;box-shadow:var(--shadow-panel);}
.viz-title{font-family:var(--mono);font-size:11px;letter-spacing:1.5px;color:var(--accent);text-transform:uppercase;margin-bottom:14px;}
.viz-fcf{display:flex;align-items:flex-end;gap:8px;height:80px;margin-top:8px;}
.viz-fcf-bar{flex:1;min-width:0;background:var(--border2);border-radius:2px 2px 0 0;position:relative;transition:height .4s ease;}
.viz-fcf-bar span{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-family:var(--mono);font-size:9px;color:var(--muted2);white-space:nowrap;margin-bottom:4px;}
.viz-filings-day{display:flex;align-items:flex-end;gap:4px;height:52px;margin-top:10px;}
.viz-filings-day-bar{flex:1;min-width:20px;background:var(--accent);border-radius:2px 2px 0 0;opacity:.9;}
.viz-filings-day-bar:hover{opacity:1;}
.viz-filings-day-lbl{font-family:var(--mono);font-size:9px;color:var(--muted2);text-align:center;margin-top:6px;}
.viz-macro-row{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.viz-macro-row:last-child{margin-bottom:0;}
.viz-macro-lbl{font-family:var(--mono);font-size:10px;color:var(--muted2);width:90px;flex-shrink:0;}
.viz-macro-track{flex:1;height:10px;background:var(--border2);border-radius:2px;overflow:hidden;}
.viz-macro-fill{height:100%;border-radius:2px;transition:width .3s ease;}
.viz-crypto-bar-wrap{margin-top:8px;}
.viz-crypto-bar-track{height:6px;background:var(--border2);border-radius:3px;overflow:hidden;}
.viz-crypto-bar-fill{height:100%;border-radius:3px;max-width:100%;transition:width .3s ease;}

/* SENSITIVITY */
.sens{width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px;margin-bottom:36px;}
.sens th{background:var(--s2);border:1px solid var(--border);padding:8px 11px;font-size:10px;letter-spacing:1.7px;color:var(--accent);font-weight:700;text-align:center;}
.sens td{border:1px solid var(--border);padding:8px 11px;text-align:center;color:var(--muted2);}
.sens td.c0{background:rgba(124,108,255,.08);color:var(--accent2);}
.sens td.hi{color:var(--green);} .sens td.lo{color:var(--red);}

/* STATUS */
.loading-wrap{display:none;padding:14px 0 8px;}
.loading-wrap.show{display:block;}
.loading-line{height:2px;background:linear-gradient(90deg,rgba(223,200,138,.08),rgba(223,200,138,.22),rgba(223,200,138,.08));margin-bottom:10px;overflow:hidden;border-radius:999px;position:relative;}
.loading-line::after{content:'';position:absolute;left:-20%;top:0;height:100%;width:20%;background:linear-gradient(90deg,transparent,var(--accent2),transparent);animation:scan 1.4s cubic-bezier(.16,1,.3,1) infinite;}
@keyframes scan{to{left:120%;}}
.loading-msg{font-family:var(--mono);font-size:11px;color:var(--muted2);letter-spacing:1.2px;text-transform:uppercase;display:flex;align-items:center;gap:8px;}
.loading-msg::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 rgba(201,169,98,.45);animation:ping 1.8s ease-out infinite;}
@keyframes ping{0%{box-shadow:0 0 0 0 rgba(201,169,98,.45);}80%{box-shadow:0 0 0 10px rgba(201,169,98,0);}100%{box-shadow:0 0 0 0 rgba(201,169,98,0);}}
.err-box{background:rgba(255,68,102,.05);border:1px solid rgba(255,68,102,.2);padding:14px 18px;color:var(--red);font-family:var(--mono);font-size:12px;display:none;margin-bottom:18px;line-height:1.6;}
.err-box.show{display:block;}
.notice-box{background:rgba(255,204,68,.04);border:1px solid rgba(255,204,68,.2);padding:12px 18px;color:var(--yellow);font-family:var(--mono);font-size:11px;display:none;margin-bottom:18px;line-height:1.6;}
.notice-box.show{display:block;}
.disc{font-size:11px;color:#7f7666;line-height:1.65;border-top:1px solid var(--border);padding-top:18px;margin-top:18px;}
.help-link{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;letter-spacing:1.1px;color:var(--muted2);text-decoration:none;margin-bottom:14px;cursor:pointer;transition:color .2s;}
.help-link:hover{color:var(--accent);}
.viz-desc{font-size:12px;color:var(--muted2);line-height:1.6;margin-top:4px;margin-bottom:12px;}
/* Custom hover tooltips */
[data-tooltip]{cursor:help;position:relative;}
#fp-tooltip{position:fixed;z-index:9999;max-width:340px;padding:11px 14px;background:var(--s2);border:1px solid var(--accent);border-radius:6px;font-size:13px;line-height:1.6;color:var(--text);white-space:normal;pointer-events:none;opacity:0;transition:opacity .15s ease;box-shadow:0 6px 24px rgba(0,0,0,.45);}
#fp-tooltip.show{opacity:1;}
#fp-tooltip .fp-tt-title{font-family:var(--mono);font-size:11px;letter-spacing:1px;color:var(--accent);margin-bottom:4px;text-transform:uppercase;}
#fp-tooltip .fp-tt-desc{color:var(--text);}
#fp-tooltip .fp-tt-example{font-size:12px;color:var(--muted2);margin-top:6px;border-top:1px solid var(--border);padding-top:6px;}
#fp-tooltip .fp-tt-input{font-size:12px;color:var(--accent);margin-top:4px;}

/* === MOBILE (≤760px) === */
@media(max-width:760px){
  /* Nav — brand + back link on row 1, scrollable tabs on row 2 */
  .nav{padding:0 12px;height:auto;flex-wrap:wrap;}
  .nav-brand{height:48px;display:flex;align-items:center;font-size:14px;letter-spacing:2px;margin-right:8px;order:0;flex-shrink:0;}
  .nav-tabs{order:2;width:100%;flex-basis:100%;border-top:1px solid var(--border);overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:0;}
  .nav-tabs::-webkit-scrollbar{display:none;}
  .nav-tab{height:44px;padding:0 12px;font-size:11px;letter-spacing:1px;}
  .nav-right{display:none;}
  .nav-back-link{order:1!important;margin-left:auto!important;height:48px!important;border-left:none!important;padding:0 0 0 12px!important;font-size:11px!important;letter-spacing:1px!important;}

  /* Content */
  .tool-pane{padding:18px 14px 80px;}
  .pane-sub{font-size:13px;margin-bottom:20px;}
  .source-tags{margin-bottom:20px;}
  .stag{font-size:10px;padding:2px 8px;}

  /* Grid collapses */
  .two-col,.three-col{grid-template-columns:1fr;}
  .dalio-grid{grid-template-columns:1fr;}
  .predict-grid{grid-template-columns:1fr;}
  .crypto-grid{grid-template-columns:repeat(2,minmax(0,1fr));}

  /* Input grids */
  .ig-row{grid-template-columns:1fr !important;}
  .ig-cell{border-right:none;padding:12px 14px;}
  /* Prevent iOS Safari auto-zoom (requires font-size≥16px) */
  .ig-cell input,.ig-cell select{font-size:16px;}

  /* Metrics */
  .metric{padding:14px;}
  .m-val{font-size:20px;}

  /* Verdict */
  .verdict-inner{grid-template-columns:1fr;}
  .verdict-badge{font-size:26px;padding:10px 14px;min-width:unset;width:fit-content;}

  /* Filing rows — show type + company + EDGAR link, hide date */
  .filing-row{grid-template-columns:52px minmax(0,1fr) auto;gap:6px;padding:9px 12px;}
  .f-date{display:none;}
  .f-link{font-size:10px;letter-spacing:.5px;}
  .sc-header{grid-template-columns:52px minmax(0,1fr) auto!important;gap:6px!important;padding:9px 12px!important;}
  .sc-header>span:nth-child(3){display:none;}

  /* Ticker strip */
  .ticker-strip{flex-wrap:wrap;gap:10px 18px;padding:12px 14px;}
  .strip-src{margin-left:0;}

  /* Panel rows — wrap value text on small screens */
  .panel-row{flex-wrap:wrap;gap:2px 8px;}
  .panel-row span{text-align:left;}

  /* Crypto */
  .cc-px{font-size:22px;}
  .cc{padding:16px;}

  /* Run button */
  .run-btn{padding:15px;font-size:12px;letter-spacing:1.6px;}

  /* Touch — instant tap response, no ghost tap highlight */
  button,.nav-tab{-webkit-tap-highlight-color:transparent;touch-action:manipulation;}
  a{-webkit-tap-highlight-color:transparent;}

  /* Overflow safety */
  input,select{max-width:100%;}
  .viz-wrap{padding:14px 14px;}
  .viz-fcf{height:64px;}
  .viz-filings-day{height:44px;}
  .viz-macro-lbl{width:72px;font-size:9px;}
}

/* === SMALL PHONES (≤420px) === */
@media(max-width:420px){
  .pane-title{font-size:clamp(22px,7vw,34px);}
  .verdict-badge{font-size:22px;padding:8px 12px;}
  .m-val{font-size:18px;}
  .metric{padding:12px;}
  .tool-pane{padding:18px 14px 80px;}
  .nav-brand{font-size:13px;}
  .crypto-grid{grid-template-columns:1fr;}
}

@media(min-width:761px) and (max-width:1060px){
  .three-col{grid-template-columns:repeat(2,minmax(0,1fr));}
  .dalio-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
}
</style>
</head>
<body>
<div id="fp-tooltip" role="tooltip" aria-hidden="true"></div>

<nav class="nav">
  <div class="nav-brand">Built by Arjun Barge</div>
  <div class="nav-tabs">
    <div class="nav-tab active" onclick="sw('deals')" id="tab-deals" data-tooltip="Core valuation module combining DCF, comps, LBO, and SEC filings." data-tooltip-example="Use when evaluating one public company in depth."><span class="dot"></span>Deal Scanner</div>
    <div class="nav-tab" onclick="sw('crypto')" id="tab-crypto" data-tooltip="Network-driven crypto valuation using Metcalfe and NVT frameworks." data-tooltip-example="Use to compare live crypto price vs intrinsic network-value estimates."><span class="dot"></span>Crypto Valuation</div>
    <div class="nav-tab" onclick="sw('macro')" id="tab-macro" data-tooltip="Macro regime dashboard based on FRED, indices, and Dalio's All Weather logic." data-tooltip-example="Use to sanity-check if valuation assumptions fit the current economic cycle."><span class="dot"></span>Macro + Dalio</div>
    <div class="nav-tab" onclick="sw('screen')" id="tab-screen" data-tooltip="Event scanner for SEC filings (8-K, 13D/G, S-4, DEFM14A)." data-tooltip-example="Use to detect deal signals and material updates quickly."><span class="dot"></span>Live SEC Feed</div>
  </div>
  <div class="nav-right" id="clock">—</div>
  <button class="nav-back-link" onclick="if(window.parent!==window){try{window.parent.postMessage({type:'CLOSE_PLATFORM'},window.location.origin||'*');}catch(_){window.parent.postMessage({type:'CLOSE_PLATFORM'},'*');}}else{window.history.back();}" style="margin-left:20px;font-family:var(--mono);font-size:11px;letter-spacing:1.4px;color:var(--muted2);background:none;text-decoration:none;white-space:nowrap;padding:0 12px;display:flex;align-items:center;gap:6px;height:58px;border:none;border-left:1px solid var(--border);transition:color .2s;cursor:pointer;" onmouseover="this.style.color='var(--text)'" onmouseout="this.style.color='var(--muted2)'">← PORTFOLIO</button>
</nav>

<div class="main">


<div class="tool-pane active" id="pane-deals">
  <div class="pane-title">DEAL<br><em>SCANNER</em></div>
  <p class="pane-sub">Enter a public company ticker — fetches live financials from SEC EDGAR XBRL, then runs a full DCF, EV/EBITDA comps, LBO screen, and Damodaran EV/Sales model.</p>
  <button type="button" class="help-link" onclick="openGuide()" aria-label="Open how to use guide">? How to use this tool →</button>
  <div class="source-tags">
    <div class="stag live" data-tooltip="SEC XBRL endpoint for standardized financial statement tags." data-tooltip-example="Revenue, EBITDA components, debt, and shares are parsed from companyfacts JSON.">SEC EDGAR XBRL API</div>
    <div class="stag live" data-tooltip="Official SEC ticker-to-CIK mapping used to resolve company identity." data-tooltip-example="AAPL -> CIK 0000320193.">SEC COMPANY TICKERS</div>
    <div class="stag" data-tooltip="Investment Banking methodology reference." data-tooltip-example="Comps, precedent logic, and deal process terminology.">ROSENBAUM & PEARL CH.1–5</div>
    <div class="stag" data-tooltip="Corporate valuation methodology reference by Aswath Damodaran." data-tooltip-example="CAPM, WACC, terminal value, and EV/Sales context.">DAMODARAN CH.11–12, 17–20</div>
  </div>

  <div class="input-card">
    <div class="ig-row" style="grid-template-columns:2fr 1fr 1fr 1fr">
      <div class="ig-cell"><div class="ig-label" data-tooltip="Stock symbol for a US-listed company. Use a major ticker for the best SEC data." data-tooltip-example="Real life: AAPL = Apple, MSFT = Microsoft, NVDA = NVIDIA. Look up any ticker on Yahoo Finance or the SEC." data-tooltip-input="Try entering: AAPL or MSFT">Ticker Symbol</div><input id="d-ticker" placeholder="e.g. AAPL, MSFT, NVDA, TSLA" /></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="EV/EBITDA = Enterprise Value ÷ EBITDA. Pick a range that matches the company's sector for comparable-company valuation." data-tooltip-example="Real life: Tech/SaaS often trades 8–12x; industrials 6–8x; retail 5–7x. Damodaran publishes sector multiples." data-tooltip-input="Choose: Tech 8–12x or Industrials 6–8x">Sector EV/EBITDA Comps</div>
        <select id="d-sector">
          <option value="8,12">Tech / SaaS (8–12x)</option>
          <option value="7,10">Consumer Staples (7–10x)</option>
          <option value="6,8">Industrials (6–8x)</option>
          <option value="5,8">Energy (5–8x)</option>
          <option value="6,9">Healthcare (6–9x)</option>
          <option value="9,14">High-Growth Tech (9–14x)</option>
          <option value="5,7">Retail (5–7x)</option>
        </select>
      </div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Multiple used to value the company at exit (e.g. 8.5 = 8.5× EBITDA). Typical range 7–12x for most sectors." data-tooltip-example="Real life: Mature companies often assume 7–9x; high-growth 10–12x at exit." data-tooltip-input="Try: 8.5">Exit Multiple (x)</div><input id="d-exit" type="number" value="8.5" step="0.5"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Expected annual revenue growth for the next 5 years. Used in the DCF projection." data-tooltip-example="Real life: Mature firms 3–6%; growth names 8–15%. Check analyst estimates." data-tooltip-input="Try: 8 (for 8%)">Revenue Growth Yr1–5 (%)</div><input id="d-growth" type="number" value="8"/></div>
    </div>
    <div class="ig-row" style="grid-template-columns:1fr 1fr 1fr 1fr">
      <div class="ig-cell"><div class="ig-label" data-tooltip="Stock volatility vs the market. 1.0 = moves with the market; 1.2 = 20% more volatile. Used in CAPM cost of equity." data-tooltip-example="Real life: Stable names 0.8–1.0; tech/growth 1.2–1.5. Yahoo Finance shows beta." data-tooltip-input="Try: 1.2">Beta (levered)</div><input id="d-beta" type="number" value="1.2" step="0.1"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="10-year US Treasury yield, used as the risk-free rate in WACC and CAPM. Update from FRED or market." data-tooltip-example="Real life: In 2024 often 4–4.5%. Check FRED DGS10 or Treasury.gov." data-tooltip-input="Try: 4.4">Risk-Free Rate (%) 10Y UST</div><input id="d-rf" type="number" value="4.4" step="0.1"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Extra return investors expect from stocks over the risk-free rate. Damodaran publishes updates; ~5.5% is a common baseline." data-tooltip-example="Real life: US equity premium often 5–6%. See pages.stern.nyu.edu/~adamodar." data-tooltip-input="Try: 5.5">Market Risk Premium (%)</div><input id="d-mrp" type="number" value="5.5" step="0.1"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Long-term growth rate after the 5-year forecast. Often set near inflation (2–3%)." data-tooltip-example="Real life: Rarely above 3% for mature firms; implies perpetual growth in line with GDP." data-tooltip-input="Try: 3.0">Terminal Growth Rate (%)</div><input id="d-termg" type="number" value="3.0" step="0.5"/></div>
    </div>
    <button class="run-btn" id="d-btn" onclick="runDeal()">▶ FETCH SEC DATA + RUN VALUATION</button>
  </div>

  <div class="loading-wrap" id="d-load"><div class="loading-line"></div><div class="loading-msg" id="d-log">Initializing…</div></div>
  <div class="err-box" id="d-err"></div>
  <div class="notice-box" id="d-notice"></div>

  <div id="d-results" style="display:none">
    <div class="ticker-strip" id="d-strip"></div>
    <div class="sh" data-tooltip="Chart showing the range of implied values from different methods (DCF, comps, LBO). The 'field' is the spread between low and high estimates." data-tooltip-example="Wider band = more uncertainty in assumptions">Valuation Football Field</div>
    <div id="d-ff" style="margin-bottom:36px"></div>
    <div class="viz-wrap" id="d-viz-fcf" style="display:none">
      <div class="viz-title" data-tooltip="Free Cash Flow — cash the company could return to shareholders after operations and capital spending. Projected for the next 5 years." data-tooltip-example="Taller bars = higher projected FCF">FCF projection (5Y)</div>
      <p class="viz-desc">Cash the company could return to investors over the next 5 years — taller bars = higher projected FCF. Values are in $M (millions). Growth and margin drive the ramp.</p>
      <div class="viz-fcf-axis" style="font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--muted2);margin-bottom:4px">Year 1 → Year 5</div>
      <div class="viz-fcf" id="d-viz-fcf-bars"></div>
      <div class="viz-fcf-summary" id="d-viz-fcf-summary" style="font-family:var(--mono);font-size:10px;color:var(--accent);margin-top:10px"></div>
    </div>
    <div class="sh" data-tooltip="Key outputs from the valuation: WACC, DCF values, comps range, LBO IRR, leverage, margin. Hover each metric for definition and context." data-tooltip-example="Real life: Compare DCF to comps; check LBO IRR vs PE hurdle (20–25%).">Computed Metrics</div>
    <div class="metrics" id="d-metrics"></div>
    <div class="sh" data-tooltip="Breakdown of how we get to DCF and comps: FCF build, WACC inputs, terminal value. Rosenbaum & Pearl / Damodaran methodology." data-tooltip-example="Real life: Use to sanity-check assumptions (growth, WACC, exit multiple).">Methodology Breakdown</div>
    <div class="two-col" id="d-panels"></div>
    <div class="sh" data-tooltip="WACC = Weighted Average Cost of Capital. This table shows how the valuation changes when you vary WACC and the exit multiple. Used to stress-test the DCF." data-tooltip-example="Rows = WACC, columns = exit multiple">WACC × Exit Multiple Sensitivity</div>
    <div style="overflow-x:auto"><table class="sens" id="d-sens"></table></div>
    <div class="sh" data-tooltip="Summary recommendation: BUY (value vs comps + strong metrics), HOLD (in line), or AVOID (e.g. high leverage, weak IRR). Based on DCF vs comps, LBO IRR, and margin.">Deal Verdict</div>
    <div class="verdict-wrap" data-label="DEAL VERDICT">
      <div class="verdict-inner"><div class="verdict-badge" id="d-badge">—</div><ul class="verdict-list" id="d-verdict"></ul></div>
    </div>
    <div class="sh" data-tooltip="Recent SEC filings for this company (10-K, 10-Q, 8-K, SC 13D/G, S-4, DEFM14A). Links go to EDGAR." data-tooltip-example="Real life: 8-K Item 1.01 = material agreement; S-4 = merger. Rosenbaum Ch.2.">Recent SEC Filings</div>
    <div class="viz-wrap" id="d-viz-filings" style="display:none">
      <div class="viz-title">Filings by date</div>
      <p class="viz-desc">Number of SEC filings per day (last 14 days with activity). 8-K = material events; 10-K/10-Q = annual/quarterly; S-4/DEFM14A = merger-related.</p>
      <div class="viz-filings-day-meta" id="d-viz-filings-meta" style="font-family:var(--mono);font-size:9px;color:var(--muted2);margin-bottom:6px"></div>
      <div class="viz-filings-day" id="d-viz-filings-bars"></div>
    </div>
    <div style="border:1px solid var(--border);margin-bottom:36px" id="d-filings"></div>
    <div class="disc" id="d-disc"></div>
  </div>
</div>


<div class="tool-pane" id="pane-crypto">
  <div class="pane-title">CRYPTO<br><em>VALUATION</em></div>
  <p class="pane-sub">Live prices via Binance WebSocket (with CoinGecko REST fallback) + Damodaran network-effect valuation: Metcalfe's Law (value ∝ n²) and NVT Ratio (crypto's EV/Revenue).</p>
  <button type="button" class="help-link" onclick="openGuide()" aria-label="Open how to use guide">? How to use this tool →</button>
  <div class="source-tags">
    <div class="stag ws">BINANCE WEBSOCKET</div>
    <div class="stag live">COINGECKO REST FALLBACK</div>
    <div class="stag">DAMODARAN CH.20 — NETWORK VALUE</div>
    <div class="stag">METCALFE'S LAW · NVT RATIO</div>
  </div>

  <div class="sh" data-tooltip="Live crypto market feed for major assets. Data auto-refreshes via stream with REST fallback." data-tooltip-example="If stream fails, fallback still gives latest available prices.">Live Prices <span style="font-weight:300;font-family:var(--body);color:var(--muted2);font-size:11px;letter-spacing:0;text-transform:none">— WebSocket stream · auto-updates</span></div>
  <p class="viz-desc" style="margin-bottom:14px">Price in USD and 24-hour change; the bar under each card shows how much it moved (green = up, red = down).</p>
  <div class="crypto-grid" id="crypto-grid">
    <div class="cc" id="cc-BTC"><div class="cc-sym">BTC</div><div class="cc-px cA">Connecting…</div></div>
    <div class="cc" id="cc-ETH"><div class="cc-sym">ETH</div><div class="cc-px cA">—</div></div>
    <div class="cc" id="cc-SOL"><div class="cc-sym">SOL</div><div class="cc-px cA">—</div></div>
    <div class="cc" id="cc-BNB"><div class="cc-sym">BNB</div><div class="cc-px cA">—</div></div>
    <div class="cc" id="cc-XRP"><div class="cc-sym">XRP</div><div class="cc-px cA">—</div></div>
    <div class="cc" id="cc-ADA"><div class="cc-sym">ADA</div><div class="cc-px cA">—</div></div>
  </div>

  <div class="sh" data-tooltip="Inputs for intrinsic crypto valuation models." data-tooltip-example="Metcalfe uses network size, NVT uses transaction throughput.">Intrinsic Valuation Inputs</div>
  <div class="input-card">
    <div class="ig-row" style="grid-template-columns:1fr 1fr 1fr">
      <div class="ig-cell"><div class="ig-label" data-tooltip="Cryptocurrency to run the network-valuation model on. Uses Metcalfe-style and NVT inputs." data-tooltip-example="Real life: BTC and ETH have the most on-chain data; SOL for a higher-growth network." data-tooltip-input="Choose: BTC, ETH, or SOL">Asset</div>
        <select id="c-asset"><option value="BTC">Bitcoin (BTC)</option><option value="ETH">Ethereum (ETH)</option><option value="SOL">Solana (SOL)</option></select>
      </div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Unique addresses active on the network, in millions. Used in Metcalfe-style and network-value models." data-tooltip-example="Real life: Check Glassnode or similar for active addresses. BTC often 40–60M." data-tooltip-input="Try: 50 (BTC), 25 (ETH), 10 (SOL)">Active Addresses (M)</div><input id="c-users" type="number" placeholder="BTC≈50  ETH≈25  SOL≈10"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Daily transaction volume on-chain in US dollars, in billions." data-tooltip-example="Real life: Varies with market activity. CoinGecko/CoinMarketCap show volume." data-tooltip-input="Try: 10">Daily On-Chain Volume ($B)</div><input id="c-vol" type="number" placeholder="e.g. 10"/></div>
    </div>
    <div class="ig-row" style="grid-template-columns:1fr 1fr 1fr">
      <div class="ig-cell"><div class="ig-label" data-tooltip="Number of coins in circulation, in millions. Affects per-coin valuation." data-tooltip-example="Real life: BTC cap ~21M; ETH no fixed cap. Supply data on CoinGecko." data-tooltip-input="Try: 19.7 (BTC), 120 (ETH), 460 (SOL)">Circulating Supply (M coins)</div><input id="c-supply" type="number" placeholder="BTC≈19.7  ETH≈120  SOL≈460"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Annualized on-chain transaction volume in trillions of dollars. Used in NVT-style ratios." data-tooltip-example="Real life: Daily vol × 365 for rough annual. NVT compares market cap to this." data-tooltip-input="Try: 3.6">Annualized Tx Volume ($T)</div><input id="c-txvol" type="number" placeholder="e.g. 3.6"/></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="Network Value to Transactions ratio — benchmark multiple for comparison. Higher = richer valuation vs activity." data-tooltip-example="Real life: Historic NVT ranges vary by asset; 50 is a common reference." data-tooltip-input="Try: 50">Benchmark NVT Ratio</div><input id="c-nvt" type="number" value="50"/></div>
    </div>
    <button class="run-btn" onclick="runCrypto()">▶ COMPUTE CRYPTO VALUATION</button>
  </div>

  <div id="c-results" style="display:none">
    <div class="sh" data-tooltip="Computed fair-value estimates and signal summary from selected crypto inputs." data-tooltip-example="Compare Live Price vs Blended Fair to judge potential over/undervaluation.">Valuation Output</div>
    <div class="metrics" id="c-metrics"></div>
    <div class="two-col" id="c-panels"></div>
    <div class="verdict-wrap" data-label="CRYPTO SIGNAL">
      <div class="verdict-inner"><div class="verdict-badge" id="c-badge">—</div><ul class="verdict-list" id="c-verdict"></ul></div>
    </div>
  </div>
</div>


<div class="tool-pane" id="pane-macro">
  <div class="pane-title">MACRO<br><em>+ DALIO</em></div>
  <p class="pane-sub">Live equity indices from Stooq, political probability from PredictIt, and free macro data from the St. Louis Fed (FRED) — synthesized through Ray Dalio's All Weather framework and Damodaran's Equity Risk Premium model.</p>
  <button type="button" class="help-link" onclick="openGuide()" aria-label="Open how to use guide">? How to use this tool →</button>
  <div class="source-tags">
    <div class="stag live">FRED API (ST. LOUIS FED)</div>
    <div class="stag live">STOOQ INDEX QUOTES</div>
    <div class="stag live">PREDICTIT PUBLIC API</div>
    <div class="stag dalio">DALIO — ALL WEATHER / DEBT CYCLE</div>
    <div class="stag">DAMODARAN CH.7 — ERP</div>
  </div>

  <button class="run-btn" style="margin-bottom:36px;max-width:340px" id="m-btn" onclick="runMacro()">▶ FETCH LIVE MACRO DATA</button>

  <div class="loading-wrap" id="m-load"><div class="loading-line"></div><div class="loading-msg" id="m-log">Fetching…</div></div>
  <div class="notice-box" id="m-notice"></div>

  <div id="m-results" style="display:none">

    
    <div class="sh" data-tooltip="Ray Dalio's framework: the economy is in one of four quadrants (growth up/down × inflation up/down). Each favors different assets and deal activity. The highlighted quadrant is the current regime inferred from FRED data." data-tooltip-example="Risk-On Boom = rising growth, falling inflation">Ray Dalio — All Weather Economic Machine</div>
    <p style="font-size:12px;color:var(--muted2);margin-bottom:18px;line-height:1.75;max-width:620px">Dalio's framework divides the economy into four quadrants based on two variables: <strong>growth</strong> (rising or falling relative to expectations) and <strong>inflation</strong> (rising or falling). Each regime favors different asset classes and deal structures. Current regime is identified from live FRED data.</p>
    <div class="dalio-grid" id="dalio-grid"></div>

    
    <div class="sh" data-tooltip="Dalio distinguishes short-term (business cycle) and long-term (decades) debt cycles. Position in each affects credit and deal activity." data-tooltip-example="Real life: Late short-term cycle = curve flattening; late long-term = high debt/GDP, deleveraging risk.">Dalio Debt Cycle Position</div>
    <div class="two-col" style="margin-bottom:36px">
      <div class="panel">
        <div class="panel-title" data-tooltip="Typically 5–8 years. Yield curve, Fed policy, and growth. Inversion often late in the cycle." data-tooltip-example="Real life: We're in the phase shown; inversion = late cycle, recession watch.">Short-Term Debt Cycle (5–8 yrs)</div>
        <div id="st-cycle"></div>
      </div>
      <div class="panel">
        <div class="panel-title" data-tooltip="Decades-long. Debt buildup then deleveraging. Dalio: we track Fed Funds and debt levels." data-tooltip-example="Real life: High rates + high debt = late long-term cycle pressure.">Long-Term Debt Cycle (50–75 yrs)</div>
        <div id="lt-cycle"></div>
      </div>
    </div>

    
    <div class="sh" data-tooltip="S&P 500, NASDAQ, Dow — live from Yahoo Finance. Used for market context alongside macro." data-tooltip-example="Real life: Indices update when you fetch; green/red = daily change.">Equity Indices</div>
    <div class="ticker-strip" id="m-strip"></div>

    <div class="viz-wrap" id="m-viz-indicators" style="display:none">
      <div class="viz-title" data-tooltip="Macro metrics (10Y Treasury, Fed Funds, yield curve, unemployment, CPI) shown in a 0–100 range. Full bar = high end of the range. Red = caution (e.g. inverted curve, high inflation)." data-tooltip-example="Use to see where we sit vs history">Key indicators (normalized)</div>
      <p class="viz-desc">Each bar = position in a typical range (0–100%). 10Y = 0–6%; Fed = 0–6%; 10Y–2Y = −1% to 2%; Unemp = 0–10%; CPI = 0–8% ann. Red = caution (inverted curve, high unemp/inflation).</p>
      <div class="viz-macro-axis" style="font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--muted2);margin-bottom:8px">Low ← → High (within range)</div>
      <div id="m-viz-indicators-bars"></div>
    </div>

    <div class="sh" data-tooltip="Live data from the St. Louis Fed (FRED). Each metric has a tooltip — hover for definition and real-life context." data-tooltip-example="Real life: FRED is free; we use DGS10, DFF, T10Y2Y, UNRATE, CPI, GDP, etc.">FRED Live Macro Indicators</div>
    <div class="metrics" id="m-metrics"></div>

    
    <div class="sh" data-tooltip="Illustrative prediction-market style odds. Not live; for context. For real prediction markets use predictit.org." data-tooltip-example="Real life: PredictIt offers real contracts; we show fixed illustrative bars here.">PredictIt — Political Probability Markets</div>
    <div class="notice-box show" id="pi-note" style="margin-bottom:18px">PredictIt's API does not allow direct browser access (CORS policy). Showing latest known contract prices from public data. For live prices visit <strong>predictit.org</strong>.</div>
    <div class="predict-grid" id="m-predict"></div>

    
    <div class="sh" data-tooltip="Synthesis metrics for M&A: ERP, credit environment, implied multiple, deal confidence. Hover each metric for detail." data-tooltip-example="Real life: Use with Dalio regime to judge if now is a good time for deals.">Deal-Making Environment</div>
    <div class="metrics" id="m-deal-metrics"></div>

    
    <div class="sh" data-tooltip="Final verdict and bullet summary combining Dalio regime, yield curve, ERP, and implied multiple." data-tooltip-example="Real life: DEAL-ON = favorable; CAUTIOUS = mixed; MIXED = neutral.">Macro + Dalio Synthesis</div>
    <div class="verdict-wrap" data-label="MACRO REGIME VERDICT">
      <div class="verdict-inner"><div class="verdict-badge" id="m-badge">—</div><ul class="verdict-list" id="m-verdict"></ul></div>
    </div>
  </div>
</div>


<div class="tool-pane" id="pane-screen">
  <div class="pane-title">LIVE<br><em>SEC FEED</em></div>
  <p class="pane-sub">Real-time M&A deal flow from SEC EDGAR. Scans 8-K, SC 13D/G, S-4, DEFM14A filings — the exact sources Rosenbaum & Pearl cite for deal intelligence (Ch.2, p.145–148).</p>
  <button type="button" class="help-link" onclick="openGuide()" aria-label="Open how to use guide">? How to use this tool →</button>
  <div class="source-tags">
    <div class="stag live">SEC EDGAR FULL-TEXT SEARCH</div>
    <div class="stag">ROSENBAUM & PEARL CH.2</div>
    <div class="stag">SC 13D · 8-K · S-4 · DEFM14A</div>
  </div>

  <div class="input-card">
    <div class="ig-row" style="grid-template-columns:2fr 1fr 1fr">
      <div class="ig-cell"><div class="ig-label" data-tooltip="Word or phrase to search for in the full text of SEC filings. EDGAR searches the document text." data-tooltip-example="Real life: 'acquisition' or 'merger' surfaces M&A; company names surface filings about that entity." data-tooltip-input="Try: acquisition or merger">Search Query</div><input id="sc-q" value="acquisition" /></div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="SEC form type: 8-K = material events; SC 13D = activist 5%+; SC 13G = passive 5%+; S-4 = merger; DEFM14A = merger proxy." data-tooltip-example="Real life: Rosenbaum & Pearl Ch.2 use these for deal flow. 'All Deal Filings' searches all at once." data-tooltip-input="Choose: All Deal Filings or 8-K, S-4, etc.">Filing Type</div>
        <select id="sc-form">
          <option value="8-K,SC+13D,SC+13G,S-4,DEFM14A">All Deal Filings</option>
          <option value="8-K">8-K</option>
          <option value="SC+13D">SC 13D</option>
          <option value="SC+13G">SC 13G</option>
          <option value="S-4">S-4</option>
          <option value="DEFM14A">DEFM14A</option>
        </select>
      </div>
      <div class="ig-cell"><div class="ig-label" data-tooltip="How far back in time to search for filings. Longer ranges return more results but may be slower." data-tooltip-example="Real life: 7 days for recent deal flow; 30–90 for trend or backfill." data-tooltip-input="Choose: 7, 14, 30, or 90 days">Days Back</div>
        <select id="sc-days"><option value="7">7 days</option><option value="14">14 days</option><option value="30" selected>30 days</option><option value="90">90 days</option></select>
      </div>
    </div>
    <button class="run-btn" id="sc-btn" onclick="runSEC()">▶ SCAN SEC EDGAR</button>
  </div>

  <div class="loading-wrap" id="sc-load"><div class="loading-line"></div><div class="loading-msg" id="sc-log">Querying EDGAR…</div></div>
  <div class="err-box" id="sc-err"></div>

  <div id="sc-results" style="display:none">
    <div class="sh" data-tooltip="SEC EDGAR search results. Type = form (8-K, S-4, etc.); Company = filer; Filed = date. Link opens EDGAR." data-tooltip-example="Real life: Click EDGAR to read the full filing on sec.gov.">Live Deal Filings <span id="sc-count" style="font-family:var(--body);font-weight:300;font-size:10px;letter-spacing:0;color:var(--muted2);text-transform:none"></span></div>
    <div class="viz-wrap" id="sc-viz-days" style="display:none">
      <div class="viz-title">Filings by date</div>
      <p class="viz-desc">Filings per day matching your search (last 14 days). Taller bar = more filings that day. Use to spot spikes in M&A or activism (e.g. 8-K, 13D).</p>
      <div class="viz-filings-day-meta" id="sc-viz-days-meta" style="font-family:var(--mono);font-size:9px;color:var(--muted2);margin-bottom:6px"></div>
      <div class="viz-filings-day" id="sc-viz-days-bars"></div>
    </div>
    <div style="border:1px solid var(--border);margin-bottom:36px">
      <div class="sc-header" style="display:grid;grid-template-columns:72px 1fr 110px 88px;gap:12px;padding:9px 16px;background:var(--s2);border-bottom:1px solid var(--border);font-family:var(--mono);font-size:10px;letter-spacing:1.4px;color:var(--accent)">
        <span data-tooltip="SEC form type (e.g. 8-K, S-4, SC 13D)." data-tooltip-example="Real life: 8-K = current report; S-4 = merger.">TYPE</span><span data-tooltip="Company or entity that filed the document." data-tooltip-example="Real life: Issuer name from EDGAR.">COMPANY</span><span data-tooltip="Date the filing was submitted to the SEC." data-tooltip-example="Real life: YYYY-MM-DD format.">FILED</span><span data-tooltip="Link to view the filing on SEC EDGAR." data-tooltip-example="Real life: Opens sec.gov in a new tab.">LINK</span>
      </div>
      <div id="sc-list"></div>
    </div>
    <div class="two-col">
      <div class="panel">
        <div class="panel-title" data-tooltip="Summary of deal-relevant SEC forms. Rosenbaum & Pearl Ch.2 use these for M&A and activism screening." data-tooltip-example="Real life: 13D = activist intent; 8-K 1.01 = deal signed; S-4 = merger registration.">Filing Type Guide (Rosenbaum Ch.2)</div>
        <div class="panel-row" data-tooltip="Schedule 13D: beneficial ownership 5%+ with activist or strategic intent. Must file within 10 days." data-tooltip-example="Real life: Often a takeover or engagement signal; watch for multiple 13Ds.">SC 13D <span style="color:var(--red)">Activist / strategic 5%+ → takeover signal</span></div>
        <div class="panel-row" data-tooltip="Schedule 13G: passive 5%+ holder (e.g. index fund). No activist intent." data-tooltip-example="Real life: Institutional accumulation; less urgent than 13D.">SC 13G <span>Passive 5%+ — institutional accumulation</span></div>
        <div class="panel-row" data-tooltip="8-K Item 1.01: material definitive agreement (e.g. M&A signed). Filed within 4 days." data-tooltip-example="Real life: Key for deal flow; signals execution.">8-K Item 1.01 <span>Material definitive agreement — deal execution</span></div>
        <div class="panel-row" data-tooltip="S-4: registration for merger/securities. Filed when deal is near closing." data-tooltip-example="Real life: Read for deal terms, fairness, synergies.">S-4 <span style="color:var(--cyan)">Merger registration — deal near closing</span></div>
        <div class="panel-row" data-tooltip="DEFM14A: definitive merger proxy. Shareholder vote; often includes fairness opinion." data-tooltip-example="Real life: Source of advisor analyses and deal rationale.">DEFM14A <span style="color:var(--cyan)">Definitive merger proxy — fairness opinions</span></div>
        <div class="panel-row" data-tooltip="13E-3: going-private or LBO. Enhanced disclosure for squeeze-outs." data-tooltip-example="Real life: Sponsor or management LBO signal.">13E-3 <span>Going-private / LBO — enhanced disclosure</span></div>
      </div>
      <div class="panel">
        <div class="panel-title" data-tooltip="How to read deal flow: strategic vs financial sponsor, and what combinations mean." data-tooltip-example="Real life: S-4 + premium = strategic; 13E-3 = sponsor LBO.">Strategic vs. Sponsor Signals</div>
        <div class="panel-row" data-tooltip="S-4 with high premium often indicates strategic buyer paying for synergies." data-tooltip-example="Real life: Strategic deals often trade at higher multiples.">S-4 + high premium <span>Strategic — synergy pricing</span></div>
        <div class="panel-row" data-tooltip="13E-3 filing indicates going-private or LBO by sponsor or management." data-tooltip-example="Real life: Sponsor-led take-private.">13E-3 present <span>Financial sponsor / management LBO</span></div>
        <div class="panel-row" data-tooltip="Multiple 13Ds on same name can signal competing activists or bidding." data-tooltip-example="Real life: Price escalation risk.">Multiple SC 13D <span style="color:var(--yellow)">Bidding war risk — price escalation</span></div>
        <div class="panel-row" data-tooltip="All-cash consideration often commands higher premium than stock." data-tooltip-example="Real life: Buyer certainty; no currency risk.">All-cash deal <span>Higher premium vs. stock consideration</span></div>
        <div class="panel-row" data-tooltip="13D followed by 8-K often means activist pushed for sale and deal was signed." data-tooltip-example="Real life: Activist-driven sale process.">SC 13D + 8-K combo <span style="color:var(--red)">Activist-driven sale process</span></div>
      </div>
    </div>
  </div>
</div>

</div>

<script>

const HUE_STORAGE_KEY = 'arjun-site-hue';
const HUE_OPTIONS = new Set(['noir', 'midnight', 'emerald', 'daylight']);

function applyHue(nextHue) {
  const hue = HUE_OPTIONS.has(nextHue) ? nextHue : 'noir';
  document.documentElement.setAttribute('data-hue', hue);
}

try {
  applyHue(localStorage.getItem(HUE_STORAGE_KEY) || 'noir');
} catch (e) {
  applyHue('noir');
}

window.addEventListener('message', (event) => {
  if (event.data?.type === 'SET_HUE' && typeof event.data.hue === 'string') {
    applyHue(event.data.hue);
    try {
      localStorage.setItem(HUE_STORAGE_KEY, event.data.hue);
    } catch (e) {}
  }
});

function sw(id){
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tool-pane').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  document.getElementById('pane-'+id).classList.add('active');
}
function openGuide(){
  try{ window.parent.postMessage({type:'SCROLL_TO_FINANCIAL_GUIDE'}, '*'); }catch(e){}
}
setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-US',{hour12:false});},1000);

const fmt=(n,d=1)=>n==null||isNaN(n)?'—':(+n).toFixed(d);
const fmtM=n=>{if(!n||isNaN(n))return'—';const a=Math.abs(n);if(a>=1e12)return'$'+(n/1e12).toFixed(2)+'T';if(a>=1e9)return'$'+(n/1e9).toFixed(2)+'B';if(a>=1e6)return'$'+(n/1e6).toFixed(1)+'M';return'$'+n.toFixed(0);};
const fmtX=(n,d=1)=>isNaN(n)?'—':fmt(n,d)+'x';
const fmtP=(n,d=1)=>isNaN(n)?'—':fmt(n,d)+'%';
const G=id=>parseFloat(document.getElementById(id).value)||0;
const S=id=>document.getElementById(id).value||'';
const show=id=>{const el=document.getElementById(id);if(el)el.style.display='block';};
const hide=id=>{const el=document.getElementById(id);if(el)el.style.display='none';};
const setLog=(id,m)=>{const el=document.getElementById(id);if(el)el.textContent=m;};
const setErr=(id,m)=>{const el=document.getElementById(id);if(el){el.textContent=m;el.classList.add('show');}};
function escAttr(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
const mc=(l,v,s,c='',tt,ttEx,ttIn)=>{
  const a=[]; if(tt)a.push('data-tooltip="'+escAttr(tt)+'"'); if(ttEx)a.push('data-tooltip-example="'+escAttr(ttEx)+'"'); if(ttIn)a.push('data-tooltip-input="'+escAttr(ttIn)+'"');
  const attr=a.length?' '+a.join(' '):'';
  return \`<div class="metric"><div class="m-lbl"\${attr}>\${l}</div><div class="m-val \${c}">\${v}</div><div class="m-sub">\${s}</div></div>\`;
};

function vizFCFBars(fcfs, fmtM) {
  if (!Array.isArray(fcfs) || fcfs.length < 5) return '';
  const valid = fcfs.slice(0, 5).map(function(v){ return typeof v === 'number' && isFinite(v) ? v : 0; });
  const max = Math.max(...valid, 1);
  return valid.map(function(v, i) {
    const pct = max > 0 ? Math.max(4, (v / max) * 100) : 0;
    return '<div class="viz-fcf-bar" style="height:' + pct + '%;background:var(--accent)" title="Y' + (i+1) + ': ' + fmtM(v) + '"><span>Y' + (i+1) + '</span></div>';
  }).join('');
}
function vizFilingsByDay(filings, maxBars) {
  if (!filings || !Array.isArray(filings) || !filings.length) return { entries: [], maxCnt: 1 };
  var byDay = {};
  filings.forEach(function(f) {
    var d = (f.date || '').toString().split('T')[0] || '';
    if (!d || d === '—') return;
    byDay[d] = (byDay[d] || 0) + 1;
  });
  var entries = Object.entries(byDay).sort(function(a,b){ return a[0].localeCompare(b[0]); });
  if (maxBars && entries.length > maxBars) entries = entries.slice(-maxBars);
  var maxCnt = entries.length ? Math.max.apply(null, entries.map(function(e){ return e[1]; })) : 1;
  return { entries: entries, maxCnt: Math.max(1, maxCnt) };
}
function vizMacroBars(data) {
  var ranges = { yld10:[0,6], fedFunds:[0,6], yieldCurve:[-1,2], unrate:[0,10], cpiYoY:[0,8] };
  var labels = { yld10:'10Y', fedFunds:'Fed', yieldCurve:'10Y-2Y', unrate:'Unemp', cpiYoY:'CPI' };
  var order = ['yld10','fedFunds','yieldCurve','unrate','cpiYoY'];
  return order.map(function(k) {
    var val = data[k];
    if (val == null || !isFinite(val)) return '<div class="viz-macro-row"><span class="viz-macro-lbl">' + (labels[k]||k) + '</span><div class="viz-macro-track"><div class="viz-macro-fill" style="width:0;background:var(--muted2)"></div></div><span class="viz-macro-lbl">—</span></div>';
    var r = ranges[k] || [0, 100];
    var pct = Math.max(0, Math.min(100, ((val - r[0]) / (r[1] - r[0] || 1)) * 100));
    var col = (k === 'yieldCurve' && val < 0) ? 'var(--red)' : (k === 'unrate' && val > 5) ? 'var(--red)' : (k === 'cpiYoY' && val > 4) ? 'var(--red)' : 'var(--accent)';
    return '<div class="viz-macro-row"><span class="viz-macro-lbl">' + (labels[k]||k) + '</span><div class="viz-macro-track"><div class="viz-macro-fill" style="width:' + pct + '%;background:' + col + '"></div></div><span class="viz-macro-lbl">' + (typeof val === 'number' ? val.toFixed(1) : val) + '%</span></div>';
  }).join('');
}

async function safeFetch(url, opts={}, timeout=5000, retries=0) {
  if (!url || typeof url !== 'string') throw new Error('Invalid URL');
  const t = Math.min(Math.max(Number(timeout) || 5000, 1500), 20000);
  const ctrl = new AbortController();
  const tid = setTimeout(()=>ctrl.abort(), t);
  try {
    const r = await fetch(url, {...opts, signal:ctrl.signal});
    clearTimeout(tid);
    if ((r.status>=500 || r.status===429) && retries>0) {
      await new Promise(rs=>setTimeout(rs, 200));
      return safeFetch(url, opts, t, retries-1);
    }
    return r;
  } catch(e) {
    clearTimeout(tid);
    if (retries>0 && (e.name==='AbortError' || e.message?.includes('fetch'))) {
      await new Promise(rs=>setTimeout(rs, 200));
      return safeFetch(url, opts, t, retries-1);
    }
    throw e;
  }
}

// Fast: primary proxy 4s, fallback 3.5s so we fail fast and switch quickly.
async function viaProxy(url) {
  if (!url || typeof url !== 'string') return { json: null, text: '' };
  const encoded = encodeURIComponent(url);
  try {
    const r = await safeFetch(\`https://api.allorigins.win/get?url=\${encoded}\`, {}, 4000, 0);
    if (!r.ok) throw new Error('proxy ' + r.status);
    let c = '';
    try {
      const w = await r.json();
      c = (w && typeof w.contents === 'string') ? w.contents : '';
    } catch (parseErr) { throw new Error('Proxy parse failed'); }
    if (!c || typeof c !== 'string') return { json: null, text: '' };
    try { return { json: JSON.parse(c), text: c }; }
    catch (e) { return { json: null, text: c }; }
  } catch (e) {
    try {
      const r2 = await safeFetch(\`https://corsproxy.io/?\${encoded}\`, {}, 3500, 0);
      if (!r2.ok) throw new Error('proxy2');
      const c = await r2.text();
      try { return { json: c ? JSON.parse(c) : null, text: c || '' }; }
      catch (e2) { return { json: null, text: c || '' }; }
    } catch (e2) { throw new Error('Proxy unavailable'); }
  }
}

const SEC_UA = 'ArjunPortfolio kellogg@northwestern.edu';
let _tickersCache = null, _tickersCacheTime = 0;
const TICKERS_CACHE_MS = 5 * 60 * 1000;

async function fetchFRED(series) {
  if (!series || typeof series !== 'string') return null;
  const url = \`https://fred.stlouisfed.org/graph/fredgraph.csv?id=\${encodeURIComponent(series)}\`;
  let csv = null;
  try {
    const r = await safeFetch(url, {}, 3500, 0);
    if (r.ok) csv = await r.text();
  } catch (e) {}
  if (!csv) {
    try {
      const p = await viaProxy(url);
      csv = p.text;
    } catch (e) {}
  }
  if (!csv || typeof csv !== 'string') return null;
  const lines = csv.trim().split('\\n')
    .filter(l => l && typeof l === 'string' && !l.startsWith('DATE') && !l.startsWith('"DATE'));
  let last=null, prev=null;
  for(let i=lines.length-1; i>=0; i--) {
    const line = lines[i];
    if(!line) continue;
    const parts = line.split(',');
    const v = parseFloat(parts[1]);
    if(!isNaN(v) && isFinite(v)) {
      if(!last) last = {val:v, date:(parts[0]||'').replace(/"/g,'')};
      else if(!prev) { prev = v; break; }
    }
  }
  if(!last) return null;
  return {val:last.val, date:last.date, prev};
}

async function fetchYahoo(symbol) {
  const url = \`https://query1.finance.yahoo.com/v8/finance/chart/\${encodeURIComponent(symbol)}?interval=1d&range=2d\`;
  let data = null;
  try {
    const p = await viaProxy(url);
    data = p.json;
  } catch(e) {}
  if(!data) return null;
  try {
    const meta = data?.chart?.result?.[0]?.meta;
    if(!meta) return null;
    const price    = meta.regularMarketPrice  ?? meta.previousClose ?? null;
    const prevClose= meta.previousClose       ?? null;
    const change   = (price!=null&&prevClose!=null) ? price-prevClose : null;
    const changePct= (change!=null&&prevClose) ? change/prevClose*100 : null;
    return {price, prevClose, change, changePct, name:meta.longName||meta.shortName||symbol};
  } catch(e) { return null; }
}


async function runDeal(){
  const ticker = S('d-ticker').trim().toUpperCase();
  if(!ticker){alert('Enter a ticker.');return;}

  hide('d-results');
  document.getElementById('d-err').classList.remove('show');
  document.getElementById('d-notice').classList.remove('show');
  document.getElementById('d-load').classList.add('show');
  document.getElementById('d-btn').disabled=true;

  const sectorParts = S('d-sector').split(',').map(Number).filter(n=>isFinite(n));
  const sL = sectorParts[0] ?? 8, sH = sectorParts[1] ?? 12;
  const exitMult = Math.max(1, Math.min(30, Number(G('d-exit'))||8.5));
  const growthR = Math.max(-0.2, Math.min(0.5, (Number(G('d-growth'))||8)/100));
  const beta = Math.max(0.1, Math.min(3, Number(G('d-beta'))||1.2));
  const rf = Math.max(0, Math.min(0.2, (Number(G('d-rf'))||4.4)/100));
  const mrp = Math.max(0.01, Math.min(0.15, (Number(G('d-mrp'))||5.5)/100));
  const termG = Math.max(-0.02, Math.min(0.1, (Number(G('d-termg'))||3)/100));

  let notices=[];
  let rev=0,ebitda=0,da=0,capex=0,netIncome=0,totalDebt=0,cash=0,shares=0;
  let companyName=ticker, cik=null;
  let filings=[];

  try {
    setLog('d-log','Resolving CIK…');
    let tickersData = null;
    const now = Date.now();
    if (_tickersCache && (now - _tickersCacheTime) < TICKERS_CACHE_MS) {
      tickersData = _tickersCache;
    } else {
      try {
        const r = await safeFetch('https://www.sec.gov/files/company_tickers.json',
          {headers:{'User-Agent':SEC_UA}}, 4000, 0);
        if (r.ok) {
          tickersData = await r.json();
          _tickersCache = tickersData;
          _tickersCacheTime = now;
        }
      } catch (e) {}
      if (!tickersData) {
        try {
          const p = await viaProxy('https://www.sec.gov/files/company_tickers.json');
          if (p.json && typeof p.json === 'object') {
            tickersData = p.json;
            _tickersCache = tickersData;
            _tickersCacheTime = now;
          }
        } catch (e2) {}
      }
    }
    if (tickersData) {
      const entry = Object.values(tickersData).find(v=>v&&v.ticker===ticker);
      if(entry){ cik=String(entry.cik_str).padStart(10,'0'); companyName=entry.title||ticker; }
      else notices.push(\`Ticker "\${ticker}" not found in SEC registry. Try exact symbols (e.g. "AAPL" not "Apple").\`);
    } else notices.push('SEC company registry unavailable — continuing with partial data.');

    if(cik){
      setLog('d-log','Fetching XBRL + filings in parallel…');
      const companyfactsUrl = \`https://data.sec.gov/api/xbrl/companyfacts/CIK\${cik}.json\`;
      const submissionsUrl = \`https://data.sec.gov/submissions/CIK\${cik}.json\`;
      const fetchFacts = (async () => {
        try {
          const r = await safeFetch(companyfactsUrl, {headers:{'User-Agent':SEC_UA}}, 7500, 0);
          if (r.ok) return await r.json();
        } catch(e) {}
        try {
          const p = await viaProxy(companyfactsUrl);
          return (p.json && p.json.entityName) ? p.json : null;
        } catch(e2) {}
        return null;
      })();
      const fetchSubs = (async () => {
        try {
          const r = await safeFetch(submissionsUrl, {headers:{'User-Agent':SEC_UA}}, 4500, 0);
          if (r.ok) return await r.json();
        } catch (e) {}
        try {
          const p = await viaProxy(submissionsUrl);
          return (p.json && p.json.filings) ? p.json : null;
        } catch (e2) {}
        return null;
      })();
      const [factsResult, subResult] = await Promise.all([fetchFacts, fetchSubs]);
      let facts = factsResult;
      const sub = subResult;

      if (facts) {
          companyName = facts.entityName || companyName;
          const us = facts?.facts?.['us-gaap'] || {};

          const latestAnn = (key, unit='USD') => {
            const arr = us[key]?.units?.[unit];
            if(!arr||!arr.length) return 0;
            const annual = arr
              .filter(d => d.form==='10-K' && d.val>0 && d.end)
              .sort((a,b) => (b.end > a.end ? 1 : b.end < a.end ? -1 : 0));
            return annual[0]?.val || 0;
          };
          const latestAnnShares = (key) => {
            const arr = us[key]?.units?.['shares'];
            if(!arr||!arr.length) return 0;
            const annual = arr
              .filter(d => (d.form==='10-K'||d.form==='10-Q') && d.val>0 && d.end)
              .sort((a,b) => (b.end > a.end ? 1 : b.end < a.end ? -1 : 0));
            return annual[0]?.val || 0;
          };

          rev = (latestAnn('Revenues')||latestAnn('RevenueFromContractWithCustomerExcludingAssessedTax')||latestAnn('SalesRevenueNet')||latestAnn('RevenueFromContractWithCustomerIncludingAssessedTax')||0)/1e6;
          const opInc = (latestAnn('OperatingIncomeLoss')||latestAnn('IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest')||0)/1e6;
          da = (latestAnn('DepreciationDepletionAndAmortization')||latestAnn('DepreciationAndAmortization')||latestAnn('Depreciation')||0)/1e6;
          ebitda = opInc + da;
          capex = Math.abs((latestAnn('PaymentsToAcquirePropertyPlantAndEquipment')||latestAnn('PaymentsToAcquireProductiveAssets')||0)/1e6);
          netIncome = (latestAnn('NetIncomeLoss')||0)/1e6;
          totalDebt = (latestAnn('LongTermDebt')||latestAnn('LongTermDebtAndCapitalLeaseObligations')||latestAnn('DebtAndCapitalLeaseObligations')||0)/1e6;
          cash = (latestAnn('CashAndCashEquivalentsAtCarryingValue')||latestAnn('Cash')||latestAnn('CashCashEquivalentsAndShortTermInvestments')||0)/1e6;
          shares = (latestAnnShares('CommonStockSharesOutstanding')||latestAnnShares('CommonStockSharesIssued')||0)/1e6;

          if(rev===0) notices.push('Revenue data not extractable from EDGAR XBRL for this company — valuation uses sector-based estimates.');
      } else {
        notices.push('EDGAR XBRL facts unavailable. Valuation uses sector-based estimates.');
      }

    filings=[];
    if (cik && sub && sub.filings){
          const recent = sub.filings.recent;
          if(recent && Array.isArray(recent.form)){
            const forms=recent.form, dates=Array.isArray(recent.filingDate)?recent.filingDate:[], accs=Array.isArray(recent.accessionNumber)?recent.accessionNumber:[];
            const n = Math.min(forms.length, 40);
            for(let i=0;i<n&&filings.length<8;i++){
              const ft=forms[i];
              if(ft&&['10-K','10-Q','8-K','SC 13D','SC 13G','S-4','DEFM14A'].includes(ft)){
                filings.push({
                  type:ft, entity:companyName,
                  date:(dates[i]!=null?dates[i]:'')||'—',
                  acc:((accs[i]!=null?accs[i]:'')+'').replace(/-/g,''),
                });
              }
            }
          }
        }
    }

    setLog('d-log','Running valuation engine…');

    if(rev===0) rev = ebitda > 0 ? ebitda/0.18 : 500;
    if(ebitda<=0) ebitda = rev * 0.18;
    if(da<=0) da = ebitda * 0.20;
    if(capex<=0) capex = ebitda * 0.12;
    const taxRate=0.25;
    const nwcChange = rev * 0.02;
    const ebit = ebitda - da;
    const margin = ebitda / rev;
    const netDebt = totalDebt - cash;
    const sectorMid=(sL+sH)/2;

    const costEq = rf + beta*mrp;

    const approxEV = ebitda*sectorMid;
    const approxEq = Math.max(approxEV-netDebt, approxEV*0.3);
    const dRatio = totalDebt/(totalDebt+approxEq);
    const eRatio = 1-dRatio;

    const lev = netDebt/(ebitda||1);
    const spread = lev<2?0.015:lev<3.5?0.025:lev<5?0.035:0.05;
    const costDebt = rf+spread;

    const wacc = costEq*eRatio + costDebt*(1-taxRate)*dRatio;

    const ebitM = ebit/rev;
    const fcfs=[];
    let revT=rev;
    for(let i=1;i<=5;i++){
      revT*=(1+growthR);
      const fcf = revT*ebitM*(1-taxRate) + da*(1+growthR*0.3) - capex*(1+growthR*0.3) - nwcChange;
      fcfs.push(fcf);
    }
    const ebitdaT = revT*margin;

    const tvEMM = ebitdaT*exitMult;
    const tvPGM = wacc>termG ? fcfs[4]*(1+termG)/(wacc-termG) : tvEMM;

    const pvFCFs = fcfs.reduce((s,f,i)=>s+f/Math.pow(1+wacc,i+1),0);
    const pvEMM = tvEMM/Math.pow(1+wacc,5);
    const pvPGM = tvPGM/Math.pow(1+wacc,5);
    const evEMM = pvFCFs+pvEMM;
    const evPGM = pvFCFs+pvPGM;
    const evAvg = (evEMM+evPGM)/2;

    const evCompsL=ebitda*sL, evCompsH=ebitda*sH, evCompsMid=ebitda*sectorMid;

    const netM = netIncome/rev;
    let evSales=null;
    if(netM>0&&costEq>termG) evSales=(netM*0.6*(1+growthR)/(costEq-termG))*rev;

    const lboEntryMult = sectorMid*0.85;
    const lboEV = ebitda*lboEntryMult;
    const lboDebt=lboEV*0.55, lboEq=lboEV*0.45;
    const exitEq=Math.max(ebitdaT*sectorMid-(lboDebt*0.25),0);
    const lboIRR=Math.pow(exitEq/lboEq,0.2)-1;
    const lboMOIC=exitEq/lboEq;

    document.getElementById('d-load').classList.remove('show');
    document.getElementById('d-btn').disabled=false;

    if(notices.length){
      const nb=document.getElementById('d-notice');
      nb.innerHTML=notices.join('<br>');
      nb.classList.add('show');
    }

    show('d-results');

    document.getElementById('d-strip').innerHTML=\`
      <div class="ti"><span class="ti-sym">\${ticker}</span><span class="ti-px">\${companyName.substring(0,30)}</span></div>
      <div class="ti"><span class="ti-sym">Rev TTM</span><span class="ti-px">\${fmtM(rev)}</span></div>
      <div class="ti"><span class="ti-sym">EBITDA</span><span class="ti-px">\${fmtM(ebitda)}</span></div>
      <div class="ti"><span class="ti-sym">Net Debt</span><span class="ti-px">\${fmtM(netDebt)}</span></div>
      <div class="ti"><span class="ti-sym">Margin</span><span class="ti-px">\${fmtP(margin*100)}</span></div>
      <div class="strip-src"><span class="dot-live"></span>SEC EDGAR XBRL</div>\`;

    const allEVs=[evEMM,evPGM,evCompsL,evCompsH,evSales].filter(Boolean);
    const ffMin=Math.min(...allEVs)*0.8, ffMax=Math.max(...allEVs)*1.2, ffSp=ffMax-ffMin;
    const ffBar=(lbl,lo,hi,col)=>{
      if(!lo||!hi||isNaN(lo)||isNaN(hi))return'';
      const l=((lo-ffMin)/ffSp*100).toFixed(1), w=Math.max((hi-lo)/ffSp*100,2).toFixed(1);
      return \`<div class="ff-row"><div class="ff-lbl">\${lbl}<strong>\${fmtM(lo)} – \${fmtM(hi)}</strong></div><div class="ff-track"><div class="ff-fill" style="left:\${l}%;width:\${w}%;background:\${col}18;border-left:2px solid \${col}"><span style="color:\${col}">\${fmtX(lo/ebitda)} – \${fmtX(hi/ebitda)}</span></div></div></div>\`;
    };
    document.getElementById('d-ff').innerHTML=
      ffBar('DCF — Exit Multiple Method',evEMM*.93,evEMM*1.07,'#a08cff')+
      ffBar('DCF — Perpetuity Growth',evPGM*.93,evPGM*1.07,'#00e5a0')+
      ffBar('Trading Comps EV/EBITDA',evCompsL,evCompsH,'#ffcc44')+
      (evSales?ffBar('Damodaran EV/Sales',evSales*.85,evSales*1.15,'#22ddff'):'')+
      ffBar('LBO Entry → Exit',Math.min(lboEV,ebitdaT*sectorMid),Math.max(lboEV,ebitdaT*sectorMid),'#ff8844');

    var fcfViz = vizFCFBars(fcfs, fmtM);
    if (fcfViz) {
      document.getElementById('d-viz-fcf').style.display = 'block';
      document.getElementById('d-viz-fcf-bars').innerHTML = fcfViz;
      var totalFCF = (fcfs && Array.isArray(fcfs)) ? fcfs.reduce(function(a,b){ return a + (typeof b==='number'&&isFinite(b)?b:0); }, 0) : 0;
      document.getElementById('d-viz-fcf-summary').textContent = 'Total 5Y FCF: ' + fmtM(totalFCF);
    } else {
      document.getElementById('d-viz-fcf').style.display = 'none';
      document.getElementById('d-viz-fcf-summary').textContent = '';
    }

    const wc=wacc>.12?'cR':wacc>.09?'cY':'cG';
    const ic=lboIRR>.25?'cG':lboIRR>.15?'cY':'cR';
    function paintDeferred() {
      var dMetrics = document.getElementById('d-metrics');
      if (!dMetrics) return;
      dMetrics.innerHTML=
      mc('WACC',fmtP(wacc*100),'Rosenbaum Ex.3.19',wc,'Weighted Average Cost of Capital. Blend of cost of equity and after-tax cost of debt.','Real life: Used to discount FCF in DCF. Typically 8–12% for mid-cap.')+
      mc('Cost of Equity',fmtP(costEq*100),'CAPM: rf+β×MRP','cA','Cost of equity from CAPM: risk-free rate + beta × market risk premium.','Real life: Damodaran Ch.7. Higher beta or MRP → higher cost of equity.')+
      mc('DCF EV (EMM)',fmtM(evEMM),'Exit multiple method','cA','DCF enterprise value using exit multiple terminal value (EMM).','Real life: TV = Year 5 EBITDA × exit multiple; discount to today.')+
      mc('DCF EV (PGM)',fmtM(evPGM),'Perpetuity growth','','DCF enterprise value using perpetuity growth terminal value (PGM).','Real life: TV = FCF × (1+g)/(WACC−g); sensitive to terminal growth.')+
      mc('Comps Range',fmtM(evCompsL)+'–',\`\${sectorMid}x mid\`,'','Comparable company implied EV range from sector EV/EBITDA.','Real life: Low–high from your sector multiple; mid used in football field.')+
      mc('LBO IRR',fmtP(lboIRR*100),'5yr · '+fmtX(lboMOIC)+' MOIC',ic,'Internal rate of return to a PE buyer at entry multiple. MOIC = multiple on invested capital.','Real life: PE targets 20–25% IRR; above that = sponsor candidate.')+
      mc('Net Debt/EBITDA',fmtX(lev),'Leverage',lev>4?'cR':lev>2.5?'cY':'cG','Net debt divided by EBITDA. Leverage ratio.','Real life: Above 4–5x = high distress risk; below 2x = conservative.')+
      mc('EBITDA Margin',fmtP(margin*100),'LTM',margin>.25?'cG':margin>.12?'cY':'cR','EBITDA as % of revenue. Operating profitability.','Real life: 25%+ = strong; below 10% = thin.')+
      mc('PV of FCFs',fmtM(pvFCFs),'5yr at WACC','','Present value of the 5-year FCF projection, discounted at WACC.','Real life: First part of DCF value; the rest is terminal value.')+
      mc('TV %',fmt(pvEMM/evEMM*100,0)+'%','Of DCF value','','Terminal value as a share of total DCF value.','Real life: Often 60–80%; very high % means value is back-end loaded.')+
      mc('Equity Value',fmtM(evAvg-netDebt),'DCF avg – net debt','cA','Enterprise value minus net debt = equity value.','Real life: What equity is worth after paying off debt (and adding cash).')+
      mc('D/(D+E)',fmtP(dRatio*100),'Target cap structure','','Debt as a share of total capital (debt + equity).','Real life: Used in WACC. Higher = more leverage, higher risk.');

    var dPanels = document.getElementById('d-panels');
    if (dPanels) dPanels.innerHTML=\`
      <div class="panel">
        <div class="panel-title">DCF Inputs (Rosenbaum Ch.3)</div>
        <div class="panel-row">Risk-free rate r_f<span>\${fmtP(rf*100,2)}</span></div>
        <div class="panel-row">Beta (levered β)<span>\${beta}</span></div>
        <div class="panel-row">Market risk premium<span>\${fmtP(mrp*100,1)}</span></div>
        <div class="panel-row">Cost of equity (CAPM)<span>\${fmtP(costEq*100,2)}</span></div>
        <div class="panel-row">Cost of debt (pre-tax)<span>\${fmtP(costDebt*100,2)}</span></div>
        <div class="panel-row">Debt weight D/(D+E)<span>\${fmtP(dRatio*100,1)}</span></div>
        <div class="panel-row"><strong>WACC</strong><span><strong>\${fmtP(wacc*100,2)}</strong></span></div>
        <div class="panel-row">FCF Year 1<span>\${fmtM(fcfs[0])}</span></div>
        <div class="panel-row">FCF Year 5<span>\${fmtM(fcfs[4])}</span></div>
        <div class="panel-row">Terminal EBITDA<span>\${fmtM(ebitdaT)}</span></div>
        <div class="panel-row">TV (EMM)<span>\${fmtM(tvEMM)}</span></div>
        <div class="panel-row">TV (PGM)<span>\${fmtM(tvPGM)}</span></div>
      </div>
      <div class="panel">
        <div class="panel-title">Comps + LBO (Rosenbaum Ch.1, 4–5)</div>
        <div class="panel-row">Comps low<span>\${sL}x → \${fmtM(evCompsL)}</span></div>
        <div class="panel-row">Comps high<span>\${sH}x → \${fmtM(evCompsH)}</span></div>
        <div class="panel-row">Comps midpoint<span>\${fmtM(evCompsMid)}</span></div>
        <div class="panel-row">LBO entry EV<span>\${fmtM(lboEV)}</span></div>
        <div class="panel-row">Sponsor debt (~55%)<span>\${fmtM(lboDebt)}</span></div>
        <div class="panel-row">Sponsor equity<span>\${fmtM(lboEq)}</span></div>
        <div class="panel-row">Exit EBITDA (Yr5)<span>\${fmtM(ebitdaT)}</span></div>
        <div class="panel-row">Exit equity<span>\${fmtM(exitEq)}</span></div>
        <div class="panel-row">MOIC<span>\${fmtX(lboMOIC,2)}</span></div>
        <div class="panel-row"><strong>LBO IRR</strong><span><strong>\${fmtP(lboIRR*100,1)}</strong></span></div>
      </div>\`;

    const wR=[wacc-.02,wacc-.01,wacc,wacc+.01,wacc+.02];
    const mR=[exitMult-1.5,exitMult-.5,exitMult,exitMult+.5,exitMult+1.5];
    let t='<tr><th>WACC↓ / Exit→</th>'+mR.map(m=>\`<th>\${m.toFixed(1)}x</th>\`).join('')+'</tr>';
    wR.forEach((w,wi)=>{
      t+=\`<tr><td style="color:var(--text)">\${fmtP(w*100,1)}</td>\`;
      mR.forEach((m,mi)=>{
        const pv=fcfs.reduce((s,f,i)=>s+f/Math.pow(1+w,i+1),0);
        const ev2=pv+ebitdaT*m/Math.pow(1+w,5);
        const c=wi===2&&mi===2?'c0':ev2>evAvg*1.1?'hi':ev2<evAvg*.9?'lo':'';
        t+=\`<td class="\${c}">\${fmtM(ev2)}</td>\`;
      });
      t+='</tr>';
    });
    var dSens = document.getElementById('d-sens');
    if (dSens) dSens.innerHTML=t;

    const pts=[];let verdict='HOLD';
    const vs=(evAvg-evCompsMid)/evCompsMid*100;
    if(Math.abs(vs)<15) pts.push(\`DCF and comps are broadly aligned (\${fmt(Math.abs(vs),0)}% spread) — model assumptions consistent with market pricing.\`);
    else if(evAvg>evCompsMid){pts.push(\`DCF implies \${fmt(vs,0)}% premium to comps — growth assumptions may be aggressive.\`);}
    else{pts.push(\`DCF implies \${fmt(Math.abs(vs),0)}% discount to comps — potential value.\`);verdict='BUY';}
    if(lev>4.5){pts.push(\`Net debt/EBITDA \${fmtX(lev)} — elevated financial distress risk.\`);verdict='AVOID';}
    if(lboIRR>.25){pts.push(\`LBO IRR \${fmtP(lboIRR*100)} exceeds PE hurdle (20–25%) — strong sponsor candidate.\`);if(verdict!=='AVOID')verdict='BUY';}
    else if(lboIRR<.15) pts.push(\`LBO IRR \${fmtP(lboIRR*100)} below PE hurdle — unattractive for sponsors at current pricing.\`);
    if(margin>.25){pts.push(\`Strong EBITDA margin \${fmtP(margin*100)} — pricing power and operational efficiency.\`);if(verdict!=='AVOID')verdict='BUY';}
    else if(margin<.10){pts.push(\`Thin margin \${fmtP(margin*100)} — limited downside buffer.\`);if(verdict==='HOLD')verdict='AVOID';}
    pts.push(\`WACC of \${fmtP(wacc*100)} (CAPM-derived, \${fmtP(dRatio*100)} debt weight) — \${wacc>.12?'elevated':'within normal range'}.\`);
    const b=document.getElementById('d-badge');
    if(b){ b.textContent=verdict; b.className='verdict-badge '+(verdict==='BUY'?'v-buy':verdict==='AVOID'?'v-avoid':'v-hold'); }
    var dVerdict = document.getElementById('d-verdict');
    if (dVerdict) dVerdict.innerHTML=pts.map(p=>\`<li>\${p}</li>\`).join('');

    if(Array.isArray(filings)&&filings.length){
      var filingViz = vizFilingsByDay(filings, 14);
      if (filingViz.entries && filingViz.entries.length > 0) {
        var dVizF = document.getElementById('d-viz-filings');
        if (dVizF) { dVizF.style.display = 'block'; }
        var dVizMeta = document.getElementById('d-viz-filings-meta');
        if (dVizMeta) dVizMeta.textContent = 'Last 14 days · ' + filingViz.entries.length + ' day(s) with activity · ' + filings.length + ' total filing(s)';
        var dVizBars = document.getElementById('d-viz-filings-bars');
        if (dVizBars) dVizBars.innerHTML = filingViz.entries.map(function(e) {
          var pct = filingViz.maxCnt > 0 ? (e[1] / filingViz.maxCnt) : 0;
          var hPx = Math.max(6, Math.round(pct * 44));
          return '<div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end"><div class="viz-filings-day-bar" style="height:' + hPx + 'px;width:100%;" title="' + e[0] + ': ' + e[1] + '"></div><span class="viz-filings-day-lbl">' + (e[0].length >= 10 ? e[0].slice(5) : e[0]) + '</span></div>';
        }).join('');
      } else {
        var dVizF2 = document.getElementById('d-viz-filings');
        if (dVizF2) dVizF2.style.display = 'none';
        var dVizMeta2 = document.getElementById('d-viz-filings-meta');
        if (dVizMeta2) dVizMeta2.textContent = '';
      }
      var dFilings = document.getElementById('d-filings');
      if (dFilings) dFilings.innerHTML=filings.map(f=>{
        const link=f.acc?\`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=\${cik}&type=\${f.type}&dateb=&owner=include&count=10\`:'#';
        const fc=f.type.includes('13D')?'cR':f.type.includes('S-4')||f.type.includes('DEFM')?'cC':f.type==='8-K'?'cY':'';
        return \`<div class="filing-row"><span class="f-type \${fc}">\${f.type}</span><span class="f-entity">\${f.entity}</span><span class="f-date">\${f.date}</span><a class="f-link" href="\${link}" target="_blank">EDGAR ↗</a></div>\`;
      }).join('');
    } else {
      var dVizF3 = document.getElementById('d-viz-filings');
      if (dVizF3) dVizF3.style.display = 'none';
      var dVizMeta3 = document.getElementById('d-viz-filings-meta');
      if (dVizMeta3) dVizMeta3.textContent = '';
      var dFilings2 = document.getElementById('d-filings');
      if (dFilings2) dFilings2.innerHTML='<div style="padding:16px;font-family:var(--mono);font-size:11px;color:var(--muted2)">No recent filings retrieved — CIK may not have been resolved. Try a major ticker like AAPL, MSFT, NVDA.</div>';
    }

    var dDisc = document.getElementById('d-disc');
    if (dDisc) dDisc.textContent='Sources: SEC EDGAR XBRL API (data.sec.gov, no auth required). Methodology: Rosenbaum & Pearl (Ch.1–5), Damodaran (Ch.11–12, 17–20). CAPM (Ex.3.15), WACC (Ex.3.19), FCF (Ex.3.3), TV-EMM (Ex.3.20), TV-PGM (Ex.3.21), EV/Sales (Ch.20). Educational use only. Not financial advice.';
    }
    setTimeout(paintDeferred, 0);

  } catch(err){
    var dLoad = document.getElementById('d-load');
    if (dLoad) dLoad.classList.remove('show');
    var dBtn = document.getElementById('d-btn');
    if (dBtn) dBtn.disabled = false;
    setErr('d-err', err && (err.message || String(err)) || 'Unknown error');
    console.error(err);
  }
}


const cryptoData={};
let ws=null;

const COIN_MAP={BTC:'bitcoin',ETH:'ethereum',SOL:'solana',BNB:'binancecoin',XRP:'ripple',ADA:'cardano'};

function updateCard(sym,price,chgPct,vol24h){
  const el=document.getElementById('cc-'+sym);
  if(!el)return;
  const p=typeof price==='number'&&isFinite(price)?price:0;
  const chg=typeof chgPct==='number'&&isFinite(chgPct)?chgPct:0;
  const fp=p>1000?'$'+p.toLocaleString('en',{maximumFractionDigits:2}):p>1?'$'+p.toFixed(3):'$'+p.toFixed(5);
  const cls=chg>=0?'cG':'cR';
  var barPct = Math.min(100, Math.abs(chg) * 2.5);
  var barColor = chg >= 0 ? 'var(--green)' : 'var(--red)';
  var volStr = (typeof vol24h === 'number' && isFinite(vol24h) && vol24h >= 0) ? (vol24h / 1e9).toFixed(2) : '0';
  el.innerHTML='<div class="cc-sym">'+String(sym).replace(/[<>"']/g,'')+'</div><div class="cc-px '+cls+'">'+fp+'</div><div class="cc-chg '+cls+'">'+(chg>=0?'▲':'▼')+' '+Math.abs(chg).toFixed(2)+'%</div>'+
    '<div class="viz-crypto-bar-wrap"><div class="viz-crypto-bar-track"><div class="viz-crypto-bar-fill" style="width:'+barPct+'%;background:'+barColor+'" title="24h price change"></div></div><div class="viz-crypto-bar-lbl" style="font-size:8px;color:var(--muted2);margin-top:2px">24h change (bar length ∝ magnitude)</div></div>'+
    '<div class="cc-meta"><span>Vol $'+volStr+'B/24h</span></div>';
  cryptoData[sym]={price:p,chgPct:chg};
}

async function fetchCryptoREST(){
  const ids = Object.values(COIN_MAP).join(',');
  const idToSym = Object.fromEntries(Object.entries(COIN_MAP).map(([s,id])=>[id,s]));

  // Source 1: CoinGecko markets (full data)
  try {
    const url = \`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=\${ids}&order=market_cap_desc&per_page=10&page=1&sparkline=false\`;
    const r = await safeFetch(url, {}, 5000);
    if(r.ok) {
      const arr = await r.json();
      if(Array.isArray(arr) && arr.length > 0) {
        arr.forEach(c => {
          const sym = idToSym[c.id];
          if(sym) updateCard(sym, c.current_price, c.price_change_percentage_24h||0, c.total_volume||0);
        });
        return;
      }
    }
  } catch(e) {}

  // Source 2: CoinGecko simple/price (lightweight)
  try {
    const url = \`https://api.coingecko.com/api/v3/simple/price?ids=\${ids}&vs_currencies=usd&include_24hr_change=true\`;
    const r = await safeFetch(url, {}, 4500);
    if(r.ok) {
      const d = await r.json();
      let filled = 0;
      Object.entries(COIN_MAP).forEach(([sym,id]) => {
        const q = d[id];
        if(q && typeof q.usd === 'number') { updateCard(sym, q.usd, q.usd_24h_change||0, 0); filled++; }
      });
      if (filled > 0) return;
    }
  } catch(e) {}

  // Source 3: Binance REST (free, no key) — try direct then proxy
  let binanceArr = null;
  try {
    const r = await safeFetch('https://api.binance.com/api/v3/ticker/24hr', {}, 4500);
    if (r.ok) binanceArr = await r.json();
  } catch(e) {}
  if (!binanceArr || !Array.isArray(binanceArr)) {
    try {
      const p = await viaProxy('https://api.binance.com/api/v3/ticker/24hr');
      if (Array.isArray(p.json)) binanceArr = p.json;
    } catch(e2) {}
  }
  if (Array.isArray(binanceArr) && binanceArr.length > 0) {
    const pairToSym = { BTCUSDT:'BTC', ETHUSDT:'ETH', SOLUSDT:'SOL', BNBUSDT:'BNB', XRPUSDT:'XRP', ADAUSDT:'ADA' };
    binanceArr.forEach(t => {
      const sym = pairToSym[t.symbol];
      if (sym && t.lastPrice && t.priceChangePercent) {
        const price = parseFloat(t.lastPrice);
        const chg = parseFloat(t.priceChangePercent);
        const vol = (parseFloat(t.volume) || 0) * (parseFloat(t.lastPrice) || 0);
        updateCard(sym, price, chg, vol);
      }
    });
    return;
  }

  Object.keys(COIN_MAP).forEach(sym => {
    const el = document.getElementById('cc-'+sym);
    if(el) {
      const px = el.querySelector('.cc-px');
      if(px && (px.textContent==='Connecting…'||px.textContent==='—')) px.textContent='Unavailable';
    }
  });
}

function initBinanceWS(){
  const pairs=['btcusdt','ethusdt','solusdt','bnbusdt','xrpusdt','adausdt'];
  const streams=pairs.map(p=>p+'@miniTicker').join('/');
  try {
    ws=new WebSocket(\`wss://stream.binance.com:9443/stream?streams=\${streams}\`);
    ws.onopen=()=>console.log('Binance WS connected');
    ws.onmessage=e=>{
      try{
        const msg=JSON.parse(e.data);
        const d=msg.data;
        if(!d?.s)return;
        const sym=d.s.replace('USDT','');
        updateCard(sym,+d.c,(+d.c-+d.o)/+d.o*100,+d.v*+d.c);
      }catch(e){}
    };
    ws.onerror=()=>{
      console.log('Binance WS failed, falling back to CoinGecko REST');
      fetchCryptoREST().catch(()=>document.querySelectorAll('.cc-px').forEach(el=>{if(el.textContent==='Connecting…')el.textContent='Data unavailable';}));
    };
    ws.onclose=()=>{
      setTimeout(()=>{if(document.getElementById('pane-crypto').classList.contains('active'))initBinanceWS();},5000);
    };
  } catch(e){
    fetchCryptoREST().catch(console.warn);
  }
}

let cryptoStarted=false;

function startCrypto(){
  if(cryptoStarted)return;
  cryptoStarted=true;
  initBinanceWS();
  setTimeout(()=>{
    const stale=Array.from(document.querySelectorAll('.cc-px')).some(
      el=>el.textContent==='Connecting…'||el.textContent==='—'
    );
    if(stale) fetchCryptoREST().catch(()=>{
      document.querySelectorAll('.cc-px').forEach(el=>{
        if(el.textContent==='Connecting…'||el.textContent==='—') el.textContent='Unavailable';
      });
    });
  },4500);
}

document.getElementById('tab-crypto').addEventListener('click',startCrypto);

function runCrypto(){
  const sym=S('c-asset'), usersM=G('c-users'), volB=G('c-vol');
  const supplyM=G('c-supply'), txvolT=G('c-txvol'), benchNVT=G('c-nvt');
  if(!usersM||!supplyM){alert('Enter active addresses and supply.');return;}

  const livePrice=cryptoData[sym]?.price||null;
  const supply=supplyM*1e6;
  const mktCap=livePrice?livePrice*supply:null;

  const kMap={BTC:1.5,ETH:0.8,SOL:0.3};
  const k=kMap[sym]||0.5;
  const metcalfeMC=k*usersM*usersM*1e9;
  const metcalfePrice=metcalfeMC/supply;

  const annualTx=txvolT*1e12;
  const nvtFairMC=benchNVT*annualTx;
  const nvtPrice=nvtFairMC/supply;
  const currentNVT=mktCap&&annualTx?mktCap/annualTx:null;

  const avgFair=(metcalfePrice+nvtPrice)/2;
  const disc=livePrice&&avgFair?(livePrice/avgFair-1)*100:null;

  show('c-results');

  document.getElementById('c-metrics').innerHTML=
    mc('Live Price',livePrice?'$'+(livePrice>1?livePrice.toLocaleString('en',{maximumFractionDigits:2}):livePrice.toFixed(5)):'—','Binance WS / CoinGecko','cA','Current market price from live feed.','Real life: CoinGecko or Binance; updates on load.')+
    mc('Metcalfe Fair',livePrice||metcalfePrice>1?'$'+metcalfePrice.toFixed(2):'$'+metcalfePrice.toFixed(5),'n² network model','cC','Fair value from Metcalfe-style model: value ∝ (active addresses)².','Real life: Damodaran Ch.20; network effects. Higher users → higher value.')+
    mc('NVT Fair',nvtPrice>1?'$'+nvtPrice.toFixed(2):'$'+nvtPrice.toFixed(5),'NVT='+fmt(benchNVT,0)+'x benchmark','cY','Fair value from NVT (Network Value / Transactions) at your benchmark.','Real life: Like EV/revenue for crypto. Higher NVT = richer valuation.')+
    mc('Blended Fair','$'+(avgFair>1?avgFair.toFixed(2):avgFair.toFixed(5)),'(Metcalfe+NVT)/2','cG','Average of Metcalfe and NVT fair values.','Real life: Simple blend of two network-value approaches.')+
    mc('Current NVT',currentNVT?fmt(currentNVT,0):'—','vs '+benchNVT+'x benchmark',currentNVT&&currentNVT>benchNVT*1.5?'cR':currentNVT&&currentNVT<benchNVT*0.7?'cG':'cY','Market cap ÷ annualized transaction volume.','Real life: Above benchmark = expensive vs activity; below = cheap.')+
    mc('Mkt Cap',mktCap?fmtM(mktCap):'—','Supply × price','','Circulating supply × current price.','Real life: Total value of all coins in circulation.')+
    mc('vs Fair',disc!=null?(disc>0?'+':'')+fmtP(disc,1):'—','+ = overvalued vs models',disc==null?'':disc>20?'cR':disc<-20?'cG':'cY','% difference between live price and blended fair value.','Real life: +20% = 20% overvalued vs our models; −20% = undervalued.');

  document.getElementById('c-panels').innerHTML=\`
    <div class="panel">
      <div class="panel-title">Metcalfe's Law — Damodaran Ch.20</div>
      <div class="panel-row">Formula<span>Value ∝ n²</span></div>
      <div class="panel-row">Active addresses<span>\${usersM}M</span></div>
      <div class="panel-row">Network coefficient k<span>$\${k}B/(M users)²</span></div>
      <div class="panel-row">Implied market cap<span>\${fmtM(metcalfeMC)}</span></div>
      <div class="panel-row">Implied price<span>$\${metcalfePrice>1?metcalfePrice.toFixed(2):metcalfePrice.toFixed(5)}</span></div>
      <div style="font-size:11px;color:var(--muted2);margin-top:12px;line-height:1.75">Damodaran argues digital assets derive value from network effects — each new participant adds value for all existing ones, making network size the primary driver. Works like his subscriber value model (Ch.20).</div>
    </div>
    <div class="panel">
      <div class="panel-title">NVT Ratio — Crypto EV/Revenue</div>
      <div class="panel-row">Formula<span>NVT = MktCap / Annual Tx Vol</span></div>
      <div class="panel-row">Annualized tx volume<span>$\${txvolT}T</span></div>
      <div class="panel-row">Benchmark NVT<span>\${benchNVT}x</span></div>
      <div class="panel-row">Current NVT<span>\${currentNVT?fmt(currentNVT,1):'—'}</span></div>
      <div class="panel-row">NVT fair market cap<span>\${fmtM(nvtFairMC)}</span></div>
      <div class="panel-row">NVT fair price<span>$\${nvtPrice>1?nvtPrice.toFixed(2):nvtPrice.toFixed(5)}</span></div>
      <div style="font-size:11px;color:var(--muted2);margin-top:12px;line-height:1.75">NVT mirrors Damodaran's EV/Sales ratio — high NVT means you're paying a premium vs transaction utility. Benchmark varies: BTC ≈ 40–70x, ETH ≈ 20–40x at historical fair value.</div>
    </div>\`;

  const cp=[];let cv='HOLD';
  if(disc!=null){
    if(disc>30){cp.push(\`Live price is \${fmtP(disc,0)} above fair value models — network metrics suggest overvaluation.\`);cv='AVOID';}
    else if(disc<-30){cp.push(\`Live price is \${fmtP(Math.abs(disc),0)} below fair value models — network metrics suggest undervaluation.\`);cv='BUY';}
    else cp.push(\`Price broadly in line with network-based fair value (\${fmtP(Math.abs(disc),0)}% gap).\`);
  }
  if(currentNVT&&benchNVT){
    if(currentNVT>benchNVT*1.5) cp.push(\`NVT \${fmt(currentNVT,0)}x well above \${benchNVT}x benchmark — low transaction utility relative to price.\`);
    else if(currentNVT<benchNVT*0.6) cp.push(\`NVT \${fmt(currentNVT,0)}x below \${benchNVT}x benchmark — strong utility value.\`);
    else cp.push(\`NVT \${fmt(currentNVT,0)}x near \${benchNVT}x benchmark — roughly fairly priced on utility.\`);
  }
  cp.push(\`Metcalfe model implies $\${metcalfePrice>1?metcalfePrice.toFixed(2):metcalfePrice.toFixed(5)} per coin (\${usersM}M active addresses, k=\${k}).\`);
  const cb=document.getElementById('c-badge');
  cb.textContent=cv;cb.className='verdict-badge '+(cv==='BUY'?'v-buy':cv==='AVOID'?'v-avoid':'v-hold');
  document.getElementById('c-verdict').innerHTML=cp.map(p=>\`<li>\${p}</li>\`).join('');
}



async function runMacro(){
  document.getElementById('m-load').classList.add('show');
  hide('m-results');
  document.getElementById('m-btn').disabled=true;

  let notices=[];

  try {
    setLog('m-log','Fetching key rates (10Y, Fed, curve, unemployment)…');

    const criticalFred = await Promise.allSettled([
      fetchFRED('DGS10'),
      fetchFRED('DFF'),
      fetchFRED('T10Y2Y'),
      fetchFRED('UNRATE'),
    ]);
    const get = r => r.status==='fulfilled' ? r.value : null;
    let yld10     = get(criticalFred[0])?.val  ?? null;
    let fedFunds  = get(criticalFred[1])?.val ?? null;
    let yieldCurve= get(criticalFred[2])?.val  ?? null;
    let unrateVal = get(criticalFred[3])?.val ?? null;

    let cpiVal=null, cpiPrev=null, gdpVal=null, gdpPrev=null, houstVal=null;
    let cpiYoY=null, gdpGrowth=null;
    let spxQ=null, ndqQ=null, djiQ=null, vixClose=null;

    let growthRising = (yieldCurve!=null&&yieldCurve>0);
    let inflationRising = (yld10!=null&&yld10>4.5);

    document.getElementById('m-load').classList.remove('show');
    document.getElementById('m-btn').disabled=false;
    show('m-results');
    setLog('m-log','Loading CPI, GDP, housing, indices…');

    function renderMacroUI(){
      growthRising = (yieldCurve!=null&&yieldCurve>0) || (gdpGrowth!=null&&gdpGrowth>2.5);
      inflationRising = (cpiYoY!=null&&cpiYoY>3.0) || (yld10!=null&&yld10>4.5);
      const regimes=[
      {
        id:'RG',label:'RISING GROWTH\\nFALLING INFLATION',
        short:'Risk-On Boom',
        desc:'Economy expanding, inflation contained. Equity bull market. Tightest credit spreads. Highest M&A activity, most deal leverage available.',
        assets:'Equities, Corporate Bonds, Commodities, Real Estate',
        dealEnv:'FAVORABLE — high multiples, cheap debt, active deal market',
        active: growthRising&&!inflationRising
      },
      {
        id:'RG-RI',label:'RISING GROWTH\\nRISING INFLATION',
        short:'Inflationary Expansion',
        desc:'Economy growing but inflation heating up. Fed may tighten. Commodities outperform. Credit still available but spreads widening.',
        assets:'Commodities, TIPS, Equities (early), Real Assets',
        dealEnv:'MIXED — deal activity elevated but financing costs rising',
        active: growthRising&&inflationRising
      },
      {
        id:'FG',label:'FALLING GROWTH\\nFALLING INFLATION',
        short:'Deflationary Slowdown',
        desc:'Economy decelerating, inflation cooling. Bonds perform. Recession risk elevated. Deal activity slows, sponsors cautious.',
        assets:'Long-duration Bonds, Gold, Cash',
        dealEnv:'CAUTIOUS — deal volumes fall, multiples compress',
        active: !growthRising&&!inflationRising
      },
      {
        id:'FG-RI',label:'FALLING GROWTH\\nRISING INFLATION',
        short:'Stagflation',
        desc:'Worst macro environment — GDP contracting while inflation rises. Dalio calls this the most difficult regime. Severe multiple compression.',
        assets:'Gold, Commodities, Short-duration Bonds',
        dealEnv:'HOSTILE — multiple compression, credit tightening, deal freeze',
        active: !growthRising&&inflationRising
      },
    ];

    const activeRegime = regimes.find(r=>r.active)||regimes[2];

    const stCyclePhase = yieldCurve!=null ? (
      yieldCurve>1.0 ? 'Expansion — yield curve steep, credit expansive' :
      yieldCurve>0   ? 'Mid-cycle — curve normalizing, growth moderating' :
      yieldCurve>-0.5? 'Late cycle — curve flattening, tightening underway' :
                       'Inversion — historically precedes recession by 12–18 months'
    ) : 'Yield curve data unavailable — checking other indicators';

    const ltCyclePhase = (fedFunds!=null&&fedFunds>4) ?
      'Late long-term cycle — high rates, debt servicing pressure elevated. Dalio signals risk of deleveraging.' :
      (fedFunds!=null&&fedFunds<2) ?
      'Early/mid cycle — low rates, debt expansion phase. Dalio: leverage building in system.' :
      'Mid long-term cycle — rates normalizing. Monitoring debt-to-GDP trajectory.';

    if(notices.length){
      const nb=document.getElementById('m-notice');
      nb.innerHTML=notices.join('<br>');
      nb.classList.add('show');
    }

    document.getElementById('dalio-grid').innerHTML=regimes.map(r=>{
      const tip = r.desc;
      const ex = 'Real life: '+r.dealEnv;
      const esc = (s)=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      return \`<div class="dalio-cell\${r.active?' dalio-active':''}">
        <div class="regime-bar" style="background:\${r.id==='RG'?'var(--green)':r.id==='RG-RI'?'var(--yellow)':r.id==='FG'?'var(--cyan)':'var(--red)'}"></div>
        <div class="dalio-label" data-tooltip="\${esc(tip)}" data-tooltip-example="\${esc(ex)}">\${r.short}</div>
        <div class="dalio-desc">\${r.desc}</div>
        <div class="dalio-assets">▶ \${r.assets}</div>
      </div>\`;
    }).join('');

    document.getElementById('st-cycle').innerHTML=\`
      <div class="panel-row">Yield curve (10Y–2Y)<span style="color:\${yieldCurve==null?'var(--muted2)':yieldCurve<0?'var(--red)':yieldCurve<0.5?'var(--yellow)':'var(--green)'}">\${yieldCurve!=null?fmt(yieldCurve,2)+'%':'—'}</span></div>
      <div class="panel-row">Fed Funds Rate<span>\${fedFunds!=null?fmt(fedFunds,2)+'%':'—'}</span></div>
      <div class="panel-row">10Y Treasury<span>\${yld10!=null?fmt(yld10,2)+'%':'—'}</span></div>
      <div class="panel-row">Phase assessment<span style="max-width:200px;text-align:right;white-space:normal;font-size:10px;color:var(--text)">\${stCyclePhase}</span></div>\`;

    document.getElementById('lt-cycle').innerHTML=\`
      <div class="panel-row">Fed Funds Rate<span>\${fedFunds!=null?fmt(fedFunds,2)+'%':'—'}</span></div>
      <div class="panel-row">Real GDP trend<span>\${gdpGrowth!=null?fmtP(gdpGrowth)+' ann.':'—'}</span></div>
      <div class="panel-row">Housing starts<span>\${houstVal!=null?houstVal.toFixed(0)+'K':'—'}</span></div>
      <div class="panel-row">Phase assessment<span style="max-width:200px;text-align:right;white-space:normal;font-size:10px;color:var(--text)">\${ltCyclePhase}</span></div>\`;

    const idxItems = [[spxQ,'S&P 500'],[ndqQ,'NASDAQ'],[djiQ,'DOW']];
    const stripHtml = idxItems
      .filter(([q])=>q&&q.price!=null)
      .map(([q,lbl])=>{
        const chg = q.changePct ?? 0;
        const px  = q.price.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2});
        return \`<div class="ti"><span class="ti-sym">\${lbl}</span><span class="ti-px">\${px}</span><span class="ti-chg \${chg>=0?'ti-up':'ti-dn'}">\${chg>=0?'▲':'▼'} \${Math.abs(chg).toFixed(2)}%</span></div>\`;
      }).join('');
    document.getElementById('m-strip').innerHTML =
      (stripHtml || '<span style="color:var(--muted2);font-size:11px;font-family:var(--mono)">Index data loading via proxy — may take a moment.</span>') +
      '<div class="strip-src"><span class="dot-live"></span>YAHOO FINANCE</div>';

    document.getElementById('m-metrics').innerHTML=
      mc('10Y Treasury',yld10!=null?fmtP(yld10,2):'—','Risk-free rate (FRED DGS10)',yld10!=null&&yld10>5?'cR':yld10!=null&&yld10<3?'cG':'cY','Yield on 10-year US Treasury. Used as risk-free rate in valuation.','Real life: In 2024 often 4–4.5%. Inverted vs 2Y when curve inverts.')+
      mc('Fed Funds',fedFunds!=null?fmtP(fedFunds,2):'—','FRED DFF','','Federal Funds Rate — the rate banks charge each other overnight. Set by the Fed.','Real life: 4.25–5.5% in 2023–24. Drives short rates and Dalio debt-cycle read.')+
      mc('Yield Curve',yieldCurve!=null?fmtP(yieldCurve,2):'—','10Y–2Y (FRED T10Y2Y)',yieldCurve==null?'':yieldCurve<0?'cR':yieldCurve<0.5?'cY':'cG','10Y minus 2Y Treasury yield. Negative = inverted, a recession signal.','Real life: Inverted in 2022–23. Historically precedes recession by 12–18 months.')+
      mc('Unemployment',unrateVal!=null?fmtP(unrateVal,1):'—','FRED UNRATE',unrateVal!=null&&unrateVal>5?'cR':unrateVal!=null&&unrateVal<4?'cG':'cY','US unemployment rate. Key for growth and Fed policy.','Real life: Below 4% = tight labor; above 5% = slack. FRED UNRATE.')+
      mc('CPI MoM Ann.',cpiYoY!=null?fmtP(cpiYoY,1):'—','FRED CPIAUCSL',cpiYoY!=null&&cpiYoY>4?'cR':cpiYoY!=null&&cpiYoY<2?'cG':'cY','CPI year-over-year (annualized). Main inflation gauge.','Real life: Fed target ~2%. Above 4% = high inflation; below 2% = low.')+
      mc('Real GDP Ann.',gdpGrowth!=null?fmtP(gdpGrowth,1):'—','FRED GDPC1',gdpGrowth!=null&&gdpGrowth<1?'cR':gdpGrowth!=null&&gdpGrowth>3?'cG':'cY','Real GDP growth annualized. Growth quadrant in Dalio.','Real life: 2–3% = trend; negative = contraction. FRED GDPC1.')+
      mc('VIX',vixClose?fmt(vixClose,1):'—','Volatility index',vixClose&&vixClose>25?'cR':vixClose&&vixClose<15?'cG':'cY','CBOE Volatility Index. Measures expected S&P 500 volatility.','Real life: Below 15 = calm; above 25 = fear. Used to adjust ERP in the platform.')+
      mc('Dalio Regime',activeRegime.short,'Current quadrant','cY','Current All Weather quadrant inferred from growth and inflation.','Real life: Risk-On Boom = best for deals; Stagflation = worst.') ;

    var macroVizHtml = vizMacroBars({ yld10: yld10, fedFunds: fedFunds, yieldCurve: yieldCurve, unrate: unrateVal, cpiYoY: cpiYoY });
    document.getElementById('m-viz-indicators-bars').innerHTML = macroVizHtml;
    document.getElementById('m-viz-indicators').style.display = macroVizHtml ? 'block' : 'none';

    document.getElementById('m-predict').innerHTML=[
      {title:'Democratic presidential nominee 2028',contracts:[{name:'Harris',p:0.18},{name:'Buttigieg',p:0.14},{name:'Other Dem',p:0.12}]},
      {title:'Fed rate cut at next FOMC meeting?',contracts:[{name:'Yes – cut 25bp',p:yld10&&yld10>4.5?0.30:0.55},{name:'No change',p:yld10&&yld10>4.5?0.60:0.35},{name:'Cut 50bp',p:0.10}]},
      {title:'Senate majority control 2026',contracts:[{name:'Republicans',p:0.58},{name:'Democrats',p:0.40}]},
      {title:'US recession in 2025?',contracts:[{name:'Yes',p:yieldCurve!=null&&yieldCurve<0?0.50:0.25},{name:'No',p:yieldCurve!=null&&yieldCurve<0?0.50:0.75}]},
      {title:'S&P 500 end of year vs start',contracts:[{name:'Higher',p:0.55},{name:'Lower',p:0.45}]},
    ].map(m=>\`
      <div class="pc">
        <div class="pc-title">\${m.title}</div>
        \${m.contracts.map(c=>{
          const pct=Math.round(c.p*100);
          return \`<div class="pc-row"><span class="pc-name">\${c.name}</span><div class="pc-track"><div class="pc-fill" style="width:\${pct}%;background:\${pct>60?'var(--green)':pct>40?'var(--yellow)':'var(--red)'}"></div></div><span class="pc-price">\${pct}¢</span></div>\`;
        }).join('')}
        <div style="font-family:var(--mono);font-size:8px;color:var(--muted);margin-top:8px">Live prices → predictit.org</div>
      </div>\`).join('');

    const erp=5.5+(vixClose&&vixClose>25?0.5:0)+(yieldCurve!=null&&yieldCurve<0?0.5:0);
    const creditTight=(yld10!=null&&yld10>5)||(fedFunds!=null&&fedFunds>5);
    const debtAvail=creditTight?'TIGHTENING':'ACCOMMODATIVE';
    const impliedMult=((8.5*(debtAvail==='ACCOMMODATIVE'?1.1:0.85))*(activeRegime.id==='RG'?1.05:activeRegime.id==='FG-RI'?0.85:1.0)).toFixed(1);

    document.getElementById('m-deal-metrics').innerHTML=
      mc('ERP Estimate',fmtP(erp),'Damodaran Ch.7 baseline + VIX adj','cA','Equity Risk Premium — extra return over risk-free rate. Baseline ~5.5%, adjusted for VIX and yield curve.','Real life: Damodaran publishes ERP; we add +0.5% when VIX>25 or curve inverted.')+
      mc('Credit Env.',debtAvail,'M&A financing signal',debtAvail==='ACCOMMODATIVE'?'cG':'cY','Whether credit is accommodative or tightening. Based on 10Y and Fed Funds.','Real life: Tightening when rates high; accommodative when low. Affects LBO and deal financing.')+
      mc('Implied M&A Multiple',impliedMult+'x','EV/EBITDA signal','cC','Implied EV/EBITDA for M&A from baseline 8.5x, adjusted for regime and credit.','Real life: Risk-On + accommodative → higher multiple; Stagflation → lower. Rosenbaum Ch.2.')+
      mc('Deal Confidence',activeRegime.id==='RG'?'HIGH':activeRegime.id==='FG-RI'?'LOW':'MODERATE','Dalio regime signal',activeRegime.id==='RG'?'cG':activeRegime.id==='FG-RI'?'cR':'cY','Synthesis: how favorable the macro regime is for deal-making.','Real life: HIGH in Risk-On; LOW in Stagflation.')+
      mc('Yield Curve Signal',yieldCurve==null?'—':yieldCurve<0?'INVERTED':yieldCurve<0.5?'FLAT':'NORMAL','Recession predictor',yieldCurve!=null&&yieldCurve<0?'cR':yieldCurve!=null&&yieldCurve<0.5?'cY':'cG','Summary of 10Y–2Y: NORMAL (steep), FLAT, or INVERTED.','Real life: INVERTED often 12–18 months before recession.')+
      mc('Dalio Phase',activeRegime.short,'All Weather quadrant','cY','Current quadrant label from the Dalio All Weather framework.','Real life: Same as Dalio Regime above; repeated here for deal-metrics context.');

    const mvPts=[];let mv='HOLD';
    mvPts.push(\`Current Dalio regime: <strong>\${activeRegime.short}</strong> — \${activeRegime.dealEnv}.\`);
    if(yieldCurve!=null){
      if(yieldCurve<0) mvPts.push(\`Yield curve inverted (\${fmtP(yieldCurve,2)}) — Dalio's short-term debt cycle signal: late cycle, historically precedes recession by 12–18 months.\`);
      else if(yieldCurve>1) mvPts.push(\`Yield curve steep (\${fmtP(yieldCurve,2)}) — supportive of growth, favorable for deal-making.\`);
      else mvPts.push(\`Yield curve at \${fmtP(yieldCurve,2)} — flattening, monitor for further compression.\`);
    } else {
      mvPts.push('Yield curve data unavailable — defaulting to other macro signals for regime classification.');
    }
    mvPts.push(\`Damodaran ERP estimate: \${fmtP(erp)} — \${erp>6?'elevated, compressing deal multiples':'within normal range, supportive of M&A pricing.'}\`);
    if(activeRegime.id==='RG'){mvPts.push('Dalio All Weather signal: RISK-ON — equities, corporate bonds, and real assets are preferred. M&A activity historically peaks in this quadrant.');mv='ACTIVE';}
    else if(activeRegime.id==='FG-RI'){mvPts.push('Dalio signal: STAGFLATION — most hostile deal environment. Gold and commodities as hedges; hold cash, defer leverage.');mv='CAUTIOUS';}
    else if(activeRegime.id==='RG-RI') mvPts.push('Dalio signal: Inflationary expansion — deal activity elevated but rising rates compress LBO returns. Focus on asset-heavy targets.');
    else mvPts.push('Dalio signal: Deflationary slowdown — bonds outperform. Deal volumes fall, sponsor caution warranted.');
    mvPts.push(\`Implied EV/EBITDA signal \${impliedMult}x (baseline 8.5x adjusted for credit conditions per Rosenbaum & Pearl Ch.2 macro context).\`);

    const mb=document.getElementById('m-badge');
    mb.textContent=mv==='ACTIVE'?'DEAL-ON':mv==='CAUTIOUS'?'CAUTIOUS':'MIXED';
    mb.className='verdict-badge '+(mv==='ACTIVE'?'v-active':mv==='CAUTIOUS'?'v-avoid':'v-hold');
    document.getElementById('m-verdict').innerHTML=mvPts.map(p=>\`<li>\${p}</li>\`).join('');
    }

    const fredFailed = [yld10,fedFunds,yieldCurve,unrateVal].every(v=>v==null);
    if(fredFailed) notices.push('FRED data is loading via proxy — may take a moment. If indicators show "—", click Fetch again.');

    renderMacroUI();

    const restFredAndYahoo = Promise.allSettled([
      fetchFRED('CPIAUCSL'),
      fetchFRED('GDPC1'),
      fetchFRED('HOUST'),
      fetchFRED('ICSA'),
      fetchYahoo('%5EGSPC'),
      fetchYahoo('%5EIXIC'),
      fetchYahoo('%5EDJI'),
    ]).then(async rest=>{
      const r_cpi=get(rest[0]), r_gdp=get(rest[1]), r_houst=get(rest[2]);
      cpiVal=r_cpi?.val??null; cpiPrev=r_cpi?.prev??null;
      gdpVal=r_gdp?.val??null; gdpPrev=r_gdp?.prev??null;
      houstVal=get(rest[3])?.val??null;
      cpiYoY=(cpiVal&&cpiPrev&&cpiPrev>0)?(cpiVal-cpiPrev)/cpiPrev*100*12:null;
      gdpGrowth=(gdpVal&&gdpPrev&&gdpPrev>0)?(gdpVal-gdpPrev)/gdpPrev*100*4:null;
      spxQ=get(rest[4]); ndqQ=get(rest[5]); djiQ=get(rest[6]);
      try { const vixR=await fetchYahoo('%5EVIX'); vixClose=vixR?.price??null; } catch(e){}
      renderMacroUI();
    });
    await restFredAndYahoo;

  } catch(err){
    var mLoad = document.getElementById('m-load');
    if (mLoad) mLoad.classList.remove('show');
    var mBtn = document.getElementById('m-btn');
    if (mBtn) mBtn.disabled = false;
    console.error('Macro error:',err);
    var nb = document.getElementById('m-notice');
    if (nb) { nb.innerHTML='Could not load macro data: '+(err&&(err.message||String(err))||'Unknown error')+'. Please check your connection and try again.'; nb.classList.add('show'); }
  }
}


async function runSEC(){
  const q=S('sc-q'), form=S('sc-form'), days=parseInt(S('sc-days'));
  document.getElementById('sc-err').classList.remove('show');
  document.getElementById('sc-load').classList.add('show');
  document.getElementById('sc-btn').disabled=true;
  hide('sc-results');

  const start=new Date();start.setDate(start.getDate()-days);
  const startStr=start.toISOString().split('T')[0];
  setLog('sc-log',\`Scanning EDGAR for "\${q}" in \${form} since \${startStr}…\`);

  try {
    const formParam = form.replace(/\\+/g,'%2B');
    const url=\`https://efts.sec.gov/LATEST/search-index?q=\${encodeURIComponent(q)}&forms=\${formParam}&dateRange=custom&startdt=\${startStr}\`;
    let hits=[];
    let total=0;

    try {
      const r=await safeFetch(url,{headers:{'User-Agent':'ArjunPortfolio kellogg@northwestern.edu'}},6000,0);
      if(r.ok){
        const d=await r.json();
        hits=Array.isArray(d?.hits?.hits)?d.hits.hits:[];
        total=typeof d?.hits?.total?.value==='number'?d.hits.total.value:hits.length;
      } else throw new Error('EDGAR '+r.status);
    } catch(e){
      try{
        const p=await viaProxy(url);
        const d=p?.json;
        if(!d) throw new Error('No JSON from proxy');
        hits=Array.isArray(d?.hits?.hits)?d.hits.hits:[];
        total=typeof d?.hits?.total?.value==='number'?d.hits.total.value:hits.length;
      }catch(e2){
        throw new Error('SEC EDGAR unreachable. EDGAR rate-limits requests — wait a moment and try again. ('+e.message+')');
      }
    }

    document.getElementById('sc-load').classList.remove('show');
    document.getElementById('sc-btn').disabled=false;
    show('sc-results');
    document.getElementById('sc-count').textContent=\`— \${total.toLocaleString()} total results, showing \${hits.length}\`;

    if(hits.length===0){
      document.getElementById('sc-viz-days').style.display = 'none';
      document.getElementById('sc-list').innerHTML='<div style="padding:20px;font-family:var(--mono);font-size:11px;color:var(--muted2)">No filings found for this query. Try broader terms or extend the date range.</div>';
      return;
    }

    var scByDay = {};
    hits.forEach(function(h) {
      var d = (h._source && h._source.file_date) ? (h._source.file_date + '').split('T')[0] : '';
      if (d) { scByDay[d] = (scByDay[d] || 0) + 1; }
    });
    var scEntries = Object.entries(scByDay).sort(function(a,b){ return a[0].localeCompare(b[0]); }).slice(-14);
    var scMaxCnt = scEntries.length ? Math.max.apply(null, scEntries.map(function(e){ return e[1]; })) : 1;
    if (scEntries.length > 0) {
      document.getElementById('sc-viz-days').style.display = 'block';
      document.getElementById('sc-viz-days-meta').textContent = 'Last 14 days shown · ' + hits.length + ' total filing(s) in search';
      document.getElementById('sc-viz-days-bars').innerHTML = scEntries.map(function(e) {
        var pct = scMaxCnt > 0 ? (e[1] / scMaxCnt) : 0;
        var hPx = Math.max(6, Math.round(pct * 44));
        return '<div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end"><div class="viz-filings-day-bar" style="height:' + hPx + 'px;width:100%;" title="' + e[0] + ': ' + e[1] + ' filing(s)"></div><span class="viz-filings-day-lbl">' + (e[0].length >= 10 ? e[0].slice(5) : e[0]) + '</span></div>';
      }).join('');
    } else {
      document.getElementById('sc-viz-days').style.display = 'none';
      document.getElementById('sc-viz-days-meta').textContent = '';
    }

    function esc(s){ if(s==null) return ''; const x=String(s); return x.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
    function normEntity(src){
      const dn=src.display_names;
      if(Array.isArray(dn)&&dn.length) return (dn[0]||'').trim()||src.entity_name||'Unknown';
      if(typeof dn==='string'&&dn.trim()) return dn.trim();
      return src.entity_name||'Unknown';
    }
    function normForm(src){
      const f=src.form||(Array.isArray(src.root_forms)&&src.root_forms[0])||src.form_type;
      return (f&&String(f).trim())||'—';
    }
    function normDate(src){
      const d=src.file_date;
      if(d==null||d==='') return '—';
      const s=typeof d==='string'?d.split('T')[0]:String(d).split('T')[0];
      return (s&&s.length>=10)?s:'—';
    }
    const scListEl=document.getElementById('sc-list');
    if(scListEl) scListEl.innerHTML=hits.map(h=>{
      const src=h._source||{};
      const ft=normForm(src);
      const entity=normEntity(src);
      const date=normDate(src);
      const cik=Array.isArray(src.ciks)?(src.ciks[0]||''):(src.ciks||'');
      const adsh=(src.adsh||'').toString().trim();
      const link=cik?\`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=\${encodeURIComponent(cik)}&type=\${encodeURIComponent(ft)}&dateb=&owner=include&count=10\`:\`https://efts.sec.gov/LATEST/search-index?q=\${encodeURIComponent(entity)}&forms=\${encodeURIComponent(ft)}\`;
      const fc=ft.includes('13D')?'cR':ft.includes('S-4')||ft.includes('DEFM')?'cC':ft==='8-K'?'cY':ft.includes('13G')?'':'';
      const entityStr=String(entity).substring(0,55)+(entity.length>55?'…':'');
      return \`<div class="filing-row"><span class="f-type \${fc}">\${esc(ft)}</span><span class="f-entity">\${esc(entityStr)}</span><span class="f-date">\${esc(date)}</span><a class="f-link" href="\${link}" target="_blank" rel="noopener">EDGAR ↗</a></div>\`;
    }).join('');

  } catch(err){
    var scLoad = document.getElementById('sc-load');
    if (scLoad) scLoad.classList.remove('show');
    var scBtn = document.getElementById('sc-btn');
    if (scBtn) scBtn.disabled = false;
    setErr('sc-err', err && (err.message || String(err)) || 'Unknown error');
  }
}

let secLoaded=false, macroLoaded=false;

document.getElementById('tab-screen').addEventListener('click',()=>{
  if(!secLoaded){ secLoaded=true; setTimeout(runSEC,300); }
});
document.getElementById('tab-macro').addEventListener('click',()=>{
  if(!macroLoaded){ macroLoaded=true; setTimeout(runMacro,300); }
});

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('#pane-deals input').forEach(el=>
    el.addEventListener('keydown',e=>{if(e.key==='Enter')runDeal();}));

  var tipEl = document.getElementById('fp-tooltip');
  if (tipEl) {
    function showTip(el) {
      var text = el.getAttribute('data-tooltip');
      var example = el.getAttribute('data-tooltip-example');
      var input = el.getAttribute('data-tooltip-input');
      if (!text && !example && !input) return;
      tipEl.innerHTML = (text ? '<div class="fp-tt-desc">' + String(text).replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>' : '') + (example ? '<div class="fp-tt-example">' + String(example).replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>' : '') + (input ? '<div class="fp-tt-input">' + String(input).replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>' : '');
      var r = el.getBoundingClientRect();
      var x = r.left + (r.width/2);
      var y = r.bottom + 6;
      var tw = 280;
      var th = 80;
      tipEl.style.left = Math.max(8, Math.min(x - tw/2, window.innerWidth - tw - 8)) + 'px';
      var top = y + 8;
      if (top + th > window.innerHeight - 8) top = r.top - th - 8;
      tipEl.style.top = Math.max(8, top) + 'px';
      tipEl.classList.add('show');
      tipEl.setAttribute('aria-hidden','false');
    }
    function hideTip() {
      tipEl.classList.remove('show');
      tipEl.setAttribute('aria-hidden','true');
    }
    document.body.addEventListener('mouseover', function(e) {
      var trigger = e.target && e.target.closest ? e.target.closest('[data-tooltip], [data-tooltip-example], [data-tooltip-input]') : null;
      if (trigger) showTip(trigger);
      else hideTip();
    });
    document.body.addEventListener('mouseout', function(e) {
      var related = e.relatedTarget;
      var from = e.target;
      if (!from || !from.closest) return;
      var trigger = from.closest('[data-tooltip], [data-tooltip-example], [data-tooltip-input]');
      if (trigger && (!related || !trigger.contains(related))) hideTip();
    });
  }
});
<\/script>
</body>
</html>`,C=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{b as _,R as i};
