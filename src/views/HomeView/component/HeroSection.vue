<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="pt-48 pb-24 xl:py-56 3xl:py-64">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl xl:text-5xl 3xl:text-6xl font-bold">
            {{ heroSectionContent.heading }}
          </h1>
          <h3 class="text-base lg:text-lg xl:text-xl 3xl:text-2xl">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl xl:text-2xl 3xl:text-3xl font-bold py-5">
            {{ heroSectionContent.text }}
          </p>
          <p class="text-lg lg:text-xl xl:text-3xl 3xl:text-3xl">
            {{ heroSectionContent.subText }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
