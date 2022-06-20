<template>
  <v-dialog max-width="500px" v-model="open">
    <v-card class="p-5">
      <v-card-title>Add Books</v-card-title>
      <v-form>
        <v-text-field v-model="email" label="Enter email"></v-text-field>
        <v-text-field v-model="msisdn" label="Enter msisdn"></v-text-field>
        <v-text-field v-model="oauth_user_id" label="Enter OAuth User ID"></v-text-field>
        <v-select :items="user_types" v-model="user_type" label="Select user type"></v-select>
        <v-text-field v-model="free_premium_items" label="Enter free premium items"></v-text-field>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click.stop="saveBook" color="green">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { eventBus } from "@/eventBus";

export default {
  data() {
    return {
      open: false,
      _id: "",
      email: "",
      msisdn: "",
      oauth_user_id: "",
      user_type: "",
      free_premium_items: "",
      user_types: ["front_end", "back_end"]

    };
  },
  created() {
    eventBus.$on("open-add-user-modal", this.open = true);
  },
}
</script>
