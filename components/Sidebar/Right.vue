<template>
  <div class="flex flex-col">
    <!-- Preview Card 1 -->
    <SidebarPreviewCard title="What's hapenning">
      <SidebarItem v-for="whatsHapenning in whatsHapenningItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHapenning.title }}
          </h2>

          <p class="text-xs text-gray-400">
            {{ whatsHapenning.count }}
          </p>
        </div>
      </SidebarItem>
    </SidebarPreviewCard>

    <!-- Preview Card 2 -->
    <SidebarPreviewCard title="Who to follow">
      <SidebarItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between p-2 items-center">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              alt="whoToFollow.name">

            <div class="flex flex-col ml-2">
                <h1 class="text-sm font-bold text-gray-900 dark:text=white">{{ whoToFollow.name }}</h1>
                <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
            


          </div>
          <div class="flex h-ful">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
          </div>
        </div>
      </SidebarItem>
    </SidebarPreviewCard>
  </div>
</template>

<script setup>
const whatsHapenningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "junkie.milda",
    count: "1.2k Tweets",
  },
  {
    title: "Spongebob",
    count: "3.4m Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "junkie.milda",
    handle: "@junkie.milda",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Spongebob",
    handle: "@Spongebob",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "SpaceX",
    handle: "@SpaceX",
    image: "https://picsum.photos/200/300",
  },
]);
</script>
