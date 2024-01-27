<template>
  <div>
    <input class="border-2 border-black" v-model="longUrl" />
    <button class="border-2 border-black" @click="fetchData()">
      Shorten it!
    </button>
    <div>{{ postId }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: "",
      postId: null,
    };
  },
  methods: {
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
          this.postId = data.data.tiny_url;
        })
        .catch((error) => console.error("Fetch Error:", error));
    },
  },
};
</script>
