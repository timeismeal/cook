<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingCartIcon,
  QueueListIcon,
} from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  // { name: "Home", href: "#", current: true },
  {
    name: "Recipes & Collections",
    href: "#",
    current: false,
    component: QueueListIcon,
  },
  {
    name: "Shopping Lists",
    href: "#",
    current: false,
    component: ShoppingCartIcon,
  },
  // { name: "Chats", href: "/chats", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/signout" },
];
</script>

<template lang="pug">
.min-h-full
  disclosure(as="nav" class="xbg-gray-800" v-slot="{ open }")
    .mx-auto.xxx-max-w-7xl.px-4(class="sm:px-6 lg:pr-8")
      .flex.h-16.items-center.justify-between.relative

        //- LEFT SECTION
        .flex-none.z-10
          .hidden(class="md:block")
            .xml-10.flex.items-baseline.xspace-x-4
              a.flex(
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-500', 'rounded-md px-3 py-2 text-sm font-semibold' ]"
                :aria-current="item.current ? 'page' : undefined"
                )
                //- shopping-cart-icon.text-xs(class="h-5 w-5 text-sm" aria-hidden="true")
                //- queue-list-icon.text-xs(class="h-5 w-5 text-sm" aria-hidden="true")
                component.h-5.w-5.mr-1(
                  :is="item.component"
                  aria-hidden="true"
                  )
                span {{ item.name }}

        //- MIDDLE SECTION
        .absolute.inset-x-0.inset-y-0.flex.items-center.justify-center
          //- img(class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company")
          brand.relative(width="200" style="top: -2px;")

        //- RIGHT SECTION
        .hidden.flex-none(class="md:block max-w-1/2")
          div(class="ml-4 flex items-center md:ml-6")
            button(
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              )
              span(class="absolute -inset-1.5")
              span(class="sr-only") View notifications
              bell-icon(class="h-6 w-6" aria-hidden="true")

            //- Profile dropdown
            Menu(as="div" class="relative ml-3")
              div
                MenuButton(
                  class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  )
                  span(class="absolute -inset-1.5")
                  span(class="sr-only") Open user menu
                  img(
                    class="h-8 w-8 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                    )
              transition(
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
                )
                MenuItems(
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  )
                  MenuItem(
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                    )
                    a(
                      :href="item.href"
                      :class="[ active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700', ]"
                      )
                      | {{ item.name }}

        div(class="-mr-2 flex md:hidden")

          //- Mobile menu button
          disclosure-button(
            class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            )
            span(class="absolute -inset-0.5")
            span(class="sr-only") Open main menu
            Bars3Icon(
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
              )
            XMarkIcon(v-else class="block h-6 w-6" aria-hidden="true")

    disclosure-panel(class="md:hidden")
      div(class="space-y-1 px-2 pb-3 pt-2 sm:px-3")
        disclosure-button(
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[ item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium' ]"
          :aria-current="item.current ? 'page' : undefined"
          )
          | {{ item.name }}

      div(class="border-t border-gray-700 pb-3 pt-4")
        div(class="flex items-center px-5")
          div(class="flex-shrink-0")
            img(class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="")
          div(class="ml-3")
            div(class="text-base font-medium leading-none text-white")
              | {{ user.name }}
            div(class="text-sm font-medium leading-none text-gray-400")
              | {{ user.email }}
          button(
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            )
            span(class="absolute -inset-1.5")
            span(class="sr-only") View notifications
            BellIcon(class="h-6 w-6" aria-hidden="true")
        div(class="mt-3 space-y-1 px-2")
          disclosure-button(
            v-for="item in userNavigation"
            :key="item.name"
            as="a"
            :href="item.href"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            )
            | {{ item.name }}

  //- header(class="bg-white shadow")
    div(class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8")

  main
    hr
    div(class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8")
      slot
</template>
