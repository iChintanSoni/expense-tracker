import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { Favorite, List, Person } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        paddingBottom: 56,
    },
    bottomNav: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
});


const Dashboard = () => {

    const classes = useStyles();

    // Forgot Password State
    const [navigation, setNavigation] = useState(0);

    return (
        <Container component="main" maxWidth="xs">
            {/* <Switch>
                <Route path="/" component={Creds} exact />
                <Route path="/favorites" component={Favorites} />
                <Route path="/creds" component={Creds} />
                <Route path="/account" component={Account} />
            </Switch> */}
            <Paper elevation={3} className={classes.bottomNav}>
                <BottomNavigation
                    showLabels
                    value={navigation}
                    onChange={(event, newValue) => {
                        setNavigation(newValue);
                    }}
                >
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Creds" icon={<List />} />
                    <BottomNavigationAction label="Account" icon={<Person />} />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default Dashboard;