import axios from "axios";

const state = () => ({
    posts: [],
    onceGenerated: false,
});

const getters = {
    getAllPosts(state) {
        return state.posts;
    },
};

const mutations = {
    setPosts(state, newPosts) {
        state.posts = newPosts;
    },
    deletePost(state, postId) {
        state.posts = state.posts.filter((post) => post.id !== postId);
    },
    editPost(state, editedPost) {
        const _posts = state.posts.filter((post) => post.id !== editedPost.id);
        _posts.push(editedPost);
        _posts.sort(function (a, b) {
            return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
        });
        state.posts = _posts;
    },
    addPost(state, post) {
        state.posts.push(post);
    },
};

const actions = {
    async fetchPosts({ commit, state }) {
        if (state.posts.length != 0) return;

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.data !== null) commit("setPosts", response.data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
