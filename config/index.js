const config = {
    app: {
        roles: ['user', 'admin'],
        types: ['case', 'story']
    },
    crypto: {
        iterations: 12000,
        length: 128,
        digest: 'sha512'
    },
    mongodb: {
        uri: 'mongodb://localhost/node-app'
    },
    session: {
        secret: '123',
        key: '123',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: null
        }
    }
};

module.exports = config;
