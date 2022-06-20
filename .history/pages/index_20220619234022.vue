<template>
  <div>
    <v-row>
      <v-col md="4">
        <UserCard class="mb-5" :email="item.title" :msisdn="item.msisdn" :oauth_user_id="item.oauth_user_id"  :user_type="item.user_type" :free_premium_items="item.free_premium_items">
          <template v-slot:button>
            <nuxt-link :to="`/books/${item.title}`">
              <v-btn>View</v-btn>
            </nuxt-link>
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
import BookCard from "@/components/BookCard";
import BookModal from "@/components/BookModal";
import { eventBus } from "@/eventBus";

export default {
  components: {
    UserCard,
    UserModal
  },
  data() {
    return {
      recentBooks: [],
      favouriteBooks: [],
      bestOfTheBest: []
    };
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
      eventBus.$emit("open-add-user-modal", item);
    }
  }
};
</script>
