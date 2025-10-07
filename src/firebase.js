import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { token } from 'stylis';
import ShowToken from './components/showToken';
import { setCookie } from './helper';

const firebaseConfig = {
    apiKey: "AIzaSyB63SwLN3Vq_KBGSe9TbcIn_6QuHesKJOw",
    authDomain: "sanjab-7ed4e.firebaseapp.com",
    projectId: "sanjab-7ed4e",
    storageBucket: "sanjab-7ed4e.appspot.com",
    messagingSenderId: "851259759935",
    appId: "1:851259759935:web:f7ad6cdc686235aa51878a"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission()
    console.log(permission);
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BH5UDcZ_wyuE6y-JmVyvQejt6Q18q8X5cmOtycHzzvsaPhIL-Zhep5T05Pgmj50_5Gj7qd-nuJL8DDledr4OzGo"
        });
        console.log(token)
        setCookie("token", token, 1)
    }
}

