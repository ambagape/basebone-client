<template>
  <div>
    <h2 class="text-center mb-5">Users</h2>
    <v-row>
      <v-col md="4" v-for="(item, index) in items" :key="index">
          <UserCard class="mb-5" :_id="item._id" :email="item.title" :msisdn="item.msisdn"
            :oauth_user_id="item.oauth_user_id" :user_type="item.user_type"
            :free_premium_items="item.free_premium_items">
            <template v-slot:button>
              <v-btn @click.stop="edit(item)">Edit</v-btn>
              <v-btn @click.stop="remove(item._id)">Remove</v-btn>
            </template>
          </UserCard>
      </v-col>
    </v-row>
    <UserModal />
  </div>
</template>


<script>
import UserCard from "@/components/UserCard";
import UserModal from "@/components/UserModal";
import { eventBus } from "@/eventBus";

export default {
  components: {
    UserCard,
    UserModal
  },
  data() {
    return {
      items: [],
    };
  },
  mounted () {
    this.items = this.$userService.getUsers().then((result) => this.items = result);
  },
  methods: {
    remove(id) {
      await this.$userService.deleteUser(id);
    },
    edit(item) {
      eventBus.$emit("open-add-user-modal", item);
    }
  }
};
</script>
