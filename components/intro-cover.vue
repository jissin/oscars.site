<template>
  <div class="flex flex-col items-center justify-center gap-14">
    <oscars-icon :no="props?.no" />

    <div class="text-center font-jost">
      <p class="text-xl uppercase text-white">
        THE {{ props?.no }}TH ACADEMY AWARDS | {{ props?.year }}
      </p>
      <p class="text-base italic leading-loose text-gray-300">
        Honoring movies released in {{ props?.year - 1 }}.
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  no: Number,
  year: Number,
  location: String,
  date: String,
});
</script>
