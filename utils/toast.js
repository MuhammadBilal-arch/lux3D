import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const TOAST_STATUS = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    WARNING: "warning",
};

export const TOKEN_KEY = "Token";

export const TOAST_TYPE = {
    error: "error",
    success: "success",
    warning: "warning",
    info: "info",
};


const config = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
};

export const showToast = (message, type = TOAST_TYPE.info) => {
    switch (type) {
        case TOAST_TYPE.info:
            return toast.info(message, config);

        case TOAST_TYPE.success:
            return toast.success(message, config);

        case TOAST_TYPE.warning:
            return toast.warning(message, config);

        case TOAST_TYPE.error:
            return toast.error(message, config);

        default:
            return toast.info(message, config);
    }
};