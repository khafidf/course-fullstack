export const logout = (params) => {
  localStorage.clear();
  window.location.replace(params);
};
