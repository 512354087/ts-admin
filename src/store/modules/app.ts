import {getSidebarStatus, setSidebarStatus, getSize, setSize, setLanguage } from '@/utils/cookies';
import { getLocale } from '@/lang';
import { ActionContext } from 'vuex';

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface IAppState {
    device: DeviceType;
    sidebar: {
        opened: boolean;
        withoutAnimation: boolean;
    };
    language: string;
    size: string;
}

export const App = {
    state: {
        device: DeviceType.Desktop,
        sidebar: {
            opened: getSidebarStatus() !== 'closed',
            withoutAnimation: false,
        },
        language: getLocale(),
        size:  getSize() || 'medium',
    },
    mutations: {
        TOGGLE_SIDEBAR: (state: any, withoutAnimation: boolean) => {
            state.sidebar.withoutAnimation = withoutAnimation;
        },

    },
    actions: {
        ToggleSideBar(context: any, withoutAnimation: boolean) {
            context.commit('TOGGLE_SIDEBAR', withoutAnimation);
        },
    },
};


export default App;
