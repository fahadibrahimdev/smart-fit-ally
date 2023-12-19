<script setup>
import { ref } from "vue";
import NavBar from "@/views/HomeView/component/NavBar.vue";
import HeroSection from "@/views/HomeView/component/HeroSection.vue";
import BrandFeatures from "@/views/HomeView/component/BrandFeatures.vue";
import BrandSelection from "@/views/HomeView/component/BrandSelection.vue";
import ExtraBenefits from "@/views/HomeView/component/BrandBenefits.vue";
import BrandFAQs from "@/views/HomeView/component/BrandFAQs.vue";
import BrandCTO from "@/views/HomeView/component/BrandCTO.vue";
import Footer from "@/views/HomeView/component/Footer.vue";
import MenuSideBar from "@/views/HomeView/component/MenuSideBar.vue";

const isSideBarOpen = ref(false)
</script>

<template>
  <MenuSideBar
      :is-expanded="isSideBarOpen"
      @toggle-menu-sidebar="(val) => isSideBarOpen = val"
  />
  <main>
    <header>
      <NavBar
          @toggle-menu-sidebar="(val) => isSideBarOpen = val"
      />
      <HeroSection/>
    </header>
    <BrandFeatures/>
    <BrandSelection/>
    <ExtraBenefits/>
    <BrandFAQs/>
    <BrandCTO/>
    <Footer/>
  </main>
</template>

<style>
header{
  position: relative;
  z-index: 1;
  background: url("/images/header-bg.webp") no-repeat center;
  background-size: cover;
}
header::after{
  content: '';
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: .6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>