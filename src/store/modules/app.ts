import {getSidebarStatus, getSize} from '@/utils/cookies';
import { getLocale } from '@/lang';
export enum DeviceType {
    Mobile,
    Desktop,
}
export interface IAppState {
    device: DeviceType;
    sidebar: {
        opened: boolean,
        withoutAnimation: boolean,
    };
    language: string;
    size: string;
}

export  class AppModule  {
    public state: IAppState = {
        device: DeviceType.Desktop,
        sidebar: {
            opened: getSidebarStatus() !== 'closed',
            withoutAnimation: false,
        },
        language: getLocale(),
        size:  getSize() || 'medium',
    };
}
