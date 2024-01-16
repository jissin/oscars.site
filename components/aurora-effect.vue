<template>
  <article class="fixed inset-0 -z-10" id="wrap">
    <article id="lightings">
      <section id="one">
        <section id="two">
          <section id="three">
            <section id="four">
              <section id="five"></section>
            </section>
          </section>
        </section>
      </section>
    </article>
  </article>
</template>

<style scoped>
#lightings {
  bottom: -60px;
  position: absolute;
  width: 100%;
}

@keyframes light-animation {
  from {
    box-shadow: 0 0 250px 20px var(--start-color);
  }
  to {
    box-shadow: 0 0 100px 15px var(--end-color);
  }
}

#one {
  --start-color: #473c78;
  --end-color: #f72a3b;
}
#two {
  --start-color: #18c499;
  --end-color: #d8f05e;
}
#three {
  --start-color: #ffdd00;
  --end-color: #3e33ff;
}
#four {
  --start-color: #781848;
  --end-color: #f2bbe9;
}
#five {
  --start-color: #42f2a1;
  --end-color: #f4f6ad;
}

section {
  border-radius: 50%;
  height: 20px;
  width: 100%;
  position: relative;
  margin: auto;
  animation: light-animation 5s ease-in-out infinite alternate;
}
</style>
