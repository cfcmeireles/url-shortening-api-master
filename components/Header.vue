<template >
  <main class="mt-5 mb-10 font-poppins font-bold">
    <div class="header hidden lg:grid lg:justify-center">
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
    <div
      class="hamburger-menu w-full h-16 m-0 relative top-2 lg:hidden flex"
      :class="isActive ? 'active' : ''"
    >
      <img src="/images/logo.svg" class="h-7 ml-5" />
      <div
        class="absolute mr-2"
        style="right: 10px"
        @click="toggleMenu"
        @click.stop
      >
        <span
          class="bar relative block w-6 h-1 my-1 mx-0 bg-grayviolet transition-all duration-300 ease-in"
        ></span>
        <span
          class="bar relative block w-6 h-1 my-1 mx-0 bg-grayviolet transition-all duration-300 ease-in"
        ></span>
        <span
          class="bar relative block w-6 h-1 my-1 mx-0 bg-grayviolet transition-all duration-300 ease-in"
        ></span>
      </div>
      <div class="hamburger-dropdown cursor-pointer">
        <ul class="hidden text-grayviolet">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Login</li>
          <li
            class="rounded-3xl w-24 bg-cyan p-2.5 text-white font-bold text-sm text-center"
          >
            Sign up
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.bar {
  z-index: 99;
}

.hamburger-menu.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-menu.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.hamburger-menu.active ul {
  display: block;
}

.hamburger-menu.active .hamburger-dropdown {
  width: 100%;
  position: absolute;
}
.hamburger-menu.active .hamburger-dropdown ul {
  padding: 0;
  margin: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hamburger-menu.active {
  animation: fadeIn 0.5s ease-in-out;
}

.hamburger-menu.active .hamburger-dropdown ul li {
  margin-bottom: 20px;
  opacity: 1;
}

.hamburger-menu.active .hamburger-dropdown ul li:last-of-type {
  margin-bottom: 0px;
}

.header-btn:hover {
  color: black;
}

.signup-btn:hover {
  background: hsl(180, 80%, 80%);
}

@media (min-width: 1440px) {
  .header {
    grid-template-columns: 900px 290px;
  }
}
</style>