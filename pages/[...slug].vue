<template>
	<div v-show="status === 'success'">
		<header
			class="fixed top-0 flex w-full items-center justify-between px-6 py-4"
		>
			<music-player :fileName="`bgm.${data?.year}.mp3`" />
		</header>

		<aside>
			<transition name="fade">
				<intro-vid
					:fileName="`intro.${data?.year}.mp4`"
					:intersectionRatio="intersectionRatioList[0]"
					v-show="headVidVisible"
				/>
			</transition>

			<transition name="fade">
				<aurora-effect v-show="auroraEffectVisible" />
			</transition>

			<transition name="fade">
				<award-cover
					v-show="awardCoverVisible"
					:image="awardCoverImage"
					:key="awardCoverImage"
				/>
			</transition>
		</aside>

		<main class="z-10 [&>*]:h-screen [&>*]:w-screen">
			<intro-cover :no="data?.no" :year="data?.year" />

			<highlight-moments
				:images="data?.images"
				:intersectionRatio="intersectionRatioList[1]"
			/>

			<div class="grid place-items-center">
				<h1
					class="text-center font-jost text-2xl uppercase leading-loose tracking-widest text-brand"
				>
					WINNERS & NOMINEES
				</h1>
			</div>

			<award-display
				v-for="(item, index) in data?.awards"
				:key="item?.title"
				:title="item?.title"
				:for="item?.for"
				:no="data?.no"
				:list="item?.winner_and_nominees"
				:intersectionRatio="intersectionRatioList[index + 3]"
			/>

			<ending-scene />
		</main>

		<TheFooter />
	</div>
</template>

<script setup>
const { path } = useRoute();
const text = path?.slice(1);
let { data, status, error } = await useAsyncData(text, () =>
	text
		? queryContent(`oscars/${text}`).findOne()
		: queryContent(`oscars`).sort({ title: -1 }).limit(1).find(),
);
if (error.value) {
	throw createError({ statusCode: 500, statusMessage: error.message });
}
if (Array.isArray(data.value)) data.value = data.value[0];
if (!data.value) throw createError({ statusCode: 404, statusMessage: "404" });

const preloader = useImagePreloader(
	data?.value?.awards?.map((v) => v?.cover_photo),
);
const intersectionRatioList = useIntersectionRatioList();

const auroraEffectVisible = computed(() => {
	if (!intersectionRatioList.length) return false;
	const inLastSection =
		intersectionRatioList[intersectionRatioList?.length - 1] > 0.5;
	return inLastSection;
});

const headVidVisible = computed(() => {
	const inFirstThreeSection = intersectionRatioList?.slice(0, 3)?.some(Boolean);
	const in4thSection = intersectionRatioList[3] > 0.2;
	return inFirstThreeSection && !in4thSection;
});

const awardCoverImage = computed(() => {
	const index = intersectionRatioList?.findIndex((v) => v > 0.5);
	return preloader?.value?.[index - 3]?.src;
});

const awardCoverVisible = computed(() => {
	const inFirstTwoSection = intersectionRatioList?.slice(0, 2)?.some(Boolean);
	const inLastTwoSection = intersectionRatioList?.slice(-2)?.some(Boolean);
	return !inFirstTwoSection && !inLastTwoSection;
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
	opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
