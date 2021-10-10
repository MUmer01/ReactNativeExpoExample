export const regOnlyAlpha = /^[a-z ]*$/i;
export const regUserName = /^[a-z0-9]*$/i;
export const regEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const localStorageKeys = {
  USER: '__USER__',
  AUTH_TOKEN: '__AUTH_TOKEN__',
};

export const unAuthorizedRoutes = ['/login', '/register'];
