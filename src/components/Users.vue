<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import Modal from "@/utils/Modal.vue";
import Loading from "./Loading.vue";
const store = useUserStore();

onMounted(() => {
  store.getUsers();
});
const itemToDelete = ref(0);
const modalVisible = ref<boolean>(false);
const confirmDeleteItem = (payload: any) => {
  modalVisible.value = true;
  itemToDelete.value = payload;
};
const deleteItem = (payload: number) => {
  store.getDelete(payload);
  modalVisible.value = false;
};
</script>

<template>
  <div class="grid lg:grid-cols-4 gap-4 m-10 md:grid-cols-2 sm:grid-cols-1">
    <div
      class="max-w-sm bg-slate-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-200"
      v-for="item in store.itemList"
      :key="item.id"
      v-if="!store.loading"
    >
      <div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="mb-3 w-24 h-24 mt-5 rounded-full shadow-lg"
            :src="item.image"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ item.firstName }} {{ item.lastName }}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{
            item.email
          }}</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <button
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none"
              @click="confirmDeleteItem(item.id)"
            >
              Delete
            </button>
            <router-link :to="`/editpage/${item.id}`">
              <button
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Edit
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="store.loading">
    <div class="row">
      <div class="col">
        <Loading />
      </div>
    </div>
  </div>

  <Modal
    :isVisible="modalVisible"
    @cancel="modalVisible = false"
    @confirm="deleteItem(itemToDelete)"
  />
</template>
