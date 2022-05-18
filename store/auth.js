import axios from "axios";

const state = () => ({
    users: [{ username: "test", password: "test123" }],
    userDatas: [],
    loggedInSuccessfully: true,
    logged: false,
});

const getters = {
    loginStatus(state) {
        return state.loggedInSuccessfully;
    },
    isLogged(state) {
        return state.logged;
    },
    getUserName: (state) => (id) => {
        return state.userDatas.filter((user) => user.id === id)[0]
            ? state.userDatas.filter((user) => user.id === id)[0]
            : false;
    },
    getAllUserData(state) {
        return state.userDatas;
    },
};

const mutations = {
    loginSuccess(state) {
        state.loggedInSuccessfully = true;
        state.logged = true;
    },
    loginFail(state) {
        state.loggedInSuccessfully = false;
    },
    logout(state) {
        state.logged = false;
    },
    setUserDatas(state, data) {
        state.userDatas = data;
    },
    deleteUser(state, userId) {
        state.userDatas = state.userDatas.filter((user) => user.id !== userId);
    },
};

const actions = {
    async login({ commit, state }, user) {
        const number = state.users.filter(
            (u) => u.username === user.username && u.password === user.password
        ).length;
        number > 0 ? commit("loginSuccess") : commit("loginFail");
    },
    async logout({ commit }) {
        commit("logout");
    },
    async fetchUserDatas({ commit }) {
        const response = await axios(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (response.data !== null) commit("setUserDatas", response.data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
