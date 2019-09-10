import Vue from 'vue';
import Vuex from 'vuex';
import App, { IAppState } from '@/store/modules/app';
import Setting, { ISettingsState} from '@/store/modules/setting';

Vue.use(Vuex);

export interface IRootState {
    App: IAppState;
    Setting: ISettingsState;

}


export default new Vuex.Store({
    modules: {
        App,
        Setting,
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
});
