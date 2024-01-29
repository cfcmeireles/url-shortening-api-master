<template>
  <main class="font-poppins h-screen">
    <Header />
    <div
      class="flex flex-col-reverse lg:flex-col items-center lg:grid lg:justify-center"
      style="grid-template-columns: repeat(2, 800px)"
    >
      <div class="flex flex-col justify-center mx-auto">
        <h1
          class="font-bold text-3xl mt-8 lg:mt-0 lg:text-6xl lg:flex lg:justify-center"
        >
          More than just <br />shorter links
        </h1>
        <p
          class="text-3xl text-gray font-bold text-base mb-5 lg:mb-0 lg:justify-center lg:flex"
        >
          Build your brand's recognition and get detailed <br />insights on how
          your links are performing.
        </p>
        <button
          class="rounded-2xl w-32 mt-3 bg-cyan p-1.5 text-white font-bold"
        >
          Get Started
        </button>
      </div>
      <div>
        <img
          style="height: 40%"
          src="/images/illustration-working.svg"
          alt="Working illustration"
        />
      </div>
    </div>
    <UrlShortener />
    <div class="text-center mt-20">
      <h2 class="text-3xl font-bold">Advanced Statistics</h2>
      <p class="text-gray font-bold mt-5">
        Track how your links are performing across the web with <br />our
        advanced statistics dashboard.
      </p>
    </div>
    <div class="flex flex-row justify-center items-center">
      <BoxFrames :icons="{ brandRecognition: true }">
        <template #title>Brand Recognition</template>
        <template #description>
          Boost your brand recognition with eachclick. Generic links don't mean
          a thing. Branded links help instil confidence in your
          content.</template
        >
      </BoxFrames>
      <div class="connecting-line"></div>
      <BoxFrames style="margin-top: 90px" :icons="{ detailedRecords: true }">
        <template #title>Detailed Records</template>
        <template #description>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </template>
      </BoxFrames>
      <div class="connecting-line"></div>
      <BoxFrames style="margin-top: 180px" :icons="{ fullyCustomizable: true }">
        <template #title>Fully Customizable</template>
        <template #description>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </template>
      </BoxFrames>
    </div>
    <div class="mt-24 relative flex items-center justify-center">
      <h2 class="text-3xl font-bold text-white absolute bottom-24">
        Boost your links today
      </h2>
      <button
        class="rounded-2xl w-32 bg-cyan p-1.5 text-white font-bold absolute bottom-12"
      >
        Get Started
      </button>
      <img
        class="w-full h-48 bg-darkviolet"
        src="/images/bg-boost-desktop.svg"
      />
    </div>
    <Footer />
  </main>
</template>

  <style scoped>
button:hover {
  background: hsl(180, 80%, 80%);
}

.connecting-line {
  width: 25px;
  height: 7px;
  background-color: cyan;
}

@media (max-width: 1440px) {
  h1,
  h1 + p {
    text-align: center;
  }

  button {
    margin: 0 auto;
  }
}
</style>