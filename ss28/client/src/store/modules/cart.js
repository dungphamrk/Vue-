import axios from 'axios';

const state = {
  cart: []
};

const mutations = {
  SET_CART(state, cart) {
    state.cart = cart;
  },
  ADD_TO_CART(state, product) {
    const existingProduct = state.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      state.cart.push(product);
    }
  },
  UPDATE_CART_ITEM(state, { id, quantity }) {
    const item = state.cart.find(p => p.id === id);
    if (item) {
      item.quantity = quantity;
    }
  },
  REMOVE_FROM_CART(state, id) {
    state.cart = state.cart.filter(p => p.id !== id);
  }
};

const actions = {
  async fetchCart({ commit }) {
    const response = await axios.get('http://localhost:3000/cart');
    commit('SET_CART', response.data);
  },
  async addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
    await axios.post('http://localhost:3000/cart', product);
  },
  async updateCartItem({ commit }, { id, quantity }) {
    commit('UPDATE_CART_ITEM', { id, quantity });
    await axios.put(`http://localhost:3000/cart/${id}`, { quantity });
  },
  async removeFromCart({ commit }, id) {
    commit('REMOVE_FROM_CART', id);
    await axios.delete(`http://localhost:3000/cart/${id}`);
  }
};

const getters = {
  cartItems: state => state.cart,
  cartTotalPrice: state => state.cart.reduce((total, product) => total + product.price * product.quantity, 0)
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
