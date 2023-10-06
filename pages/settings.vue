<script setup>
// definePageMeta({ layout: "settings" });
</script>

<template lang="pug">
nuxt-layout(name="settings")
	//- slot(name="sidebarr") sidebar 2
	//- foobar will be available in child pages as $attrs.foobar or props if defined at the child level
	nuxt-page(foobar="nopey nope" joke="haha")
</template>
