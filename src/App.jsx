const heroImages = {
  main: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  secondary:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
};

const calmingImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
];

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">A</span>
            <div>
              <p className="brand-name">Aurora Bloom Therapy Studio</p>
              <p className="brand-tag">Calm minds. Brave hearts. Better days.</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#expertise">Expertise</a>
            <a href="#testimonials">Stories</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Internationally Accredited Hypnotherapist</p>
            <h1>
              A therapeutic space that feels like a deep breath and a fresh start.
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="cta-row">
              <button className="cta primary">Book Now</button>
              <button className="cta ghost">Call</button>
              <button className="cta ghost">Message</button>
            </div>
            <div className="stats">
              <div>
                <h3>7+ Years</h3>
                <p>Experience in therapeutic care</p>
              </div>
              <div>
                <h3>Holistic Focus</h3>
                <p>Mind, body, and emotional balance</p>
              </div>
              <div>
                <h3>Adolescence Care</h3>
                <p>Test anxiety, peer pressure, anger</p>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <div className="image-card">
              <img src={heroImages.main} alt="Therapist in a calm studio" />
              <div className="image-caption">Safe, welcoming, and grounded.</div>
            </div>
            <div className="image-card small">
              <img src={heroImages.secondary} alt="Supportive conversation" />
              <div className="image-caption">Every session meets you where you are.</div>
            </div>
          </div>
        </div>
      </header>

      <section className="cta-strip">
        <div className="cta-card">
          <h4>Free 15-min Chat</h4>
          <p>See if we are the right fit.</p>
        </div>
        <div className="cta-card">
          <h4>Evening Slots</h4>
          <p>Flexible scheduling that fits life.</p>
        </div>
        <div className="cta-card">
          <h4>Confidential Care</h4>
          <p>Private, respectful, secure.</p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-header">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat mauris sed lacus finibus, a pellentesque massa mattis.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <h3>Psychological Counselling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <ul>
              <li>Anxiety & depression support</li>
              <li>Relationship & family dynamics</li>
              <li>Stress, grief, and life transitions</li>
            </ul>
          </article>
          <article className="service-card">
            <h3>Therapy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <ul>
              <li>Trauma-informed therapy</li>
              <li>Emotion regulation & resilience</li>
              <li>Personal growth & self-esteem</li>
            </ul>
          </article>
          <article className="service-card">
            <h3>Others</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <ul>
              <li>Guided meditation & mindfulness</li>
              <li>Heartfulness & journaling</li>
              <li>Music & simple yoga for relaxation</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="expertise" className="section split">
        <div className="split-content">
          <h2>Adolescence Counselling Expertise</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            gravida, mauris eget mattis auctor, risus metus lacinia eros, in
            maximus magna magna sit amet turpis.
          </p>
          <div className="pill-grid">
            <span>Test anxiety</span>
            <span>Peer pressure</span>
            <span>Depression</span>
            <span>Relationship management</span>
            <span>Anger & emotional outbursts</span>
          </div>
        </div>
        <div className="split-media">
          <img src={calmingImages[0]} alt="Calming nature pathway" />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Techniques We Use</h2>
          <p>
            These are therapeutic techniques applied to meet your needs. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="techniques-grid">
          <div className="tech-card">Flooding</div>
          <div className="tech-card">Imagery</div>
          <div className="tech-card">Logotherapy</div>
          <div className="tech-card">Exposure therapy</div>
          <div className="tech-card">Grounding practices</div>
        </div>
      </section>

      <section className="section credentials">
        <div className="section-header">
          <h2>Certifications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo turpis vitae ipsum facilisis, vitae tincidunt urna
            tincidunt.
          </p>
        </div>
        <div className="credentials-grid">
          <div className="credential-card">
            <h4>Clinical Training</h4>
            <ul>
              <li>CBT</li>
              <li>EMDR</li>
              <li>Neurogenesis</li>
              <li>Lucid Dreaming</li>
              <li>Functional Family Therapy</li>
              <li>Hypnotherapy (basic)</li>
            </ul>
          </div>
          <div className="credential-card highlight">
            <h4>International Accreditation</h4>
            <p>Internationally Accredited Hypnotherapist</p>
            <div className="badge">Accredited</div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pulvinar quam et sapien pellentesque, ac luctus neque ullamcorper.
          </p>
        </div>
        <div className="testimonial-grid">
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Quisque gravida, mauris eget mattis auctor, risus metus lacinia eros.",
            "Vivamus dignissim, mauris vel ultricies tristique, metus mi tempus.",
            "Aliquam erat volutpat. Integer imperdiet nisl vel mattis viverra.",
          ].map((quote, index) => (
            <article key={quote} className="testimonial-card">
              <p>“{quote}”</p>
              <div className="testimonial-footer">
                <div className="avatar" aria-hidden="true">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <h4>Client {index + 1}</h4>
                  <span>Verified Review</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-header">
          <h2>Start Today</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            mauris vitae augue ultricies, et malesuada dolor aliquet.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>In-Person & Online</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec sapien at lacus interdum aliquet.
            </p>
            <button className="cta primary">Schedule</button>
          </div>
          <div className="contact-card">
            <h3>Quiet Studio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              consequat justo, sed cursus libero.
            </p>
            <button className="cta ghost">View Hours</button>
          </div>
          <div className="contact-card">
            <h3>Rapid Response</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum tincidunt justo.
            </p>
            <button className="cta ghost">Text Now</button>
          </div>
        </div>
        <div className="contact-images">
          <img src={calmingImages[1]} alt="Meditation by the window" />
          <img src={calmingImages[2]} alt="Soft light and greenery" />
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>Aurora Bloom Therapy Studio</h3>
          <p>Calm minds. Brave hearts. Better days.</p>
        </div>
        <div>
          <p>hello@aurorabloom.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <p>Mon - Sat · 9:00 AM - 7:00 PM</p>
          <p>Serenity Avenue, Suite 12</p>
        </div>
      </footer>
    </div>
  );
}
