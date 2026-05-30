@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;800;900&display=swap');

:root {
  --bg: #f6efe5;
  --surface: #fffaf2;
  --ink: #21150f;
  --muted: #735f52;
  --coffee: #4a281b;
  --coffee-2: #1c100b;
  --gold: #c7954a;
  --line: rgba(74, 40, 27, 0.14);
  --success: #2f7d4f;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: "Noto Sans TC", system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.7;
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }

.announcement {
  background: var(--coffee-2);
  color: #f5d9a4;
  text-align: center;
  padding: 9px 16px;
  font-weight: 800;
  font-size: 14px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px clamp(20px, 5vw, 64px);
  background: rgba(246, 239, 229, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--coffee);
  color: var(--gold);
  font-size: 24px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  font-weight: 700;
}

.admin-link {
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--coffee);
  color: white;
}

.nav-toggle {
  display: none;
  border: 0;
  background: transparent;
  font-size: 26px;
}

.hero {
  min-height: 88vh;
  padding: 80px clamp(22px, 6vw, 88px);
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  gap: 44px;
  align-items: center;
  background:
    radial-gradient(circle at 78% 24%, rgba(199, 149, 74, 0.35), transparent 28%),
    linear-gradient(135deg, #f6efe5 0%, #fffaf2 46%, #d6b486 100%);
}

.hero-copy { max-width: 820px; }

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 13px;
}

h1, h2, h3 { line-height: 1.16; }

h1 {
  margin: 0 0 24px;
  font-size: clamp(42px, 6vw, 82px);
  letter-spacing: -0.04em;
}

h2 {
  margin: 0 0 14px;
  font-size: clamp(30px, 4vw, 48px);
  letter-spacing: -0.03em;
}

h3 {
  margin: 0 0 12px;
  font-size: 24px;
}

.hero-copy p {
  max-width: 680px;
  color: var(--muted);
  font-size: 18px;
}

.business-info {
  display: grid;
  gap: 8px;
  margin-top: 20px;
  color: var(--coffee);
  font-weight: 900;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 13px 22px;
  border-radius: 999px;
  font-weight: 900;
  cursor: pointer;
  font: inherit;
}

.primary { background: var(--gold); color: #1d120d; }
.secondary { border-color: var(--coffee); color: var(--coffee); background: transparent; }

.hero-visual {
  margin: 0;
  border-radius: 38px;
  overflow: hidden;
  box-shadow: 0 34px 90px rgba(74, 40, 27, .25);
  transform: rotate(1deg);
}

.hero-visual img {
  width: 100%;
  height: min(58vw, 520px);
  object-fit: cover;
}

.section {
  padding: 92px clamp(22px, 6vw, 88px);
  max-width: 1240px;
  margin: auto;
}

.section-head {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-head p { color: var(--muted); }

.trust-section { padding-top: 42px; padding-bottom: 42px; }

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.trust-grid article {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 14px 34px rgba(74, 40, 27, .08);
}

.trust-grid strong {
  display: block;
  font-size: 22px;
}

.trust-grid span {
  color: var(--muted);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;
}

.filter {
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
}

.filter.active {
  background: var(--coffee);
  color: white;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.menu-item, .form-card, .event-card, .panel, .stat {
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 18px 50px rgba(74, 40, 27, 0.10);
  border-radius: 28px;
}

.menu-item {
  overflow: hidden;
}

.menu-item > img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.menu-body { padding: 22px; }

.menu-item p {
  min-height: 56px;
  color: var(--muted);
}

.pill {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(199, 149, 74, 0.18);
  color: var(--coffee);
  font-size: 12px;
  font-weight: 900;
}

.mini-btn {
  width: 100%;
  margin-top: 18px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--coffee);
  border-radius: 999px;
  padding: 10px 12px;
  font-weight: 900;
  cursor: pointer;
}

.split {
  padding: 92px clamp(22px, 6vw, 88px);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px;
  align-items: start;
  background: var(--surface);
}

.split p { color: var(--muted); }

.side-image {
  margin-top: 26px;
  border-radius: 30px;
  box-shadow: 0 24px 60px rgba(74, 40, 27, .14);
}

.form-card {
  display: grid;
  gap: 16px;
  padding: 28px;
}

label {
  display: grid;
  gap: 6px;
  font-weight: 800;
}

input, select, textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 13px 15px;
  font: inherit;
  background: #fff;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.form-status {
  margin: 0;
  color: var(--success);
  font-weight: 900;
}

.form-status.light {
  color: #f5d9a4;
}

.dark {
  max-width: none;
  background: var(--coffee-2);
  color: white;
}

.dark .section-head p,
.dark .event-card p {
  color: rgba(255,255,255,0.72);
}

.event-card {
  max-width: 980px;
  padding: 22px;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 28px;
  align-items: center;
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.12);
}

.event-card img {
  border-radius: 24px;
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.event-card .pill {
  background: rgba(199, 149, 74, 0.22);
  color: #f3c77b;
}

.inline-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 10px;
  margin-top: 20px;
}

.ig-showcase {
  border-radius: 34px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(74, 40, 27, .22);
  border: 1px solid rgba(74, 40, 27, .12);
  background: #111;
}

.ig-showcase img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.map-card {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 18px;
  align-items: stretch;
}

.map-card img {
  border-radius: 30px;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 20px 50px rgba(74, 40, 27, .13);
}

.location-info {
  min-height: 340px;
  border-radius: 30px;
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(74, 40, 27, .10);
}

.location-info h3 {
  font-size: clamp(28px, 4vw, 42px);
  margin-bottom: 14px;
}

.address {
  font-size: 22px;
  font-weight: 900;
  color: var(--coffee);
  line-height: 1.6;
  margin: 0 0 16px;
}

.contact-lines {
  margin-bottom: 20px;
  color: var(--muted);
  font-weight: 800;
}

.contact-lines p {
  margin: 4px 0;
}

.map-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.copy-btn {
  background: #fff;
  border-color: var(--line);
  color: var(--coffee);
}

.hint {
  color: var(--muted);
  margin-top: 18px;
  font-size: 14px;
}

.faq {
  display: grid;
  gap: 12px;
}

details {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px 22px;
}

summary {
  cursor: pointer;
  font-weight: 900;
}

details p {
  color: var(--muted);
}

.floating-cta {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 30;
  background: var(--gold);
  color: var(--coffee-2);
  font-weight: 900;
  padding: 14px 20px;
  border-radius: 999px;
  box-shadow: 0 16px 36px rgba(74, 40, 27, .22);
}

.footer {
  padding: 34px 20px;
  text-align: center;
  color: var(--muted);
}

.admin-page h1 { font-size: clamp(36px, 5vw, 64px); }

.admin-hero-image {
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  border-radius: 32px;
  margin-bottom: 26px;
  box-shadow: 0 24px 60px rgba(74, 40, 27, .16);
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}

.stat { padding: 24px; }

.stat span {
  color: var(--muted);
  font-weight: 800;
}

.stat strong {
  display: block;
  font-size: 48px;
}

.admin-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 22px;
}

.panel {
  padding: 24px;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 14px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: middle;
}

.thumb {
  width: 70px;
  height: 48px;
  object-fit: cover;
  border-radius: 10px;
}

.admin-list { padding-left: 20px; }
.admin-list li { margin-bottom: 12px; }

@media (max-width: 900px) {
  .nav-toggle { display: block; }

  .nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 18px;
    right: 18px;
    padding: 18px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 22px;
    box-shadow: 0 20px 45px rgba(74, 40, 27, 0.12);
    flex-direction: column;
    align-items: stretch;
  }

  .nav.open, .nav.visible { display: flex; }

  .hero, .split, .admin-grid, .event-card, .map-card {
    grid-template-columns: 1fr;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .trust-grid, .dashboard {
    grid-template-columns: repeat(2, 1fr);
  }

  .inline-form {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    transform: none;
  }
}

@media (max-width: 560px) {
  .menu-grid, .trust-grid, .dashboard {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 42px;
  }
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: start;
}

.contact-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 34px;
  box-shadow: 0 20px 50px rgba(74, 40, 27, .10);
}

.contact-card p {
  color: var(--muted);
}

.contact-card strong {
  color: var(--coffee);
}

.social-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.footer {
  padding: 42px clamp(22px, 6vw, 88px);
  color: var(--muted);
  background: var(--surface);
  border-top: 1px solid var(--line);
}

.footer-grid {
  max-width: 1120px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  text-align: left;
}

.footer strong {
  display: block;
  color: var(--coffee);
  font-size: 24px;
  margin-bottom: 8px;
}

.footer p {
  margin: 6px 0;
}

.copyright {
  max-width: 1120px;
  margin: 26px auto 0 !important;
  text-align: center;
}

@media (max-width: 900px) {
  .contact-layout,
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
