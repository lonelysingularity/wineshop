<template>

  <div class="card">
    <button type="button" @click="fun">count is {{ counterStore.count }}</button>
    <button type="button" @click="fun1">修改count值</button>
  </div>
</template>
<script setup lang="ts">
import useCounter from "../store/modules/user";
import {toRef, toRefs} from "vue";
import router from "../router";

const counterStore = useCounter()
console.log(counterStore)
const count = toRefs(counterStore)
// defineProps<{ msg: string }>()

function fun() {
  console.log(count)
  counterStore.count++
  setInterval(() => {
        counterStore.$reset()
      }
      , 2000)
}

function fun1() {
  // counterStore.$patch({
  //   count: counterStore.count = 0,
  //   name: 'counter',
  // })
  // counterStore.Addcount()
  router.push('/home')
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
