<script setup>
const user = useSupabaseUser();
// const router = useRouter()
// const route = useRoute()
// we don't need this watcher on server
// onMounted(() => {
//   watch(user, (user, prevUser) => {
//     if (prevUser && !user) {
//       // user logged out
//       router.push('/login')
//     } else if (user && typeof route.query.redirect === 'string') {
//       // user logged in
//       router.push(route.query.redirect)
//     }
//   })
// })
</script>

<template>
  <div>
    <NuxtLayout x-if="user">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
