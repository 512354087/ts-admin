import Cookies from 'js-cookie';
// App 侧边栏菜单
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export function setSidebarStatus(sidebarStatus: string): void {
  Cookies.set(sidebarStatusKey, sidebarStatus);
}

// 语言设置
const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = (language: string) => Cookies.set(languageKey, language);

//
const sizeKey = 'size';
export function getSize(): string | undefined {
  return Cookies.get(sizeKey);
}
export function setSize(size: string): void {
  Cookies.set(sizeKey, size);
}

// User
const tokenKey = 'admin_token';
export function getToken(): string | undefined {
  return Cookies.get(tokenKey);
}

export function setToken(token: string): void {
  Cookies.set(tokenKey, token);
}

export function removeToken(): void {
  Cookies.remove(tokenKey);
}
