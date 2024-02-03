<template>
  <ul class="text-white font-bold mb-5 lg:mb-0">
    <slot name="title"></slot>
    <li
      class="text-gray hover:text-cyan font-normal cursor-pointer mt-5 mb-3 text-sm"
    >
      <slot name="first-item"></slot>
    </li>
    <li
      class="text-gray hover:text-cyan font-normal cursor-pointer mb-3 text-sm"
    >
      <slot name="second-item"></slot>
    </li>
    <li
      class="text-gray hover:text-cyan font-normal cursor-pointer mb-3 text-sm"
    >
      <slot name="third-item"></slot>
    </li>
    <li class="text-gray hover:text-cyan font-normal cursor-pointer text-sm">
      <slot name="fourth-item"></slot>
    </li>
  </ul>
</template>