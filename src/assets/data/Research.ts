const Research = [
    {
        name: "Graph-based Unlearning in Large Language Models",
        id: "graph-based-llm-unlearning",
        duration: "Jun 2025 – Present",
        mentor: "Prof. Ashutosh Modi",
        type: "thesis",
        details: [
            "Engineered a framework to map LLM knowledge into graph structures and measure the true hardness of forgetting.",
            "Uncovered how graph density and structural bottlenecks amplify memorization and privacy leakage in state-of-the-art models.",
            "Implemented graph-aware and edge-level unlearning strategies that selectively erase entities, relations, and PII while preserving utility.",
            "Explored approaches toward building LLMs that can forget as intelligently as they learn, pushing the frontier of safe and controllable AI.",
        ],
        technologies: [
            { name: "PyTorch" },
            { name: "Hugging Face" },
            { name: "NetworkX" },
            { name: "Transformers" },
        ],
    },

    {
        name: "DoodleVision",
        id: "doodlevision",
        duration: "Feb 2025 – Present",
        mentor: "Prof. Priyanka Bagade",
        organization: "IIT Kanpur",
        type: "research-project",
        details: [
            "Built a novel hybrid deep learning model combining image and stroke data for sketch recognition, achieving 89.41% accuracy and outperforming benchmark approaches by 5%.",
            "Paper under preparation for WACV 2025 highlighting architectural novelty and efficient multimodal fusion.",
            "Designed a disk-streaming-based training pipeline for memory-constrained environments, enabling training with over 25M examples.",
            "Deployed an optimized inference pipeline to edge devices (Raspberry Pi) for real-time applications.",
        ],
        technologies: [
            { name: "Multimodal Fusion" },
            { name: "Disk Streaming" },
            { name: "Edge Deployment" },
            { name: "CNN" },
            { name: "LSTM" },
        ],
    },
];

export default Research;
