import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

import styles from "./ControlDeck.styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";

class ControlDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Paper style={{background: "lightgray", height: "100%"}}>
                <Grid container justify="center" spacing={8} direction={"column"}>
                    <Grid item>
                        <Paper style={{height: 20}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 120}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 20}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 100}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 50}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 120}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 50}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 50}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 50}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: 50}}/>
                    </Grid>
                    <Grid item container spacing={8} justify={"space-around"} alignItems={"center"}>
                        <Grid item>
                            <Paper style={{width: 50, height: 150}}/>
                        </Grid>
                        <Grid item>
                            <Paper style={{width: 50, height: 150}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    };
}

ControlDeck.propTypes = {
    classes: PropTypes.object.isRequired
};

ControlDeck.defaultProps = {
    classes: {}
};

export default withStyles(styles)(ControlDeck);