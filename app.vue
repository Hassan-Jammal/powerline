<template>
	<!-- <Preloader /> -->
  <AppHeader />

  <div class="min-h-[calc(100vh-var(--headerHeight))] flex flex-col justify-between">
    <main class="mt-[var(--headerHeight)]">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>

</script>