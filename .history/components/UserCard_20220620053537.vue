
<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>{{_id}} {{email}} {{msisdn}} {{oauth_user_id}} {{user_type}} {{free_premium_items}}</v-card-title>
    <v-card-subtitle>Email address: {{email}}</v-card-subtitle>
    <v-card-text>MSISDN: {{msisdn}}</v-card-text>
    <v-card-text>OAuth User ID:{{oauth_user_id}}</v-card-text>
    <v-card-text>Type: {{user_type}}</v-card-text>
    <v-card-text>Free Premium Item: {{free_premium_items}}</v-card-text>
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
