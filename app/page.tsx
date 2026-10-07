import Image from "next/image";
import { BUILDS, ENGINEERING, GLOBAL, WRITING, type Entry } from "./content";

function ExternalLink({ href, title, children }: { href: string; title?: string; children: React.ReactNode }) {
  return <a className="text-link" href={href} title={title} target="_blank" rel="noreferrer">{children}</a>;
}
function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies and disciplines">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
function EntryContent({ item }: { item: Entry }) {
  return <><header><h3>{item.title}</h3><p className="role">{item.role}</p>{item.meta && <p className="entry-meta">{item.meta}</p>}</header><div className="entry-body">{item.paragraphs.map(p => <p key={p}>{p}</p>)}{item.tags && <Tags items={item.tags} />}{item.link && <ExternalLink href={item.link}>{item.linkLabel ?? "View repository"}</ExternalLink>}</div></>;
}
function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2></div>;
}
function SectionBackdrop({ src, variant }: { src: string; variant: "work" | "leadership" | "global" | "about" }) {
  return <div className={`section-backdrop section-backdrop-${variant}`} aria-hidden="true">
    <Image src={src} alt="" fill sizes="(max-width: 760px) 100vw, 56vw" />
  </div>;
}
export default function Home() {
  return <>
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">

        <h1 id="hero-title">Technology builder working across physical intelligence, AI hardware, and the institutions underneath them.</h1>
        <p className="hero-subhead">Yale EECS graduate and Yale SOM Technology Management candidate. I build embedded and robotic systems, work on AI hardware and compute, and lead technology initiatives that turn technical ideas into deployed tools and institutions.</p>
        <p className="hero-languages">Certified proficiency in Mandarin Chinese, Arabic, and Spanish; conversational French.</p>
        <div className="hero-actions" aria-label="Primary links">
          <a className="button button-primary" href="#engineering">Engineering work </a>
          <a className="button" href="#leadership">Leadership &amp; global </a>
          <a className="button" href="/resume.pdf" target="_blank" rel="noreferrer">Resume </a>
          <a className="button" href="https://github.com/jelsayyid" target="_blank" rel="noreferrer">GitHub </a>
        </div>
        <a className="hero-email" href="mailto:elsayyidjoseph@gmail.com">elsayyidjoseph@gmail.com</a>
      </div>
      <div className="hero-portrait"><Image src="/joseph-elsayyid-hero.png" alt="Joseph Elsayyid standing among Yale’s stone columns" fill preload sizes="(max-width: 760px) 100vw, 68vw" /></div>
    </section>
    <section className="page-shell section-block" id="engineering" aria-labelledby="now-title">
      <span className="anchor-alias" id="work" />
      <Heading id="now-title">What I’m building now</Heading>
      <article className="current-project visualft">
        <header><h3>VisualFT</h3><p className="role">Embedded Systems Engineer — Productization</p><p className="entry-meta">2026–Present</p></header>
        <div className="entry-body">
          <p className="project-lead">Helping productize a camera-based six-axis force/torque sensor for robotics. The system measures small deformations in an elastic flexure by tracking 15 fiducial markers, then maps those measurements to Fx, Fy, Fz, Mx, My, and Mz.</p>
          <p>My work focuses on the embedded and systems side of the product, including Raspberry Pi/Linux integration, camera acquisition and marker processing, calibration and force estimation, latency and jitter characterization, throughput and compute profiling, robot-facing data streaming, diagnostics, fault handling, and deployment reliability.</p>
          <p>The project brings together mechanics, optics, sensing, embedded software, and robot control, so getting it reliable requires debugging the full system.</p>
          <Tags items={["Robotics", "Embedded Linux", "Raspberry Pi", "Camera sensing", "Calibration", "System integration", "Validation"]} />
        </div>
      </article>
      <article className="current-project rewind">
        <header><h3>Rewind</h3><p className="role">Founder / Builder</p><p className="entry-meta">2026–Present</p></header>
        <div className="entry-body">
          <p>Building a privacy-first language learning system that turns real target-language interactions into personalized practice. The system identifies recurring vocabulary and grammar gaps and links them back to evidence from the original interaction.</p>
          <p>I am prototyping a compact recorder around the XIAO ESP32-S3 Sense, microSD storage, battery power, and physical controls, alongside a local software pipeline for transcription, review, and evidence-linked practice.</p>
          <p>Rewind was selected for the Tsai CITY Launch Pad Fall 2026 cohort.</p>
          <Tags items={["ESP32-S3", "Embedded systems", "Local AI", "Product", "Language learning", "Privacy"]} />
        </div>
      </article>
    </section>
    <section className="page-shell section-block section-visual" aria-labelledby="engineering-title">
      <SectionBackdrop src="/joseph-elsayyid-yale-staircase.webp" variant="work" />
      <Heading id="engineering-title">Selected engineering work</Heading>
      <div className="engineering-list">{ENGINEERING.map(item => <article className="engineering-entry" key={item.title}><EntryContent item={item} /></article>)}</div>
    </section>
    <section className="page-shell section-block" id="projects" aria-labelledby="builds-title">
      <Heading id="builds-title">Selected builds</Heading>
      <div className="build-grid">{BUILDS.map((item, index) => <article className={`build-card${index === 0 ? " build-featured" : ""}`} key={item.title}><EntryContent item={item} /></article>)}</div>
    </section>
    <section className="leadership-band" id="leadership" aria-labelledby="leadership-title"><div className="page-shell section-block section-visual">
      <SectionBackdrop src="/joseph-elsayyid-yale-som-welcome.webp" variant="leadership" />
      <Heading id="leadership-title">Technology leadership</Heading>
      <article className="leadership-feature">
        <header><h3>YCC Technology Division</h3><p className="role">Founder &amp; Chair</p><p className="entry-meta">2025–2026</p><ExternalLink href="https://ycctech.org">ycctech.org</ExternalLink></header>
        <div className="entry-body">
          <p>Founded Yale College Council’s technology division and led an 11-member builder team creating infrastructure, funding, and programs that help students turn ideas into working technology.</p>
          <p>Created a $200–$500 Bounty Board for short software builds; commissioned a Yale CAS starter kit and APIs for campus rooms, dining, events, and geospatial data; and required written specifications, acceptance criteria, public repositories, demonstrations, and payment on delivery.</p>
          <p>Also launched hardware microgrants, a $1,000 Innovation Prize, alumni technology talks, agentic-AI workshops, and hackathons.</p>

        </div>
      </article>
      <div className="leadership-secondary">
        <article><h3>Yale Young Global Scholars</h3><p className="role">Course Instructor</p><p className="entry-meta">Summer 2026</p><p>Designed and taught three original technology seminars for students from 159 countries, spanning embedded and edge systems, health-data technology, cybersecurity, semiconductor supply chains, and technological dependence.</p><p>Built working technical prototypes for the classroom and used engineering systems as a way to connect technical decisions to larger questions about security, dependence, and society.</p><p>Led a CubeSat-style engineering program from problem selection and sensor choice through prototyping, testing, and final presentations.</p></article>
        <article><h3>Student Advisory — Yale College</h3><p>Competitively selected to advise Yale College leadership on Science and Quantitative Reasoning resource allocation.</p><ExternalLink href="https://science.yalecollege.yale.edu/academics-and-tutoring/student-advisory-committee">Student Advisory Committee</ExternalLink></article>
      </div>
    </div></section>
    <section className="page-shell section-block section-visual" id="global" aria-labelledby="global-title">
      <SectionBackdrop src="/joseph-elsayyid-global-forum.webp" variant="global" />
      <Heading id="global-title">Global technology &amp; public affairs</Heading>
      <p className="section-intro">My technical work has developed alongside a long-standing interest in how technology moves across borders, including semiconductor supply chains, technological dependence, language, export controls, international competition, and the institutions that shape technical progress.</p>
      <div className="global-grid">{GLOBAL.map(item => <article key={item.title}><h3>{item.title}</h3><p className="entry-meta">{item.meta}</p><p>{item.detail}</p></article>)}</div>
      <div className="languages"><h3>Languages</h3><ul><li>Mandarin Chinese <span>Certified advanced proficiency</span></li><li>Arabic <span>Certified advanced proficiency</span></li><li>Spanish <span>Certified proficiency</span></li><li>French <span>Conversational</span></li></ul></div>
    </section>
    <section className="page-shell section-block" id="writing" aria-labelledby="writing-title">
      <span className="anchor-alias" id="articles" />
      <Heading id="writing-title">Selected writing &amp; coverage</Heading>
      <div className="writing-list">{WRITING.slice(0, 4).map((article) => <article className="writing-entry" key={article.href}><div><h3><ExternalLink href={article.href} title={article.originalTitle}>{article.title}</ExternalLink></h3><p className="entry-meta">{article.meta}</p></div></article>)}</div>
      <details className="more-writing"><summary>More writing and coverage</summary><div>{WRITING.slice(4).map(article => <article key={article.href}><h3><ExternalLink href={article.href} title={article.originalTitle}>{article.title}</ExternalLink></h3><p className="entry-meta">{article.meta}</p></article>)}</div></details>
    </section>
    <section className="page-shell section-block section-visual" id="about" aria-labelledby="about-title">
      <SectionBackdrop src="/joseph-elsayyid-kitchen.webp" variant="about" />
      <Heading id="about-title">About</Heading>
      <div className="about-copy"><p>I want to build machines that are useful in everyday life and help more people participate in developing them. Living and working across languages and countries has shaped how I think about who technology serves. I’m interested in working with people who care about both the engineering and its consequences.</p></div>
      <div className="credentials"><section aria-labelledby="education-title"><h3 id="education-title">Education</h3><article><h4>Yale School of Management</h4><p>M.M.S., Technology Management <span>2026–2027</span></p></article><article><h4>Yale University</h4><p>B.S., Electrical Engineering &amp; Computer Science <span>2026</span></p></article><article><h4>Wenzao Ursuline University of Languages</h4><p>Chinese Studies <span>2021–2022</span></p></article></section><section aria-labelledby="honors-title"><h3 id="honors-title">Honors</h3><ul className="honors-list"><li>Yale STARS Science Fellowship</li><li>Alan S. Tetelman 1958 Fellowship</li><li>U.S. Department of State Fellow — NSLI-Y, CBYX, Youth Ambassadors</li><li>U.S. Congressional Commendation</li><li>ISA Award for Advanced Arabic Study</li></ul></section></div>
    </section>
    <section className="page-shell section-block contact-section" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2><p>Want to talk about robotics, embedded systems, AI hardware, technology institutions, or something ambitious you’re building? I’d be glad to hear from you.</p><a className="contact-email" href="mailto:elsayyidjoseph@gmail.com">elsayyidjoseph@gmail.com</a><div className="plain-links"><ExternalLink href="https://github.com/jelsayyid">GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/joseph-elsayyid">LinkedIn</ExternalLink><ExternalLink href="/resume.pdf">Resume</ExternalLink></div></section>
  </>;
}
