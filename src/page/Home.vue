<script setup>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
const active = ref(0);
</script>

<template>
  <Tabbar v-model="active">
    <TabbarItem icon="home-o">首页</TabbarItem>
    <TabbarItem icon="search">搜索</TabbarItem>
    <TabbarItem icon="friends-o">用户</TabbarItem>
    <TabbarItem icon="setting-o">设置</TabbarItem>
  </Tabbar>
</template>
