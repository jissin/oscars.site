<template>
	<div class="mx-10 flex items-center justify-center gap-1 font-jost">
		<img style="height: 75px" src="~/assets/wreath-left.png" />
		<h1 class="title text-center">
			<p class="text-sm font-medium tracking-wide text-white">
				{{ awardSubtitle }}
			</p>
			<p class="text-xl font-bold uppercase tracking-widest text-white">
				{{ awardTitle }}
			</p>
			<div class="aurora">
				<div class="aurora__item"></div>
				<div class="aurora__item"></div>
				<div class="aurora__item"></div>
				<div class="aurora__item"></div>
			</div>
		</h1>
		<img style="height: 75px" src="~/assets/wreath-right.png" />
	</div>
</template>

<script setup>
const props = defineProps({
	awardTitle: String,
	awardSubtitle: String,
});
</script>

<style scoped>
.title {
	--clr-1: #f6e49a;
	--clr-2: #f4d551;
	--clr-3: #e7e7e9;
	--clr-4: #ba9e5e;

	--blur: 1rem;
	position: relative;
	overflow: hidden;
	background: transparent;
}

.aurora {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	mix-blend-mode: darken;
	pointer-events: none;
}

.aurora__item {
	overflow: hidden;
	position: absolute;
	width: 60vw;
	height: 60vw;
	background-color: var(--clr-1);
	border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
	filter: blur(var(--blur));
	mix-blend-mode: overlay;
}

.aurora__item:nth-of-type(1) {
	top: -50%;
	animation:
		aurora-border 6s ease-in-out infinite,
		aurora-1 12s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(2) {
	background-color: var(--clr-3);
	right: 0;
	top: 0;
	animation:
		aurora-border 6s ease-in-out infinite,
		aurora-2 12s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(3) {
	background-color: var(--clr-2);
	left: 0;
	bottom: 0;
	animation:
		aurora-border 6s ease-in-out infinite,
		aurora-3 8s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(4) {
	background-color: var(--clr-4);
	right: 0;
	bottom: -50%;
	animation:
		aurora-border 6s ease-in-out infinite,
		aurora-4 24s ease-in-out infinite alternate;
}

@keyframes aurora-1 {
	0% {
		top: 0;
		right: 0;
	}

	50% {
		top: 100%;
		right: 75%;
	}

	75% {
		top: 100%;
		right: 25%;
	}

	100% {
		top: 0;
		right: 0;
	}
}

@keyframes aurora-2 {
	0% {
		top: -50%;
		left: 0%;
	}

	60% {
		top: 100%;
		left: 75%;
	}

	85% {
		top: 100%;
		left: 25%;
	}

	100% {
		top: -50%;
		left: 0%;
	}
}

@keyframes aurora-3 {
	0% {
		bottom: 0;
		left: 0;
	}

	40% {
		bottom: 100%;
		left: 75%;
	}

	65% {
		bottom: 40%;
		left: 50%;
	}

	100% {
		bottom: 0;
		left: 0;
	}
}

@keyframes aurora-4 {
	0% {
		bottom: -50%;
		right: 0;
	}

	50% {
		bottom: 0%;
		right: 40%;
	}

	90% {
		bottom: 50%;
		right: 25%;
	}

	100% {
		bottom: -50%;
		right: 0;
	}
}

@keyframes aurora-border {
	0% {
		border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
	}

	25% {
		border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
	}

	50% {
		border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
	}

	75% {
		border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
	}

	100% {
		border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
	}
}
</style>
