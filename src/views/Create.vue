<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const data = ref({
  firstName: "",
  lastName: "",
  image: "",
  email: "",
});

const addPerson = () => {
  axios.post("https://dummyjson.com/users/add", data);
  console.log(data);
  router.push("/")
};
</script>

<template>
  <div class="flex justify-center items-center mt-20">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
         @submit.prevent="addPerson"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            First Name
          </label>
          <input
            v-model="data.firstName"
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
            v-model="data.lastName"
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
            v-model="data.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
            Imaga Url
          </label>
          <input
            v-model="data.image"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="text"
            placeholder="url"
          />
        </div>

        <div class="flex items-center justify-between">
          <router-link to="/">
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
