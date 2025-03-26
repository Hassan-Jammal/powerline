<template>
    <section>
            <!-- <div class="relative">
                <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                    <img src="/images/shrit.png" alt="">
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20 w-1/3">
                    <svg width="100%" viewBox="0 0 388 605" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153.265 361.206H19.9045C15.3842 361.206 11.0029 359.642 7.5042 356.78C-0.866896 349.931 -2.10117 337.593 4.7473 329.222L267.86 7.61116C272.9 1.45119 281.166 -1.04627 288.773 1.29296C299.111 4.47184 304.914 15.4295 301.735 25.7673L234.731 243.667H368.123C372.644 243.667 377.026 245.231 380.525 248.094C388.895 254.944 390.128 267.282 383.279 275.652L120.135 597.207C115.095 603.366 106.829 605.862 99.2222 603.523C88.8845 600.343 83.0822 589.385 86.2619 579.047L153.265 361.206Z" fill="#F3F3F4"/>
                    </svg>
                </div>
                <div class="flex justify-between min-h-[calc(100vh-var(--headerHeight))] py-24">
                    <div class="w-full lg:w-1/ xl:w-1/4">
                        <h2 class="text-[2.5rem] leading-tight font-semibold">Fibre Optic and Cooper Cable for Infrastructure Networks</h2>
                        <img class="mt-6" src="/images/3m.svg" alt="">
                    </div>
                    <div class="w-full lg:w-1/3 xl:w-1/4 self-end">
                        <p class="text-primary text-right">Description can go here for example this is used for special applications or on specific market needs and customers specifications found in following applications: Railways, Naval,</p>
                    </div>
                </div>
            </div> -->

        <swiper-container 
            ref="swiperRef"
            :slides-per-view="1" 
            :loop="true" 
            :autoplay="{ delay: 5000 }"
            :speed="1000"
            :grabCursor="true"
        >
            <swiper-slide v-for="(product, index) in products" :key="index">
                <div class="container">
                    <div class="relative">
                        <div class="max-lg:w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                            <img :src="`/images/products/${product.image[0]}.png`" alt="">
                        </div>
                        <div class="max-lg:w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20 w-1/3">
                            <svg width="100%" viewBox="0 0 388 605" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.265 361.206H19.9045C15.3842 361.206 11.0029 359.642 7.5042 356.78C-0.866896 349.931 -2.10117 337.593 4.7473 329.222L267.86 7.61116C272.9 1.45119 281.166 -1.04627 288.773 1.29296C299.111 4.47184 304.914 15.4295 301.735 25.7673L234.731 243.667H368.123C372.644 243.667 377.026 245.231 380.525 248.094C388.895 254.944 390.128 267.282 383.279 275.652L120.135 597.207C115.095 603.366 106.829 605.862 99.2222 603.523C88.8845 600.343 83.0822 589.385 86.2619 579.047L153.265 361.206Z" fill="#F3F3F4"/>
                            </svg>
                        </div>
                        <div class="flex max-lg:flex-col justify-between min-h-[calc(100vh-var(--headerHeight))] py-12 lg:py-24">
                            <div class="w-full lg:w-1/3 xl:w-1/4">
                                <h2 class="text-[2.5rem] leading-tight font-semibold">{{ product.description }}</h2>
                                <img class="w-32 mt-6" :src="`/images/logos/${product.logo}.svg`" :alt="product.title">
                            </div>
                            <!-- <div class="w-full lg:w-1/3 xl:w-1/4 self-end">
                                <p class="text-primary lg:text-right">{{ product.description }}</p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </swiper-slide>
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
                <template v-if="projectsData" v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <img loading="lazy" class="marquee-item w-2/3" :src="`images/logos/${marquee.image}.svg`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
                </template>
            </div>
        </div>
    </section>

    <section class="my-8 py-8">
        <div class="container">
            <div class="flex max-lg:flex-col justify-between items-center gap-12 w-full lg:w-4/5 mx-auto">
                <div class="flex-1 rounded-2xl overflow-hidden order-1 lg:order-0">
                    <img class="w-full" src="/images/story.jpeg" alt="Our Story">
                </div>
                <div class="flex-1 order-0 lg:order-1">
                    <h1 class="text-3xl font-semibold">Powerline Group was established in the Lebanese market since 2002, and is considered as one of the leading supplier of cable management systems</h1>
                    <p class="mt-4">We've been supplying markets inside and outside of Lebanon for more than 10 years, with electrical products built by the American as well as European standards. </p>
                </div>
            </div>
        </div>
    </section>

    <section class="my-8 py-8">
        <div class="container">
            <h3 class="text-4xl font-semibold">Projects we're proud to say we worked on</h3>
            <div class="flex flex-wrap gap-4 mt-10 text-center text-sm justify-center">
                <template v-if="projectsData" v-for="item in projectsData.acf.projects" :key="item">
                    <div class="w-[calc(20%-16px)] min-w-[180px] p-4 rounded-2xl border border-gray-200 bg-white text-xl">{{ item.name }}</div>
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

    // const { data, error, fetchData } = useApiFetch(); // Use the composable

    // onMounted(() => {
    //     fetchData('https://backend.grouppowerline.com/wp-json/wp/v2/pages/21', 'acf');
    // });

    const { fetchData } = useApiFetch();

    const projectsData = ref(null);
    const projectsError = ref(null);

    const productData = ref(null);
    const productError = ref(null);

    onMounted(async () => {
        try {
            // Fetch Page Data
            const projectsResponse = await fetchData('https://backend.grouppowerline.com/wp-json/wp/v2/pages/21', 'acf');
            if (projectsResponse) {
                projectsData.value = projectsResponse.data.value;
                projectsError.value = projectsResponse.error.value;
            }

            console.log('Projects Data:', projectsResponse);

            // // Fetch Product Data
            // const productResponse = await fetchData('https://backend.grouppowerline.com/wp-json/wp/v2/products', 'title,acf');
            // if (productResponse) {
            //     productData.value = productResponse.data.value;
            //     productError.value = productResponse.error.value;
            // }

            // console.log('Product Data:', productData.value);
        } catch (err) {
            console.error('API Fetch Error:', err);
        }
    });

    const locations = [
        'AUBMC ACC',
        'AUB Administration', 
        'AUB Biology Lab',
        'Alpha Lab',
        'ABC Verdun',
        'Abed El Wahab 618',
        'Australian 4748',
        'Aya Tower',
        'Bank Med',
        'Banque Du Liban',
        'BCTC',
        'BDL',
        'Beirut Flats',
        'Beirut City Center',
        'Beirut North Souk',
        'Beit Misk',
        'Choueifat Mall',
        'Clemenceau Clinic',
        'City Development',
        'Damac Tower',
        'District 5',
        'Dourrat Lebnen',
        'Ghandour',
        'Harmeh Village',
        'Holcim',
        'KMC',
        'LAU',
        'Lebanese University',
        'MASEEO',
        'Malia Tower',
        'Ministry of Health',
        'MEA Simulator Center',
        'NDU',
        'Port of Beirut',
        'Platinum',
        'Pines',
        'Qatar Embassy',
        'Qatar Airways',
        'Rotana Hotel',
        'Sama Beirut',
        'Stone Garden',
        'Summerland',
        'Sursock Tower',
        'Saint George Hospital',
        'Skybar',
        'Trillium Tower',
        'Waterfront City'
    ];
    
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
    ]

    const marqueeList = [
        { image: "kouvidis", alt: "Kouvidis", width: "", height: "", link: "" },
        { image: "itcc", alt: "ITCC", width: "", height: "", link: "" },
        { image: "decoduct", alt: "DecoDuct", width: "", height: "", link: "" },
        { image: "3m", alt: "3M", width: "", height: "", link: "" },
        { image: "alfanar", alt: "Alfanar", width: "", height: "", link: "" },
        { image: "belden", alt: "Belden", width: "", height: "", link: "" },
        { image: "atkore", alt: "Atkore", width: "", height: "", link: "" },
        { image: "brady", alt: "Brady", width: "", height: "", link: "" },
        { image: "bridgeport", alt: "Bridgeport", width: "", height: "", link: "" },
        { image: "cavicel", alt: "Cavicel", width: "", height: "", link: "" },
        { image: "eae-elektrik", alt: "EAE Elektrik", width: "", height: "", link: "" },
        { image: "ebdc", alt: "EBDC", width: "", height: "", link: "" },
        { image: "etelec", alt: "Etelec", width: "", height: "", link: "" },
        { image: "hubbel-raco", alt: "Hubbel Raco", width: "", height: "", link: "" },
        { image: "ideal-industries-inc", alt: "Ideal Industries Inc", width: "", height: "", link: "" },
        { image: "itcc", alt: "ITCC", width: "", height: "", link: "" },
        { image: "leviton", alt: "Leviton", width: "", height: "", link: "" },
        { image: "mersen", alt: "Mersen", width: "", height: "", link: "" },
        { image: "milbank", alt: "Milbank", width: "", height: "", link: "" },
        { image: "picoma", alt: "Picoma", width: "", height: "", link: "" },
        { image: "pollmann", alt: "Pollmann", width: "", height: "", link: "" },
        { image: "tenaris-saudi-steel-pipes", alt: "Tenaris Saudi Steel Pipes", width: "", height: "", link: "" },
        { image: "trachet", alt: "Trachet", width: "", height: "", link: "" },
        { image: "valdinox", alt: "Valdinox", width: "", height: "", link: "" },
        { image: "mennekes", alt: "Mennekes", width: "", height: "", link: "" },
    ];

    const duplicatedMarqueeList = computed(() => [...marqueeList, ...marqueeList]);

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