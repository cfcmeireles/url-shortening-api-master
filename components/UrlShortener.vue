<template>
  <div class="mt-20">
    <div
      class="grid grid-cols-1 grid-flow-row justify-center items-center w-dvw"
    >
      <div
        class="flex flex-col lg:flex-row justify-center items-center lg:mb-12 relative lg:p-0"
      >
        <img
          class="z-0 absolute bg-darkviolet rounded-lg h-36 lg:h-30"
          :class="emptyInputError || invalidUrlError ? 'expand-mobile' : ''"
          style="width: 1200px"
          src="/images/bg-shorten-desktop.svg"
        />
        <form
          class="font-normal text-sm z-50 flex flex-col lg:flex-row items-center gap-y-3 pb-3.5 lg:pb-0"
          v-on:submit.prevent="eraseUserInput()"
        >
          <label for="input"> </label>
          <input
            class="shorten-link h-12 lg:h-14 rounded-md p-5"
            :class="emptyInputError || invalidUrlError ? 'error' : ''"
            v-model="userInput"
            placeholder="Shorten a link here..."
          />
          <input
            type="submit"
            value="Shorten it!"
            class="shorten-btn z-50 rounded-md bg-cyan p-2.5 text-white h-12 lg:h-14 lg:ml-3.5 font-bold cursor-pointer"
            :class="emptyInputError || invalidUrlError ? 'error-mobile' : ''"
          />
        </form>
        <p
          class="empty-error-msg absolute lg:mt-20 text-xs italic text-red-500 font-bold"
          v-if="emptyInputError"
        >
          Please add a link
        </p>
        <p
          class="invalid-error-msg absolute lg:mt-20 text-xs italic text-red-500 font-bold"
          v-if="invalidUrlError"
        >
          Please add a valid http link
        </p>
      </div>
      <div>
        <div
          v-for="(url, index) in saveUrl"
          :key="index"
          class="url h-26 py-3 lg:h-16 rounded-md bg-white mx-auto font-normal lg:mt-3.5 lg:p-5 text-sm lg:flex lg:items-center lg:relative"
          style="width: 1200px"
        >
          <div
            class="lg:pr-96 mb-2 lg:mb-0 pl-3 pr-3"
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
          >
            {{ url.long }}
          </div>
          <div class="line bg-gray mb-2"></div>
          <span
            class="text-cyan lg:absolute lg:right-36 mb-2 lg:mb-0 pl-3 pr-3"
            >{{ url.short }}</span
          >
          <button
            class="z-50 rounded-md lg:w-24 bg-cyan p-2 text-white font-bold lg:absolute right-5 ml-3 mr-3"
            :class="url.isCopied ? 'copied' : ''"
            @click="copyToClipboard(url)"
          >
            {{ url.isCopied ? "Copied!" : "Copy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      longUrl: "",
      saveUrl: [],
      emptyInputError: false,
      invalidUrlError: false,
    };
  },
  mounted() {
    const urlJSON = localStorage.getItem("saveUrl");
    if (urlJSON) {
      this.saveUrl = JSON.parse(urlJSON);
    }
  },
  methods: {
    eraseUserInput() {
      if (this.userInput) {
        this.longUrl = this.userInput;
        this.userInput = "";
        this.emptyInputError = false;
        this.fetchData();
      } else {
        this.emptyInputError = true;
        this.invalidUrlError = false;
      }
    },
    fetchData() {
      const apiKey =
        "irt9NZqGaKgkPX1XKV5tr8Ygzn1fdpJxR3Gq8qRgNz4NaUgTf9vvDj3hxL0m";
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
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
      if (
        !urlPattern.test(this.longUrl) ||
        this.longUrl.startsWith("http://tinyurl")
      ) {
        this.invalidUrlError = true;
        return;
      }
      fetch("https://api.tinyurl.com/create", shortUrlApi)
        .then((response) => response.json())
        .then((data) => {
          this.invalidUrlError = false;
          this.saveUrl.push({
            long: this.longUrl,
            short: data.data.tiny_url,
          });
          localStorage.setItem("saveUrl", JSON.stringify(this.saveUrl));
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    },
    copyToClipboard(url) {
      const textToCopy = url.short;
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand("copy");
      document.body.removeChild(textarea);
      url.isCopied = true;
      this.saveUrl.forEach((otherUrl) => {
        if (otherUrl !== url) {
          otherUrl.isCopied = false;
        }
      });
    },
  },
};
</script>

<style scoped>
@media (min-width: 1440px) {
  button:hover {
    background: hsl(180, 80%, 80%);
  }
}
.error {
  border: solid red 2px;
}

.error::placeholder {
  color: red;
  opacity: 0.5;
}

.copied {
  background: hsl(257, 27%, 26%);
}

.copied:hover {
  background: hsl(257, 27%, 26%);
}

@media (max-width: 1440px) {
  img,
  .url {
    width: 85% !important;
  }

  form {
    width: 100%;
  }

  .shorten-link {
    width: 77%;
  }
  .shorten-btn {
    width: 77%;
  }

  .error {
    margin-top: 10px;
  }

  .error-mobile {
    margin-top: 15px;
  }
  .expand-mobile {
    height: 10rem;
  }

  .empty-error-msg {
    padding-top: 5px;
    left: 13.5%;
  }

  .invalid-error-msg {
    padding-top: 5px;
    left: 13.5%;
  }

  .url {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .line {
    height: 0.1px;
  }
}

@media (min-width: 1440px) {
  .shorten-link {
    width: 60rem;
  }
  .shorten-btn {
    width: 9rem;
  }

  .empty-error-msg {
    margin-left: -1010px;
  }

  .invalid-error-msg {
    margin-left: -948px;
  }
}

@media (min-width: 500px) and (max-width: 1439px) {
  .empty-error-msg {
    left: 11.5%;
  }

  .invalid-error-msg {
    left: 11.5%;
  }
}
</style>