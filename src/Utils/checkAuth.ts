const checkAuth = () => !!sessionStorage.getItem('access-token');

export default checkAuth;