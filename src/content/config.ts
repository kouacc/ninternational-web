import { z, defineCollection} from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        projectName: z.string(),
        projectAuthor: z.string(),
        projectLanguage: z.string(),
        projectSystem: z.string(),
        projectController: z.enum([z.string()]).optional(),
        projectImg: z.string(),
        projectDate: z.date(),
        description: z.string(),
    })
});

export const collections = {
    projects: projectsCollection,
  };