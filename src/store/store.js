import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        // PROD: replace with actual user data
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
        isNavOpen: state => state.isNavOpen,
        getUserData: state => state.userData,
        getUserFullName: state => state.userData.personal.first_name
            + " " + state.userData.personal.last_name,
        getUserAbout: state => state.userData.personal.about,
        getUserMoreAbout: state => state.userData.personal.more_about,
        getUserSkills: state => state.userData.skills,
        getUserProjects: state => state.userData.projects,
        getUserWorkExperience: state => state.userData.work_experience,
        getUserEducation: state => state.userData.education,
        getUserContactUrl: state => state.userData.getUserContactUrl,
    },
});

export default store;
