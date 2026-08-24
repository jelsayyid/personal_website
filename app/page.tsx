import Image from "next/image";

type Link = {
  href: string;
  label: string;
};

type WorkItem = {
  institution: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  detail: string;
  tags: string[];
  link?: Link;
};

const WORK: WorkItem[] = [
  {
    institution: "Yale Young Global Scholars, Yale University",
    role: "Course Instructor",
    period: "Summer 2026",
    location: "New Haven, CT",
    summary:
      "Designed and taught three original seminars for students from 159 countries, connecting technical systems to security and international competition.",
    detail:
      "The central unit, “Chip Cold War,” examined Taiwan’s role in advanced-chip production, semiconductor supply chains, export controls, technological dependence, and U.S.–China competition. Other sessions addressed cyber conflict, advanced computing, and national security.",
    tags: ["Semiconductors", "Technology security", "Teaching"],
  },
  {
    institution: "Kuan Lab, Yale School of Medicine",
    role: "Research · Medical imaging data systems",
    period: "Jan 2026 — Present",
    location: "New Haven, CT",
    summary:
      "Built data infrastructure for large-scale 3D brain-imaging analysis at Yale School of Medicine.",
    detail:
      "Developed modular ingestion, chunked HDF5/Zarr-style storage, graph construction, validation, and diagnostics for post-segmentation workflows—turning large imaging outputs into data that can be checked, queried, and used in downstream analysis.",
    tags: ["Python", "HDF5 / Zarr", "Graph analysis"],
    link: {
      href: "https://github.com/jelsayyid/postseg-connectomics",
      label: "View repository",
    },
  },
  {
    institution: "HKUST · Spintronic Quantum Material Laboratory",
    role: "AI Hardware–Software Research Intern",
    period: "Summer 2025",
    location: "Hong Kong",
    summary:
      "Worked on hardware–software co-design for a 28 nm MTJ compute-in-memory AI accelerator.",
    detail:
      "Analyzed latency, throughput, and energy while testing pruning, quantization, and sparsity strategies. Translated device constraints into system-level software requirements and feasible performance targets.",
    tags: ["Compute-in-memory", "MTJ", "Model compression"],
  },
  {
    institution: "Yale Intelligent Computing Lab",
    role: "AI Systems Design Intern",
    period: "2024 — 2025",
    location: "New Haven, CT",
    summary:
      "Developed transformer deployment and profiling workflows for embedded Linux and Raspberry Pi systems.",
    detail:
      "Measured latency, memory, power, and accuracy across pruning, quantization, and model-design choices. Extended the same performance analysis to real-time, pruned and quantized ResNet18 inference on constrained hardware.",
    tags: ["Embedded Linux", "Transformers", "Performance profiling"],
  },
  {
    institution: "UCLouvain · Martin Andraud Group",
    role: "Software–Hardware Co-Design Intern",
    period: "Summer 2024",
    location: "Louvain-la-Neuve, Belgium",
    summary:
      "Contributed to a 22 nm mixed-signal compute-in-memory accelerator in a European semiconductor research environment.",
    detail:
      "Connected RISC-V control and calibration software to circuit-level behavior, improving compute reliability by 25–45% across operating conditions and aligning hardware, firmware, and algorithm requirements.",
    tags: ["22 nm CIM", "RISC-V", "Calibration"],
  },
  {
    institution: "FutureTEC",
    role: "Cybersecurity Intern",
    period: "Summer 2023",
    location: "Amman, Jordan",
    summary:
      "Monitored security events with SIEM tools, correlated application and network logs, and supported incident analysis for a cyber defense team.",
    detail:
      "The role combined operational security work with Arabic-language and cross-cultural technical communication.",
    tags: ["SIEM", "Incident analysis", "Cyber defense"],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "Automated Composting System",
    eyebrow: "Hardware–software product design",
    detail:
      "Designed a smart-composter prototype for Yale’s 14 residential dining halls. Integrated temperature, humidity, and CO₂ sensors with actuators and microcontroller software for closed-loop environmental control in a real deployment context.",
  },
  {
    number: "02",
    title: "GPT-Lite · NanoGPT FPGA Optimization",
    eyebrow: "Accelerator mapping and model optimization",
    detail:
      "Mapped transformer inference to FPGA fabric and built a software-led workflow for refactoring, quantization, and profiling under tight compute and memory constraints. The source project retained 99% of baseline accuracy.",
  },
  {
    number: "03",
    title: "EdgePulse",
    eyebrow: "Embedded physiological sensing",
    detail:
      "Built a sensing testbed around the Arduino Nano 33 BLE Sense Rev2, using its IMU for synchronized motion capture and Python tools for recording, visualization, and analysis.",
    link: {
      href: "https://github.com/jelsayyid/edgepulse",
      label: "View repository",
    },
  },
];

const GLOBAL_EXPERIENCE = [
  {
    title: "Peace & Dialogue Leadership Initiative",
    meta: "Fellow · Israel & Palestinian Territories · 2024–2025",
    detail:
      "One of approximately 30 fellows in an initiative with West Point focused on U.S. Middle East policy, security, and civil–military relations. Joined a regional delegation with political, diplomatic, academic, business, and military leaders; built a computational text-analysis tool to examine framing bias.",
  },
  {
    title: "National Security Language Initiative for Youth",
    meta: "U.S. Department of State Scholar · Taiwan · 2021–2022",
    detail:
      "One of 13 scholars selected for Mandarin study at Wenzao Ursuline University. Conducted Mandarin-language youth surveys on Taiwanese identity.",
  },
  {
    title: "Congress–Bundestag Youth Exchange",
    meta: "Fellow · Germany · 2021",
    detail:
      "Selected for the U.S.–German bilateral fellowship; studied innovation policy and European technology ecosystems alongside diplomatic and government programming.",
  },
  {
    title: "U.S. Consulate Hamburg Youth Council",
    meta: "Council Member · Germany · 2022",
    detail:
      "Advised Consul General Darion Akins with American and German peers during the early months of the Ukraine crisis.",
  },
  {
    title: "U.S. Youth Ambassadors",
    meta: "Youth Ambassador · Argentina & Chile · 2020–2021",
    detail:
      "One of 48 students selected nationally for the State Department program; led community projects and later served as an alumni ambassador.",
  },
  {
    title: "Congressional Advisory Council · NJ-7",
    meta: "Team Lead · 2019–2022",
    detail:
      "Led a 12-member team developing foreign-affairs, energy, and technology recommendations presented to Representative Tom Malinowski.",
  },
];

const EDUCATION = [
  {
    school: "Yale School of Management",
    degree: "M.M.S., Technology Management",
    year: "2026–2027",
  },
  {
    school: "Yale University",
    degree: "B.S., Electrical Engineering & Computer Science",
    year: "2026",
  },
  {
    school: "Wenzao Ursuline University of Languages",
    degree: "Chinese Studies",
    year: "2021–2022",
  },
];

const HONORS = [
  "Yale STARS Science Fellowship · Science, Technology and Research Scholars",
  "Alan S. Tetelman 1958 Fellowship",
  "Congressional Commendation · U.S. House of Representatives",
  "U.S. Department of State fellowship programs · NSLI-Y, CBYX, and Youth Ambassadors",
  "Kennedy–Lugar Youth Exchange and Study Scholarship Finalist",
  "ISA Award for Advanced Arabic Study",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children} <Arrow />
    </a>
  );
}

function SectionHeading({
  number,
  title,
  intro,
}: {
  number: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{title}</span>
      </div>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-name">Joseph Elsayyid</p>
          <h1 id="hero-title">
            Engineer working across <em>advanced computing</em>, technology
            strategy, and global technology systems.
          </h1>
          <p className="hero-intro">
            I work from circuits and computer architecture outward—to the
            markets, institutions, and international systems that shape how
            technology is built and governed.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank">
              Resume <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="portrait-frame">
            <Image
              src="/joseph-elsayyid-schwarzman.jpeg"
              alt="Portrait of Joseph Elsayyid"
              fill
              priority
              sizes="(min-width: 1100px) 390px, (min-width: 720px) 36vw, calc(100vw - 48px)"
              className="portrait"
            />
            <span className="portrait-caption">New Haven, Connecticut</span>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Engineering</dt>
              <dd>Yale B.S., Electrical Engineering & Computer Science</dd>
            </div>
            <div>
              <dt>Management</dt>
              <dd>Yale SOM M.M.S. candidate, Technology Management</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>Advanced computing work across the U.S., Europe, and Asia</dd>
            </div>
          </dl>
        </div>

        <div className="throughline" aria-label="Professional throughline">
          <span>Circuits & architecture</span>
          <span aria-hidden="true">→</span>
          <span>Advanced computing</span>
          <span aria-hidden="true">→</span>
          <span>Global technology systems</span>
          <span aria-hidden="true">→</span>
          <span>Institutions & leadership</span>
        </div>
      </section>

      <section className="page-shell section-block" id="work" aria-labelledby="work-title">
        <SectionHeading
          number="01"
          title="Selected work"
          intro="Engineering work across AI hardware, embedded computing, medical data systems, and the security of advanced technology."
        />
        <h2 className="sr-only" id="work-title">
          Selected work
        </h2>
        <div className="work-list">
          {WORK.map((item, index) => (
            <article className="work-item" key={item.institution}>
              <div className="work-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="work-meta">
                <p>{item.role}</p>
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <div className="work-body">
                <h3>{item.institution}</h3>
                <p className="work-summary">{item.summary}</p>
                <p className="work-detail">{item.detail}</p>
                <div className="work-footer">
                  <ul className="tag-list" aria-label={`${item.institution} areas`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {item.link ? (
                    <ExternalLink href={item.link.href}>{item.link.label}</ExternalLink>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="leadership-section page-shell section-block"
        id="leadership"
        aria-labelledby="leadership-title"
      >
        <SectionHeading
          number="02"
          title="Leadership & institution building"
          intro="Building durable structures that let technical people identify problems, fund experiments, and ship useful systems."
        />
        <div className="leadership-feature">
          <div className="leadership-title-block">
            <p className="eyebrow">Founder & Chair · 2025–2026</p>
            <h2 id="leadership-title">YCC Technology Division</h2>
            <ExternalLink href="https://ycctech.org">Visit ycctech.org</ExternalLink>
          </div>
          <div className="leadership-copy">
            <p className="lead">
              Founded Yale College Council’s technology division to create a
              formal student voice in Yale’s technology infrastructure.
            </p>
            <p>
              Built programs for paid software bounties, hardware grants,
              hackathons, and the YCC Innovation Prize. The division reviewed
              project funding and supported campus tools spanning dining, room
              availability, events, campus mapping, and CAS-authenticated
              applications.
            </p>
            <ul className="initiative-list">
              <li>Builder funding</li>
              <li>Project review</li>
              <li>Campus infrastructure</li>
              <li>Student governance</li>
            </ul>
          </div>
        </div>
        <div className="advisory-row">
          <p className="eyebrow">Student Advisory · Yale College</p>
          <p>
            Competitively selected to advise Dean Alexia Belperron on Science &
            Quantitative Reasoning resource allocation.
          </p>
          <ExternalLink href="https://science.yalecollege.yale.edu/academics-and-tutoring/student-advisory-committee">
            Committee
          </ExternalLink>
        </div>
      </section>

      <section className="page-shell section-block" id="projects" aria-labelledby="projects-title">
        <SectionHeading
          number="03"
          title="Selected projects"
          intro="Technical systems designed around physical constraints, measurable performance, and real operating environments."
        />
        <h2 className="sr-only" id="projects-title">
          Selected projects
        </h2>
        <div className="project-list">
          {PROJECTS.map((project) => (
            <article className="project-item" key={project.title}>
              <p className="project-number">{project.number}</p>
              <div>
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="project-detail">
                <p>{project.detail}</p>
                {project.link ? (
                  <ExternalLink href={project.link.href}>{project.link.label}</ExternalLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="global-section" id="global" aria-labelledby="global-title">
        <div className="page-shell section-block">
          <SectionHeading
            number="04"
            title="Global technology & public affairs"
            intro="International experience that informs how I think about semiconductor supply chains, technological dependence, export controls, cross-border markets, and institutional decision-making."
          />
          <h2 className="sr-only" id="global-title">
            Global technology and public affairs
          </h2>
          <div className="global-grid">
            {GLOBAL_EXPERIENCE.map((item, index) => (
              <article className={index === 0 ? "global-item global-item-featured" : "global-item"} key={item.title}>
                <p className="global-count">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p className="global-meta">{item.meta}</p>
                <p className="global-detail">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="language-line">
            <span>Languages</span>
            Certified proficiency in Mandarin Chinese, Arabic, and Spanish;
            conversational French and German.
          </p>
        </div>
      </section>

      <section className="page-shell section-block writing-section" id="writing" aria-labelledby="writing-title">
        <SectionHeading
          number="05"
          title="Selected writing"
          intro="Reporting and analysis on science, engineering, and the institutions around them."
        />
        <h2 className="sr-only" id="writing-title">
          Selected writing
        </h2>
        <a
          className="writing-item"
          href="https://yaledailynews.com/articles/yale-quantum-institute-marks-ten-years"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="eyebrow">Yale Daily News · February 6, 2025</p>
            <h3>Yale Quantum Institute Marks Ten Years</h3>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="page-shell section-block about-section" id="about" aria-labelledby="about-title">
        <SectionHeading number="06" title="About" />
        <div className="about-grid">
          <div className="about-copy">
            <h2 id="about-title">
              I’m an engineer interested in how emerging technologies move from
              technical systems into companies, institutions, and international
              competition.
            </h2>
            <p>
              I studied electrical engineering and computer science at Yale and
              am continuing at Yale SOM in Technology Management. My technical
              work has moved between semiconductor research in Belgium and Hong
              Kong, embedded AI at Yale, and large-scale imaging systems at Yale
              School of Medicine.
            </p>
            <p>
              Work across Taiwan, Germany, Jordan, the Middle East, and South
              America sharpened my interest in technology governance and the
              institutions that shape technical progress. At Yale, I put that
              interest into practice by founding YCC Tech and creating a channel
              for students to help improve campus technology.
            </p>
          </div>
          <aside className="about-note">
            <p className="eyebrow">Current focus</p>
            <p>
              Advanced computing, semiconductor ecosystems, technology
              institutions, and the translation of engineering constraints into
              strategic decisions.
            </p>
          </aside>
        </div>

        <div className="credentials-grid">
          <div>
            <p className="credential-heading">Education</p>
            <div className="credential-list">
              {EDUCATION.map((item) => (
                <div className="education-item" key={item.school}>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                  <span>{item.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="credential-heading">Honors</p>
            <ul className="honors-list">
              {HONORS.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s talk about technology, systems, and what comes next.</h2>
        <div className="contact-links">
          <a className="button button-primary" href="mailto:elsayyidjoseph@gmail.com">
            elsayyidjoseph@gmail.com <Arrow />
          </a>
          <a className="button button-secondary" href="/resume.pdf" target="_blank">
            Resume <Arrow />
          </a>
          <ExternalLink href="https://github.com/jelsayyid">GitHub</ExternalLink>
        </div>
      </section>
    </>
  );
}
