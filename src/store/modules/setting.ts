import elementVariables from '@/styles/element-variables.scss';
import defaultSettings from '@/setting';

export interface ISettingsState {
  theme: string;
  fixedHeader: boolean;
  showSettings: boolean;  // 是否显示设置面板
  showTagsView: boolean;
  showSidebarLogo: boolean;
  sidebarTextTheme: boolean;
}

const state: ISettingsState = {
  theme: elementVariables.theme,
  fixedHeader: defaultSettings.fixedHeader,
  showSettings:  defaultSettings.showSettings,
  showTagsView: defaultSettings.showTagsView,
  showSidebarLogo: defaultSettings.showSidebarLogo,
  sidebarTextTheme: defaultSettings.sidebarTextTheme,
};

export const Setting = {
  state,
};

export default Setting;
