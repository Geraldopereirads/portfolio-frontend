import { ToolProps } from "@/interface/tools.interface";
import Image from "next/image";

const CardTools = ({ title }: ToolProps) => {
  return (
    <li>
      <span>{title.title}</span>
    </li>
  );
};

export default CardTools;
