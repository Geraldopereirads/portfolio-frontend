import Header from "@/components/header/header";
import StudyngToolsCard from "@/components/toolsPage/studyngToolsCard";
import CardTools from "@/components/toolsPage/tools.card";
import { ToolsData } from "@/interface/tools.interface";
import { studyingTools, toolsInUse } from "@/services/tools";
import { NextPage } from "next";

const Tools: NextPage<ToolsData[]> = () => {
  return (
    <>
      <Header />
      <main className="flexCol">
        <h1 className="primaryTitle">Ferramentas</h1>

        <div className="flex flex-col items-center justify-center pt-8">
          <h2 className="text-4xl font-semibold">Tecnologias</h2>
          <small className="text-base font-semibold pt-2">
            Atualmente Desenvolvendo
          </small>
        </div>

        <ul className="flexTools">
          {toolsInUse.map((tool) => (
            <CardTools key={tool.id} {...tool} />
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center pt-8">
          <h2 className="text-4xl font-semibold">Tecnologias</h2>
          <small className="text-base font-semibold pt-2">
            Atualmente Estudando
          </small>
        </div>

        <ul className="flexTools">
          {studyingTools.map((tool) => (
            <StudyngToolsCard key={tool.id} {...tool} />
          ))}
        </ul>

        <span className="tools w-[300px] mt-7">
          Bacharelado em Engenharia de Software
        </span>
      </main>
    </>
  );
};
export default Tools;
