<template>
  <div class="todos">
    {{ todos }}
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in todos" :key="item.id">
            <td class="text-left">{{ item.id }}</td>
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">{{ item.description }}</td>
            <td class="text-left">
              <v-btn text icon color="pink">
                <v-icon @click="removeTodo(item)">mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
