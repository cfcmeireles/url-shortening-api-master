<template>
  <div class="w-96 h-64 bg-white p-10 rounded-lg relative">
    <div
      class="rounded-full bg-darkviolet p-4 w-16 absolute"
      style="bottom: 220px; left: 25px"
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

    <h3 class="text-xl font-bold mt-8 text-verydarkviolet">
      <slot name="title"></slot>
    </h3>
    <p class="text-gray mt-5 font-normal">
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
