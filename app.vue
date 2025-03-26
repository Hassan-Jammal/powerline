<template>
  <NuxtLoadingIndicator class="!opacity-100" />
	<Preloader />
  
  <AppHeader />

  <div class="min-h-[calc(100vh-var(--headerHeight))] flex flex-col justify-between mt-[var(--headerHeight)]">
    <main>
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>

</script>