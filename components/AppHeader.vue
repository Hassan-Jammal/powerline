<template>
    <header class="fixed top-0 left-0 w-full z-50 flex flex-col justify-center items-center h-[calc(var(--headerHeight))] bg-white border-b transition-transform duration-300 ease-in-out" :class="{ '-translate-y-full': isScrolledDown, 'translate-y-0': isNavOpen }">
        <div class="container">
            <div class="flex justify-between items-center w-full">
                <NuxtLink :to="`/`">
                    <img src="/images/logo.svg" alt="Powerline Group Logo" width="278" height="54">
                </NuxtLink>
                <nav class="hidden lg:flex justify-between items-center gap-4">
                    <NuxtLink to="/contact-us" class="py-3 px-6 text-sm font-semibold rounded-full bg-[#F5F5F5]">Contact</NuxtLink>
                    <NuxtLink to="/products" class="py-3 px-6 text-sm font-semibold rounded-full bg-[#101828] text-white">Products</NuxtLink>
                </nav>
                <!-- Mobile Menu Toggle Icon -->
                <div id="nav-toggle" class="block lg:hidden rounded cursor-pointer" :class="{ toggled: isNavOpen }" dir="rtl" @click="toggleNav">
                    <div class="line1 w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                    <div class="line2 my-1 w-3/4 h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                    <div class="line3 w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300 ease-in-out"></div>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }" class="block lg:hidden fixed top-[93px] left-0 h-screen w-full bg-white text-xl z-[2] transition-all duration-300 ease-in-out overflow-y-scroll">
            <div class="container"></div>
        </nav>
    </header>
</template>

<script setup>
    const isOnTop = ref(true);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const scrollThreshold = 200;
    const isNavOpen = ref(false);
    const activeIndices = ref([]); // Track the active indices

    const checkScrollPosition = () => {
        // Check if the user is at the top of the page on mount
        isOnTop.value = window.scrollY === 0;
    };
    
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Determine the scroll direction
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        // Set the value for isScrolledUp if the user is scrolling up
        isScrolledUp.value = scrollDirection === 'up';

        // Check if the user has scrolled down more than the threshold
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

        // Check if the user is at the top of the page
        isOnTop.value = currentScrollPosition === 0;

        // Update the last scroll position
        lastScrollPosition.value = currentScrollPosition;
    };

    const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const closeNav = () => {
        isNavOpen.value = false
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    // Function to toggle active index
    const toggleActive = (index) => {
        const indexInArray = activeIndices.value.indexOf(index);
        if (indexInArray === -1) {
            activeIndices.value.push(index); // Add index if not present
        } else {
            activeIndices.value.splice(indexInArray, 1); // Remove index if already present
        }
    };

    onMounted(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains('link')) {
                closeNav()
                document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
            }
        });

        window.addEventListener('scroll', handleScroll);
        checkScrollPosition();
    });
</script>