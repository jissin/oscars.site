<template>
	<section class="relative -z-30">
		<div
			class="bg-transparentfont-jost absolute inset-0 z-10 flex flex-col items-center justify-center gap-20 p-10"
		>
			<div class="w-fit text-left font-jost text-lg font-medium text-white">
				<p>The imagery flows,</p>
				<p>Guarding the grandeur of distant realms and the minuscule within.</p>
				<p>The screen flickers,</p>
				<p>Casting the irregularities of life and the richness of the soul.</p>
				<p>These are no ordinary specks of light,</p>
				<p>But the afterglow of the birth of the universe.</p>
			</div>
		</div>

		<video
			class="absolute inset-0 h-full w-full object-cover object-center opacity-90"
			autoplay
			muted
			loop
			playsinline
			disablepictureinpicture
			disableRemotePlayback
		>
			<source
				:src="`${$config.public.CLOUDFLARE_R2_URL}/spin.mp4`"
				type="video/mp4"
			/>
		</video>

		<div
			class="absolute inset-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black"
		></div>
	</section>
</template>
