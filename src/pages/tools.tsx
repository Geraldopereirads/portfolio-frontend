import Header from "@/components/header/header";
import StudyngToolsCard from "@/components/toolsPage/studyngToolsCard";
import CardTools from "@/components/toolsPage/tools.card";
import { studyingTools, toolsInUse } from "@/services/tools";
import { NextPage } from "next";

const Tools: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Ferramentas</h1>

        <div>
          <h2>Tecnologias</h2>
          <small>Atualmente Desenvolvendo</small>
        </div>

        <ul>
          {toolsInUse.map((title, index) => (
            <CardTools key={index} title={title} />
          ))}
        </ul>

        <div>
          <h2>Tecnologias</h2>
          <small>Atualmente Estudando</small>
        </div>

        <ul>
          {studyingTools.map((title, index) => (
            <StudyngToolsCard key={index} title={title} />
          ))}
        </ul>
      </main>

      <div>
        <p>
          “Aprender é a unica coisa que a mente não se cansa, nunca tem medo e
          nunca se arrepende”
        </p>
        <span>~Leonardo da Vinci</span>
      </div>
    </>
  );
};
export default Tools;
