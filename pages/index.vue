<template>
    <section v-if="productsData" class="bg-[url('/images/lightning.svg')] bg-center bg-no-repeat bg-[length:80%_80%]">
        <swiper-container 
            ref="swiperRef"
            :slides-per-view="1" 
            :loop="true" 
            :autoplay="{ delay: 5000 }"
            :speed="1000"
            :grabCursor="true"
        >
            <template v-for="(product, index) in productsData" :key="index">
                <swiper-slide v-if="product.acf.carousel.featured">
                    <div class="container">
                        <div class="relative">
                            <div class="max-lg:w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                                <img :src="product.acf.carousel.image.url" alt="">
                            </div>
                           
                            <div class="flex max-lg:flex-col justify-between min-h-[calc(100vh-var(--headerHeight))] py-12 lg:py-24">
                                <div class="w-full lg:w-1/3 xl:w-1/4">
                                    <h2 class="text-[2.5rem] leading-tight font-semibold">{{ product.acf.description }}</h2>
                                    <img class="w-1/2 lg:w-32 mt-6" :src="product.acf.logo.url" :alt="product.title.rendered">
                                </div>
                                <!-- <div class="w-full lg:w-1/3 xl:w-1/4 self-end">
                                    <p class="text-primary lg:text-right">{{ product.description }}</p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </template>
        </swiper-container>
        
        <div class="container">
            <div @click="prevSlide" class="swiper-button-prev absolute top-1/2 left-4 lg:left-24 -translate-y-1/2 z-10 cursor-pointer">
                <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6667 58.6667L5.00008 32L31.6667 5.33334" stroke="#98A2B3" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div @click="nextSlide" class="swiper-button-next absolute top-1/2 right-4 lg:right-24 -translate-y-1/2 z-10 cursor-pointer">
                <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 58.6667L31.6667 32L5 5.33334" stroke="#98A2B3" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </section>

    <section class="my-8 py-8">
        <h2 class="text-center text-xl font-semibold text-[#B2B2B2]">Official Partrners</h2>

        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[10rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 lg:my-10 animate-[marquee_40s_linear_infinite] lg:animate-[marqueelg_40s_linear_infinite]">
                <template v-if="productsData" v-for="(product, index) in duplicatedProductList" :key="index">
                    <img loading="lazy" class="marquee-item w-2/3" :src="product.acf.logo.url" :alt="product.title.rendered" :width="product.width" :height="product.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
                </template>
            </div>
        </div>
    </section>

    <section class="my-8 py-8">
        <div class="container">
            <div class="flex max-lg:flex-col justify-between items-center gap-12 w-full lg:w-4/5 mx-auto">
                <div class="flex-1 rounded-2xl overflow-hidden order-1 lg:order-0">
                    <img class="w-full" :src="projectsData.acf.who_we_are.image.url" alt="Our Story">
                </div>
                <div class="flex-1 order-0 lg:order-1">
                    <h1 class="text-3xl font-semibold">{{ projectsData.acf.who_we_are.title }}</h1>
                    <div class="mt-4" v-html="projectsData.acf.who_we_are.description"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-8 py-8">
        <div class="container">
            <h3 class="text-4xl font-semibold">Projects we're proud to say we worked on</h3>
            <div class="flex flex-wrap gap-4 mt-10 text-center text-sm justify-center">
                <template v-if="projectsData" v-for="item in projectsData.acf.projects" :key="item">
                    <div class="w-[calc(20%-16px)] min-w-[180px] p-4 rounded-2xl border border-gray-200 bg-white text-xl flex items-center justify-center">
                        {{ item.name }}
                    </div>
                </template>
            </div>   
        </div>
    </section>
</template>

<script setup>
    import { useApiFetch } from '@/composables/useApiFetch'; // Import the composable

    useSeoMeta({
        title: 'Hompepage',
        description: '',

        ogTitle: 'Hompepage',
        ogDescription: '',
        ogImage: '',

        twitterTitle: 'Hompepage',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const { fetchData } = useApiFetch();

    const projectsData = ref(null);
    const projectsError = ref(null);

    const productsData = ref(null);
    const productError = ref(null);

    try {
        const [projectsResponse, productsResponse] = await Promise.all([
            fetchData('https://backend.grouppowerline.com/wp-json/wp/v2/pages/21', '', '100', '1', ''),
            fetchData('https://backend.grouppowerline.com/wp-json/wp/v2/product', 'title,acf', '100', '1', '')
        ]);

        projectsData.value = projectsResponse.data;
        projectsError.value = projectsResponse.error;

        productsData.value = productsResponse.data;
        productError.value = productsResponse.error;
    } catch (err) {
        console.error('API Fetch Error:', err);
    }

    // Combine the data from productsData and duplicate it
    const duplicatedProductList = computed(() => {
        // Ensure you are accessing `.value` for refs
        return [...productsData.value, ...productsData.value];
    });

    const swiperRef = ref(null);

    const prevSlide = () => {
        if (swiperRef.value?.swiper) {
            swiperRef.value.swiper.slidePrev();
        }
    };

    const nextSlide = () => {
        if (swiperRef.value?.swiper) {
            swiperRef.value.swiper.slideNext();
        }
    };
</script>

<style lang="sass">
    
</style>