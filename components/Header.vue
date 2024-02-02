<template >
  <main class="mt-5 mb-10 font-poppins font-bold">
    <div class="grid justify-center" style="grid-template-columns: 900px 290px">
      <div class="flex flex-row justify-start gap-8 items-center">
        <img src="/images/logo.svg" />
        <button class="header-btn text-gray font-bold text-sm">Features</button>
        <button class="header-btn text-gray font-bold text-sm">Pricing</button>
        <button class="header-btn text-gray font-bold text-sm">
          Resources
        </button>
      </div>
      <div class="flex flex-row justify-end items-center gap-8">
        <button class="header-btn text-gray font-bold text-sm">Login</button>
        <button
          class="signup-btn rounded-3xl w-24 bg-cyan p-2.5 text-white font-bold text-sm"
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