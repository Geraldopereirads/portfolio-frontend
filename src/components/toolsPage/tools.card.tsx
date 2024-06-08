import { ToolsData } from "@/interface/tools.interface";
import Image from "next/image";

const CardTools = ({img: Icon, tool }: ToolsData) => {
  return (
    <li className="tools">
      <Icon className="absolute top-3 left-2 right-0 text-primary text-lg"/>
      <span className="ml-5">{tool}</span>
    </li>
  );
};

export default CardTools;
