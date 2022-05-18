<template>
    <div class="bg-slate-200">
        <div
            class="
                container
                mx-auto
                h-screen
                flex flex-col
                justify-center
                items-center
            "
        >
            <form
                action.prevent=""
                class="w-4/12 border border-solid p-4 shadow-md bg-white"
            >
                <h2 class="font-bold text-2xl">Login</h2>
                <div class="flex flex-col items-center justify-center mt-2">
                    <div v-if="!loginStatus">
                        <p class="text-red-700 font-semibold">
                            Wrong credentials!
                        </p>
                    </div>
                    <div>
                        Username<br />
                        <input
                            type="text"
                            class="input"
                            name="username"
                            v-model="username"
                        />
                    </div>
                    <div>
                        Password<br />
                        <input
                            type="password"
                            class="input"
                            v-model="password"
                        />
                    </div>
                    <div class="mt-4">
                        <button class="btn" @click.prevent="logIn()">
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    computed: {
        ...mapGetters(["loginStatus", "isLogged"]),
    },
    methods: {
        ...mapActions(["login"]),
        logIn() {
            this.login({ username: this.username, password: this.password });
            if (this.isLogged) this.$router.push("/");
        },
    },
    mounted() {
        if (this.isLogged) this.$router.push("/");
    },
};
</script>

