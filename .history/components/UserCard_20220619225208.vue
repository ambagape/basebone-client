
<template>
  <v-card class="mx-auto" max-width="400">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
    <v-card-title>{{bookTitle}}</v-card-title>
    <v-card-subtitle>{{bookAuthor}}</v-card-subtitle>
    <v-card-text>{{bookDescription}}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="button"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["_id", "email", "msisdn", "oauth_user_id", "user_type", "free_premium_items"]
};
</script>
