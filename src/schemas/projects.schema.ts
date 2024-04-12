import { z } from "zod";

export const ProjectsSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  url: z.string(),
  github: z.string(),
  description: z.string(),
});