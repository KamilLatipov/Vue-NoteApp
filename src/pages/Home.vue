<template>
  <div class="home">
    <div v-for="note in notes" v-bind:key="note.id">
      <h2> {{ note.title }} </h2>
      <span @click="toDelete(note.id)">&times;</span>
      <ul>
        <li v-for="item in note.todo" v-bind:key="item.id">
          {{ item }}
        </li>
      </ul>
      <button @click="toEdit(note.id)">Edit</button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState([
      'notes'
    ]),
  },

  methods: {
    toEdit: function(id) {
      this.$router.push({ name: 'note', params: { id: id } })
    },

    toDelete: function() {
      
    }
  },
}
</script>
