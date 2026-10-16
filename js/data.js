/**
 * ================================================================
 *  PORTFOLIO DATA - Edit this file to change your website content
 * ================================================================
 *
 *  HOW TO USE:
 *  This file contains ALL the text and data shown on the website.
 *  You do NOT need to touch index.html, style.css, or main.js.
 *  Just edit the values below.
 *
 *  TIPS:
 *  - To add a new entry, copy an existing one and paste it below
 *  - To remove something, delete that entry entirely
 *  - Use null for empty/missing values
 *  - Your changes appear when you refresh the browser
 *
 * ================================================================
 */

const SITE = {

  // ----------------------------------------------------------------
  //  YOUR PERSONAL INFORMATION
  // ----------------------------------------------------------------
  personal: {
    name: "Eya BADRI",
    initials: "EB",
    title: "Electrical Engineering Student",
    institution: "ENIT",
    subtitle: "Electrical Engineering Student — ENIT",
    email: "eya.badri@etudiant-enit.utm.tn",
    linkedin: "https://www.linkedin.com/in/aya-badri",
    cvFile: "assets/cv/cv.pdf",

    heroTagline: "Electrical Engineering Student — ENIT",
    heroTitleLine1: "Engineering the",
    heroTitleLine2: "Future of Embedded",
    heroTitleLine3: "Intelligent Systems",
    heroDescription: "I design and build systems where hardware meets intelligence — from neural networks running on microcontrollers to autonomous multi-drone tracking. Focused, technical, and hands-on.",
  },

  // ----------------------------------------------------------------
  //  ABOUT SECTION
  // ----------------------------------------------------------------
  about: {
    intro: "I'm an Electrical Engineering student at the École Nationale d'Ingénieurs de Tunis (ENIT), driven by the intersection of hardware, software, and intelligence.",
    paragraphs: [
      "My work spans from designing embedded systems on STM32 microcontrollers to deploying neural networks at the edge using TinyML techniques. I am transitioning from theoretical modeling and software toward real hardware implementation.",
      "Whether it's deploying discrete LQR and Kalman filters on a dynamically balancing Ballbot with automated code generation, optimizing an inference engine for INT8 quantization on an STM32G431, architecting a multi-drone collaborative tracking system, or measuring signals with precision ADC/DMA pipelines — I approach every project with a systems-level mindset and rigorous engineering methodology.",
    ],
    photo: "assets/images/profile.jpg",
    interests: [
      { icon: "chip",    label: "Embedded Systems" },
      { icon: "layers",  label: "AI / TinyML" },
      { icon: "robot",   label: "Robotics" },
      { icon: "bolt",    label: "Control Systems" },
      { icon: "clock",   label: "Real-Time Systems" },
      { icon: "cube",    label: "Intelligent Systems" },
    ],
  },

  // ----------------------------------------------------------------
  //  EDUCATION
  // ----------------------------------------------------------------
  education: [
    {
      date: "2024 – 2026",
      current: true,
      title: "Engineering Degree in Electrical Engineering",
      institution: "École Nationale d'Ingénieurs de Tunis (ENIT)",
      description: "Specializing in industrial automation (Automatique Industrielle). Concurrently pursuing an M2 master's degree in Information System Techniques (IST).",
      tags: ["Industrial Automation", "Embedded Systems", "IST M2"],
    },
    {
      date: "2022 – 2024",
      current: false,
      title: "Preparatory Studies",
      institution: "Institut Préparatoire aux Études d'Ingénieurs",
      description: "Mathématiques-Physique (MP) — intensive two-year preparatory program in mathematics, physics, and engineering fundamentals.",
      tags: ["Mathématiques-Physique", "Physics", "Engineering Foundations"],
    },
    {
      date: "2021",
      current: false,
      title: "Baccalauréat Sciences Expérimentales",
      institution: "Lycée el Wafaa, Ariana, Tunisie",
      description: "Mention Très Bien — Moyenne: 16.86/20.",
      tags: ["Sciences Expérimentales", "Mention Très Bien"],
    },
  ],

// ----------------------------------------------------------------
  //  PROJECTS
  // ----------------------------------------------------------------
  //  tier: 1 = Featured/Flagship (big cards, most prominent)
  //        2 = Important (standard cards)
  //        3 = Other (compact cards)
  //
  //  status: "completed", "in-progress", or "planned"
  //
  //  Each project can have a "details" object for the modal.
  //  If details is null, no "View Details" button appears.
  // ----------------------------------------------------------------
  projects: [

    // === TIER 1: FLAGSHIP ===
    {
      id: "ballbot",
      tier: 1,
      title: "Autonomous 3-Omniwheel Ballbot: Embedded Discrete Control & Dual Telemetry",
      subtitle: "Digital Control Systems Engineering BE — ENIT",
      description: `Designed and implemented an autonomous dynamically balancing Ballbot on STM32L475. Features a cascaded control architecture (Position PD + LQR balance + 5-state discrete Kalman filter), 3-omniwheel inverse kinematics allocation (J⁻¹), model-based code generation (Simulink Embedded Coder), Processor-in-the-Loop (PIL) validation, and a dual telemetry pipeline (USB 125 Hz & standalone embedded Wi-Fi web server).`,
      tech: ["STM32L475", "LQR Control", "Kalman Filter", "Simulink Embedded Coder", "Model-in-the-Loop (MIL)", "Processor-in-the-Loop (PIL)", "C", "FastAPI / WebSockets", "Wi-Fi SoftAP"],
      focus: "Model-Based Design · Discrete LQR & Kalman · Real-Time Embedded Systems · PIL Testing",
      status: "completed",
      icon: "robot",
      context: "BE Conception de Systèmes et Commande Numérique (ENIT)",
      details: {
        problem: `A Ballbot is an intrinsically open-loop unstable inverted pendulum balancing on a spherical ball via three omnidirectional wheels. Without continuous, high-frequency active stabilization, the system tips over and falls in under a second. The challenge was to guarantee strict deterministic execution at 125 Hz (8 ms), fuse noisy IMU sensor data, prevent catastrophic hardware falls with failsafe cutoffs, and mathematically prove controller equivalence from Simulink simulation down to real bare-metal embedded execution.`,
        objective: `Architect, simulate, generate, and validate a full embedded digital control system for the Ballbot. The system must achieve deterministic 125 Hz real-time loops on ARM Cortex-M4, satisfy complete V-Cycle validation (MIL, SIL, PIL on-target), embed a hardware tilt cutoff circuit, and deliver dual telemetry via high-speed USB and a standalone embedded Wi-Fi server.`,
        role: "Embedded Systems & Control Engineer — led dynamical modeling, cascade PD/LQR control design, Kalman filter state estimation, automated C code generation via Simulink Embedded Coder, PIL testing on STM32 hardware, and telemetry supervision architecture.",
        architecture: [
          "Sensing: LSM6DSL 6-DoF IMU sampled via I2C at 125 Hz with hardware startup gyroscope bias calibration",
          "State Estimation: Decoupled 5-state discrete Kalman filters estimating attitude (roll/pitch) and bias correction",
          "Control Loop: Cascaded outer position PD controller + inner state feedback LQR (Linear Quadratic Regulator)",
          "Actuation Mixing: 3-omniwheel inverse Jacobian kinematic matrix (J⁻¹) torque/velocity allocation",
          "Safety Layer: Tilt cutoff circuit (coupe-circuit) tripping at ±16.1° sustained for 48 ms (6 ticks) with lockup",
          "Real-Time Kernel: TIM3 hardware interrupt @ 125 Hz (8 ms period) executing control computations in ~102 µs",
          "Dual Telemetry: USB serial @ 921,600 baud (89-byte binary frame) + onboard Wi-Fi (ISM43362 SPI) SoftAP web server",
        ],
        implementation: [
          "Executed full Model-Based Design V-cycle: Simulink model → automated C code generation (Embedded Coder) → bare-metal compilation with zero discrepancies",
          "Engineered Processor-in-the-Loop (PIL) framework on physical STM32 board executing against a real-time PC physics simulation over 921,600 baud USART",
          "Developed non-blocking Wi-Fi HTTP web server running directly on the STM32 board serving live mobile telemetry at http://192.168.10.1:8080/ without any external PC",
          "Built a high-performance PC supervision dashboard using FastAPI, WebSockets, and Chart.js for real-time 125 Hz telemetry visualization and CSV logging",
          "Exhaustively tested 9 verification scenarios including sensor noise, impulse disturbances, step responses, and NaN/Inf robustness",
        ],
        results: [
          "MIL / SIL Verification: Model vs. C discrepancy ≤ 5×10⁻¹⁰; SIL generated code vs. C discrepancy ≤ 4.8×10⁻⁷ across 18,000 steps",
          "PIL Hardware-in-the-Loop: STM32 on-target execution discrepancy ≤ 1.7×10⁻⁶; Kalman + LQR tick compute time ~172 µs (well within 8,000 µs budget)",
          "Real-Time Determinism: Bench tick average 102.0 µs (max 106 µs, max jitter 5 µs)",
          "Safety Cutoff: Deterministic motor shutdown in exactly 48.0 ms upon exceeding ±16.1° tilt across all axes",
          "Zero Packet Loss Telemetry: 78,288 frames over 626.3 seconds sustained at 125.000 Hz with 0 dropped frames",
          "Comprehensive Test Coverage: 143/143 firmware unit tests and 41/41 supervision tests passing",
        ],
        challenges: [
          "Ensuring non-blocking Wi-Fi SPI transactions did not starve or introduce jitter to the 125 Hz I2C IMU reading and TIM3 control tick",
          "Handling axis conventions, sensor noise, and accelerometer dynamic acceleration artifacts during rapid tilt motion",
          "Guaranteeing strict bit-exact equivalence between double-precision Simulink models and single-precision Cortex-M4 FPU operations",
        ],
        learnings: [
          "Mastery of Model-Based Design (MBD) and the industrial V-cycle (MIL → SIL → PIL → Hardware Bench)",
          "Discrete state-space control design (LQR, Riccati equations, controllability/observability, Kalman state estimators)",
          "Bare-metal embedded optimization, interrupt-driven peripherals, and real-time deterministic execution on ARM Cortex-M4",
        ],
        metrics: [
          { value: "125 Hz", label: "Control Frequency" },
          { value: "102 µs", label: "Compute Time / 8 ms" },
          { value: "48 ms", label: "Failsafe Cutoff" },
          { value: "0 Loss", label: "Telemetry Over 78k Pkts" },
        ],
        image: "assets/images/project-ballbot-setup.png",
      },
    },
    {
      id: "battery-twin",
      tier: 1,
      title: "Hybrid Grey-Box Li-ion Battery Digital Twin",
      subtitle: "SOC-SOH Estimation",
      description: `Developed a hybrid grey-box approach combining physics-based equivalent circuit models with deep learning for accurate battery State of Charge (SOC) and State of Health (SOH) estimation. Embedded deployment on STM32 using INT8 quantization for real-time TinyML inference.`,
      tech: ["STM32G431RB", "CMSIS-NN", "INT8 Quantization", "Multi-task LSTM", "TinyML"],
      focus: "Hybrid modeling · TinyML · STM32 embedded deployment",
      status: "completed",
      icon: "battery",
      context: "ACTIA Engineering",
      // Details for the modal (set to null to hide "View Details" button)
      details: {
        problem: `Accurate battery SOC and SOH estimation is critical for electric vehicle battery management systems. Traditional approaches rely on simplified equivalent circuit models that lose accuracy over time, while pure data-driven approaches require large datasets and lack physical interpretability. Furthermore, deploying advanced neural networks on resource-constrained microcontrollers presents significant computational challenges.`,
        objective: `Combine physics-based and data-driven methods into a hybrid grey-box digital twin that achieves high accuracy across varying operating conditions. The ultimate goal was to deploy this hybrid model onto embedded hardware (STM32) for real-time inference under strict memory and timing constraints.`,
        role: "Lead developer — designed the hybrid architecture, performed dataset processing, trained the multi-task model, and implemented the full embedded deployment on STM32G431.",
        architecture: [
          "Physics layer: Thévenin 1RC equivalent circuit model",
          "Learning layer: FNN architecture (5 → 64 → 32 → 1) predicting SOC",
          "Processing: 505-sample sliding window with StandardScaler",
          "Deployment: INT8 quantized model on STM32G431RB (ARM Cortex-M4F @ 170 MHz)",
          "Validation: HIL architecture with Raspberry Pi Pico H supplying 10 Hz UART stream to STM32",
        ],
        implementation: [
          "Implemented rigorous feature processing with 0 divergence between Python and C environments",
          "Trained multi-task FNN network and quantized to INT8 using CMSIS-NN",
          "Developed custom UART protocol (12-byte Frame v1.1) for PC ↔ STM32 communication (including CRC-8/SMBUS)",
          "Exhaustively validated 224,187 samples achieving bit-exact numerical validation between Python reference and STM32",
          "Ran continuous LA92 HIL validation (140,874 samples, ~3.9 hours) at ~9.97 Hz",
        ],
        results: [
          "LA92 Performance: RMSE 1.1729%, MAE 0.8868%, R² 0.9980",
          "US06 Performance: RMSE 3.7997%, MAE 2.9400%, R² 0.9802",
          "Embedded Performance: ~9.4 µs feature extraction, ~103–104 µs inference on STM32G431",
          "100% bit-exact match during Hardware-In-the-Loop validation",
        ],
        challenges: [
          "Achieving bit-exact feature processing in C compared to Python's StandardScaler",
          "Balancing model complexity with embedded memory and compute constraints",
          "Managing the transition from Python training environment to C embedded deployment",
        ],
        learnings: [
          "Deep understanding of TinyML deployment and CMSIS-NN INT8 quantization",
          "System-level thinking for engineering-grade battery management and validation pipelines",
          "Hardware-in-the-Loop (HIL) testing methodologies for real-time systems",
        ],
        metrics: [
          { value: "1.17%", label: "LA92 RMSE" },
          { value: "104µs", label: "STM32 Inference" },
          { value: "~36KB", label: "Flash Usage (~27.5%)" },
        ],
        image: "assets/images/project-battery.jpg",
      },
    },
    {
      id: "drones",
      tier: 1,
      title: "Collaborative Target Tracking Using Two Drones",
      subtitle: "PFA — Multi-Agent Systems",
      description: `Multi-drone collaborative tracking system using Deep Reinforcement Learning
        for autonomous target following. Two drones coordinate to maintain continuous visual
        contact with a moving target, focusing on real-world robotics coordination.`,
      tech: ["Deep Reinforcement Learning", "Python", "Multi-Agent Coordination", "Computer Vision"],
      focus: "Two-drone coordination · DRL-based tracking policies · Autonomous Systems",
      status: "completed",
      icon: "drone",
      context: "PFA (Projet de Fin d'Année)",
      details: {
        problem: `Single-drone target tracking is limited by restricted field of view, occlusion
          vulnerability, and inability to maintain persistent coverage during complex maneuvers.
          A collaborative multi-drone approach can overcome these limitations but introduces
          significant coordination challenges.`,
        objective: `Develop a collaborative system where two drones use Deep Reinforcement Learning
          to autonomously coordinate and maintain continuous visual tracking of a moving target.`,
        role: "Designing the multi-agent coordination framework and DRL training pipeline.",
        architecture: [
          "Perception layer: vision-based target detection from aerial video streams",
          "Decision layer: Deep Reinforcement Learning agents for drone positioning",
          "Coordination layer: inter-drone state sharing for collaborative decisions",
        ],
        implementation: [
          "Designing multi-agent DRL training environment with simulated drone dynamics",
          "Developing reward functions that promote cooperative target tracking behavior",
          "Building simulation framework for training and validation",
        ],
        results: [
          "Project currently in active development",
          "Simulation framework established for multi-drone scenario testing",
          "Initial DRL training pipeline under development",
        ],
        challenges: [
          "Designing reward functions for multi-agent RL that promote genuine cooperation",
          "Managing inter-drone communication latency in coordination decisions",
          "Handling occlusion and target re-identification across drone viewpoints",
        ],
        learnings: [
          "Multi-agent reinforcement learning design patterns",
          "Systems architecture for complex multi-component robotics projects",
          "Drone systems and aerial perception challenges",
        ],
        metrics: [
          { value: "2", label: "Collaborative Agents" },
          { value: "DRL", label: "Algorithm" },
          { value: "Vision", label: "Tracking" },
        ],
        image: "assets/images/project-drones.jpg",
      },
    },

    // === TIER 2: IMPORTANT ===
    {
      id: "rms",
      tier: 2,
      title: "STM32 RMS Voltage Measurement System",
      subtitle: null,
      description: `Precision AC signal measurement system using STM32F407 with ADC/DMA pipeline,
        timer-driven acquisition, and real-time RMS calculation with signal generation via DAC.`,
      tech: ["STM32F407", "ADC / DAC", "DMA", "Timers", "Signal Processing"],
      focus: "Signal acquisition & generation · DMA-driven pipelines · Real-time computation",
      status: "completed",
      icon: "wave",
      context: null,
      details: {
        problem: `Accurate AC voltage measurement is fundamental to power quality monitoring, grid analysis,
          and energy metering. Software-based RMS calculation requires precise, high-speed signal acquisition
          without introducing sampling artifacts or timing jitter.`,
        objective: `Design a high-precision AC signal measurement system on STM32F407 using DMA-driven ADC
          acquisition, timer-synchronized sampling, and real-time RMS calculation.`,
        role: "Full system design — from hardware peripheral configuration to signal processing algorithm implementation.",
        architecture: [
          "Timer-triggered ADC acquisition with configurable sampling rates",
          "DMA data transfer: zero-CPU-overhead streaming from ADC to memory",
          "Real-time RMS computation on circular buffer with rolling calculation",
          "DAC signal generation for system validation and testing",
        ],
        implementation: [
          "Designed ADC/DMA acquisition pipeline with hardware timer-driven sampling",
          "Implemented double-buffered DMA transfer for continuous, non-blocking acquisition",
          "Developed real-time RMS calculation algorithm on streaming sample data",
          "Created DAC-based signal generation for end-to-end validation",
        ],
        results: [
          "Precision RMS measurement with minimal CPU overhead via DMA",
          "Deterministic sampling with zero timing jitter from hardware timer triggering",
          "Validated measurement accuracy against reference instrumentation",
        ],
        challenges: [
          "Achieving precise sampling intervals without software timing dependencies",
          "Managing DMA buffer management to prevent data overrun",
          "Coordinating ADC and DAC peripherals without mutual interference",
        ],
        learnings: [
          "Mastery of STM32 DMA and timer peripheral configuration",
          "Practical ADC/DAC and sampling theory considerations",
          "Real-time signal processing on embedded platforms",
        ],
        metrics: [
          { value: "DMA", label: "Data Transfer" },
          { value: "Zero-CPU", label: "Sampling Overhead" },
          { value: "Real-Time", label: "Processing" },
        ],
        image: "assets/images/project-stm32.jpg",
      },
    },
    
    // === TIER 3: OTHER ===
    {
      id: "beaglebone",
      tier: 3,
      title: "BeagleBone Black Kernel Driver",
      subtitle: null,
      description: `Linux kernel driver for BeagleBone Black implementing GPIO interrupt handling
        and a /proc interface for real-time speed measurement.`,
      tech: ["Linux Kernel", "C", "GPIO Interrupts", "/proc Interface", "BeagleBone Black"],
      focus: "Kernel module development · Hardware interrupt handling",
      status: "completed",
      icon: "terminal",
      context: null,
      details: {
        problem: `Interfacing with hardware at the Linux kernel level requires writing custom kernel modules
          that handle interrupts efficiently and expose data to user space.`,
        objective: `Develop a Linux kernel driver for BeagleBone Black that handles GPIO interrupts for
          speed measurement and exposes the measured data through the /proc filesystem.`,
        role: "Designed and implemented the kernel module, interrupt handlers, and /proc interface.",
        architecture: [
          "Kernel module with GPIO interrupt request (IRQ) registration",
          "Interrupt handler for edge-triggered GPIO events",
          "/proc virtual file interface for user-space data access",
        ],
        implementation: [
          "Wrote Linux kernel module with proper module_init/module_exit",
          "Implemented GPIO interrupt handler with debounce logic",
          "Developed /proc file read interface for speed data output",
        ],
        results: [
          "Working kernel driver with reliable interrupt handling",
          "Clean /proc interface for user-space data access",
        ],
        challenges: [
          "Kernel-space programming with strict memory and timing constraints",
          "Proper interrupt handler design (top-half/bottom-half)",
        ],
        learnings: [
          "Linux kernel module development workflow",
          "Hardware interrupt handling in embedded Linux",
        ],
        metrics: [
          { value: "Linux", label: "Kernel Module" },
          { value: "GPIO", label: "Hardware Interface" },
          { value: "/proc", label: "User Interface" },
        ],
        image: "assets/images/project-beaglebone.jpg",
      }
    }
  ],

  // ----------------------------------------------------------------
  //  PROFESSIONAL EXPERIENCE
  // ----------------------------------------------------------------
  experience: [
    {
      title: "Engineering Intern",
      company: "ACTIA",
      date: "Summer 2026 · 2 Months",
      description: `Developed a Hybrid Grey-Box Li-ion Battery Digital Twin with embedded deployment. Handled end-to-end implementation from feature processing and multi-task model training to INT8 quantization and HIL validation on STM32 microcontrollers.`,
      tags: ["Embedded AI", "STM32", "TinyML", "Hardware Validation"],
    },
    {
      title: "Intern",
      company: "STEG",
      date: "Summer 2025 · 1 Month",
      description: `Gained practical engineering experience and exposure to electrical infrastructure operations and measurements.`,
      tags: ["Electrical Engineering", "Measurement Systems"],
    },
  ],

  // ----------------------------------------------------------------
  //  SKILLS
  // ----------------------------------------------------------------
  skills: [
    {
      category: "Embedded Systems",
      icon: "chip",
      items: [
        { name: "STM32 (L4, G4, F4 series)", level: "Core", description: "Development & debugging" },
        { name: "STM32CubeIDE", level: "Core", description: "Integrated development" },
        { name: "Keil µVision", level: "Working Knowledge", description: "IDE & debugging" },
        { name: "CMSIS-NN", level: "Core", description: "Neural network inference" },
        { name: "ADC / DMA / UART / I2C / SPI", level: "Core", description: "Peripheral configuration" },
        { name: "Hardware Validation & PIL", level: "Core", description: "Testing & verification" },
      ],
    },
    {
      category: "Control Systems & Robotics",
      icon: "robot",
      items: [
        { name: "Discrete State-Space & LQR", level: "Core", description: "Feedback balance control" },
        { name: "Kalman Filtering", level: "Core", description: "Attitude & state estimation" },
        { name: "Model-Based Design (MBD)", level: "Core", description: "MIL, SIL, PIL V-cycle" },
        { name: "Simulink Embedded Coder", level: "Core", description: "Automated C code generation" },
        { name: "Omnidirectional Kinematics", level: "Core", description: "Jacobian matrix allocation" },
        { name: "Real-Time Telemetry & WebSockets", level: "Working Knowledge", description: "PC & mobile supervision" },
      ],
    },
    {
      category: "Programming",
      icon: "code",
      items: [
        { name: "C", level: "Core", description: "Systems & embedded" },
        { name: "C++", level: "Working Knowledge", description: "Embedded applications" },
        { name: "Python", level: "Core", description: "ML, scripting, tools" },
      ],
    },
    {
      category: "AI / Machine Learning",
      icon: "layers",
      items: [
        { name: "TensorFlow", level: "Working Knowledge", description: "Model development" },
        { name: "CMSIS-NN", level: "Core", description: "Embedded inference" },
        { name: "INT8 Quantization", level: "Core", description: "Model optimization" },
        { name: "TinyML", level: "Core", description: "Edge AI deployment" },
        { name: "Deep Learning", level: "Working Knowledge", description: "Neural Networks" },
        { name: "Reinforcement Learning", level: "Familiar", description: "Multi-agent systems" },
      ],
    },
    {
      category: "Electrical Engineering",
      icon: "bolt",
      items: [
        { name: "Signal Processing", level: "Core", description: "AC/DC measurement" },
        { name: "Power Electronics", level: "Familiar", description: "Energy systems" },
        { name: "Circuit Design", level: "Working Knowledge", description: "Analog & digital" },
        { name: "Measurement Systems", level: "Core", description: "RMS, calibration" },
      ],
    },
    {
      category: "Tools & Software",
      icon: "wrench",
      items: [
        { name: "Git / GitHub", level: "Working Knowledge", description: "Version control" },
        { name: "STM32CubeMX", level: "Core", description: "Configuration & code gen" },
        { name: "Oscilloscope / Logic Analyzer", level: "Core", description: "Debug & measurement" },
        { name: "MATLAB / Simulink", level: "Working Knowledge", description: "Simulation & analysis" },
        { name: "LaTeX", level: "Working Knowledge", description: "Technical documentation" },
      ],
    },
  ],

  // ----------------------------------------------------------------
  //  ASSOCIATIONS / ACTIVITIES
  // ----------------------------------------------------------------
  activities: [
    {
      title: "ENIT Robotics Club",
      role: "Treasurer & Sponsorship Coordinator",
      description: `Serving as Treasurer and Sponsorship Coordinator at the ENIT Robotics Club. Led team leadership in designing and building a **line-following robot**. Coordinated sponsorship partnerships and managed club finances while contributing to embedded systems and autonomous robotics projects.`,
    },
  ],

  // ----------------------------------------------------------------
  //  CONTACT INFORMATION
  // ----------------------------------------------------------------
  contact: {
    email: "eya.badri@etudiant-enit.utm.tn", 
    linkedin: "https://www.linkedin.com/in/aya-badri", 
    linkedinLabel: "LinkedIn Profile", 
    cvFile: "assets/cv/cv.pdf",  
    message: "Open to opportunities, collaborations, and technical discussions",
  },
};

// ----------------------------------------------------------------
//  ICON MAP — SVG icon identifiers used in the data above
// ----------------------------------------------------------------

const ICONS = {
  chip: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>`,
  layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>`,
  robot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>`,
  bolt: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>`,
  clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>`,
  cube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`,
  code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    <line x1="14" y1="4" x2="10" y2="20" stroke-dasharray="2 2"/>
  </svg>`,
  wave: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polyline points="1 12 5 12 8 4 11 20 14 8 17 16 20 12 23 12"/>
    <line x1="1" y1="20" x2="23" y2="20" opacity="0.3"/>
  </svg>`,
  drone: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2a4 4 0 0 1 4 4M12 2a4 4 0 0 0-4 4"/>
    <path d="M12 22a4 4 0 0 0 4-4M12 22a4 4 0 0 1-4-4"/>
    <path d="M2 12a4 4 0 0 1 4-4M2 12a4 4 0 0 0 4 4"/>
    <path d="M22 12a4 4 0 0 0-4-4M22 12a4 4 0 0 1-4 4"/>
    <line x1="9" y1="9" x2="15" y2="15" stroke-dasharray="2 2"/>
  </svg>`,
  battery: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="7" width="20" height="10" rx="2"/>
    <line x1="6" y1="7" x2="6" y2="3"/><line x1="10" y1="7" x2="10" y2="3"/>
    <line x1="14" y1="7" x2="14" y2="3"/><line x1="18" y1="7" x2="18" y2="3"/>
    <rect x="5" y="10" width="3" height="4" fill="currentColor" opacity="0.3"/>
    <rect x="10" y="10" width="3" height="4" fill="currentColor" opacity="0.5"/>
    <rect x="15" y="10" width="3" height="4" fill="currentColor" opacity="0.8"/>
  </svg>`,
  terminal: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>`,
  wrench: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>`,
  briefcase: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>`,
  lightning: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>`,
  gear: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"/>
    <path d="M8.56 9.8A4 4 0 0 1 12 2"/>
    <circle cx="12" cy="14" r="8"/>
    <path d="M12 10v4l2.5 1.5"/>
    <path d="M7.5 14.5l2 2"/><path d="M16.5 14.5l-2 2"/>
  </svg>`,
  mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
  linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>`,
  file: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>`,
  mailTo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
  grid: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`,
};
