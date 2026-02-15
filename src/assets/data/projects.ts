const Projects = [
  {
    name: "CodeRAG",
    description:
      "Open-source VS Code AI copilot enabling offline code generation and comprehension using local LLMs with a full RAG pipeline for secure, context-aware development.",
    id: "coderag",
    githubLink: "",
    type: "ai-developer-tool",
    isWebsite: true,
    technologies: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "ChromaDB" },
      { name: "Qdrant" },
      { name: "Ollama" },
      { name: "Hugging Face" },
      { name: "Shell Scripting" },
    ],
  },
  {
    name: "FedCluster",
    description:
      "Peer-to-peer distributed training framework that democratizes GPU access by enabling privacy-preserving model training across consumer hardware.",
    id: "fedcluster",
    githubLink: "",
    type: "distributed-ml",
    isWebsite: false,
    technologies: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Flower" },
      { name: "Tailscale" },
      { name: "Distributed Systems" },
      { name: "FedAvg" },
      { name: "Network Programming" },
    ],
  },
  {
    name: "Diffusion LLMs",
    description:
      "Hybrid translation architecture combining diffusion-based planning with autoregressive decoding to improve long-range coherence for low-resource language translation.",
    id: "diffusion-llms",
    githubLink: "",
    type: "nlp-research",
    isWebsite: false,
    technologies: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "IndicNLP" },
      { name: "Diffusion Models" },
      { name: "BPE" },
      { name: "SPE" },
    ],
  },
  {
    name: "AmazonLens",
    description:
      "Interactive e-commerce analytics dashboard for Amazon data featuring recommendation systems, sentiment analysis, topic mining, and predictive sales forecasting.",
    id: "amazonlens",
    githubLink: "",
    type: "data-analytics",
    isWebsite: true,
    technologies: [
      { name: "Python" },
      { name: "React" },
      { name: "D3.js" },
      { name: "Scikit-learn" },
      { name: "Folium" },
      { name: "ClickHouse" },
      { name: "LDA" },
      { name: "UMAP" },
      { name: "Prophet" },
    ],
  },
  {
    name: "F1 AI Betting",
    description:
      "Full-stack AI-powered Formula 1 podium prediction platform with real-time data integration, user-vs-AI leaderboards, and scalable cloud-ready architecture.",
    id: "f1-ai-betting",
    githubLink: "",
    type: "fullstack-ml-app",
    isWebsite: true,
    technologies: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "AWS" },
      { name: "WebSockets" },
      { name: "Docker" },
      { name: "Nginx" },
      { name: "JWT Auth" },
    ],
  },
  {
    name: "BackDoor Attack",
    description:
      "Socket-based client–server security research project simulating controlled intrusion techniques for penetration testing and cybersecurity education.",
    id: "backdoor-attack",
    githubLink: "",
    type: "cybersecurity",
    isWebsite: false,
    technologies: [
      { name: "Python" },
      { name: "TCP/IP Networking" },
      { name: "Linux" },
      { name: "Sockets" },
    ],
  },
  {
    name: "Destination Digest",
    description:
      "Get to know all travel advisiory and weather updates for you destination on you mail",
    id: "destination-digest",
    githubLink: "https://github.com/himalaya-kaushik/Destination-digest",
    type: "Website",
    isWebsite: true,
    technologies: [
      { name: "Javascript" },
      { name: "Python" },
      { name: "Typescript" },
      { name: "Express" },
    ],
  }
];

export default Projects;
