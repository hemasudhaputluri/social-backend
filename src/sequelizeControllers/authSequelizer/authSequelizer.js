const User = require('../../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try{

    } catch (error) {
        console.error("Error during registration:", error);
    }
}

const login = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error during login: ', error);
    }
}

const logout = (req, res) => {
    try {

    } catch (error) {
        console.error('Error during logout: ', error);
    }
}

const resetPassword = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error during password reset: ', error);
    }
}

const changePassword = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error during password change: ', error);
    }
}   

const verifyToken = (token) => {
    try {
        
    } catch (error) {
        console.error('Token verification failed:', error);
    }
}

const verifyEmail = async (email) => {
    try {

    } catch (error) {
        console.error('Error verifying email:', error);
    }
}



module.exports = {
    register,
    login,
    logout,
    resetPassword,
    changePassword,
    verifyToken,
    verifyEmail
}