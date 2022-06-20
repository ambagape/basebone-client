
<template>
  <v-card class="mx-auto" max-width="400">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
    <v-card-title>{{_id}}</v-card-title>
    <v-card-subtitle>{{email}}</v-card-subtitle>
    <v-card-text>{{msisdn}}</v-card-text>
    <v-card-text>{{oauth_user_id}}</v-card-text>
    <v-card-text>{{user_type}}</v-card-text>
    <v-card-text>{{free_premium_items}}</v-card-text>
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
