<template >
  <main class="mt-5 mb-10">
    <div class="grid grid-cols-2">
      <div class="flex flex-row justify-center gap-8 items-center">
        <img src="/images/logo.svg" />
        <button class="header-btn text-gray font-bold text-sm">Features</button>
        <button class="header-btn text-gray font-bold text-sm">Pricing</button>
        <button class="header-btn text-gray font-bold text-sm">
          Resources
        </button>
      </div>
      <div class="flex flex-row justify-center items-center gap-8">
        <button class="header-btn text-gray font-bold text-sm">Login</button>
        <button
          class="signup-btn rounded-2xl w-20 bg-cyan p-1 text-white font-bold text-sm"
        >
          Sign up
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.header-btn:hover {
  color: black;
}

.signup-btn:hover {
  background: hsl(180, 80%, 80%);
}
</style>