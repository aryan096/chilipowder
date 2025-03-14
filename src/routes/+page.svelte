<script lang="ts">
    import { onMount } from 'svelte';
    
    // Project data using runes
    let projects = $state([
      { 
        id: 1, 
        slug: 'project-one', 
        coverImage: '/projects/placeholder.png',
        externalUrl: 'https://chilipowder.fun/project-one' // External service URL
      }
    ]);
  
    // Prevent default link behavior when clicking the info icon
    const handleInfoClick = (event: MouseEvent) => {
      event.stopPropagation();
    };
</script>

<svelte:head>
  <title>chilipowder.fun</title>
</svelte:head>

<!-- Added bg-red-100 to the body -->
<div class="bg-[#F5E9E2] min-h-screen w-full">
  <main class="max-w-6xl mx-auto px-4 py-8">
    <!-- Header -->
    <header class="flex flex-col items-center mb-12 mt-4">
      <!-- Logo placeholder - replace with your SVG -->
      <div class="w-48 h-16 mb-4 flex items-center justify-center text-white font-bold">
        <img src="/images/logo.svg" 
        alt="chilipowder.fun logo" 
        class="w-full transform scale-68 rotate-70"
        />
      </div>
      <h1 class="text-6xl">chilipowder.fun</h1>
    </header>
  
    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each projects as project}
        <div class="project-card relative border-3 border-[#DE541E] rounded-4xl overflow-hidden aspect-7/3">
          <!-- Main project card links to external service -->
          <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" class="block h-full">
            <img 
              src={project.coverImage} 
              alt={`Project ${project.id}`}
              class="w-full h-full object-cover"
            />
          </a>
          
          <!-- Info icon links to local project readme -->
          <div class="absolute bottom-2 left-2">
            <a 
              href="/project/{project.slug}" 
              class="block bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition-transform"
              on:click={handleInfoClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  
    <!-- Footer -->
    <footer class="mt-16 text-center">
      <p class="mb-1 text-2xl">Hi! Say hi!</p>
      <a href="mailto:hello@example.com" class="text-blue-600 text-xl hover:underline">hello@example.com</a>
    </footer>
  </main>
</div>

<style> 
main {
  font-family: 'Sunshiney', cursive;
}
</style>