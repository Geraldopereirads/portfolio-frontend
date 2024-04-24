import Header from "@/components/header/header";
import CardTools from "@/components/toolsPage/tools.card";
import { ToolsProps } from "@/interface/tools.interface";
import { toolsInUse } from "@/services/tools";
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
      </main>
    </>
  );
};
export default Tools;
