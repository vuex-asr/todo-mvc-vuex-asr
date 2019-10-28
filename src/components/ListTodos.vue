<template>
  <div class="main">
    <div v-for="item in todos" :key="item.id">
      {{ item.title }}
      <v-btn text icon color="pink">
        <v-icon @click="removeTodo(item)">mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>
