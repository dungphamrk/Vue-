import axios from 'axios';

const state = {
  products: []
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  UPDATE_PRODUCT_QUANTITY(state, { id, quantity }) {
    const product = state.products.find(p => p.id === id);
    if (product) {
      product.quantity -= quantity;
    }
  }
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('http://localhost:3000/products');
    commit('SET_PRODUCTS', response.data);
  }
};

const getters = {
  allProducts: state => state.products
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
