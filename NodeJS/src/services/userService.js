import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);



let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await db.User.findOne({
                where: { email },
                attributes: {
                    include: ['email', 'roleId', 'firstName', 'lastName'],
                }
            });
            if (!user) {
                userData.errCode = 1;
                userData.errMessage = 'Try other Email'
                resolve(userData);
            } else {
                let isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    userData.errCode = 2;
                    userData.errMessage = 'Wrong password'
                    resolve(userData);
                } else {
                    userData.errCode = 0;
                    userData.errMessage = 'OK'
                    userData.user = {
                        email: user.email,
                        roleId: user.roleId,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    };
                    resolve(userData);
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}


let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }

            resolve(users)

        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is used, Try another email'
                })
            }
            else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId
                })

                resolve({
                    errCode: 0,
                    message: 'OK'
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}


let handleRegisterUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check email, password exited
            if (!data.email || !data.password) {
                resolve({
                    errCode: 1,
                    errMessage: 'Email and password are required fields'
                });
                return;
            }
            // check email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                resolve({
                    errCode: 1,
                    errMessage: 'Invalid email format'
                });
                return;
            }
            // check length password
            if (data.password.length < 8) {
                resolve({
                    errCode: 1,
                    errMessage: 'Password must be at least 8 characters'
                });
                return;
            }

            if (!data.firstName || !data.lastName) {
                resolve({
                    errCode: 1,
                    errMessage: 'First name and last name are required fields'
                });
                return;
            }

            let check = await checkUserEmail(data.email);

            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is used, Try another email'
                })
            }
            else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId
                })

                resolve({
                    errCode: 0,
                    message: 'OK'
                });
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.User.findOne({
            where: { id: userId }
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `The User is not exist`
            })
        }
        await db.User.destroy({
            where: { id: userId }
        })
        resolve({
            errCode: 0,
            message: `This User is deleted`
        })
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter'
                })
            }

            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();

                resolve({
                    errCode: 0,
                    message: 'Update user success'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: `User not found`
                });
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    hashUserPassword: hashUserPassword,
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    handleRegisterUser: handleRegisterUser
}