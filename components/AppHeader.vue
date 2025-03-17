<template>
    <header class="flex flex-col justify-center items-center h-[calc(var(--headerHeight))] border-b">
        <div class="container">
            <div class="flex justify-between items-center w-full">
                <NuxtLink :to="`/`">
                    <img src="/images/logo.svg" alt="Powerline Group Logo" width="278" height="54">
                </NuxtLink>
                <nav class="flex justify-between items-center gap-4">
                    <NuxtLink to="/" class="py-3 px-6 text-sm font-semibold rounded-full bg-[#F5F5F5]">Contact</NuxtLink>
                    <NuxtLink to="/products" class="py-3 px-6 text-sm font-semibold rounded-full bg-[#101828] text-white">Products</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>