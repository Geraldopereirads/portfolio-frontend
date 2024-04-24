import { ToolProps } from "@/interface/tools.interface";

const CardTools = ({ title }: ToolProps) => {
  return <li>{title.title}</li>;
};

export default CardTools;
