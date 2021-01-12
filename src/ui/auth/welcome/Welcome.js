import logo from './../../../logo.svg';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to
                </p>
                <p>
                    Expense Tracker.
                </p>
            </header>
        </div>
    );
}
export default Welcome;