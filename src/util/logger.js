
const isDevelopment = () => { return process.env.NODE_ENV === 'development'; };

const log = (message, tag = 'Log') => {
    if (isDevelopment()) {
        console.log(tag, message);
    }
};

const error = (message, tag = 'Error') => {
    if (isDevelopment()) {
        console.error(tag, message);
    }
};

const warn = (message, tag = 'Warn') => {
    if (isDevelopment()) {
        console.warn(tag, message);
    }
};

const info = (message, tag = 'Info') => {
    if (isDevelopment()) {
        console.info(tag, message);
    }
};

const assert = (message, tag = 'Assert') => {
    if (isDevelopment()) {
        console.assert(tag, message);
    }
};

export { log, error, warn, info, assert };