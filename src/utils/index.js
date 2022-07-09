import { isEmpty } from "lodash";

export const getLoggedinDetails = () => {
    const details = JSON.parse(localStorage.getItem("loginDetail"));
    if (details && !isEmpty(details)) {
        return {...details};
    } else {
        return details;
    }
    // return 'admin';
    // return "user";
};