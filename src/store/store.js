import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        userData: require('@/assets/data/portfolio_data.json'),
        isNavOpen: false,
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data;
        },
        setNavOpen(state) {
            state.isNavOpen = !state.isNavOpen;
        },
    },
    getters: {
        getUserData: state => state.userData,
        getUserFullName: state => state.userData.personal.first_name
            + " " + state.userData.personal.last_name,
        isNavOpen: state => state.isNavOpen,
    },
});

export default store;
