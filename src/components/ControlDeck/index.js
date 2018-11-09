import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Lock from "@material-ui/icons/Lock";
import LockOpen from "@material-ui/icons/LockOpen";
import Disconnect from "@material-ui/icons/SettingsInputComponent";
import Connect from "@material-ui/icons/SettingsInputComponentTwoTone";
import Right from "@material-ui/icons/ArrowRight";
import Left from "@material-ui/icons/ArrowLeft";
import Delete from "@material-ui/icons/Delete";
import More from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";

import styles from "./ControlDeck.styles";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Typography from "@material-ui/core/Typography/Typography";
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";

class ControlDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.container}>
                <div className={classes.contentContainer}>
                    <div style={{width: "80%", display: "flex"}}>
                        <div style={{width: "2em"}}>
                            <IconButton>
                                <More/>
                            </IconButton>
                        </div>
                        <div style={{flexGrow: 1, display: "flex", justifyContent: "center"}}>
                            <Chip icon={<Delete/>}
                                  style={{margin: "0 0.5em"}}
                                  label="Source Item Name"
                                  clickable
                                  color="primary"
                                  onDelete={() => console.log("Debug log: \n", "delete")}
                                  deleteIcon={<Right/>}
                            />

                            <Chip icon={<Left/>}
                                  style={{margin: "0 0.5em"}}
                                  label="Destination Item Name"
                                  clickable
                                  color="primary"
                                  onDelete={() => console.log("Debug log: \n", "delete")}
                                  deleteIcon={<Delete/>}
                            />
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "20%"}}>
                        <FormControlLabel label="Locked status"
                                          disabled
                                          control={
                                              <Checkbox icon={<LockOpen/>} checkedIcon={<Lock/>} value="checkedH"/>
                                          }/>
                        <Button disableRipple variant={"extendedFab"} style={{marginBottom: "1em"}}>
                            {`bandwidth ${330000}`}
                        </Button>
                    </div>
                </div>
                <div className={classes.contentContainer}>
                    <Grid container spacing={8} justify={"space-around"}>
                        <Grid item xs>
                            <Button color={"primary"} variant={"contained"} className={classes.controlsButton}>
                                Connect
                                <Connect className={classes.connectIcon}/>
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant={"contained"} className={classes.controlsButton}>
                                Adjust source
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant={"contained"} className={classes.controlsButton}>
                                Adjust destination
                            </Button>
                        </Grid>
                    </Grid>
                </div>
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