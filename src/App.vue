<script setup>
import HelloWorld from './components/HomeComponent.vue'
import NavBar from "./components/NavBar.vue"
import Footer from "./components/FooterComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
    <NavBar/>
    <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"/>
        </transition>
    </router-view>
    <FooterComponent/>

</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}
</style>
