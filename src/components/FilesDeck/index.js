import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./FilesDeck.styles";

import Directories from "./Directories";
import Files from "./Files";

class FilesDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container justify="center" spacing={16} direction={"column"}>
                <Grid item container spacing={8}>
                    <Paper style={{background: "cyan"}}>
                        <Typography variant={"h5"}>
                            Files
                        </Typography>
                        <Grid item container spacing={8}>
                            <Files/>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container spacing={8}>
                    <Paper style={{background: "antiquewhite"}}>
                        <Typography variant={"h5"}>
                            Directories
                        </Typography>
                        <Grid item container spacing={8}>
                        <Directories/>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    };
}

FilesDeck.propTypes = {
    classes: PropTypes.object.isRequired
};

FilesDeck.defaultProps = {
    classes: {}
};

export default withStyles(styles)(FilesDeck);