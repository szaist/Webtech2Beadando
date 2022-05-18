<template>
    <div class="container">
        <div class="flex flex-col items-center mt-10 space-y-4">
            <div class="flex flex-col items-center">
                Title
                <input type="text" class="input" v-model="item.title" />
            </div>
            <div class="flex flex-col items-center">
                Body
                <input type="text" class="input" v-model="item.body" />
            </div>
            <div class="flex flex-col items-center">
                UserId
                <input type="text" class="input" v-model.number="item.userId" />
            </div>

            <div class="flex flex-col items-center">
                <button class="btn" @click="edit">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    async asyncData({ params, store }) {
        const id = params.id;

        const editItem = store.state.Posts.posts.filter(
            (post) => post.id == id
        )[0];

        return { id, editItem };
    },

    middleware({ store, redirect }) {
        if (!store.state.Auth.logged) {
            return redirect("/auth/login");
        }
    },

    data() {
        return {
            item: {},
        };
    },

    methods: {
        ...mapMutations(["editPost"]),
        edit() {
            this.editPost(this.item);
            this.$router.push("/dashboard");
        },
    },

    watch: {
        editItem: {
            handler() {
                this.item = { ...this.editItem };
            },
            immediate: true,
        },
    },
};
</script>
