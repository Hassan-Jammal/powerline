<template>
    <section class="py-12 lg:py-24">
        <div class="container">
            <div class="flex flex-col items-center gap-6 text-center">
                <img src="/images/logo-small.svg" alt="Powerline Group Logo Small" width="80" height="80" />
                <h2 class="text-3xl leading-tight font-semibold">Contact our friendly team</h2>
                <p class="text-xl">We're ready to help you supply all your electrical needs</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                <div v-for="(info, index) in info" :key="index" class="flex flex-col items-between gap-24 border rounded-2xl p-8">
                    <img :src="`/images/${info.icon}.svg`" :alt="info.title" width="48" height="48" />
                    <div class="flex flex-col gap-2 justify-between h-full">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-3xl leading-tight font-semibold">{{ info.title }}</h2>
                            <p class="text-xl" v-html="info.description"></p>
                        </div>
                        <a :href="formatLink(info.link)" class="mt-4 text-xl font-bold underline underline-offset-4">{{ info.link_text }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'Contact Us',
        description: '',

        ogTitle: 'Contact Us',
        ogDescription: '',
        ogImage: '',

        twitterTitle: 'Contact Us',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const info = [
        {
            icon: "email",
            title: "Chat with us",
            description: "We're always here to help",
            link_text: "info@grouppowerline.com",
            link: "info@grouppowerline.com",
        },
        {
            icon: "location",
            title: "Visit us",
            description: "We're always here to help",
            link_text: "View on Google Maps",
            link: "https://maps.app.goo.gl/G5myKRoBRfFprvCZ6?g_st=com.google.maps.preview.copy",
        },
        {
            icon: "phone",
            title: "Call us",
            description: "Monday to Friday from 8am till 5pm",
            link_text: "+961 9 232 390",
            link: "+961 9 232 390",
        },
    ]

    const formatLink = (link) => {
        if (!link) return "#"; // Prevents errors if link is undefined
        if (link.includes("@")) return `mailto:${link}`;
        if (link.startsWith("+")) return `tel:${link}`;
        return link;
    };
</script>