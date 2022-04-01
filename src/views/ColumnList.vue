<script setup lang="ts">
import { provide, reactive, ref } from 'vue'
import Column from '@/components/views/Column.vue'
interface Props {
  info: {
    id?: number | string
    title?: string
    description: string
  }
}
withDefaults(defineProps<Props>(), {
  info: () => {
    return {
      id: 1,
      title: 'hopi',
      description: 'define',
    }
  },
})
let personInfo = reactive<{
  name: string
  age: number
}>({ name: 'allen', age: 28 })
let arr: string[] = reactive(['1', '2'])
let count = 1
provide('personInfo', personInfo)
provide('arr', arr)
provide('count', count)
</script>
<template>
  <div class="info">
    <p>子组件：{{ info.id }}</p>
    <p>子组件：{{ info.title }}</p>
    <p>子组件：{{ info.description }}</p>
    <p>开始组装数据注入到全局 provide</p>
    <p>--------以上数据是父组件传给子组件-----------</p>
    <column />
  </div>
</template>
<style lang="scss"></style>
