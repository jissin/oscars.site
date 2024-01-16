<template>
	<figure
		class="inline-flex gap-2 align-top"
		:style="{ '--size': winner ? '100px' : '80px' }"
	>
		<NuxtImg
			class="min-w-[var(--size)] max-w-[var(--size)]"
			:src="'https://' + photo"
		/>

		<figcaption class="flex max-w-[var(--size)] flex-col whitespace-normal">
			<p
				style="font-family: &quot;Jost&quot;, sans-serif"
				class="font-jost text-xs uppercase text-brand"
			>
				{{ winner ? "Winner" : "NOMINEES" }}
			</p>
			<NuxtLink target="_blank" class="text-sm font-semibold text-white">{{
				title
			}}</NuxtLink>
			<NuxtLink
				target="_blank"
				class="mb-2 truncate text-xs font-medium italic text-gray-300"
				>{{ subtitle }}</NuxtLink
			>
		</figcaption>
	</figure>
</template>

<script setup>
defineProps({
	winner: Boolean,
	photo: String,
	title: String,
	subtitle: String,
});
</script>
