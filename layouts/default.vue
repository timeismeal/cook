<script setup>
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const isRightDrawerOpen = ref(false);

const navigations = [
  // { name: "Home", href: "#", current: true },
  {
    name: "Recipes & Collections",
    to: "/collections",
    current: false,
    icon: "collection",
  },
  {
    name: "Shopping Lists",
    to: "/lists",
    current: false,
    icon: "shopping-cart",
  },
  // { name: "Chats", href: "/chats", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/signout" },
];
</script>

<template>
  <div class="min-h-full.debug-yellow">
    <div
      class="navbar bg-base-100 border-b border-neutral-200 dark:border-neutral-700"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <label
            for="my-drawer"
            tabindex="0"
            class="btn btn-ghost btn-circle lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li v-for="nav of navigations">
                <app-icon :icon="nav.icon" class="mr-2" />
                <nuxt-link :to="nav.to" class="link font-semibold">{{
                  nav.name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="navbar-center">
        <brand width="170" />
      </div>

      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <!-- <label for="my-drawer" tabindex="0" class="btn btn-ghost btn-circle"> -->
        <label
          for="right-drawer"
          tabindex="0"
          class="btn btn-ghost btn-circle avatar"
        >
          <div class="w-10 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </label>
      </div>
    </div>

    <!-- Divider -->
    <!-- <div class="bg-base-content/10 mx-0 my-0 h-px"></div> -->

    <main>
      <div class="mx-auto max-w-7xl py-8 sm:px-8 lg:px-8">
        <pre>isRightDrawerOpen {{ isRightDrawerOpen }}</pre>
        <slot />
      </div>
    </main>

    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Recipes & Collections</a></li>
          <li><a>Shopping Lists</a></li>
        </ul>
      </div>
    </div>

    <div class="drawer drawer-end">
      <input
        id="right-drawer"
        type="checkbox"
        class="drawer-toggle"
        v-model="isRightDrawerOpen"
      />
      <div class="drawer-side">
        <label
          for="right-drawer"
          aria-label="close sidebar"
          :class="{
            'drawer-overlay': true,
            'backdrop-blur': isRightDrawerOpen,
          }"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Profile Item 1</a></li>
          <li><a>Profile Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
