<script lang="ts"> 

  import { page } from '$app/stores';
  
  // Get project data passed from the load function
  const { data } = $props();

  const projectsData = data.projects;

  const slug = $page.params.slug;

  // Add type annotations for better type safety
  type Project = {
    link: string;
    title: string;
    description: string;
    content: string;
  };

  // Create a type guard to verify the project data
  function isValidProject(project: any): project is Project {
    return project && typeof project.link === 'string' &&
           typeof project.title === 'string' &&
           typeof project.description === 'string' &&
           typeof project.content === 'string';
  }

  const projectData = projectsData.find((project) => project.link === slug);
  
  if (!projectData || !isValidProject(projectData)) {
    throw new Error('Project not found or invalid project data');
  }

</script>

<svelte:head>
  <title>{projectData.title} | chilipowder.fun</title>
</svelte:head>

<div class="bg-[#f8e1d2] min-h-screen ">
  <main class="max-w-3xl mx-auto px-4 py-8">
    <a href="/" class="inline-block mb-6 text-[#3F88C5] hover:underline">← Back to projects</a>
    
    <h1 class="text-3xl font-bold mb-4 text-[#393E41]">{projectData.title}</h1>
    
    <div class="prose max-w-none">
      <p class="text-lg mb-4 text-[#393E41]">{projectData.description}</p>
      <div class="mt-6 font-thin text-[#393E41]">
        {projectData.content}
      </div>
    </div>
  </main>
</div>
