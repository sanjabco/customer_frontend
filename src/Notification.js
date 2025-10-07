import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

const Notification = () => {
    useEffect(() => {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" }).then((currentToken) => {
                    if (currentToken) {
                        console.log("Token received: ", currentToken);
                    } else {
                        console.log("No registration token available.");
                    }
                }).catch((err) => {
                    console.log("An error occurred while retrieving token. ", err);
                });
            }
        });
    }, []);

    return null;
};

export default Notification;