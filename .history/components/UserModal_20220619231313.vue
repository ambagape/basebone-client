<template>
  <v-dialog max-width="500px" v-model="open">
    <v-card class="p-5">
      <v-card-title>Add Books</v-card-title>
      <v-form>
        <v-select v-model="category" :items="categories" label="Select A Category"></v-select>
        <v-text-field v-model="email" label="Enter email"></v-text-field>
        <v-text-field v-model="msisdn" label="Enter msisdn"></v-text-field>
        <v-textarea v-model="oauth_user_id" label="Enter OAuth User ID"></v-textarea>
        <v-textarea v-model="user_type" label="Select user type"></v-textarea>
        <v-textarea v-model="free_premium_items" label="Enter free premium items"></v-textarea>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click.stop="saveBook" color="green">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      _id: "",
      email: "",
      msisdn: "",
      oauth_user_id: "",
      user_type: "",
      free_premium_items: "",
      user_types: ["front_end", "back_end"]

    };
  },
}
</script>
