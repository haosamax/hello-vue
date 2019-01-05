import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {// 组件状态
    count: 0,
  },
  mutations: {// 唯一可以改变组件状态的方法集
    increase() {
      this.state.count = this.state.count + 1;
    },
  },
  actions: {

  },
});
