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
  methods: {
    saveUser() {
      let cardData = {
        _id: this._id,
        email: this.email,
        msisdn: this.msisdn,
        oauth_user_id: this.oauth_user_id,
        user_type: this.user_type,
        free_premium_items: this.free_premium_items,
      };
      this.open = false;
    }
  },
  created() {
    eventBus.$on("open-add-user-modal", () => {
      if (data) {
         _id: data._id,
        email: data.email,
        msisdn: data.msisdn,
        oauth_user_id: data.oauth_user_id,
        user_type: data.user_type,
        free_premium_items: data.free_premium_items,
      }
      this.open = true
    });
  },
}
</script>
