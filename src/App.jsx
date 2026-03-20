import React, { useState } from 'react';
import { Mail, Search, Activity, Code, Database, TrendingUp, Sparkles, Server, Copy, Linkedin, Github, Twitter, Phone, MapPin, GraduationCap, Award, Briefcase, BookOpen, Download, Zap, X } from 'lucide-react';
import './index.css';

function VideoBlock({ src, caption, bgColor }) {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <>
      <div className="video-block">
        <div className="video-wrapper" onClick={() => setShowLightbox(true)}>
          <div className="browser-header">
            <div className="browser-dot red"></div>
            <div className="browser-dot yellow"></div>
            <div className="browser-dot green"></div>
          </div>
          <video className="project-video" src={src} autoPlay loop muted playsInline />
          <div className="video-expand-hint">CLICK TO EXPAND</div>
        </div>
        <div className="video-caption">{caption}</div>
      </div>
      {showLightbox && (
        <div className="video-lightbox" onClick={() => setShowLightbox(false)}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); setShowLightbox(false); }}><X size={22} strokeWidth={3}/></button>
          <video src={src} autoPlay loop muted playsInline onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

function App() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("goyaldivy101010@gmail.com");
    alert("Email copied to clipboard!");
  }

  return (
    <div className="portfolio-container">
      
      {/* ============= PROFILE ============= */}
      <div className="bento-card profile bg-yellow">
        <div className="profile-left">
          <div className="status-badge">
            <div className="status-dot"></div>
            Software Developer · Available for work
          </div>
          <h1 className="name">I'M DIVY GOYAL</h1>
          <div className="location">
             <MapPin size={20} strokeWidth={2.5}/> SIKAR, INDIA
          </div>
          <p className="bio">
            Backend developer & Vibecoder. I build products that scale — from 0 to 66K active users.
            Currently engineering at Veersa Technology; shipping SaaS on the side.
          </p>
          <div className="actions">
            <a href="mailto:goyaldivy101010@gmail.com" className="btn btn-primary contact-reveal">
              <Mail size={20} />
              <span className="contact-label">EMAIL ME</span>
              <span className="contact-value">goyaldivy101010@gmail.com</span>
            </a>
            <a href="tel:+919166696406" className="btn contact-reveal">
              <Phone size={20} />
              <span className="contact-label">CALL ME</span>
              <span className="contact-value">+91 91666 96406</span>
            </a>
            <a href="/resume.pdf" download className="btn btn-accent">
              <Download size={20} /> RESUME
            </a>
          </div>
          <div className="contact-links">
            <a href="https://linkedin.com/in/divy-goyal" className="btn" target="_blank" rel="noreferrer">
              <Linkedin size={20} /> LINKEDIN
            </a>
            <a href="https://github.com/divygoyal" className="btn" target="_blank" rel="noreferrer">
              <Github size={20} /> GITHUB
            </a>
            <a href="https://x.com/devdivygoyal" className="btn" target="_blank" rel="noreferrer">
              <Twitter size={20} /> X
            </a>
            <button className="btn" onClick={handleCopyEmail}>
              <Copy size={20} /> COPY EMAIL
            </button>
          </div>
        </div>
        <div className="profile-right">
          <img src="/avatar.png" alt="Divy Goyal" className="avatar" />
          <div className="profile-quick-stats">
            <div className="quick-stat">
              <div className="quick-stat-val">66K</div>
              <div className="quick-stat-lbl">Users</div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-val">2K+</div>
              <div className="quick-stat-lbl">DSA solved</div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-val">2</div>
              <div className="quick-stat-lbl">Live SaaS</div>
            </div>
          </div>
        </div>
      </div>

      {/* ============= SHIPPED PRODUCTS ============= */}
      <div className="vibecoded-section">
        <div className="vibecoded-hero">
          <h2><Zap size={36} strokeWidth={3}/> SHIPPED & LIVE</h2>
          <p>Real products. Real users. Real revenue.</p>
        </div>

        {/* Antigravity */}
        <div className="vibecoded-project">
          <div className="project-header-strip" style={{backgroundColor: 'var(--color-yellow)'}}>
            <div className="project-name-group">
              <h3>ANTIGRAVITY.CODES</h3>
              <div className="project-live-badge"><div className="project-live-dot"></div> LIVE</div>
            </div>
            <a href="https://antigravity.codes" target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '0.6rem 1.2rem'}}>VISIT SITE →</a>
          </div>
          <div className="project-stats-row" style={{backgroundColor: '#fffef5'}}>
            <div className="project-stat stat-yellow">
              <div className="project-stat-val">264K</div>
              <div className="project-stat-label">VIEWS</div>
              <div className="project-stat-change">↑ 277.1%</div>
            </div>
            <div className="project-stat stat-blue">
              <div className="project-stat-val">103K</div>
              <div className="project-stat-label">SESSIONS</div>
              <div className="project-stat-change">↑ 234%</div>
            </div>
            <div className="project-stat stat-green">
              <div className="project-stat-val">66K</div>
              <div className="project-stat-label">ACTIVE USERS</div>
              <div className="project-stat-change">↑ 210.6%</div>
            </div>
            <div className="project-stat stat-pink">
              <div className="project-stat-val">3m 51s</div>
              <div className="project-stat-label">AVG. SESSION</div>
            </div>
          </div>
          <div className="project-body">
            <div className="project-video-side" style={{backgroundColor: 'var(--color-yellow)'}}>
              <VideoBlock src="/antigravity_c.mp4" caption="⚡ Product Highlight" />
              <VideoBlock src="/ga4_c.mp4" caption="📊 Analytics Highlight" />
            </div>
            <div className="project-features-side">
              <p className="project-tagline">The #1 directory for AI IDE developers. 1,500+ MCP servers, 500+ coding rules, 50+ workflows, and 37 in-depth guides for Gemini, Claude, and GPT-powered development.</p>
              <div className="feature-grid">
                <div className="feature-card fc-yellow">
                  <div className="feature-card-title"><Server size={20} strokeWidth={3}/> 1500+ MCP Servers</div>
                  <div className="feature-card-desc">The largest curated directory of Model Context Protocol servers for Antigravity, Cursor & Windsurf IDEs.</div>
                </div>
                <div className="feature-card fc-blue">
                  <div className="feature-card-title"><Code size={20} strokeWidth={3}/> 500+ AI Rules</div>
                  <div className="feature-card-desc">Community-driven coding rules for React, TypeScript, Python, Next.js, Swift, FastAPI, and more.</div>
                </div>
                <div className="feature-card fc-green">
                  <div className="feature-card-title"><BookOpen size={20} strokeWidth={3}/> 50+ Workflows</div>
                  <div className="feature-card-desc">Pre-built agentic workflows like Stripe Checkout, CI/CD pipelines, and debugging agents.</div>
                </div>
                <div className="feature-card fc-pink">
                  <div className="feature-card-title"><Sparkles size={20} strokeWidth={3}/> 37 Guides</div>
                  <div className="feature-card-desc">In-depth tutorials covering AGENTS.md, Antigravity Cheat Sheets, and prompt engineering.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TrafficClaw */}
        <div className="vibecoded-project">
          <div className="project-header-strip" style={{backgroundColor: 'var(--color-blue)'}}>
            <div className="project-name-group">
              <h3>TRAFFICCLAW.COM</h3>
              <div className="project-live-badge"><div className="project-live-dot"></div> LIVE</div>
            </div>
            <a href="https://trafficclaw.com" target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontSize: '0.85rem', padding: '0.6rem 1.2rem'}}>VISIT SITE →</a>
          </div>
          <div className="project-body">
            <div className="project-features-side">
              <p className="project-tagline">AI-powered SEO & Analytics Platform. Stop switching between Google Analytics, Search Console, and your IDE. TrafficClaw brings everything into one intelligent interface.</p>
              <div className="feature-grid">
                <div className="feature-card fc-blue">
                  <div className="feature-card-title"><Activity size={20} strokeWidth={3}/> AI Chat</div>
                  <div className="feature-card-desc">Ask questions about your analytics in natural language. Get instant verdicts with evidence — not generic advice.</div>
                </div>
                <div className="feature-card fc-yellow">
                  <div className="feature-card-title"><Search size={20} strokeWidth={3}/> SEO Intelligence</div>
                  <div className="feature-card-desc">Keyword gaps, content decay alerts, cannibalization detection, and AEO engine for AI search optimization.</div>
                </div>
                <div className="feature-card fc-green">
                  <div className="feature-card-title"><TrendingUp size={20} strokeWidth={3}/> Analytics Dashboard</div>
                  <div className="feature-card-desc">Real-time visitors, traffic trends, bounce rates, and conversion funnels — all in one overview.</div>
                </div>
                <div className="feature-card fc-peach">
                  <div className="feature-card-title"><Database size={20} strokeWidth={3}/> Site Audit</div>
                  <div className="feature-card-desc">Deep page-level audits with performance scores, Core Web Vitals, and auto-fix suggestions.</div>
                </div>
              </div>
            </div>
            <div className="project-video-side" style={{backgroundColor: 'var(--color-blue)'}}>
              <VideoBlock src="/trafficclaw_c.mp4" caption="🚀 Product Demo" />
            </div>
          </div>
        </div>
      </div>

      {/* ============= SKILLS (Interactive Pills) ============= */}
      <div className="bento-card wide bg-white">
        <h3 className="section-title"><Code size={28} strokeWidth={3}/> TOOLKIT</h3>
        <div className="skill-marquee-row">
          <span className="skill-chip yellow">☕ Java</span>
          <span className="skill-chip blue">⚡ Spring Boot</span>
          <span className="skill-chip">Spring Data JPA</span>
          <span className="skill-chip pink">🔒 Spring Security</span>
          <span className="skill-chip green">🟢 Node.js</span>
          <span className="skill-chip blue">⚛️ ReactJS</span>
          <span className="skill-chip peach">🐘 PostgreSQL</span>
          <span className="skill-chip">MySQL</span>
          <span className="skill-chip yellow">📦 AWS S3</span>
          <span className="skill-chip pink">📨 AWS SQS</span>
          <span className="skill-chip green">🐳 Docker</span>
          <span className="skill-chip">🔑 JWT</span>
          <span className="skill-chip blue">🌐 REST APIs</span>
          <span className="skill-chip peach">📖 Swagger</span>
          <span className="skill-chip">🔁 Git</span>
          <span className="skill-chip yellow">🧠 DSA</span>
          <span className="skill-chip pink">🏗️ Design Patterns</span>
          <span className="skill-chip green">🧩 OOP</span>
          <span className="skill-chip">⚙️ Multi-threading</span>
          <span className="skill-chip blue">🏃 Agile</span>
          <span className="skill-chip yellow">💻 JavaScript</span>
          <span className="skill-chip">C++</span>
          <span className="skill-chip peach">📊 SQL</span>
        </div>
      </div>

      {/* ============= EXPERIENCE ============= */}
      <div className="bento-card wide bg-white">
        <h3 className="section-title"><Briefcase size={28} strokeWidth={3} /> WHERE I'VE SHIPPED</h3>
        <div className="exp-timeline">

          {/* Veersa */}
          <div className="experience-block">
            <div className="exp-color-strip strip-yellow"></div>
            <div className="exp-inner">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Software Developer</div>
                  <div className="exp-company">Veersa Technology Pvt. Ltd. · Noida</div>
                </div>
                <div className="exp-date">JULY 2024 – PRESENT</div>
              </div>
              <div className="exp-tech">
                <span className="exp-tech-tag">Java</span>
                <span className="exp-tech-tag">Spring Boot</span>
                <span className="exp-tech-tag">PostgreSQL</span>
                <span className="exp-tech-tag">AWS SQS</span>
                <span className="exp-tech-tag">S3</span>
                <span className="exp-tech-tag">Twilio</span>
                <span className="exp-tech-tag">JWT</span>
              </div>
              <div className="exp-metrics">
                <div className="exp-metric m-green">↓ 60% fax processing time</div>
                <div className="exp-metric m-blue">↑ 40% engagement</div>
                <div className="exp-metric m-yellow">99.9% uptime</div>
              </div>
              <ul className="bullet-list">
                <li>Designed and developed Neovance eCRM, a scalable multi-tenant CRM platform serving multiple clients with isolated data architecture.</li>
                <li>Architected AWS SQS fax consumer service with multi-threaded parallel processing.</li>
                <li>Integrated third-party APIs (Twilio, SendGrid, eFax) enabling automated multi-channel communication.</li>
                <li>Developed RESTful APIs with comprehensive error handling, input validation, and JWT auth.</li>
                <li>Implemented Chain of Responsibility pattern for eFax integration with S3 document pipeline.</li>
              </ul>
              <div className="exp-achievement">🏆 Achiever of the Month — October 2024</div>
            </div>
          </div>

          {/* Maruti Suzuki */}
          <div className="experience-block eb-blue">
            <div className="exp-color-strip strip-blue"></div>
            <div className="exp-inner">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Software Engineering Intern</div>
                  <div className="exp-company">Maruti Suzuki India Limited · Gurgaon</div>
                </div>
                <div className="exp-date" style={{background: 'var(--color-blue)'}}>JAN – JUNE 2023</div>
              </div>
              <div className="exp-tech">
                <span className="exp-tech-tag">Java</span>
                <span className="exp-tech-tag">Spring Boot</span>
                <span className="exp-tech-tag">Spring Data JPA</span>
                <span className="exp-tech-tag">REST APIs</span>
                <span className="exp-tech-tag">Agile</span>
              </div>
              <div className="exp-metrics">
                <div className="exp-metric m-green">↓ 35% query response time</div>
              </div>
              <ul className="bullet-list">
                <li>Built full-stack customer dashboard using Java Spring Boot backend for car buyers.</li>
                <li>Designed RESTful APIs for customer account management, support ticketing, and vehicle information retrieval.</li>
                <li>Utilized Spring Data JPA with optimized ORM mappings for faster queries.</li>
                <li>Delivered features on schedule in cross-functional Agile teams.</li>
              </ul>
            </div>
          </div>

          {/* Hitsbulleye */}
          <div className="experience-block eb-pink">
            <div className="exp-color-strip strip-pink"></div>
            <div className="exp-inner">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Teaching Assistant — DSA</div>
                  <div className="exp-company">Hitsbulleye · Remote</div>
                </div>
                <div className="exp-date" style={{background: 'var(--color-pink)'}}>JUNE – JULY 2022</div>
              </div>
              <div className="exp-metrics">
                <div className="exp-metric m-peach">50+ students</div>
                <div className="exp-metric m-green">↑ 30% class performance</div>
              </div>
              <ul className="bullet-list">
                <li>Conducted tutorial sessions on advanced DSA concepts.</li>
                <li>Provided personalized mentoring and code reviews.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ============= PROJECTS + ACHIEVEMENTS ============= */}
      <div className="bento-card half bg-pink">
        <h3 className="section-title"><BookOpen size={28} strokeWidth={3} /> SIDE PROJECTS</h3>
        <div className="experience-block">
          <div className="exp-color-strip strip-pink"></div>
          <div className="exp-inner">
            <div className="exp-header">
              <div>
                <div className="exp-title">AirBnb Backend API</div>
                <div className="exp-company">Full-stack booking platform</div>
              </div>
              <div className="exp-date" style={{background: 'var(--color-pink)'}}>2024</div>
            </div>
            <div className="exp-tech">
              <span className="exp-tech-tag">Java</span>
              <span className="exp-tech-tag">Spring Boot</span>
              <span className="exp-tech-tag">PostgreSQL</span>
              <span className="exp-tech-tag">JWT</span>
              <span className="exp-tech-tag">Docker</span>
            </div>
            <div className="exp-metrics">
              <div className="exp-metric m-blue">40+ Endpoints</div>
              <div className="exp-metric m-yellow">RBAC Auth</div>
            </div>
            <ul className="bullet-list">
              <li>Full RESTful API for hotel booking — lifecycle, user management, admin.</li>
              <li>JWT + RBAC using Spring Security.</li>
              <li>Payment gateway with webhook implementation.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bento-card half bg-peach">
        <h3 className="section-title"><Award size={28} strokeWidth={3} /> HIGHLIGHTS</h3>
        <div className="experience-block" style={{marginBottom: '1.5rem'}}>
          <div className="exp-color-strip strip-yellow"></div>
          <div className="exp-inner">
            <div className="exp-metrics" style={{marginBottom: '0.5rem'}}>
              <div className="exp-metric m-yellow">🧠 2000+ DSA Problems</div>
              <div className="exp-metric m-green">🔥 210-day Streak</div>
            </div>
            <ul className="bullet-list">
              <li>Solved across LeetCode & GFG — arrays, trees, graphs, DP.</li>
            </ul>
            <div className="exp-achievement">🥇 1st Rank — Blind Coding at NSUT Delhi (100+ participants)</div>
          </div>
        </div>
        <div className="experience-block" style={{marginBottom: 0}}>
          <div className="exp-color-strip strip-blue"></div>
          <div className="exp-inner">
            <div className="exp-header" style={{marginBottom: 0}}>
              <div>
                <div className="exp-title" style={{display:'flex', alignItems:'center', gap: '0.6rem'}}><GraduationCap size={24} strokeWidth={3}/> PEC, CHANDIGARH</div>
                <div className="exp-company">B.Tech EE · CGPA: 8.42/10</div>
              </div>
              <div className="exp-date" style={{background: 'var(--color-blue)'}}>2020 – 2024</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
