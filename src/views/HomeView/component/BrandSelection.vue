<script setup>
import { brandSelectionContent } from "@/@core/constants/home-view";
</script>

<template>
  <section id="whyUs" class="container text-start md:text-center pt-20 md:pt-28 pb-16">
    <h2 class="text-2xl lg:text-3xl xl:text-4.5xl 3xl:text-5.5xl font-bold">
      {{ brandSelectionContent.heading }}
    </h2>
    <hr class="w-1/6 sm:w-[6%] md:mx-auto border-2 border-primary my-6 lg:my-9 3xl:my-12">

    <template v-for="(content, i) in brandSelectionContent.descriptions" :key="i">
      <p class="text-lg 2xl:text-3xl pt-6">
        {{ content }}
      </p>
    </template>

    <h2 class="text-2xl lg:text-3xl xl:text-4.5xl 3xl:text-5.5xl font-bold pt-28">
      {{ brandSelectionContent.heading02 }}
    </h2>
    <hr class="w-1/6 sm:w-[6%] md:mx-auto border-2 border-primary my-6 lg:my-9 3xl:my-12">

    <template v-for="(content, i) in brandSelectionContent.description02" :key="i">
      <p class="text-lg 2xl:text-3xl pt-6">
        {{ content }}
      </p>
    </template>

    <div class="grid lg:grid-cols-2 text-start gap-20 pt-10 lg:pt-20 text-lg 2xl:text-3xl">
      <div>
        <img :src="brandSelectionContent.image" :alt="brandSelectionContent.alt">
      </div>
      <div class="flex flex-col justify-center">
        <ul class="list-disc pb-6 pl-5">
          <template v-for="(list, i) in brandSelectionContent.list" :key="i">
            <li>
              {{ list }}
            </li>
          </template>
        </ul>

        <p>{{ brandSelectionContent.listSummary }}</p>
      </div>
    </div>
  </section>
</template>
