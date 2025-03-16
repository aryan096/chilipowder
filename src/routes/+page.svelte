<script lang="ts">
    import { onMount } from 'svelte';
    
    // Project data using runes
    let projects = $state([
      { 
        id: 1, 
        slug: 'chainrxn',
        name: 'Chain Rxn', 
        coverImage: '/projects/placeholder.png',
        externalUrl: 'https://chainrxn.chilipowder.fun' // External service URL
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
<div class="bg-[#f8e1d2] min-h-screen w-full flex flex-col">
  <main class="max-w-6xl mx-auto px-4 py-8 w-full flex-grow">
    <!-- Header -->
    <header class="flex flex-col items-center mb-12 mt-4">
      <!-- Logo placeholder - replace with your SVG -->
      <div class="w-48 h-16 mb-4 flex items-center justify-center text-white font-bold">
        <img src="/images/logo.png" 
        alt="chilipowder.fun logo" 
        class="w-full transform scale-68 rotate-270"
        />
      </div>
      <h1 class="logo-text pt-4 text-4xl text-[#393E41]">chilipowder.fun</h1>
    </header>
  
    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each projects as project}
        <div class="project-card relative border-4 border-[#393E41] rounded-[3vw] overflow-hidden aspect-7/3">
          <!-- Main project card links to external service -->
          <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" class="block h-full">
            <img 
              src={project.coverImage} 
              alt={`${project.name}`}
              class="w-full h-full object-cover text-2xl p-4"
            />
          </a>
          
          <!-- Info icon links to local project readme -->
          <div class="absolute bottom-4 left-4">
            <a 
              href="/project/{project.slug}" 
              on:click={handleInfoClick}
            >
              <span class="text-[#6f5049] hover:text-3xl transition-transform text-2xl">🤔</span>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </main>
  
  <!-- Footer - moved outside main and to the bottom -->
  <footer class="w-full py-6 mt-auto text-center">
    <div class="max-w-6xl mx-auto px-4">
      <p class="mb-1 text-lg text-[#393E41]">Hi! Say hi!</p>
      <a href="mailto:aryansrivastava096@gmail.com" class="text-[#3F88C5] text-sm hover:underline">aryansrivastava096@gmail.com</a>
    </div>
  </footer>
</div>

<style> 
.logo-text {
  font-family: 'Akaya Telivigala', system-ui;
}

p { 
  font-family: 'Space Grotesk Variable', sans-serif;
}
</style>