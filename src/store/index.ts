import Vue from 'vue';
import Vuex from 'vuex';
import {AppModule} from '@/store/modules/app';


Vue.use(Vuex);

export interface IRootState {
    app: IAppState;

}


export default new Vuex.Store({
    modules: {
        AppModule,

    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
});
