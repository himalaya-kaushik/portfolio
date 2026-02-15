import CommandData from "../assets/data/commands.json";
import Projects from "../assets/data/projects";
import Research from "../assets/data/Research";
import CommandDetails from "../assets/data/commands.json";

const arrow = ">";

const CheckCommand = (command: string) => {
  const commands = Object.keys(CommandData);

  if (commands.includes(command.trim().toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const CheckCommandAndExecute = (command: string) => {
  command = command.trim().toLowerCase();
  if (command === "help" || command === "ls") {
    return HelpCommand();
  } else if (command === "about") {
    return AboutCommand();
  } else if (command === "contact") {
    return ContactCommand();
  } else if (command === "projects") {
    return ProjectsCommand();
  } else if (command === "skills") {
    return SkillsCommand();
  } else if (command === "education") {
    return EducationCommand();
  } else if (command === "experience") {
    return ExperienceCommand();
  } else if (command === "research") {
    return ResearchCommand();
  } else {
    return (
      <li className="flex flex-col gap-2 my-2">
        <p className="text-error">
          The term '{command}' is not recognized as the name of a cmdlet,
          function, script file, or operable program.{" "}
        </p>
        <p className="text-white">Type "help" or "cls" for assistance.</p>
      </li>
    );
  }
};

const HelpCommand = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">help - </p>
        <p>{CommandDetails["help"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">about - </p>
        <p>{CommandDetails["about"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">contact - </p>
        <p>{CommandDetails["contact"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">projects - </p>
        <p>{CommandDetails["projects"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">skills - </p>
        <p>{CommandDetails["skills"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">education - </p>
        <p>{CommandDetails["education"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">experience - </p>
        <p>{CommandDetails["experience"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">research - </p>
        <p>{CommandDetails["research"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">clear - </p>
        <p>{CommandDetails["clear"]}</p>
      </span>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">About Me:</h2>

      <span>
        <p>
          Hey! I'm Himalaya Kaushik — a Software Engineer and Researcher currently
          pursuing my Master’s in Computer Science at IIT Kanpur. I work at the
          intersection of AI research and scalable systems.
        </p>
      </span>

      <ul className="list-disc list-outside pl-4 space-y-2">
        <li>
          <p>
            🤖 Researching Machine Unlearning, NLP, and Large Language Models —
            from theory to real-world deployment.
          </p>
        </li>
        <li>
          <p>
            🧠 Building and optimizing LLM-powered systems, generative AI pipelines,
            and multi-agent architectures.
          </p>
        </li>
        <li>
          <p>
            ⚙️ Designing scalable backend systems and full-stack applications that
            translate complex ideas into impactful products.
          </p>
        </li>
        <li>
          <p>
            📊 Experimenting with predictive analytics and AI-driven automation to
            solve high-impact problems.
          </p>
        </li>
      </ul>

      <span className="mt-3 mb-1">
        <p>
          I'm always eager to embrace new technologies and integrate them into
          my projects. Let's create something amazing together! 💻✨
        </p>
      </span>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-outside pl-4 text-commandResult font-bold">
      <h2 className="text-2xl font-bold mb-4">Contact Me:</h2>

      <li className="mt-1">
        <p>
          Email:{" "}
          <a
            href="mailto:himalaya341@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            himalaya341@gmailcom
          </a>
        </p>
      </li>
      <li>
        <p>
          Github:{" "}
          <a
            href="https://github.com/himalaya-kaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @himalaya-kaushik
          </a>
        </p>
      </li>
      <li>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/himalaya-kaushik/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @himalaya-kaushik
          </a>
        </p>
      </li>
      <li>
        <p>
          X(Twitter):{" "}
          <a
            href="https://x.com/Himalay_Kaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @Himalay_Kaushik
          </a>
        </p>
      </li>
      <li className="list-none mt-1 font-normal">
        👆 Click on any to contact me!{" "}
      </li>
    </ul>
  );
};

const ProjectsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      <h2 className="text-2xl font-bold mb-4">Projects:</h2>

      {Projects.map((project, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-6"
          key={"project" + index + project.name}
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(
              (tech: { name: string }, index: number) => (
                <span
                  key={"techName" + index.toString() + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const SkillsCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult">
      <h2 className="text-2xl font-bold mb-6">Skills:</h2>

      <div className="flex flex-wrap gap-12">

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Languages:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>C / C++</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Triton</li>
            <li>Golang (Beginner)</li>
            <li>Solidity (Beginner)</li>
          </ul>
        </div>

        {/* Web Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Web Technologies:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>FastAPI</li>
            <li>REST APIs</li>
            <li>React</li>
            <li>Angular</li>
            <li>Tailwind CSS</li>
            <li>Firebase</li>
            <li>Redis</li>
            <li>Kafka</li>
          </ul>
        </div>

        {/* AI / ML */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">AI / ML:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Scikit-Learn</li>
            <li>LangChain</li>
            <li>LangGraph</li>
            <li>SageMaker</li>
            <li>MLflow</li>
            <li>Hadoop</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Databases:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>ChromaDB (Vector Databases)</li>
            <li>Elasticsearch</li>
          </ul>
        </div>

        {/* DevOps */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">DevOps:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
            <li>Jenkins</li>
          </ul>
        </div>

        {/* Other */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Other:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Bash Scripting</li>
            <li>YAML</li>
            <li>LaTeX</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

type EducationCardProps = {
  institution: string;
  degree: string;
  location: string;
  grade: string;
  year: string;
};

const EducationCard = ({
  institution,
  degree,
  location,
  grade,
  year,
}: EducationCardProps) => {
  return (
    <div className="p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="mb-2">
        {institution}, {location}
      </p>
      <p className="mb-2">Grade: {grade}</p>
      <p>Year: {year}</p>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult mt-6">
      <h2 className="text-2xl font-bold mb-4">Education:</h2>

      <EducationCard
        degree="Master (CSE)"
        institution="IIT Kanpur"
        location="Kanpur"
        grade="9.43 GPA"
        year="2024-2026"
      />

      <EducationCard
        degree="BTech (CSE)"
        institution="UPES"
        location="Dehradun"
        grade="7.79 GPA"
        year="2018-2022"
      />

      <EducationCard
        degree="12th"
        institution="Stepping Stones Senior Secondary School"
        location="Chandigarh"
        grade="86.4%"
        year="2018"
      />

      <EducationCard
        degree="10th"
        institution="Little FLower Convent School"
        location="Panchkula"
        grade="94%"
        year="2016"
      />
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult">
      <h2 className="text-2xl font-bold mb-4">Work Experience:</h2>

      {/* Experience 1 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">NyaySetu AI</h3>
        <p className="mb-2">Founding Backend and AI engineer</p>
        <ul className="mb-2 list-disc pl-5">
          <li>
            Built a legal-tech platform enabling lawyer-client appointments and
            automating case document processing with AI.
          </li>
          <li>
            Architected scalable infrastructure with optimized database schemas,
            high-throughput APIs, and modular frontend.
          </li>
          <li>
            Developed real-time communication using Firebase WebSockets, Agora
            SDK, and an agentic RAG chatbot for legal text navigation.
          </li>
        </ul>
        <p className="text-gray-400">From: January 2025 - October 2025</p>
      </div>

      {/* Experience  2 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Zetwerk</h3>
        <p className="mb-2">Full Stack Web Developer</p>
        <ul className="mb-2 list-disc pl-5">
          <li>
            Built TrackIt, an end-to-end shipment tracking platform, cutting
            delivery SLA breaches by 25%.
          </li>
          <li>
            Developed core INZE warehouse modules (flows, reconciliation,
            cross-dock optimization).
          </li>
          <li>
            Automated Order Management System (reducing manual effort by 40%)
            across procurement-to-delivery.
          </li>
          <li>
            Integrated multi-channel payments & process automation, streamlining
            order lifecycle.
          </li>
        </ul>
        <p className="text-gray-400">From: October 2023 - July 2024</p>
      </div>

      {/* Experience 2 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Kongsberg Digital</h3>
        <p className="mb-2">Full Stack Web Developer</p>
        <ul className="mb-2 list-disc pl-5">
          <li>
            Part of Kognitwin team (Kognitwin : A Digital Twin) focusing mainly
            on digitizing oil and gas assets and enabling remote operations.
          </li>
          <li>
            Created event-driven workflows providing a virtual interface
            integrated with realtime data, visualization and asset simulation, leading to cost-reduction and deep insight with anomaly detection.
          </li>
          <li>
            Designed predictive CO2 dashboard using Prophet & ARIMAX, supporting
            proactive monitoring and ESG reporting.
          </li>
        </ul>
        <p className="text-gray-400">From: August 2022 - September 2023</p>
      </div>

      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Express Diagnostic</h3>
        <p className="mb-2">ML intern</p>
        <ul className="mb-2 list-disc pl-5">
          <li>
            Built a multimodal image segmentation model combining chest X-ray
            images and patient reports for tuberculosis detection.
          </li>
          <li>
            Developed preprocessing, training, and evaluation pipelines to
            segment TB-affected regions accurately.
          </li>
          <li>
            Improved model performance and interpretability to support faster,
            more reliable screening.
          </li>
        </ul>
        <p className="text-gray-400">From: January 2022 - May 2022</p>
      </div>

      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">EnR Consultancy</h3>
        <p className="mb-2">Junior Developer</p>
        <ul className="mb-2 list-disc pl-5">
          <li>
            Created Automatic license software detection and auto parking ticket
            generation.
          </li>
          <li>
             Created a ML model that detects fractures in marble for fault
            detection.
          </li>
          <li>
             Created an app for detecting dyslexia in young children.
          </li>
        </ul>
        <p className="text-gray-400">From: March 2021 - August 2021</p>
      </div>
    </div>
  );
};

const ResearchCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult">
      <h2 className="text-2xl font-bold mb-4">Research Work:</h2>

      {Research.map((item, index: number) => (
        <div
          className="p-6 rounded-lg shadow-md mb-8"
          key={"research" + index + item.id}
        >
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="mb-1 text-gray-400">
            {item.duration} · Mentor: {item.mentor}
          </p>
          <ul className="mb-3 list-disc pl-5">
            {item.details.map((detail: string, i: number) => (
              <li key={"detail" + index + i}>{detail}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map(
              (tech: { name: string }, i: number) => (
                <span
                  key={"researchTech" + index + i + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
