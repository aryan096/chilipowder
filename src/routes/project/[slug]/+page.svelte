<script lang="ts">
  import { page } from '$app/stores';
  
  // Get project data passed from the load function
  const { project } = $props();
</script>

<svelte:head>
  <title>{project.title} | chilipowder.fun</title>
</svelte:head>

<main class="max-w-3xl mx-auto px-4 py-8">
  <a href="/" class="inline-block mb-6 text-blue-600 hover:underline">← Back to projects</a>
  
  <h1 class="text-3xl font-bold mb-4">{project.title}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-4">{project.description}</p>
    <div class="mt-6">
      {project.content}
    </div>
  </div>
</main>