import { BASE_URL } from "./url";
import axios from 'axios'

export function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const passwordLength = Math.floor(Math.random() * (8 - 6 + 1)) + 6; // Random length between 6 and 8
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const onMinimizeString = (text, count) => {
    return text.length > count ? text.substring(1, count) + "..." : text;
};

export const onCleanString = (stringWithHtml) => {
    return stringWithHtml.replace(/<\/?[^>]+(>|$)/g, "");
};
export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
    return localStorage.removeItem(key);
};

export const API_HANDLER = async (method, endpoint, data , cookies) => {

    const headers = {
            "Content-Type": "application/json",
    }
    if(cookies) {
        headers["Authorization"] = `Bearer ${cookies}`
    }
    var config = {
        method: method,
        url: `${BASE_URL}${endpoint}`,
        headers: headers,
        data: data,
    };

    const result = await axios(config);

    return {
        data: result.data,
    };
};

export const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }

    return age;
};
