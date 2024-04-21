import { z } from "zod";

export const ToolsSchema = z.object({
  title: z.string(),
});
