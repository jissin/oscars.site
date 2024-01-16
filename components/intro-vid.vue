<template>
  <div class="fixed inset-0 -z-20">
    <video
      class="h-screen w-screen object-cover object-center"
      autoplay
      muted
      loop
      playsinline
      disablepictureinpicture
      disableRemotePlayback
    >
      <source
        :src="`${$config.public.CLOUDFLARE_R2_URL}/${fileName}`"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div
      style="
        background: linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0.6)
        );
        transition: all 0.2s ease;
      "
      :style="{ backdropFilter: `blur(${blurValue}px)` }"
      class="fixed inset-0"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  fileName: String,
  intersectionRatio: Number,
});

const blurValue = computed(
  () => Math.round((0.8 - props.intersectionRatio) * 10) * 10,
);
</script>
