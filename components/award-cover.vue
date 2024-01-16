<template>
	<div class="fixed inset-0 -z-40 grid h-[100vh] w-[100vw] place-items-center">
		<div
			class="h-[85vh] w-[85vw] max-w-screen-lg bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
			:style="{
				backgroundImage: `linear-gradient(
					0deg,
					rgb(0, 0, 0) 0%,
					rgba(255, 255, 255, 0) 50%
				),
				linear-gradient(rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 50%),
				linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 33%),
				linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 33%),
				url('${image}')`,
			}"
		></div>
	</div>
</template>
<script setup>
defineProps({
	image: String,
});
</script>
