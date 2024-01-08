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
      const url = encodeURIComponent(this.longUrl);

      const shortUrlApi = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: url }),
      };

      fetch("https://cleanuri.com/api/v1/shorten", shortUrlApi)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result_url) {
            this.postId = data.result_url;
          } else {
            console.error("Invalid response format:", data);
          }
        })
        .catch((error) => console.error("Fetch Error:", error));
    },
  },
};
</script>
