<template>
    <div class="relative container mx-auto bg-slate-200">
        <div>
            <nav>
                <ul class="flex space-x-5 p-4">
                    <li
                        class="p-2 cursor-pointer"
                        :class="{
                            'bg-slate-400 font-semibold':
                                currentPage === 'posts',
                        }"
                        @click="currentPage = 'posts'"
                    >
                        Posts
                    </li>
                    <li
                        class="p-2 cursor-pointer"
                        :class="{
                            'bg-slate-400 font-semibold':
                                currentPage === 'users',
                        }"
                        @click="currentPage = 'users'"
                    >
                        Users
                    </li>
                </ul>
            </nav>
            <div>
                <div v-if="currentPage === 'posts'">
                    <nuxt-link class="btn" to="/posts/add">Add Post</nuxt-link>
                    <table class="w-full">
                        <caption class="text-3xl font-semibold p-5">
                            Posts
                        </caption>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>userId</th>
                                <th>title</th>
                                <th>body</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr
                                v-for="(post, index) in getAllPosts"
                                :key="index"
                                class="border border-solid border-b-gray-600 border-t-gray-600"
                            >
                                <td class="p-2 text-center">{{ post.id }}</td>
                                <td class="text-center">{{ post.userId }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.body }}</td>
                                <td class="relative w-10">
                                    <div
                                        class="absolute right-2 top-0 cursor-pointer flex items-center h-full"
                                    >
                                        <span
                                            class="text-red-700 font-bold select-none"
                                            @click.prevent="deletePost(post.id)"
                                            >X</span
                                        >
                                    </div>
                                </td>
                                <td>
                                    <div class="flex items-center">
                                        <nuxt-link
                                            :to="'/posts/edit/' + post.id"
                                        >
                                            <svg
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 494.936 494.936"
                                                style="
                                                    enable-background: new 0 0
                                                        494.936 494.936;
                                                "
                                                xml:space="preserve"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
                                                        />
                                                        <path
                                                            d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </nuxt-link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else-if="currentPage === 'users'">
                    <table class="w-full">
                        <caption class="text-3xl font-semibold p-5">
                            Users
                        </caption>
                        <thead>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th class="px-4">delete</th>
                        </thead>
                        <tbody class="">
                            <tr
                                v-for="(user, index) in getAllUserData"
                                :key="index"
                                class="border border-solid border-b-gray-600 border-t-gray-600"
                            >
                                <td class="p-2 text-center">{{ user.id }}</td>
                                <td class="text-center">{{ user.name }}</td>
                                <td class="text-center">{{ user.username }}</td>
                                <td class="text-center">{{ user.email }}</td>
                                <td class="w-10">
                                    <div class="cursor-pointer text-center">
                                        <span
                                            class="text-red-700 font-bold select-none"
                                            @click="deleteUser(user.id)"
                                            >X</span
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    middleware({ store, redirect }) {
        if (!store.state.Auth.logged) {
            return redirect("/auth/login");
        }
    },
    data() {
        return {
            currentPage: "posts",
        };
    },

    computed: {
        ...mapGetters(["getAllPosts", "getAllUserData"]),
    },
    methods: {
        ...mapActions(["fetchPosts", "fetchUserDatas"]),
        ...mapMutations(["deletePost", "deleteUser"]),
    },
    mounted() {
        this.fetchPosts();
        this.fetchUserDatas();
    },
};
</script>
