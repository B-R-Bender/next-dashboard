import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography/Typography";
import Chip from "@material-ui/core/Chip/Chip";

import {CATEGORY, CHANNEL, MOCK_FUNCTION} from "../../constants";
import styles from "./ChannelsDeck.styles";

const ChannelsDeck = props => {
    const {classes, categories, handleChannelClick} = props;

    if (categories === null) {
        return <Typography variant={"subtitle2"}>No categories available</Typography>
    }
    return (
        <Paper className={classes.container}>
            <div className={classes.organizer}>
                {categories.map(category => {
                    const id = category.get(CATEGORY.ID);
                    const name = category.get(CATEGORY.NAME);
                    const channels = category.get(CATEGORY.CHANNELS);

                    return (
                        <ExpansionPanel key={id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>{name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div>
                                    {channels.map(channel => {
                                        const id = channel.get(CHANNEL.ID);
                                        const name = channel.get(CHANNEL.NAME);
                                        const selected = channel.get(CHANNEL.SELECTED);

                                        return (
                                            <Chip key={id}
                                                  className={classes.channelChip}
                                                  clickable={!selected}
                                                  label={name}
                                                  color={selected ? "primary" : "default"}
                                                  onClick={() => handleChannelClick(channel)}/>
                                        );
                                    })}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );
                })}
            </div>
        </Paper>
    );
};

ChannelsDeck.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.instanceOf(List),
    handleChannelClick: PropTypes.func
};

ChannelsDeck.defaultProps = {
    classes: {},
    categories: null,
    handleChannelClick: MOCK_FUNCTION
};

export default withStyles(styles)(ChannelsDeck);