import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface RootState {};

export const store = new Vuex.Store<RootState>({
});

export default store;
