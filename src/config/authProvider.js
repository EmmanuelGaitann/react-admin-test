const authProvider = {
    login: ({ username }) => {
        if (username === 'admin') {
            localStorage.setItem('auth', JSON.stringify({ username }));
            return Promise.resolve();
        }
        return Promise.reject(new Error('Identifiants incorrects'));
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
