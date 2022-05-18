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
                <button class="btn" @click="add">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            item: {
                id: Math.floor(Math.random() * 1000) + 1000,
                title: "",
                body: "",
                userId: 0,
            },
        };
    },

    middleware({ store, redirect }) {
        if (!store.state.Auth.logged) {
            return redirect("/auth/login");
        }
    },

    methods: {
        ...mapMutations(["addPost"]),
        add() {
            this.addPost(this.item);
            this.$router.push("/dashboard");
        },
    },
};
</script>
