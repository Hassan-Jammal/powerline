<template>
    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex max-lg:flex-col gap-8 justify-between">
                <h1 class="text-2xl font-semibold">Our line of products</h1>
                <div class="flex justify-between items-stretch gap-2">
                    <input @input="handleSearch" v-model="searchQuery" type="text" placeholder="Search products" class="w-full lg:w-80 px-3 py-2 border border-gray-300 rounded-lg">
                    <div class="hidden lg:flex justify-between items-stretch gap-2">
                        <img @click="viewMode = 'grid'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'grid', 'cursor-pointer': viewMode !== 'grid', 'cursor-default': viewMode === 'grid'}" class="p-3" src="/images/grid-view.svg" alt="Grid view" width="50" height="50">
                        <img @click="viewMode = 'list'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'list', 'cursor-pointer': viewMode !== 'list', 'cursor-default': viewMode === 'list'}" class="p-3" src="/images/list-view.svg" alt="list view" width="50" height="50">
                    </div>
                </div>
            </div>
 
            <template v-if="productData.length > 0">
                <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    <div v-for="(product, index) in productData" :key="index" class="flex flex-col gap-12 border rounded-2xl p-8">
                        <div class="relative w-full h-14 self-end">
                            <img loading="lazy" class="absolute right-0 h-full object-contain" :src="product.acf.logo.url" :alt="product.title.rendered" />
                        </div>
                        <ClientOnly>
                            <swiper-container 
                                :slides-per-view="1" 
                                :pagination="{
                                    clickable: true
                                }"
                                :autoplay="{ delay: 5000 }"
                                :speed="1000"
                                :space-between="20"
                                :grabCursor="true"
                                class="w-full"
                            >
                                <swiper-slide v-for="(img, idx) in product.acf.images" :key="idx" class="pb-6">
                                    <img class="w-full" loading="lazy" :src="img.url" :alt="product.title.rendered" width="640" height="360"/>
                                </swiper-slide>
                            </swiper-container>  
                        </ClientOnly>    
                        <h2 class="text-xl leading-tight font-semibold">{{ product.acf.description }}</h2>
                    </div>
                </div>

                <div v-else class="flex flex-col gap-4 mt-12">
                    <div v-for="(product, index) in productData" :key="index" class="flex max-lg:flex-col justify-between lg:items-center gap-12 border rounded-2xl p-8">
                        <div class="flex max-lg:flex-col justify-between lg:items-center gap-4 order-1 lg:order-0">
                            <ClientOnly>
                                <swiper-container 
                                    :slides-per-view="1" 
                                    :pagination="{
                                        clickable: true
                                    }"
                                    :autoplay="{ delay: 5000 }"
                                    :speed="1000"
                                    :space-between="20"
                                    :grabCursor="true"
                                    class="w-full lg:w-32"
                                >
                                    <swiper-slide v-for="(img, idx) in product.acf.images" :key="idx" class="pb-6">
                                        <img class="w-full" loading="lazy" :src="img.url" :alt="product.title.rendered" />
                                    </swiper-slide>
                                </swiper-container>
                            </ClientOnly>    
                                
                            <h2 class="text-xl leading-tight font-semibold">{{ product.acf.description }}</h2>
                        </div>
                        <img loading="lazy" class="w-32 order-0 lg:order-1" :src="product.acf.logo.url" :alt="product.title.rendered" width="640" height="360" />
                    </div>
                </div>

                <!-- Load More Button -->
                <div v-if="hasMore || searchQuery == ''" class="flex justify-center mt-6">
                    <span v-if="!isLoading" @click="fetchProducts" class="py-3 px-6 text-sm font-semibold rounded-full bg-[#101828] text-white cursor-pointer" :disabled="isLoading">
                        {{ isLoading ? 'Loading...' : 'Load More' }}
                    </span>
                </div>
            </template>

            <template v-else>
                <ProductsLoader class="mt-12"/>
            </template>
        </div>
    </section>
</template>

<script setup>
    import { useApiFetch } from '@/composables/useApiFetch'; // Import the composable
    import pkg from 'lodash';
    const { debounce } = pkg;

    useSeoMeta({
        title: 'Products',
        description: '',

        ogTitle: 'Products',
        ogDescription: '',
        ogImage: '',

        twitterTitle: 'Products',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })
    
    const { fetchData } = useApiFetch();
    const productData = ref([]); // Start with an empty array to avoid errors
    const productError = ref(null);
    const currentPage = ref(1);
    const perPage = ref(9);
    const isLoading = ref(false);
    const hasMore = ref(true);
    const searchQuery = ref('');
    const viewMode = ref('grid'); // Define `viewMode` as a reactive ref

    // Function to fetch products from API
    const fetchProducts = async () => {
        if (isLoading.value || !hasMore.value) return;  // Prevent duplicate requests
        isLoading.value = true;

        try {
            const [productsResponse] = await Promise.all([
                fetchData(`https://backend.grouppowerline.com/wp-json/wp/v2/product`, 'title,acf', perPage.value, currentPage.value, searchQuery.value)
            ]);

            if (productsResponse.data.length > 0) {
                productData.value.push(...productsResponse.data);
                currentPage.value++;
            } else {
                hasMore.value = false; // No more products to load
            }

            // Check if we're at the last page
            if (currentPage.value > productsResponse.totalPages) {
                hasMore.value = false;
            }

            productError.value = productsResponse.error;
        } catch (err) {
            console.error('API Fetch Error:', err);
        } finally {
            isLoading.value = false;
        }
    };

    // Fetch initial products on mount
    onMounted(fetchProducts);

    // Function to handle search input
    const handleSearch = debounce(() => {
        currentPage.value = 1; // Reset the current page
        productData.value = []; // Clear the product data
        hasMore.value = true; // Reset the hasMore value
        fetchProducts(); // Fetch products with the new search query
    }, 500);
</script>

<style lang="sass" scoped>
    swiper-container::part(pagination)
        bottom: 0px

    swiper-container::part(bullet-active)
        @apply bg-[#EF2E33]
</style>