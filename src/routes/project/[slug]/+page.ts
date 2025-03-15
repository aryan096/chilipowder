import { error } from '@sveltejs/kit';

export const load = (({ params }) => {
  // In a real application, you'd fetch project data from an API or local file
  // For now, we're just returning dummy data based on the slug
  
  const projectData = [
    {
    link: "chainrxn",
    title: "Chain Reaction",
    description: "Its like Go but easier...",
    content: "Made using Sveltekit, TailwindCSS, and Railway."
  },
  {
    title: params.slug.replace(/-/g, ' '),
    description: "This is a detailed description of the project.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },];

  if (!projectData) {
    throw error(404, 'Project not found');
  }

  return {
    projects: projectData
  };
});