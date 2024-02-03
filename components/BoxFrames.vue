<template>
  <div
    class="box-container w-full md:w-96 h-full lg:h-64 bg-white p-10 rounded-lg relative"
  >
    <div
      class="icons rounded-full bg-darkviolet p-4 w-16 lg:absolute"
      v-if="
        icons.brandRecognition ||
        icons.detailedRecords ||
        icons.fullyCustomizable
      "
    >
      <img
        src="../images/icon-brand-recognition.svg"
        alt="Brand Recognition Icon"
        v-if="icons.brandRecognition"
      />
      <img
        src="../images/icon-detailed-records.svg"
        alt="Detailed Records Icon"
        v-if="icons.detailedRecords"
      />
      <img
        src="../images/icon-fully-customizable.svg"
        alt="Fully Customizable Icon"
        v-if="icons.fullyCustomizable"
      />
    </div>

    <h3
      class="text-lg lg:text-xl text-center lg:text-left font-bold mt-8 text-verydarkviolet"
    >
      <slot name="title"></slot>
    </h3>
    <p class="text-gray mt-5 font-normal text-center lg:text-left">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Object,
      default: () => ({
        brandRecognition: false,
        detailedRecords: false,
        fullyCustomizable: false,
      }),
    },
  },
};
</script>

<style>
@media (max-width: 1440px) {
  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .icons {
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1440px) {
  .icons {
    bottom: 220px;
    left: 25px;
  }
}
</style>
