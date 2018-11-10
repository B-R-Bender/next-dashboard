import React from "react";
import PropTypes from "prop-types";
import {Map} from "immutable";
import _ from "lodash/string";
import ListUI from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Chip from "@material-ui/core/Chip/Chip";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import Forward from "@material-ui/icons/ArrowForward";
import Back from "@material-ui/icons/ArrowBack";
import Delete from "@material-ui/icons/Delete";
import LockOpen from "@material-ui/icons/LockOpen";
import Lock from "@material-ui/icons/Lock";
import Bandwidth from "@material-ui/icons/AssessmentOutlined";
import Connect from "@material-ui/icons/SettingsInputComponentTwoTone";
import Disconnect from "@material-ui/icons/SettingsInputComponent";
import Adjust from "@material-ui/icons/Adjust";
import More from "@material-ui/icons/MoreHoriz";

import {MOCK_FUNCTION, LINK} from "../../constants"

const handleName = name => {
    let truncatedName = name;
    let tooltip = "No channel selected";
    if (name !== null) {
        truncatedName = _.truncate(name, {length: 25});
        tooltip = name;
    }
    return {truncatedName, tooltip}
};

const ControlDeck = props => {
    const {link, handleSourceDelete, handleDestinationDelete, handleConnect} = props;
    const {
        truncatedName: sourceName,
        tooltip: sourceTooltip
    } = handleName(link.get(LINK.SOURCE_NAME));
    const {
        truncatedName: destinationName,
        tooltip: destinationTooltip
    } = handleName(link.get(LINK.DESTINATION_NAME));
    const locked = link.get(LINK.LOCKED);
    const bandwidth = link.get(LINK.BANDWIDTH);
    const connected = link.get(LINK.CONNECTED);

    return (
        <ListUI>
            <ListItem key={"source"}>
                <ListItemIcon><Back/></ListItemIcon>
                <Tooltip title={sourceTooltip} placement={"bottom"}>
                    <Chip clickable
                          color={"primary"}
                          variant={sourceName === null ? "outlined" : "default"}
                          label={sourceName === null ? "Source channel" : sourceName}/>
                </Tooltip>
                <ListItemSecondaryAction>
                    <IconButton disabled={sourceName === null}
                                onClick={() => handleSourceDelete()}>
                        <Delete/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem key={"destination"}>
                <ListItemIcon><Forward/></ListItemIcon>
                <Tooltip title={destinationTooltip} placement={"bottom"}>
                    <Chip clickable
                      color={"primary"}
                      variant={destinationName === null ? "outlined" : "default"}
                      label={destinationName === null ? "Destination channel" : destinationName}/>
                </Tooltip>
                <ListItemSecondaryAction>
                    <IconButton disabled={destinationName === null}
                                onClick={() => handleDestinationDelete()}>
                        <Delete/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            <ListItem key={"locked"}>
                <ListItemIcon>{locked ? <Lock/> : <LockOpen/>}</ListItemIcon>
                <ListItemText primary={locked ? "Locked" : "Unlocked"}/>
            </ListItem>
            <ListItem button={bandwidth !== null} key={"bandwidth"}>
                <ListItemIcon><Bandwidth/></ListItemIcon>
                <ListItemText primary={bandwidth === null ? "No bandwidth data" : bandwidth}/>
            </ListItem>

            <Divider/>

            <ListItem button key={"connect"} onClick={handleConnect}>
                <ListItemIcon>{connected ? <Disconnect/> : <Connect/>}</ListItemIcon>
                <ListItemText primary={connected ? "Disconnect" : "Connect"}/>
            </ListItem>

            <Divider/>

            <ListItem button key={"adjust source"}>
                <ListItemIcon><Adjust/></ListItemIcon>
                <ListItemText primary={"Adjust source"}/>
            </ListItem>
            <ListItem button key={"adjust destination"}>
                <ListItemIcon><Adjust/></ListItemIcon>
                <ListItemText primary={"Adjust destination"}/>
            </ListItem>

            <Divider/>

            <ListItem button key={"select"}>
                <ListItemIcon><More/></ListItemIcon>
                <ListItemText primary={"Select"}/>
            </ListItem>
        </ListUI>
    );
};

ControlDeck.propTypes = {
    link: PropTypes.instanceOf(Map),
    handleSourceDelete: PropTypes.func,
    handleDestinationDelete: PropTypes.func,
    handleConnect: PropTypes.func
};

ControlDeck.defaultProps = {
    link: Map({
        id: null,
        sourceId: null,
        sourceName: null,
        destinationId: null,
        destinationName: null,
        locked: false,
        bandwidth: null,
        connected: false
    }),
    handleSourceDelete: MOCK_FUNCTION,
    handleDestinationDelete: MOCK_FUNCTION,
    handleConnect: MOCK_FUNCTION
};

export default ControlDeck;