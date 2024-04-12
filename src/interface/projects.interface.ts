import { ProjectsSchema } from "@/schemas/projects.schema";
import { z } from "zod";

export type ProjectsData = z.infer<typeof ProjectsSchema>;

export interface CardProps {
    card: ProjectsData
}

export interface CardsProps {
    cards: ProjectsData[]
}
