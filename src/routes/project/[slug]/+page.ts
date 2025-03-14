import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
  // In a real application, you'd fetch project data from an API or local file
  // For now, we're just returning dummy data based on the slug
  
  const projectData = {
    title: params.slug.replace(/-/g, ' '),
    description: "This is a detailed description of the project.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  if (!projectData) {
    throw error(404, 'Project not found');
  }

  return {
    project: projectData
  };
}) satisfies PageServerLoad;