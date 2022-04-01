<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
const data = reactive({ name: 'allen', age: 27 })
// watch(
//   [() => data.name, () => data.age],
//   ([newName, newAge], [oldName, oldAge]) => {
//     console.log(newName, newAge)
//     console.log(oldName, oldAge)
//   }
// )
const stop = watchEffect(() => {
  console.log(data.age)
  setTimeout(() => {
    stop()
    data.age--
  }, 5000)
})
data.age++
</script>
<template>
  <div></div>
</template>
