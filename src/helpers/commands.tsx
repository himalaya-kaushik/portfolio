import CommandData from "../assets/data/commands.json";
import Projects from "../assets/data/projects";
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
          Hey! I'm Himalaya Kaushik, a passionate Full Stack
          Developer with expertise in:
        </p>
      </span>
      <ul className="list-disc list-outside pl-4">
        <li>
          <p>🚀 Explored AI/ML as my starting point.</p>
        </li>
        <li>
          <p>📱 Ventured into App Development with Kotlin for a short while.</p>
        </li>
        <li>
          <p>💻 Currently well versed in MEAN/MERN stack web development</p>
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

      {Projects.reverse().map((project, index: number) => (
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
    <div className="container mx-auto p-8 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">Skills:</h2>

      <div className="flex flex-wrap gap-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Languages:</h2>
          <ul className="list-disc pl-4">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Frontend:</h2>
          <ul className="list-disc pl-4">
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Angular</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Backend:</h2>
          <ul className="list-disc pl-4">
            <li>Node.js</li>
            <li>Express</li>
            <li>AWS</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>NEXT.js</li>
            <li>Django</li>
            <li>Firebase</li>
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
        <h3 className="text-xl font-bold mb-2">Zetwerk</h3>
        <p className="mb-2">Full Stack Web Developer</p>
        <p className="mb-2">
          Part of team INZE, a complete inventory management tool that overlooks
          the inventory movement right from contract creation till delivery of
          inventory.
        </p>
        <p className="text-gray-400">From: October 2023 - Present</p>
      </div>

      {/* Experience 2 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Kongsberg Digital</h3>
        <p className="mb-2">Full Stack Web Developer</p>
        <p className="mb-2">
          I am a part of Kognitwin team (Kognitwin : A Digital Twin) focusing
          mainly on digitizing oil and gas assets and further enabling remote
          operations. Creating workflows which provide a virtual interface
          integrated with realtime data, providing visualization and easy
          simulation of assets, leading to an enormous costreduction and deep
          insight to individual assets using MEAN stack
        </p>
        <p className="text-gray-400">From: August 2022 - September 2023</p>
      </div>

      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Express Diagnostic</h3>
        <p className="mb-2">ML intern</p>
        <p className="mb-2">
          Created Image segmentation model for TB detection on subjectreports
          Used Models for TB classification for 2nd part of internship.
        </p>
        <p className="text-gray-400">From: January 2022 - May 2022</p>
      </div>

      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">EnR Consultancy</h3>
        <p className="mb-2">Junior Developer</p>
        <p className="mb-2">
          Created Automatic liscense software detection and auto parking ticket generation.
          Cretaed a ML model that detects fractures in marble for fault detection
          Cretaed an app for detecting dyslexia in young children.
        </p>
        <p className="text-gray-400">From: March 2021 - August 2021</p>
      </div>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
