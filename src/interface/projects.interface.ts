import { ProjectsSchema } from "@/schemas/projects.schema";
import { z } from "zod";

export type ProjectsData = z.infer<typeof ProjectsSchema>;
