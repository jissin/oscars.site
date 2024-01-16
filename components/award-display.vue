<template>
	<section class="flex flex-col items-center justify-center">
		<award-title
			:awardTitle="props.title"
			:awardSubtitle="'the oscars ' + props.no"
		/>

		<div
			:class="{
				'!translate-y-0 !opacity-100': intersectionRatio > 0.5,
			}"
			class="mt-20 flex translate-y-10 flex-col items-center justify-center gap-10 opacity-0 transition-all duration-500 ease-in-out"
		>
			<seat-card
				:photo="props.list?.[0]?.photo"
				:title="
					props.list?.[0]?.[
						{ actor: 'actor_name', film: 'film_name', music: 'song_name' }[
							props.for
						]
					]
				"
				:subtitle="
					props.list?.[0]?.[
						{ actor: 'film_name', film: 'author', music: 'author' }[props.for]
					]
				"
				winner
			/>

			<div
				class="no-scrollbar w-screen max-w-fit overflow-y-hidden overflow-x-scroll whitespace-nowrap p-5 [&>*]:mr-2"
			>
				<seat-card
					v-for="(el, index) in props.list?.slice(1)"
					:key="index"
					:photo="el?.photo"
					:title="
						el?.[
							{
								actor: 'actor_name',
								film: 'film_name',
								music: 'song_name',
							}[props.for]
						]
					"
					:subtitle="
						el?.[
							{ actor: 'film_name', film: 'author', music: 'author' }[props.for]
						]
					"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	title: String,
	no: Number,
	list: Array,
	intersectionRatio: Number,
	for: String,
});
</script>
