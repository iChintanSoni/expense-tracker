import { error, log } from "../util/logger";
// import { default as axiosInstance } from "./service/service";

const signUp = async (user) => {
    try {
        let response = await delay(5000);
        // const response = await axiosInstance.post('/signup', user);
        log(response, "SignUp");
        return response;
    } catch (exception) {
        error(exception, "SignUp");
        throw error;
    }
}

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

export { signUp }