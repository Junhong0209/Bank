const checkAuth = () => !!sessionStorage.getItem('access_token');

export default checkAuth;