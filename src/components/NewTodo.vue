<template>
  <div class="todos">
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td class="text-left"><input v-model="title" /></td>
            <td class="text-left"><input v-model="description" /></td>
            <td class="text-left"></td>
            <td class="text-left">
              <v-btn text icon color="pink">
                <v-icon @click="addTodo(inputItem)">mdi-floppy</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
};
</script>
