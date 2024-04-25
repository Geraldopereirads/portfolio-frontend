import { ToolProps } from "@/interface/tools.interface";
import React from "react";

function StudyngToolsCard({ title }: ToolProps) {
  return (
    <li>{title.title}</li>
  );
}

export default StudyngToolsCard;
