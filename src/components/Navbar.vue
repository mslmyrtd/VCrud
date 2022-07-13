<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/">
                <button
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </button></router-link
              >
              <router-link to="/editpage/1">
                <button
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Edit
                </button></router-link
              >
              <router-link to="/create">
                <button
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create
                </button></router-link
              >
            </div>
          </div>
        </div>

        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
       <router-link to="/"  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" > <DisclosureButton
          >Dashboard</DisclosureButton
        ></router-link>
       <router-link to="/editpage/1"  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" > <DisclosureButton
          >Edit</DisclosureButton
        ></router-link>
       <router-link to="/create"  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" > <DisclosureButton
          >Create</DisclosureButton
        ></router-link>
       
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/solid";
</script>
