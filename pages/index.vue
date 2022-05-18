<template>
    <div class="container mx-auto flex flex-col items-center">
        <template v-if="getAllPosts.length > 0">
            <div
                v-for="(post, index) in getAllPosts"
                :key="index"
                class="w-2/5 border border-solid mt-4 p-4 shadow-md relative"
                :class="{ zoom: isSelected(index) }"
                @mouseenter="hoverCard(index)"
                @mouseleave="hoverCard(-1)"
            >
                <h1 class="text-2xl font-bold capitalize truncate">
                    {{ post.title }}
                </h1>
                <p class="mt-3">{{ post.body }}</p>
                <div
                    v-if="getUserName(post.id).name"
                    class="text-right mt-2 font-semibold"
                >
                    {{ getUserName(post.id).name }}
                </div>

                <div
                    v-if="isLogged"
                    class="absolute right-2 top-0 cursor-pointer"
                    @click="deletePost(post.id)"
                >
                    <span class="text-red-700 font-bold select-none">X</span>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="mt-7">
                <h1 class="text-4xl text-red-600 font-semibold">
                    Posts not found!
                </h1>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "Index",
    data() {
        return {
            selectedCardIndex: -1,
        };
    },
    computed: {
        ...mapGetters(["getAllPosts", "getUserName", "isLogged"]),
    },
    methods: {
        ...mapActions(["fetchPosts", "fetchUserDatas"]),
        ...mapMutations(["deletePost"]),
        hoverCard(index) {
            this.selectedCardIndex = index;
        },
        isSelected(cardIndex) {
            return this.selectedCardIndex === cardIndex;
        },
    },
    mounted() {
        this.fetchPosts();
        this.fetchUserDatas();
    },
};
</script>

<style scoped>
.zoom {
    transition: transform 1s; /* Animation */
}
.zoom:hover {
    transform: scale(
        1.01
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
