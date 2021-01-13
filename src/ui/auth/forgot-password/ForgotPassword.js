import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { Transition } from "../../../util/animation";

const ForgotPassword = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
            <DialogTitle id="form-dialog-title">Forgot Password?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter your registered email address here. We will send reset link to it.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="text">
                    Cancel
                </Button>
                <Button onClick={onClose} color="primary" variant="contained">
                    Send Link
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ForgotPassword;
