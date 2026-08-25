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
      "The central unit, “Chip Cold War,” examined Taiwan’s role in advanced-chip production, semiconductor supply chains, export controls, technological dependence, and U.S.-China competition. Other sessions addressed cyber conflict, advanced computing, and national security.",
  },
  {
    institution: "Kuan Lab, Yale School of Medicine",
    role: "Medical Imaging Data Systems Developer",
    period: "January 2026 to present",
    location: "New Haven, CT",
    summary:
      "Built data infrastructure for large-scale 3D brain-imaging analysis at Yale School of Medicine.",
    detail:
      "Implemented modular ingestion, chunked HDF5 and Zarr-style storage, graph construction, validation, and diagnostics for post-segmentation workflows. The system turns large imaging outputs into data that can be checked, queried, and used in downstream analysis.",
    link: {
      href: "https://github.com/jelsayyid/postseg-connectomics",
      label: "View repository",
    },
  },
  {
    institution: "HKUST, Spintronic Quantum Material Laboratory",
    role: "AI Hardware-Software Intern",
    period: "Summer 2025",
    location: "Hong Kong",
    summary:
      "Developed and evaluated system-level designs for a 28 nm MTJ compute-in-memory AI accelerator.",
    detail:
      "Profiled latency, throughput, and energy while testing pruning, quantization, and sparsity strategies. Translated device constraints into software requirements and feasible system-level performance targets.",
  },
  {
    institution: "Yale Intelligent Computing Lab",
    role: "AI Systems Design Intern",
    period: "2024 to 2025",
    location: "New Haven, CT",
    summary:
      "Developed transformer deployment and profiling workflows for embedded Linux and Raspberry Pi systems.",
    detail:
      "Measured latency, memory, power, and accuracy across pruning, quantization, and model-design choices. Extended the same performance analysis to real-time, pruned and quantized ResNet18 inference on constrained hardware.",
  },
  {
    institution: "UCLouvain, Martin Andraud Group",
    role: "Software-Hardware Co-Design Intern",
    period: "Summer 2024",
    location: "Louvain-la-Neuve, Belgium",
    summary:
      "Contributed to hardware-software integration for a 22 nm mixed-signal compute-in-memory accelerator at UCLouvain.",
    detail:
      "Connected RISC-V control and calibration software to circuit-level behavior, improving compute reliability by 25-45% across operating conditions and aligning hardware, firmware, and algorithm requirements.",
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
  },
];

const PROJECTS = [
  {
    title: "Automated Composting System",
    description: "Hardware-software product design",
    detail:
      "Designed a smart-composter prototype for Yale’s 14 residential dining halls. Integrated temperature, humidity, and CO2 sensors with actuators and microcontroller software for closed-loop environmental control in a real deployment context.",
  },
  {
    title: "GPT-Lite, NanoGPT FPGA Optimization",
    description: "Accelerator mapping and model optimization",
    detail:
      "Mapped transformer inference to FPGA fabric and built a software-led workflow for refactoring, quantization, and profiling under tight compute and memory constraints. The source project retained 99% of baseline accuracy.",
  },
  {
    title: "EdgePulse",
    description: "Embedded physiological sensing",
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
    title: "Peace and Dialogue Leadership Initiative",
    meta: "Fellow, Israel and the Palestinian Territories, 2024 to 2025",
    detail:
      "One of approximately 30 fellows in an initiative with West Point focused on U.S. Middle East policy, security, and civil-military relations. Joined a regional delegation with political, diplomatic, academic, business, and military leaders. Built a computational text-analysis tool to examine framing bias.",
  },
  {
    title: "National Security Language Initiative for Youth",
    meta: "U.S. Department of State Scholar, Taiwan, 2021 to 2022",
    detail:
      "One of 13 scholars selected for Mandarin study at Wenzao Ursuline University. Conducted Mandarin-language youth surveys on Taiwanese identity.",
  },
  {
    title: "Congress-Bundestag Youth Exchange",
    meta: "Fellow, Germany, 2021",
    detail:
      "Selected for the U.S.-German bilateral fellowship. Studied innovation policy and European technology ecosystems alongside diplomatic and government programming.",
  },
  {
    title: "U.S. Consulate Hamburg Youth Council",
    meta: "Council Member, Germany, 2022",
    detail:
      "Advised Consul General Darion Akins with American and German peers during the early months of the Ukraine crisis.",
  },
  {
    title: "U.S. Youth Ambassadors",
    meta: "Youth Ambassador, Argentina and Chile, 2020 to 2021",
    detail:
      "One of 48 students selected nationally for the State Department program. Led community projects and later served as an alumni ambassador.",
  },
  {
    title: "Congressional Advisory Council, NJ-7",
    meta: "Team Lead, 2019 to 2022",
    detail:
      "Led a 12-member team developing foreign-affairs, energy, and technology recommendations presented to Representative Tom Malinowski.",
  },
];

const ARTICLES = [
  {
    title: "Yale Quantum Institute marks ten years",
    meta: "By Joseph Elsayyid, Yale Daily News, February 5, 2025",
    href: "https://yaledailynews.com/articles/yale-quantum-institute-marks-ten-years",
  },
  {
    title: "YCC Senate passes bill to establish tech working committee",
    meta: "Featured in Yale Daily News, September 8, 2025",
    href: "https://yaledailynews.com/articles/ycc-senate-passes-bill-to-establish-tech-working-committee",
  },
  {
    title: "YCC pushes for MENA Cultural Center",
    meta: "Featured in Yale Daily News, March 26, 2025",
    href: "https://yaledailynews.com/articles/ycc-pushes-for-mena-cultural-center",
  },
  {
    title: "YCC passes proposal for Yale Police oversight board",
    meta: "Featured in Yale Daily News, February 4, 2025",
    href: "https://yaledailynews.com/articles/ycc-passes-proposal-for-yale-police-oversight-board-citing-concerning-surveillance-of-pro-palestinian-protesters",
  },
  {
    title: "Students teach workshop on how to use Anthropic’s AI tools",
    meta: "Featured in Yale Daily News, April 10, 2026",
    href: "https://yaledailynews.com/articles/students-teach-workshop-on-how-to-use-anthropic-s-ai-tools",
  },
  {
    title: "YCC Senate approves second stipend fund for Adobe licenses",
    meta: "Featured in Yale Daily News, January 27, 2026",
    href: "https://yaledailynews.com/articles/ycc-senate-approves-second-stipend-fund-for-adobe-licenses",
  },
  {
    title: "YCC pushes for non-English courses to fulfill writing requirement",
    meta: "Featured in Yale Daily News, January 29, 2025",
    href: "https://yaledailynews.com/articles/ycc-pushes-for-non-english-courses-to-fulfill-writing-requirement",
  },
];

const EDUCATION = [
  {
    school: "Yale School of Management",
    degree: "M.M.S., Technology Management",
    year: "2026 to 2027",
  },
  {
    school: "Yale University",
    degree: "B.S., Electrical Engineering and Computer Science",
    year: "2026",
  },
  {
    school: "Wenzao Ursuline University of Languages",
    degree: "Chinese Studies",
    year: "2021 to 2022",
  },
];

const HONORS = [
  "Yale STARS Science Fellowship, Science, Technology and Research Scholars",
  "Alan S. Tetelman 1958 Fellowship",
  "Congressional Commendation, U.S. House of Representatives",
  "U.S. Department of State fellowship programs, NSLI-Y, CBYX, and Youth Ambassadors",
  "Kennedy-Lugar Youth Exchange and Study Scholarship Finalist",
  "ISA Award for Advanced Arabic Study",
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id}>{children}</h2>;
}

function SectionBackdrop({
  src,
  variant,
}: {
  src: string;
  variant: "work" | "leadership" | "global" | "about";
}) {
  return (
    <div className={`section-backdrop section-backdrop-${variant}`} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 860px) 100vw, 56vw"
        className="section-backdrop-image"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-image-wrap">
          <Image
            src="/joseph-elsayyid-hero.png"
            alt="Joseph Elsayyid"
            fill
            priority
            sizes="(min-width: 861px) 68vw, calc(100vw - 32px)"
            className="hero-image"
          />
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">
            Engineer working across advanced computing, technology strategy,
            and global technology systems.
          </h1>
          <div className="hero-details">
            <p>
              Yale B.S. in Electrical Engineering &amp; Computer Science. Yale SOM M.M.S. candidate in Technology Management.
            </p>
            <p>
              Certified proficiency in Mandarin Chinese, Arabic, and Spanish; conversational French and German.
            </p>
          </div>
          <div className="plain-links" aria-label="Primary links">
            <a href="#work">Selected work</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="mailto:elsayyidjoseph@gmail.com">Email</a>
          </div>
        </div>
      </section>

      <section className="page-shell section-block section-visual" id="work" aria-labelledby="work-title">
        <SectionBackdrop src="/joseph-elsayyid-yale-staircase.webp" variant="work" />
        <SectionHeading id="work-title">Selected Work</SectionHeading>
        <div className="entry-list">
          {WORK.map((item) => (
            <article className="entry" key={item.institution}>
              <h3>{item.institution}</h3>
              <p className="entry-meta">
                {item.role}, {item.period}, {item.location}
              </p>
              <p>
                {item.summary} {item.detail}
              </p>
              {item.link ? (
                <ExternalLink href={item.link.href}>{item.link.label}</ExternalLink>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-block section-visual" id="leadership" aria-labelledby="leadership-title">
        <SectionBackdrop src="/joseph-elsayyid-habibitech-summit.webp" variant="leadership" />
        <SectionHeading id="leadership-title">Leadership and Institution Building</SectionHeading>
        <div className="entry-list">
          <article className="entry entry-featured">
            <h3>YCC Technology Division</h3>
            <p className="entry-meta">Founder and Chair, 2025 to 2026</p>
            <p>
              Founded Yale College Council’s technology division to create a
              formal student voice in Yale’s technology infrastructure. Built
              programs for paid software bounties, hardware grants, hackathons,
              and the YCC Innovation Prize. The division reviewed project
              funding and supported campus tools for dining, room availability,
              events, campus mapping, and CAS-authenticated applications.
            </p>
            <ExternalLink href="https://ycctech.org">ycctech.org</ExternalLink>
          </article>
          <article className="entry">
            <h3>Student Advisory, Yale College</h3>
            <p>
              Competitively selected to advise Dean Alexia Belperron on Science
              and Quantitative Reasoning resource allocation.
            </p>
            <ExternalLink href="https://science.yalecollege.yale.edu/academics-and-tutoring/student-advisory-committee">
              Student Advisory Committee
            </ExternalLink>
          </article>
        </div>
      </section>

      <section className="page-shell section-block" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title">Selected Projects</SectionHeading>
        <div className="entry-list">
          {PROJECTS.map((project) => (
            <article className="entry" key={project.title}>
              <h3>{project.title}</h3>
              <p className="entry-meta">{project.description}</p>
              <p>{project.detail}</p>
              {project.link ? (
                <ExternalLink href={project.link.href}>{project.link.label}</ExternalLink>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-block section-visual" id="global" aria-labelledby="global-title">
        <SectionBackdrop src="/joseph-elsayyid-global-forum.webp" variant="global" />
        <SectionHeading id="global-title">Global Technology and Public Affairs</SectionHeading>
        <p className="section-intro">
          These experiences inform how I think about semiconductor supply
          chains, technological dependence, export controls, cross-border
          technology markets, international competition, and technology
          institutions.
        </p>
        <div className="entry-list">
          {GLOBAL_EXPERIENCE.map((item) => (
            <article className="entry" key={item.title}>
              <h3>{item.title}</h3>
              <p className="entry-meta">{item.meta}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="languages">
          <h3>Languages</h3>
          <p>
            Certified proficiency in Mandarin Chinese, Arabic, and Spanish;
            conversational French and German.
          </p>
        </div>
      </section>

      <section className="page-shell section-block" id="articles" aria-labelledby="articles-title">
        <SectionHeading id="articles-title">Featured Articles</SectionHeading>
        <div className="article-list">
          {ARTICLES.map((article) => (
            <article className="article-entry" key={article.href}>
              <h3>
                <ExternalLink href={article.href}>{article.title}</ExternalLink>
              </h3>
              <p>{article.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-block section-visual" id="about" aria-labelledby="about-title">
        <SectionBackdrop src="/joseph-elsayyid-yale-som-welcome.webp" variant="about" />
        <SectionHeading id="about-title">About</SectionHeading>
        <div className="about-copy">
          <p className="about-lead">
            I’m an engineer interested in how emerging technologies move from
            technical systems into companies, institutions, and international
            competition.
          </p>
          <p>
            My technical work in Belgium, Hong Kong, and at Yale developed
            alongside international experience in Taiwan, Germany, Jordan, the
            Middle East, and South America. That combination shaped my interest
            in semiconductor ecosystems, technology governance, and the
            institutions that influence technical progress. At Yale, I put that
            interest into practice by founding YCC Tech and creating a channel
            for students to improve campus technology.
          </p>
        </div>

        <div className="credentials">
          <section aria-labelledby="education-title">
            <h3 id="education-title">Education</h3>
            <div className="credential-list">
              {EDUCATION.map((item) => (
                <article className="credential" key={item.school}>
                  <h4>{item.school}</h4>
                  <p>{item.degree}</p>
                  <p>{item.year}</p>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="honors-title">
            <h3 id="honors-title">Honors</h3>
            <div className="honors-list">
              {HONORS.map((honor) => (
                <p key={honor}>{honor}</p>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-shell section-block contact-section" id="contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title">Contact</SectionHeading>
        <p>
          To get in touch, email me at: <a href="mailto:elsayyidjoseph@gmail.com">elsayyidjoseph@gmail.com</a>.
        </p>
        <div className="plain-links">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <ExternalLink href="https://github.com/jelsayyid">GitHub</ExternalLink>
        </div>
      </section>
    </>
  );
}
