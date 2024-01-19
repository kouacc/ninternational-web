import { z, defineCollection} from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        projectName: z.string(),
        projectAuthor: z.string(),
        projectLanguage: z.string(),
        projectSystem: z.string(),
        projectControllers: z.string().array().optional(),
        projectImg: z.string(),
        projectDate: z.string(),
        description: z.string(),
    })
});

export const collections = {
    projects: projectsCollection,
  };