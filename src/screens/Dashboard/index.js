import React, {Fragment} from "react";

import {generateMockDataWithPrefix} from "../../resources/data";

import ControlDeck from "../../components/ControlDeck";
import FilesDeck from "../../components/FilesDeck";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import Chip from "@material-ui/core/Chip/Chip";
import Delete from "@material-ui/icons/Delete";
import Right from "@material-ui/icons/ArrowRight";
import Left from "@material-ui/icons/ArrowLeft";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import LockOpen from "@material-ui/icons/LockOpen";
import Lock from "@material-ui/icons/Lock";

class DashboardScreen extends React.Component {

    loadData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    source: generateMockDataWithPrefix("source ", 5, 12),
                    destination: generateMockDataWithPrefix("destination ", 3, 15)
                });
            }, 1000)
        })
    };

    render() {
        return (
            <Fragment>
                <Drawer variant="permanent"
                        anchor="right">
                    <div>
                        <Chip icon={<Delete/>}
                              style={{margin: "0.5em"}}
                              label="Source Item Name"
                              clickable
                              color="primary"
                              onDelete={() => console.log("Debug log: \n", "delete")}
                              deleteIcon={<Right/>}
                        />
                    </div>
                    <div>
                        <Chip icon={<Left/>}
                              style={{margin: "0.5em"}}
                              label="Destination Item Name"
                              clickable
                              color="primary"
                              onDelete={() => console.log("Debug log: \n", "delete")}
                              deleteIcon={<Delete/>}
                        />
                    </div>
                    <Divider/>
                    <List>
                        <ListItem button key={1}>
                            <ListItemIcon>{<InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button key={1}>
                            <ListItemIcon><LockOpen/></ListItemIcon>
                            <ListItemText primary={"Locked status"}/>
                        </ListItem>
                        <ListItem button key={2}>

                            <ListItemText primary={`bandwidth ${330000}`}/>
                        </ListItem>
                    </List>
                </Drawer>
                <Grid container direction={"column"} spacing={16} style={{flexGrow: 1, padding: "1em"}}>
                    <Grid item xs={12}>
                        <ControlDeck/>
                    </Grid>
                    <Grid item container
                          spacing={16}
                          justify={"center"} alignItems={"stretch"}
                          style={{flexGrow: 1}}>
                        <Grid item xs>
                            <Paper style={{height: "100%"}}/>
                        </Grid>
                        <Grid item xs>
                            <Paper style={{height: "100%"}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default DashboardScreen;