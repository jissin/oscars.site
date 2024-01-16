<template>
	<div class="flex flex-col items-center justify-center gap-20 py-20">
		<h1 class="font-jost text-2xl uppercase tracking-widest text-brand">
			Highlight moments
		</h1>

		<div
			class="no-scrollbar w-full overflow-y-hidden overflow-x-scroll whitespace-nowrap px-[25vw] py-10 opacity-0 transition-opacity delay-200 duration-300 ease-in-out [&>*]:mr-1"
			:class="{ 'opacity-100': imagesVisible }"
		>
			<figure
				v-for="item in props.images"
				:key="item.url"
				class="relative inline-block w-[50vw] max-w-[500px] cursor-pointer"
			>
				<NuxtImg :src="item.url" class="w-full" />
				<figcaption
					class="absolute bottom-0 left-0 mt-2 translate-y-[100%] whitespace-normal text-xs text-gray-300"
				>
					{{ item.figcaption }}
				</figcaption>
			</figure>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	images: Array,
	intersectionRatio: Number,
});

const imagesVisible = computed(() => props.intersectionRatio > 0.5);
</script>
