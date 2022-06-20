<template>
  <div>
    <h2 class="text-center mb-5">Users</h2>
    <v-row>
      <v-col md="4" v-for="(item, index) in items" :key="index">
          <UserCard class="mb-5" :_id="item._id" :email="item.title" :msisdn="item.msisdn"
            :oauth_user_id="item.oauth_user_id" :user_type="item.user_type"
            :free_premium_items="item.free_premium_items">
            <template v-slot:button>
              <v-btn @click.stop="edit(item, index)">Edit</v-btn>
              <v-btn @click.stop="remove(item.category, index)">Remove</v-btn>
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
//import { eventBus } from "@/eventBus";

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
    remove(category, index) {
      if (category === "Recently read books") {
        this.recentBooks.splice(index, 1);
      }
      if (category === "Favourite books") {
        this.favouriteBooks.splice(index, 1);
      }
      if (category === "Best of the best") {
        this.bestOfTheBest.splice(index, 1);
      }
    },
    edit(item, index) {
      //eventBus.$emit("open-add-user-modal", item);
    }
  }
};
</script>
