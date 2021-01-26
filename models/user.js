const mongoose = require('mongoose');
const crypto = require('crypto');
const connection = require('../service/connection');
const config = require('../config');

const userSchema = new mongoose.Schema(
    {
        /* required */

        email: {
            type: String,
            required: 'E-mail не должен быть пустым',
            validate: [
                {
                    validator(value) {
                        return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
                    },
                    message: 'Некорректный email'
                }
            ],
            unique: 'Такой email уже существует'
        },
        name: {
            type: String
            // required: 'Имя пользователя не указано',
            // unique: 'Такое имя уже существует'
        },
        role: {
            type: String,
            enum: config.app.roles,
            required: true,
            default: 'user'
        },
        passwordHash: String,
        salt: String,

        /* other */

        activity: Number,
        alias: String,
        avatar: String,
        // images: [String],
        info: String,
        rate: Number,
        // rate: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: 'Rate'
        // },
        slogan: String,
        settings: Number,

        /* verification token */

        verificationToken: String
    },
    {
        timestamps: true
    }
);

function generatePassword(salt, password) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password,
            salt,
            config.crypto.iterations,
            config.crypto.length,
            config.crypto.digest,
            (err, key) => {
                if (err) return reject(err);
                resolve(key.toString('hex'));
            }
        );
    });
}

function generateSalt() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(config.crypto.length, (err, buffer) => {
            if (err) return reject(err);
            resolve(buffer.toString('hex'));
        });
    });
}

userSchema.methods.setPassword = async function setPassword(password) {
    this.salt = await generateSalt();
    this.passwordHash = await generatePassword(this.salt, password);
};

userSchema.methods.checkPassword = async function (password) {
    if (!password) return false;

    const hash = await generatePassword(this.salt, password);
    return hash === this.passwordHash;
};

module.exports = connection.models.User || connection.model('User', userSchema);
