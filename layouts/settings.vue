<script setup></script>

<template lang="pug">
.settings-layout.flex.items-top
  .sidebar.p-2(class="w-200" style="width: 300px; border: 1px dashed red;")
    div Account
    div Preferences
    div Upgrade to Pro
    div Support Center
    div Email Us
    div About
    divider
    div Sign Out
  .grow(style="border: 1px dashed green;")
    slot
</template>
