import { z } from "zod";
import { ToolsSchema } from "./../schemas/tools.schema";

export type ToolsData = z.infer<typeof ToolsSchema>;

export interface ToolProps {
  title: ToolsData;
}

export interface ToolsProps {
  title: ToolsData[];
}

export interface Tool {
  title: string;
}
