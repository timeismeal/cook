<script setup lang="ts"></script>

<template lang="pug">
div
  | index/pages
  //- nuxt-layout(name="default")
    div#container.mx-auto
      button(
        class="bg-primary-500 text-white font-bold py-2 px-4 rounded border hover:bg-primary-700"
        )
        | Good Night
    template(#header) Umm
</template>
