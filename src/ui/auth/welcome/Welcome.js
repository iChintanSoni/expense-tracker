import logo from './../../../logo.svg';
import { Typography } from "@material-ui/core";
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="Welcome">
            <header className="Welcome-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <Typography variant="h3">
                    Expense Tracker
                    </Typography>
                <br />
                <Typography variant="subtitle1">
                    A smart expense tracking tool
                    </Typography>
            </header>
        </div>
    );
}

export default Welcome