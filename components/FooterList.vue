<template>
  <ul class="text-white font-bold">
    <slot name="title"></slot>
    <li class="text-gray hover:text-cyan font-normal cursor-pointer mt-5 mb-2">
      <slot name="first-item"></slot>
    </li>
    <li class="text-gray hover:text-cyan font-normal cursor-pointer mb-2">
      <slot name="second-item"></slot>
    </li>
    <li class="text-gray hover:text-cyan font-normal cursor-pointer mb-2">
      <slot name="third-item"></slot>
    </li>
    <li class="text-gray hover:text-cyan font-normal cursor-pointer">
      <slot name="fourth-item"></slot>
    </li>
  </ul>
</template>