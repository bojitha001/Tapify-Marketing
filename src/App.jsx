import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    number: "01",
    short: "NFC Stand",
    title: "A better welcome, right on the table.",
    copy: "Turn every counter, table, and reception desk into an instant digital touchpoint for menus, bookings, reviews, offers, and more.",
    use: "Restaurants · Hotels · Retail",
    visual: "stand",
  },
  {
    number: "02",
    short: "NFC Card",
    title: "One card. Every connection.",
    copy: "Give professionals and entire teams a reusable NFC card with a profile that stays current long after the first meeting.",
    use: "Professionals · Corporate teams",
    visual: "card",
  },
  {
    number: "03",
    short: "Digital Card",
    title: "Your complete profile, ready to share.",
    copy: "Share a polished digital identity by QR code or direct link, complete with contact details, social links, and a branded theme.",
    use: "Freelancers · Teams · Events",
    visual: "digital",
  },
];

const features = [
  {
    icon: "↗",
    title: "Real-time tap analytics",
    copy: "See taps, link clicks, device types, browsers, and complete activity history as it happens.",
    className: "feature-card feature-card--dark",
  },
  {
    icon: "⌁",
    title: "A unique page for every product",
    copy: "Give each stand or card its own links, content, campaign, and identity.",
    className: "feature-card feature-card--outline",
  },
  {
    icon: "◐",
    title: "Make it unmistakably yours",
    copy: "Control backgrounds, buttons, text, accents, photos, and quick theme presets.",
    className: "feature-card feature-card--violet",
  },
  {
    icon: "◷",
    title: "Schedule every link",
    copy: "Show breakfast menus, ticket links, offers, and seasonal pages only when they matter.",
    className: "feature-card",
  },
  {
    icon: "◎",
    title: "No app. No friction.",
    copy: "Every experience opens instantly in the visitor’s browser on modern Android and iPhone devices.",
    className: "feature-card feature-card--wide",
  },
  {
    icon: "₨",
    title: "Billing built for Sri Lanka",
    copy: "Manage monthly plans, PayHere payments, bank transfer slips, reminders, and account status in one place.",
    className: "feature-card feature-card--soft",
  },
];

const audiences = [
  ["01", "Restaurants & Cafés", "Menus, ordering, reviews"],
  ["02", "Hotels", "Guest guides, services, bookings"],
  ["03", "Retail Shops", "Offers, catalogues, loyalty"],
  ["04", "Freelancers & Professionals", "A smarter first impression"],
  ["05", "Corporate Teams", "One identity across every team"],
  ["06", "Event Organizers", "Schedules, tickets, updates"],
];

function Brand({ light = false }) {
  return (
    <span className={`brand ${light ? "brand--light" : ""}`}>
      <span className="tap-mark" aria-hidden="true">
        <span className="tap-arc tap-arc--one" />
        <span className="tap-arc tap-arc--two" />
        <span className="tap-dot" />
      </span>
      <span>Tapify</span>
    </span>
  );
}

function MiniQr({ light = false }) {
  return <span className={`mini-qr ${light ? "mini-qr--light" : ""}`} aria-hidden="true" />;
}

function PhonePreview({ compact = false }) {
  return (
    <div className={`phone ${compact ? "phone--compact" : ""}`} aria-label="Tapify digital business card preview">
      <div className="phone__bar">
        <span className="phone__time">9:41</span>
        <span className="phone__island" />
        <span className="phone__status">● ◒</span>
      </div>
      <div className="phone__cover">
        <span className="phone__glow" />
        <span className="phone__share">↗</span>
      </div>
      <div className="phone__profile">
        <div className="avatar">KP</div>
        <span className="available"><i /> Available for projects</span>
        <h3>Kalyani Perera</h3>
        <p>Interior Architect · Colombo</p>
        <div className="quick-actions">
          <span>Call</span><span>Email</span><span>Save</span>
        </div>
        <span className="phone__link">
          View my portfolio <b>↗</b>
        </span>
        <span className="phone__link">
          Book a consultation <b>↗</b>
        </span>
        <div className="phone__socials"><span>in</span><span>ig</span><span>be</span></div>
      </div>
    </div>
  );
}

function ProductVisual({ type }) {
  if (type === "stand") {
    return (
      <div className="product-visual stand-visual" aria-hidden="true">
        <span className="stand-halo" />
        <div className="stand-face">
          <Brand light />
          <MiniQr light />
          <b>Tap to explore</b>
          <small>No app required</small>
        </div>
        <span className="stand-base" />
        <span className="tap-ripple tap-ripple--one" />
        <span className="tap-ripple tap-ripple--two" />
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="product-visual card-visual" aria-hidden="true">
        <span className="card-orbit card-orbit--one" />
        <span className="card-orbit card-orbit--two" />
        <div className="nfc-card">
          <Brand light />
          <span className="nfc-rings">)))</span>
          <div><b>Kasun Silva</b><small>Strategy Director</small></div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-visual digital-visual" aria-hidden="true">
      <PhonePreview compact />
      <div className="qr-ticket">
        <MiniQr />
        <span><b>Scan to connect</b><small>tapify.lk/kalyani</small></span>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="nav-capsule">
          <Link className="logo-link" to="/" aria-label="Tapify home" onClick={closeMenu}>
            <Brand />
          </Link>
          <nav className={menuOpen ? "nav-links nav-links--open" : "nav-links"} aria-label="Primary navigation">
            <Link to="#how" onClick={closeMenu}>How it works</Link>
            <Link to="#products" onClick={closeMenu}>Products</Link>
            <Link to="#features" onClick={closeMenu}>Features</Link>
            <Link to="#customers" onClick={closeMenu}>For business</Link>
          </nav>
          <button
            className={menuOpen ? "menu-toggle menu-toggle--open" : "menu-toggle"}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
        <Link className="signin-button" to="/login">
          <span className="signin-icon">↗</span>
          <span>Sign in</span>
        </Link>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero__content">
          <div className="eyebrow"><span className="eyebrow-dot" /> Smart connections for modern business</div>
          <h1 id="hero-heading">
            <span>Tap.</span><br />
            Connect. <em>Engage.</em>
          </h1>
          <p>Turn every NFC stand, card, and QR code into a beautiful digital experience your customers can open in a single tap.</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/login">
              <span className="button-icon">↗</span>
              <span>Get Started</span>
            </Link>
            <Link className="button button--ghost" to="#how">Learn more <span>↓</span></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>RC</span><span>HO</span><span>KS</span></div>
            <p><b>Built for Sri Lankan business</b><br />From the first tap to the next customer.</p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="floating-badge floating-badge--analytics">
            <span className="metric-icon">↗</span>
            <span><b>1,284</b><small>Taps this month</small></span>
          </div>
          <PhonePreview />
          <div className="floating-badge floating-badge--qr">
            <MiniQr />
            <span><b>Scan or tap</b><small>Opens instantly</small></span>
          </div>
        </div>

        <div className="hero__footer">
          <p>One platform for every physical touchpoint.</p>
          <div className="hero-stat"><b>0</b><span>apps to<br />download</span></div>
          <div className="hero-stat"><b>&lt;1s</b><span>to open<br />your page</span></div>
          <div className="hero-usecases">
            <span>Restaurants</span><i />
            <span>Hotels</span><i />
            <span>Professionals</span><i />
            <span>Events</span>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how" aria-labelledby="how-heading">
        <div className="section-kicker"><span>01</span><i /><b>How it works</b></div>
        <div className="section-intro">
          <h2 id="how-heading">From physical product<br />to digital connection.</h2>
          <p>Tapify removes the technical work. Set up your page in minutes, then let every tap do the introducing.</p>
        </div>
        <div className="steps-grid">
          <article className="step-card step-card--violet">
            <div className="step-top"><span>01</span><span className="step-icon">▰</span></div>
            <div className="step-object step-object--stand"><i /><b /></div>
            <div><h3>Get your NFC stand or card.</h3><p>Choose the physical product that fits your space, team, or next event.</p></div>
          </article>
          <article className="step-card step-card--soft">
            <div className="step-top"><span>02</span><span className="step-icon">✦</span></div>
            <div className="theme-builder" aria-hidden="true">
              <div className="theme-sidebar"><i /><i /><i /><i /></div>
              <div className="theme-preview"><span /><b /><i /><i /></div>
              <div className="theme-swatches"><i /><i /><i /></div>
            </div>
            <div><h3>Make the page yours.</h3><p>Add links, details, colors, a profile photo, and a theme in a few simple steps.</p></div>
          </article>
          <article className="step-card step-card--dark">
            <div className="step-top"><span>03</span><span className="step-icon">⌁</span></div>
            <div className="tap-demo" aria-hidden="true">
              <div className="tap-card-mini"><Brand light /><span>)))</span></div>
              <div className="tap-phone-mini"><span /><i /><i /></div>
              <b className="tap-wave tap-wave--one" /><b className="tap-wave tap-wave--two" />
            </div>
            <div><h3>Share with a tap or scan.</h3><p>Visitors see your page instantly in their browser—there is nothing to install.</p></div>
          </article>
        </div>
      </section>

      <section className="products-section" id="products" aria-labelledby="products-heading">
        <div className="products-copy">
          <div className="section-kicker section-kicker--dark"><span>02</span><i /><b>Products</b></div>
          <p className="products-lead">One platform. Three beautifully connected ways to show up.</p>
          <h2 id="products-heading">Designed for the<br />way business moves.</h2>
          <Link className="button button--dark" to="/login"><span className="button-icon">↗</span><span>Get Started</span></Link>
        </div>

        <div className="product-accordion">
          {products.map((product, index) => {
            const active = index === activeProduct;
            return (
              <article className={`product-panel ${active ? "product-panel--active" : ""}`} data-number={product.number} key={product.short}>
                <button
                  type="button"
                  className="product-panel__toggle"
                  aria-expanded={active}
                  onClick={() => setActiveProduct(index)}
                >
                  <span className="product-number">{product.number}</span>
                  <span className="product-vertical">{product.short}</span>
                  <span className="product-open">+</span>
                </button>
                <div className="product-panel__content" aria-hidden={!active}>
                  <span className="product-label">{product.short}</span>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                  <ProductVisual type={product.visual} />
                  <span className="product-use">{product.use}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section features-section" id="features" aria-labelledby="features-heading">
        <div className="section-kicker"><span>03</span><i /><b>Platform</b></div>
        <div className="section-intro section-intro--wide">
          <h2 id="features-heading">Everything behind<br />every great tap.</h2>
          <p>Built to make daily management simple for customers—and complete control effortless for Tapify admins.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article className={feature.className} key={feature.title}>
              <span className="feature-icon">{feature.icon}</span>
              <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
            </article>
          ))}
        </div>
        <div className="control-strip">
          <div><span className="live-dot" /> Live control</div>
          <p><b>Standby mode</b> lets you hide every link and display a clear offline message whenever your business needs a pause.</p>
          <span className="toggle-demo"><i /></span>
        </div>
      </section>

      <section className="audience-section" id="customers" aria-labelledby="audience-heading">
        <div className="audience-copy">
          <div className="section-kicker section-kicker--dark"><span>04</span><i /><b>Built for business</b></div>
          <h2 id="audience-heading">Wherever a<br />conversation starts,<br /><em>Tapify takes it further.</em></h2>
          <p>From a café table in Galle to a boardroom in Colombo, every interaction becomes easier to share, measure, and grow.</p>
        </div>
        <div className="audience-list">
          {audiences.map(([number, title, copy]) => (
            <article className="audience-row" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-signal" aria-hidden="true"><i /><i /><i /><b /></div>
        <p>Ready when you are.</p>
        <h2 id="cta-heading">Ready to go digital?</h2>
        <p>Give your business a faster, smarter way to connect.</p>
        <Link className="button button--light" to="/login"><span className="button-icon">↗</span><span>Get Started</span></Link>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div><Brand light /><p>Tap. Connect. Engage.</p></div>
          <div className="footer-note"><span>Built in Sri Lanka</span><p>A better digital first impression,<br />one tap at a time.</p></div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tapify. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
      </footer>
    </main>
  );
}
