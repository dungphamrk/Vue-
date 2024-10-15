import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state: {
    employees: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_EMPLOYEE(state, employees) {
      state.employees = employees;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    ADD_EMPLOYEE(state, employee) {
      state.employees.push(employee);
    },
    UPDATE_EMPLOYEE(state, updatedemployee) {
      const index = state.employees.findIndex(p => p.id === updatedemployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1, updatedemployee);
      }
    },
    DELETE_EMPLOYEE(state, employeeId) {
      state.employees = state.employees.filter(p => p.id !== employeeId);
    }
  },
  actions: {
    async fetchEmployees({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get('http://localhost:3000/employees');
        commit('SET_EMPLOYEE', response.data);
        commit('SET_LOADING', false);
      } catch (error) {
        commit('SET_ERROR', 'Failed to fetch employees');
        commit('SET_LOADING', false);
      }
    },
    async addEmployee({ commit }, employee) {
      try {
        const response = await axios.post('http://localhost:3000/employees', employee);
        commit('ADD_EMPLOYEE', response.data);
      } catch (error) {
        commit('SET_ERROR', 'Failed to add employee');
      }
    },
    async updateEmployee({ commit }, employee) {
      try {
        const response = await axios.put(`http://localhost:3000/employees/${employee.id}`, employee);
        commit('UPDATE_EMPLOYEE', response.data);
      } catch (error) {
        commit('SET_ERROR', 'Failed to update employee');
      }
    },
    async deleteEmployee({ commit }, employeeId) {
      try {
        await axios.delete(`http://localhost:3000/employees/${employeeId}`);
        commit('DELETE_EMPLOYEE', employeeId);
      } catch (error) {
        commit('SET_ERROR', 'Failed to delete employee');
      }
    }
  },
  getters: {
    allEmployees: (state) => state.employees,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  }
});

