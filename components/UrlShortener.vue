<template>
  <input class="border-2 border-black" v-model="this.longUrl" />
  <button class="border-2 border-black" @click="fetchData()">
    Shorten it!
  </button>
  <div>{{ postId }}</div>
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
    fetchData(url) {
      url = encodeURIComponent(this.longUrl);
      const shortUrlApi = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(url),
      };
      fetch("https://cleanuri.com/api/v1/shorten", shortUrlApi)
        .then((response) => response.json())
        .then((data) => (this.postId = data))
        .catch((error) => console.error("Fetch Error:", error));
    },
  },
};
</script>
