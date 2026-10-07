export type Entry = { title: string; role: string; meta?: string; paragraphs: string[]; tags?: string[]; link?: string; linkLabel?: string };
export const ENGINEERING: Entry[] = [
  { title: "HKUST — Spintronic Quantum Material Laboratory", role: "AI Hardware-Software Research Intern", meta: "Hong Kong · Summer 2025", paragraphs: [
    "Worked on a custom 28 nm MTJ compute-in-memory AI accelerator, integrating a Zynq-7020 control platform with AI workloads and building benchmarking workflows for latency, throughput, energy, pruning, quantization, and sparsity."
  ], tags: ["AI accelerators", "Zynq-7020", "FPGA", "TFLite", "Python", "Performance profiling"], link: "/tetelman-report.pdf", linkLabel: "Read Tetelman report (PDF)" },
  { title: "Yale Intelligent Computing Lab", role: "AI Systems Design Researcher", meta: "2024–2025", paragraphs: [
    "Built and profiled transformer-deployment workflows for constrained Raspberry Pi and FPGA platforms, comparing latency, memory, power, and accuracy across pruning, quantization, and deployment choices.",
    "Also worked on FPGA-oriented NanoGPT and compute-in-memory research, using hardware-aware measurements to guide model and system decisions."
  ], tags: ["AI systems", "FPGA", "Raspberry Pi", "PyTorch", "Transformers", "Hardware-aware ML"] },
  { title: "UCLouvain — Martin Andraud Group", role: "Experimental Systems Integration Intern", meta: "Belgium · Summer 2024", paragraphs: [
    "Helped bring up a newly relocated experimental computing lab as the research group moved its systems from Finland to Belgium. I worked through hardware setup, connectivity, configuration, instrumentation, and system-level integration problems until the research stack operated reliably.",
    "I also learned the group’s A-Core RISC-V / mixed-signal compute-in-memory platform and wrote an A-Core Configuration Guide so collaborators could reproduce, troubleshoot, and operate the setup consistently."
  ], tags: ["Systems integration", "Hardware bring-up", "RISC-V", "Compute-in-memory", "Debugging", "Technical documentation"] },
  { title: "Kuan Lab — Yale School of Medicine", role: "Medical Imaging Data Systems Researcher", meta: "2026", paragraphs: [
    "Building Python infrastructure for large-scale 3D electron-microscopy analysis, including chunked HDF5/Zarr-style storage, fragment-graph construction, validation checks, uncertainty-aware filtering, and diagnostics. The system is designed so downstream analyses can distinguish accepted, rejected, and uncertain connections."
  ], tags: ["Python", "Large-scale data", "Graphs", "Validation", "Scientific computing"], link: "https://github.com/jelsayyid/postseg-connectomics" }
];
export const BUILDS: Entry[] = [
  { title: "EdgePulse", role: "Embedded physiological sensing", paragraphs: [
    "Built a wearable sensing testbed using an Arduino Nano 33 BLE Sense Rev2 and MAX30102 optical sensor. I synchronized pulse measurements with accelerometer and gyroscope data at roughly 50 Hz and built Python tools for capture, logging, visualization, and motion labeling."
  ], tags: ["Arduino", "MAX30102", "I2C", "IMU", "Python", "Sensor fusion"], link: "https://github.com/jelsayyid/edgepulse" },
  { title: "CubeSat Systems Program", role: "Embedded systems teaching and prototyping", paragraphs: [
    "Designed and led a hands-on CubeSat-style engineering program at Yale Young Global Scholars. Student teams selected sensors, integrated compute and sensing, built physical prototypes, tested subsystems, and presented final systems.",
    "I built hardware/software demonstrations and coached teams through the interface between sensing, embedded logic, power, mechanics, and reliability."
  ], tags: ["Embedded systems", "Sensors", "Systems engineering", "Prototyping", "Teaching"] },
  { title: "P-bit Stochastic CNN", role: "Verilog / unconventional compute", paragraphs: ["Implemented a LeNet-style stochastic CNN in Verilog using p-bit computation for 15×15 digit classification, reaching roughly 80% accuracy."], tags: ["Verilog", "Digital design", "Neural networks", "Stochastic computing"] },
  { title: "Smart Composting System", role: "Embedded control", paragraphs: ["Built sensor-driven control for a smart-composting prototype intended for Yale dining operations, integrating temperature, humidity, and CO2 sensing with actuator feedback for automated process adjustment."], tags: ["Sensors", "Actuators", "Embedded control", "Physical systems"] },
  { title: "FPGA / HLS CNN Acceleration", role: "Hardware acceleration", paragraphs: ["Implemented and profiled a CNN accelerator using TAPA/HLS on a Xilinx Alveo U55C, reaching roughly 29 GFLOP/s while studying dataflow, memory movement, parallelism, and resource tradeoffs."], tags: ["FPGA", "HLS", "TAPA", "AI acceleration", "Performance"] }
];
export const GLOBAL = [
  { title: "NSLI-Y — Taiwan", meta: "U.S. Department of State Scholar · 2021–2022", detail: "One of 13 U.S. scholars selected for funded Mandarin study at Wenzao Ursuline University. Conducted Mandarin-language research with Taiwanese youth on identity and society." },
  { title: "CBYX + U.S. Consulate Hamburg — Germany", meta: "Fellow and Youth Council Member · 2021–2022", detail: "Studied German and European technology, innovation, and diplomacy through the Congress-Bundestag Youth Exchange and later served on the U.S. Consulate Hamburg Youth Council." },
  { title: "FutureTEC — Jordan", meta: "Cyber Defense Intern · Summer 2023", detail: "Worked with SIEM tooling to monitor security events, correlate application and network logs, investigate incidents, and support response recommendations in an Arabic-speaking environment." },
  { title: "Peace & Dialogue Leadership Initiative", meta: "Fellow · 2024–2025", detail: "One of approximately 30 fellows in an initiative involving Yale and West Point focused on security, U.S. Middle East policy, peacebuilding, and cross-border regional relationships." },
  { title: "U.S. Youth Ambassadors — Argentina & Chile", meta: "Youth Ambassador · 2020–2021", detail: "One of 48 students selected nationally for the U.S. Department of State program; led community projects and later served as an alumni ambassador." }
];
export const WRITING = [
  { title: "Funding student-built technology at Yale", originalTitle: "YCC doubles budget for technology forum that funded student-built apps", meta: "Featured in Yale Daily News", href: "https://yaledailynews.com/articles/ycc-doubles-budget-for-technology-forum-that-funded-student-built-apps" },
  { title: "Reporting on ten years of quantum research at Yale", originalTitle: "Yale Quantum Institute marks ten years", meta: "By Joseph Elsayyid · Yale Daily News · February 5, 2025", href: "https://yaledailynews.com/articles/yale-quantum-institute-marks-ten-years" },
  { title: "Teaching a workshop on Anthropic’s AI tools", originalTitle: "Students teach workshop on how to use Anthropic’s AI tools", meta: "Featured in Yale Daily News · April 10, 2026", href: "https://yaledailynews.com/articles/students-teach-workshop-on-how-to-use-anthropic-s-ai-tools" },
  { title: "Founding YCC Tech", originalTitle: "YCC Senate passes bill to establish tech working committee", meta: "Featured in Yale Daily News · September 8, 2025", href: "https://yaledailynews.com/articles/ycc-senate-passes-bill-to-establish-tech-working-committee" },
  { title: "A MENA Cultural Center at Yale", originalTitle: "YCC pushes for MENA Cultural Center", meta: "Featured in Yale Daily News · March 26, 2025", href: "https://yaledailynews.com/articles/ycc-pushes-for-mena-cultural-center" },
  { title: "Campus policing and student oversight", originalTitle: "YCC passes proposal for Yale Police oversight board", meta: "Featured in Yale Daily News · February 4, 2025", href: "https://yaledailynews.com/articles/ycc-passes-proposal-for-yale-police-oversight-board-citing-concerning-surveillance-of-pro-palestinian-protesters" },
  { title: "Expanding student access to Adobe software", originalTitle: "YCC Senate approves second stipend fund for Adobe licenses", meta: "Featured in Yale Daily News · January 27, 2026", href: "https://yaledailynews.com/articles/ycc-senate-approves-second-stipend-fund-for-adobe-licenses" },
  { title: "Recognizing multilingual writing at Yale", originalTitle: "YCC pushes for non-English courses to fulfill writing requirement", meta: "Featured in Yale Daily News · January 29, 2025", href: "https://yaledailynews.com/articles/ycc-pushes-for-non-english-courses-to-fulfill-writing-requirement" }
];
