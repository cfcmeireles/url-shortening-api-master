<template>
  <main class="font-poppins h-screen">
    <Header />
    <div
      class="flex flex-col-reverse lg:flex-col items-center lg:grid lg:justify-center"
      style="grid-template-columns: repeat(2, 750px)"
    >
      <div class="flex flex-col justify-center mx-auto">
        <h1
          class="font-bold text-3xl mt-8 lg:mt-0 lg:text-6xl lg:flex lg:justify-center text-verydarkviolet"
        >
          More than just <br />shorter links
        </h1>
        <p
          class="m-5 lg:m-0 text-gray text-sm lg:text-base mb-5 lg:mb-0 lg:justify-center leading-6 lg:leading-10"
        >
          Build your brand's recognition and get detailed <br />insights on how
          your links are performing.
        </p>
        <button
          class="get-started-btn rounded-3xl w-40 mt-3 bg-cyan p-2.5 text-white font-bold"
          @click="scrollToUrlShortener"
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
    <div class="background-change">
      <div ref="elementToScroll">
        <UrlShortener />
      </div>
      <div class="text-center mt-20">
        <h2 class="text-2xl lg:text-3xl font-bold text-verydarkviolet mb-2">
          Advanced Statistics
        </h2>
        <p
          class="text-gray font-normal mt-5 text-sm lg:text-base m-5 lg:m-0 leading-6 lg:leading-10"
        >
          Track how your links are performing across the web with <br />our
          advanced statistics dashboard.
        </p>
      </div>
      <div
        class="flex flex-col mt-20 lg:mt-0 lg:flex-row justify-center items-center m-5 lg:m-0"
      >
        <BoxFrames :icons="{ brandRecognition: true }">
          <template #title>Brand Recognition</template>
          <template #description>
            Boost your brand recognition with eachclick. Generic links don't
            mean a thing. Branded links help instil confidence in your
            content.</template
          >
        </BoxFrames>
        <div class="connecting-line"></div>
        <BoxFrames class="second-frame" :icons="{ detailedRecords: true }">
          <template #title>Detailed Records</template>
          <template #description>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </template>
        </BoxFrames>
        <div class="connecting-line"></div>
        <BoxFrames class="third-frame" :icons="{ fullyCustomizable: true }">
          <template #title>Fully Customizable</template>
          <template #description>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </template>
        </BoxFrames>
      </div>
      <div class="mt-24 relative flex flex-col items-center justify-center">
        <h2
          class="text-2xl lg:text-3xl font-bold text-white items-center justify-center absolute mb-16 lg:mb-12 text-center mx-2"
        >
          Boost your links today
        </h2>
        <button
          class="rounded-3xl w-40 bg-cyan p-2.5 text-white items-center justify-center absolute mt-12 lg:mt-16"
          @click="scrollToUrlShortener"
        >
          Get Started
        </button>
        <img
          class="w-full h-48 bg-darkviolet"
          src="/images/bg-boost-desktop.svg"
        />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
export default {
  methods: {
    scrollToUrlShortener() {
      const element = this.$refs.elementToScroll;
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  head() {
    return {
      meta: [
        {
          property: "og:image",
          content: "/design/desktop-design.jpg",
        },
      ],
    };
  },
};
</script>

  <style scoped>
.background-change {
  position: relative;
}

.background-change::after {
  content: "";
  display: block;
  background-color: hsl(257, 7%, 95%);
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

@media (min-width: 1440px) {
  button:hover {
    background: hsl(180, 80%, 80%);
  }

  .second-frame {
    margin-top: 90px;
  }

  .third-frame {
    margin-top: 180px;
  }
}
.connecting-line {
  width: 25px;
  height: 7px;
  background-color: cyan;
}

@media (max-width: 1440px) {
  .background-change::after {
    top: 60px;
  }

  h1,
  h1 + p {
    text-align: center;
  }

  .get-started-btn {
    margin: 0 auto;
  }
  .connecting-line {
    width: 7px;
    height: 100px;
    background-color: cyan;
  }

  .second-frame,
  .third-frame {
    margin-top: -30px;
  }
}
</style>