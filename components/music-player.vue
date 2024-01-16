<template>
  <figure>
    <figcaption>
      <div
        style="--bar-height: 10px; --bar-width: 3px"
        class="flex h-10 cursor-pointer items-center justify-center border border-transparent"
        @click="togglePlayPause"
      >
        <div
          v-for="(duration, index) in durations"
          :key="index"
          class="bar pause-music-wave"
          :style="{ animationDuration: duration + 'ms' }"
        ></div>
      </div>
    </figcaption>

    <audio ref="audioRef" autoplay loop disableRemotePlayback>
      <source
        :src="`${$config.public.CLOUDFLARE_R2_URL}/${fileName}`"
        type="audio/mpeg"
      />
      <p>Your browser doesn't support HTML5 audio.</p>
    </audio>
  </figure>
</template>

<script setup>
const durations = ref([1200, 1300, 1600, 1100, 1260]);
const audioRef = ref();

const props = defineProps({
  fileName: String,
});

onMounted(() => {
  audioRef.value.addEventListener("play", () =>
    document
      .querySelectorAll(".bar")
      .forEach((element) => element.classList.remove("pause-music-wave")),
  );
  audioRef.value.addEventListener("pause", () =>
    document
      .querySelectorAll(".bar")
      .forEach((element) => element.classList.add("pause-music-wave")),
  );
});

async function togglePlayPause() {
  audioRef.value.paused
    ? await audioRef.value?.play()
    : await audioRef.value?.pause();
}
</script>

<style scoped>
.bar {
  width: var(--bar-width);
  height: var(--bar-height);
  border-radius: var(--bar-width);
  margin: 2px;
  background-color: #fff;
  animation-name: musicWave;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transition: height 1s;
}

.bar:nth-child(1) {
  animation-duration: 1200ms;
}

.bar:nth-child(2) {
  animation-duration: 1300ms;
}

.bar:nth-child(3) {
  animation-duration: 1600ms;
}

.bar:nth-child(4) {
  animation-duration: 1100ms;
}

.bar:nth-child(5) {
  animation-duration: 1260ms;
}

.pause-music-wave {
  animation-play-state: paused;
}

@keyframes musicWave {
  0% {
    height: calc(var(--bar-height) / 1);
  }

  25% {
    height: calc(var(--bar-height) / 3);
  }

  50% {
    height: calc(var(--bar-height) / 5);
  }

  75% {
    height: calc(var(--bar-height) / 8);
  }

  80% {
    height: calc(var(--bar-height) / 5);
  }

  100% {
    height: calc(var(--bar-height) / 3);
  }

  100% {
    height: calc(var(--bar-height) / 1);
  }
}
</style>
