const checkAuth = () => !!sessionStorage.getItem('token');

export default checkAuth;