<script setup lang="ts">
import axios from "axios";
import { ref, onMounted,computed } from "vue";

const itemList = ref([]);
onMounted(() => {
  axios("https://dummyjson.com/users?limit=10").then((response) => {
    itemList.value = response.data.users || [];
  });
});
const onDelete=(item:number)=> axios.delete(`https://dummyjson.com/users/${item.id}`).then(response=>{
  console.log(response);
  itemList.value=itemList.value.filter(i=>i.id!==item.id)
})
</script>

<template>
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"  v-for="item in itemList" :key="item.id">
   <div >
    <div class="flex flex-col items-center pb-10">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="item.image" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ item.firstName }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.lastName }}</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
            <button  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" @click="onDelete(item)">Delete</button>
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Details</a>
        </div>
    </div>
    </div>
</div>



 
</template>