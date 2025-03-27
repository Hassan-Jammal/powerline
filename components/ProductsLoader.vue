<template>
	<template v-if="products_preloader" class="preloader">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div v-for="i in 6" :key="i" class="flex flex-col gap-12 border rounded-2xl p-8">
				<div class="relative w-full lg:w-8/12 h-24 self-end bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer">
					<div class="absolute right-0 h-full"></div>
				</div>
				<div class="w-full h-48 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer"></div>
				<div>
					<div class="w-full h-2 lg:h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer"></div>
					<div class="w-2/3 h-2 lg:h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[30px] shimmer mt-2"></div>
				</div>
			</div>
		</div>
    </template>
</template>

<script setup>
	const products_preloader = ref(true);
	
	setTimeout(() => {
		products_preloader.value = true;
	}, 1000);
</script>

<style scoped lang="sass">
	.preloader 
		@apply flex justify-center items-center w-full h-full z-50 bg-no-repeat bg-center min-h-[40vh] 

	.shimmer
		background-size: 200% 100%
		animation: shimmer 2s linear infinite

	@keyframes shimmer
		0% 
			background-position: 200% 0
		
		100% 
			background-position: -200% 0
				
</style>
