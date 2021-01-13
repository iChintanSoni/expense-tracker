import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const SEVERITY = {
    success: "success",
    error: "error",
    info: "info",
    warning: "warning"
}
Object.freeze(SEVERITY);

const AUTO_HIDE = 3000;

function Toast(props) {
    return (<Snackbar open={props.open} autoHideDuration={AUTO_HIDE} onClose={props.onClose} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
        <MuiAlert elevation={6} variant="filled" {...props} onClose={props.onClose} severity={props.severity}>
            {props.message}
        </MuiAlert>
    </Snackbar>);
}

export { Toast, SEVERITY };