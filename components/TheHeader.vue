<template>
    <nav class="w-full px-7 bg-gray-400">
        <ul class="flex justify-between font-semibold">
            <div class="flex space-x-4">
                <li class="hover:bg-slate-100 px-4 py-3">
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li v-if="isLogged" class="hover:bg-slate-100 px-4 py-3">
                    <nuxt-link to="/dashboard">Dashboard</nuxt-link>
                </li>
            </div>
            <div>
                <template v-if="!isLogged">
                    <li class="hover:bg-slate-100 px-4 py-3">
                        <nuxt-link to="/auth/login">Login</nuxt-link>
                    </li>
                </template>
                <template v-else>
                    <li class="hover:bg-slate-100 px-4 py-3">
                        <span class="cursor-pointer" @click="logout"
                            >Logout</span
                        >
                    </li>
                </template>
            </div>
        </ul>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["isLogged"]),
    },
    methods: {
        ...mapActions(["logout"]),
    },
};
</script>