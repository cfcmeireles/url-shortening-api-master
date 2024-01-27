<template>
  <main class="mt-20">
    <div
      class="grid grid-cols-1 grid-flow-row justify-center items-center w-dvw"
    >
      <div class="flex justify-center items-center mb-12">
        <img
          class="z-0 absolute bg-darkviolet rounded-md h-28"
          src="/images/bg-shorten-desktop.svg"
        />
        <input
          class="font-bold text-sm z-50 flex h-10 rounded-md p-5"
          style="width: 30rem"
          v-model="userInput"
          placeholder="Shorten a link here..."
        />
        <button
          class="z-50 rounded-md w-32 bg-cyan p-1.5 text-white h-10 ml-3.5 font-bold"
          @click="eraseUserInput()"
        >
          Shorten it!
        </button>
      </div>
      <div>
        <div
          v-for="(url, index) in saveUrl"
          :key="index"
          class="h-16 rounded-md bg-white mx-auto font-bold mt-3.5 p-5 text-sm flex items-center justify-between"
          style="width: 740px"
        >
          {{ url.long }}
          <span class="text-cyan">{{ url.short }}</span>
          <button
            class="z-50 rounded-md w-24 bg-cyan p-1.5 text-white font-bold"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      longUrl: "",
      saveUrl: [],
    };
  },

  methods: {
    eraseUserInput() {
      this.longUrl = this.userInput;
      this.userInput = "";
      this.fetchData();
    },
    fetchData() {
      const apiKey =
        "irt9NZqGaKgkPX1XKV5tr8Ygzn1fdpJxR3Gq8qRgNz4NaUgTf9vvDj3hxL0m";
      const shortUrlApi = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: this.longUrl,
        }),
      };

      fetch("https://api.tinyurl.com/create", shortUrlApi)
        .then((response) => response.json())
        .then((data) => {
          this.saveUrl.push({
            long: this.longUrl,
            short: data.data.tiny_url,
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    },
  },
};
</script>
