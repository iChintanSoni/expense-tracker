import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { Toast, SEVERITY } from '../../common/Toast';
import Copyright from '../../common/Copyright';
import { signUp } from '../../../repository/UserRepository';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme.palette.background.default
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    }
}));

const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setToastState({ open: false, onClose: handleClose });
    };
    const [toastState, setToastState] = useState({ open: false, severity: SEVERITY.success, message: "", onClose: handleClose });

    const classes = useStyles();
    const history = useHistory();

    function goToSignIn(event) {
        event.preventDefault();
        history.push('/signin');
    }

    async function onSignUp() {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        alert(JSON.stringify(user));
        try {
            setLoading(true);
            await signUp(user)
            setLoading(false);
            setToastState({ open: true, severity: SEVERITY.success, message: "Registered Successfully.", onClose: handleClose })
        } catch (exception) {
            setLoading(false);
            setToastState({ open: true, severity: SEVERITY.error, message: exception.message, onClose: handleClose })
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                disabled={loading}
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={(event) => setFirstName(event.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                disabled={loading}
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={(event) => setLastName(event.target.value)}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                disabled={loading}
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={(event) => setEmail(event.target.value)}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                disabled={loading}
                                label="Password"
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                        onClick={onSignUp}
                    >
                        {loading ? "Please wait..." : "Sign Up"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" onClick={goToSignIn} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            <Toast open={toastState.open} message={toastState.message} severity={toastState.severity} onClose={toastState.onClose} />
        </Container>
    );
}
export default SignUp;