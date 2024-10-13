import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      id: 1,
      userName: 'Nguyễn Văn Nam',
      gender: 'Nam',
      dateOfBirth: '20/3/2023',
      address: 'Thanh Xuân, Hà Nội'
    },
    products: [
        { id: 1, productName: 'Cam sành', price: 20000, quantity: 10 },
        { id: 2, productName: 'Bưởi ba roi', price: 50000, quantity: 15 },
      ],
    counter: 0,
  },
  mutations: {
    INCREMENT(state) {
      state.counter += 1;
    },
    DECREMENT(state) {
      state.counter -= 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit('INCREMENT');
    },
    decrement({ commit }) {
      commit('DECREMENT');
    },
    toggleDarkMode({ commit }) {
      commit('toggleDarkMode');
    },
    setDarkMode({ commit }, value) {
      commit('setDarkMode', value);
    },
    setLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
    registerUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  addNumber (state){
    const randomNumber = Math.floor(Math.random() * 100);
    state.numbers.push(randomNumber); 
  },
  changeState(state){
    state.company = "RikkeiSoft";
  },
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
  },
  setDarkMode(state, value) {
    state.isDarkMode = value; 
  }, setLanguage(state, language) {
    state.language = language; 
  },
  setUser(state, user) {
    state.user.email = user.email;
    state.user.password = user.password;
  },
  clearUser(state) {
    state.user.email = '';
    state.user.password = '';
  }
},
  getters: {
    getUser: (state) => state.user,
    getProducts: (state) => state.products,
    getCounter: (state) => state.counter,
    isDarkMode: state => state.isDarkMode,
    currentLanguage: state => state.language,
  }
);

export default store;
