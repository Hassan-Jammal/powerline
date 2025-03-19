<template>
    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex max-lg:flex-col gap-8 justify-between">
                <h1 class="text-lg font-semibold">Our line of products</h1>
                <div class="flex justify-between items-stretch gap-2">
                    <input v-model="searchQuery" type="text" placeholder="Search products" class="w-80 px-3 py-2 border border-gray-300 rounded-lg">
                    <div class="flex justify-between items-stretch gap-2">
                        <img @click="viewMode = 'grid'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'grid', 'cursor-pointer': viewMode !== 'grid', 'cursor-default': viewMode === 'grid'}" class="p-3" src="/images/grid-view.svg" alt="Grid view" width="50" height="50">
                        <img @click="viewMode = 'list'" :class="{'border border-gray-300 rounded-lg shadow-md': viewMode === 'list', 'cursor-pointer': viewMode !== 'list', 'cursor-default': viewMode === 'list'}" class="p-3" src="/images/list-view.svg" alt="list view" width="50" height="50">
                    </div>
                </div>
            </div>

            <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                <div v-for="(product, index) in filteredProducts" :key="index" class="flex flex-col gap-12 border rounded-2xl p-8">
                    <img loading="lazy" class="h-14 self-end" :src="`images/logos/${product.logo}.svg`" :alt="product.title" />
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
                        <swiper-slide v-for="(img, idx) in product.image" :key="idx" class="pb-6">
                            <img class="w-full" loading="lazy" :src="`images/products/${img}.png`" :alt="product.title" width="640" height="360"/>
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
                            :pagination="{
                                clickable: true
                            }"
                            :autoplay="{ delay: 5000 }"
                            :speed="1000"
                            :space-between="20"
                            :grabCursor="true"
                            class="w-32"
                        >
                            <swiper-slide v-for="(img, idx) in product.image" :key="idx" class="pb-6">
                                <img class="w-full" loading="lazy" :src="`images/products/${img}.png`" :alt="product.title" />
                            </swiper-slide>
                        </swiper-container>
                        
                        <h2 class="text-xl leading-tight font-semibold">{{ product.description }}</h2>
                    </div>
                    <img loading="lazy" class="w-32" :src="`images/logos/${product.logo}.svg`" :alt="product.title" width="640" height="360" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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

    const products = [
        {
            title: "DecoDuct",
            logo: "decoduct",
            description: "PVC conduits (grey, white and black) - made in UAE",
            image: ["decoduct-1", "decoduct-2", "decoduct-3"]
        },
        {
            title: "Kouvidis",
            logo: "kouvidis",
            description: "Flexible PVC tubes - made in Greece",
            image: ["kouvidis-1", "kouvidis-2"]
        },
        {
            title: "ITCC",
            logo: "itcc",
            description: "EMT tubes and accessories - made in Saudi Arabia",
            image: ["itcc-1", "itcc-2"]
        },
        {
            title: "Atkore",
            logo: "atkore",
            description: "EMT conduits - made in USA",
            image: ["atkore-1"]
        },
        {
            title: "Tenaris Saudi Steel Pipes",
            logo: "tenaris-saudi-steel-pipes",
            description: "Steel pipes and rigid conduits - made in Saudi Arabia",
            image: ["tenaris-1"]
        },
        {
            title: "Atkore",
            logo: "atkore",
            description: "Flexible steel and liquid tight conduits - made in USA",
            image: ["atkore-2"]
        },
        {
            title: "Hubbel Raco",
            logo: "hubbel-raco",
            description: "Steel and non metallic electrical boxes and covers - made in USA",
            image: ["hubbel-1", "hubbel-2", "hubbel-3"]
        },
        {
            title: "Picoma",
            logo: "picoma",
            description: "Steel conduit - made in USA",
            image: ["picoma-1"]
        },
        {
            title: "Bridgeport",
            logo: "bridgeport",
            description: "EMT connectors and couplings - made in USA",
            image: ["bridgeport-1", "bridgeport-2"]
        },
        {
            title: "Valdinox",
            logo: "valdinox",
            description: "Wire mesh trays - made in Spain",
            image: ["valdinox-1"]
        },
        {
            title: "EAE Elektrik",
            logo: "eae-elektrik",
            description: "Cable trays - made in Turkey",
            image: ["eae-elektrik-1", "eae-elektrik-2"]
        },
        {
            title: "Ideal Industries",
            logo: "ideal-industries-inc",
            description: "Wire connectors - made in USA",
            image: ["ideal-industries-1"]
        },
        {
            title: "Mersen",
            logo: "mersen",
            description: "Fuses - made in France",
            image: ["mersen-1"]
        },
        {
            title: "Cavicel",
            logo: "cavicel",
            description: "Fire resistant cables - made in Italy",
            image: ["cavicel-1"]
        },
        {
            title: "Leviton",
            logo: "leviton",
            description: "Cables - made in USA",
            image: ["leviton-1"]
        },
        {
            title: "Belden",
            logo: "belden",
            description: "Data cables - made in USA",
            image: ["belden-1"]
        },
        {
            title: "Brady",
            logo: "brady",
            description: "Printers, bar code scanners and labels - made in Belgium",
            image: ["brady-1", "brady-2"]
        },
        {
            title: "Etelec",
            logo: "etelec",
            description: "Gel, resin and cable pulling lubricant - made in Italy",
            image: ["etelec-1"]
        },
        {
            title: "Trachet",
            logo: "trachet",
            description: "Jitra - made in Belgium",
            image: ["trachet-1"]
        },
        {
            title: "3M",
            logo: "3m",
            description: "Scotch tape, fiber optic and copper cables - made in USA",
            image: ["3m-1", "3m-2", "3m-3"]
        },
        {
            title: "EBDC",
            logo: "ebdc",
            description: "Bentonite - made in Egypt",
            image: ["ebdc-1"]
        },
        {
            title: "Milbank",
            logo: "milbank",
            description: "Galvanized pull box - made in Egypt",
            image: ["milbank-1"]
        },
        {
            title: "Alfanar",
            logo: "alfanar",
            description: "Modular enclosure - made in Saudi Arabia",
            image: ["alfanar-1"]
        },
        {
            title: "Pollmann",
            logo: "pollmann",
            description: "Busbars, earhing material - made in Germany",
            image: ["pollmann-1", "pollmann-2"]
        },
        {
            title: "Mennekes",
            logo: "mennekes",
            description: "Industrial plugs and sockets - made in Germany",
            image: ["mennekes-1"]
        },
        {
            title: "Decoduct",
            logo: "decoduct",
            description: "Electrical wiring devices - made in UAE",
            image: ["decoduct-4"]
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

<style lang="sass" scoped>
    swiper-container::part(pagination)
        bottom: 0px

    swiper-container::part(bullet-active)
        @apply bg-[#EF2E33]
</style>