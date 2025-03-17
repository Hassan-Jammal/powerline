<template>
    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex justify-between">
                <h1 class="text-lg font-semibold">Our line of products</h1>
                <div class="flex justify-between items-stretch gap-2">
                    <input v-model="searchQuery" type="text" placeholder="Search products" class="w-80 px-3 py-2 border border-gray-300 rounded-lg">
                    <img @click="viewMode = 'grid'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'grid', 'cursor-pointer': viewMode !== 'grid', 'cursor-default': viewMode === 'grid'}" class="p-3" src="/images/grid-view.svg" alt="Grid view" width="50" height="50">
                    <img @click="viewMode = 'list'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'list', 'cursor-pointer': viewMode !== 'list', 'cursor-default': viewMode === 'list'}" class="p-3" src="/images/list-view.svg" alt="list view" width="50" height="50">
                </div>
            </div>

            <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                <div v-for="(product, index) in filteredProducts" :key="index" class="flex flex-col gap-12 border rounded-2xl p-8">
                    <img loading="lazy" class="w-48 self-end" :src="`images/logos/${product.logo}.svg`" :alt="product.title" />
                    <swiper-container 
                        :slides-per-view="1" 
                        :autoplay="{ delay: 5000 }"
                        :speed="1000"
                        :space-between="20"
                        :grabCursor="true"
                        class="w-full"
                    >
                        <swiper-slide v-for="(img, idx) in product.image" :key="idx">
                            <div class="relative w-full aspect-square">
                                <img class="w-full h-full object-fill" loading="lazy" :src="`images/products/${img}.png`" :alt="product.title" />
                            </div>
                        </swiper-slide>
                    </swiper-container>
                    <h2 class="text-xl leading-tight font-semibold">{{ product.description }}</h2>
                </div>
            </div>

            <div v-else class="flex flex-col gap-4 mt-12">
                <div v-for="(product, index) in filteredProducts" :key="index" class="flex justify-between items-center gap-12 border rounded-2xl p-8">
                    <div class="flex justify-between items-center gap-4">
                        <swiper-container 
                            :slides-per-view="1" 
                            :autoplay="{ delay: 5000 }"
                            :speed="1000"
                            :space-between="20"
                            :grabCursor="true"
                            class="w-32"
                        >
                            <swiper-slide v-for="(img, idx) in product.image" :key="idx">
                                <img class="w-full" loading="lazy" :src="`images/products/${img}.png`" :alt="product.title" />
                            </swiper-slide>
                        </swiper-container>
                        <h2 class="text-xl leading-tight font-semibold">{{ product.description }}</h2>
                    </div>
                    <img loading="lazy" class="w-48 selfend" :src="`images/logos/${product.logo}.svg`" :alt="product.title" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const products = [
        {
            title: "DecoDuct",
            logo: "decoduct",
            description: "Fibre Optic and Cooper Cable for Infrastructure Networks",
            image: ["decoduct-1", "decoduct-2"]
        },
        {
            title: "Kouvidis",
            logo: "kouvidis",
            description: "Fibre Optic and Cooper",
            image: ["kouvidis-1"]
        },
        {
            title: "Kouvidis",
            logo: "kouvidis",
            description: "Fibre Optic and Cooper Cable for Infrastructure Networks",
            image: ["decoduct-2", "kouvidis-2"]
        },
        {
            title: "DecoDuct",
            logo: "decoduct",
            description: "Cable for Infrastructure Networks",
            image: ["kouvidis-2"]
        },
        {
            title: "DecoDuct",
            logo: "decoduct",
            description: "Fibre Optic and Cooper Cable for Infrastructure Networks",
            image: ["decoduct-3"]
        },
    ]

    const searchQuery = ref('');
    const viewMode = ref('grid');
    
    // Filter products based on search query
    const filteredProducts = computed(() => {
        return products.filter(product => 
            product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
</script>