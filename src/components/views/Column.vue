<script setup lang="ts">
import { inject } from 'vue'
import grandSon from '@/components/views/grandSon.vue'
interface PersonInfo {
  name: string
  age: number
}

let personInfo = inject<PersonInfo>('personInfo')
let arr = inject('arr')
let count = inject('count')
console.log(personInfo, arr, count)
// personInfo.age++
</script>
<template>
  <div>
    <p>孙组件1：{{ personInfo }}</p>
    <p>孙组件1：{{ arr }}</p>
    <p>孙组件1：{{ count }}</p>
    <p>
      --------以上数据是子组件provide注入数据，子组件通过inject获取-----------
    </p>
    <grandSon></grandSon>
  </div>
</template>
