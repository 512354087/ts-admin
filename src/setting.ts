
// 一些网站的常用默认配置
interface ISetting {
 title: string; // 用来覆盖默认的把标题
 showSettings: boolean; // Controls settings panel display
 showTagsView: boolean; // Controls tagsview display
 showSidebarLogo: boolean; // Controls siderbar logo display
 fixedHeader: boolean; // If true, will fix the header component
 errorLog: string[]; // The env to enable the errorlog component, default 'production' only
 sidebarTextTheme: boolean; // If true, will change active text color for sidebar based on theme
}

const setting: ISetting = {
  title: 'Donie',
  showSettings: true,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: false,
  errorLog: ['production'],
  sidebarTextTheme: true,
};

export default setting;
