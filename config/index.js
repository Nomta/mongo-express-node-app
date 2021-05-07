const config = {
    app: {
        roles: ['user', 'admin'],
        types: ['case', 'story']
    },
    // cookie: {
    //     path: '/',
    //     sameSite: 'Strict',
    //     httpOnly: true,
    //     maxAge: null
    // },
    crypto: {
        iterations: 12000,
        length: 128,
        digest: 'sha512'
    },
    jwt: {
        privateKey: 'secret',
        options: {
            expiresIn: '1h'
            // algorithm: 'RS256'
        }
    },
    mongodb: {
        uri: 'mongodb://localhost/node-app'
    },
    session: {
        secret: '123',
        key: '123',
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: '/',
            sameSite: 'Strict',
            httpOnly: true,
            maxAge: null
        }
    }
};

module.exports = config;
