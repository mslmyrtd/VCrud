<script setup lang="ts">
import { useUserStore } from "@/stores/userStore";
import { vAutofocus } from "@/shared/directives/autofocus";

const store = useUserStore();
</script>

<template>
  <div class="flex justify-center items-center mt-12">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 dark:bg-slate-200"
        @submit.prevent="store.getAdd()"
      >
        <img
          :src="store.image"
          alt=""
          class="mb-3 w-24 h-24 mt-5 rounded-full shadow-lg mx-auto border-none"
        />
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
            Imaga Url
          </label>
          <input
            v-model="store.image"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="text"
            placeholder="url"
            v-autofocus
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            First Name
          </label>
          <input
            v-model="store.firstName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="firstname"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Last Name
          </label>
          <input
            v-model="store.lastName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="lastname"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="store.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>

        <div class="flex items-center justify-between">
          <router-link to="/" @click="store.reset()">
            <button
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none"
            >
              Cancel
            </button>
          </router-link>
          <button
            type="submit"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
input {
  @apply focus:border-indigo-500 border-gray-300 rounded-md;
}
</style>
