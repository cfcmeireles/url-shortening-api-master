<template>
  <main class="font-poppins">
    <Header />
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-center mx-auto">
        <h1 class="text-6xl font-bold justify-center flex">
          More than just <br />shorter links
        </h1>
        <p class="text-gray font-bold text-base justify-center flex">
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <button class="rounded-2xl w-32 mt-3 bg-cyan p-1.5 text-white">
          Get Started
        </button>
      </div>
      <div>
        <img src="/images/illustration-working.svg" />
      </div>
    </div>
    <UrlShortener />

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
  </main>
</template>
  
<script>
import UrlShortener from "~/components/UrlShortener.vue";
import Header from "~/components/Header.vue";
</script>

  <style>
.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>