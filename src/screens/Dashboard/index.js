import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Drawer from "@material-ui/core/Drawer/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import queryString from "query-string";
import {fromJS, Map} from "immutable";

import {generateMockDataWithPrefix} from "../../resources/data";

import {CHANNEL, LINK} from "../../constants";
import styles from "./Dashboard.styles";

import ControlDeck from "../../components/ControlDeck";
import ChannelsDeck from "../../components/ChannelsDeck";

const loadLink = new Promise(resolve => {
    setTimeout(() => {
        resolve({
            id: "1",
            sourceId: "1-1",
            sourceName: "Source 1-1",
            destinationId: "2-10",
            destinationName: "Destination 2-10",
            locked: true,
            bandwidth: "330000",
            connected: true
        });
    }, 1000)
});

const loadCategories = new Promise(resolve => {
    setTimeout(() => {
        resolve({
            source: generateMockDataWithPrefix("source ", 5, 12),
            destination: generateMockDataWithPrefix("destination ", 3, 15)
        });
    }, 1000)
});


class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
        const {id} = queryString.parse(props.location.search);
        this.state = {
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
            source: null,
            sourcePath: null,
            destination: null,
            destinationPath: null
        };
        this.loadData(id);
        this.handleSource = this.handleChannelChanged(true);
        this.handleDestination = this.handleChannelChanged(false);
    }

/*
    static getChannelName = (categories, id) => {
        return "Channel name";
    };
*/

    loadData = id => {
        if (id) {
            Promise.all([loadLink, loadCategories])
                .then(responses => {
                    const link = Map(responses[0]);
                    const {source, destination} = responses[1];
                    // const sourceName = DashboardScreen.getChannelName(source, link.sourceId);
                    // const destinationName = DashboardScreen.getChannelName(destination, link.destinationId);
                    this.setState({
                        link,
                        source: fromJS(source),
                        destination: fromJS(destination)
                    });
                })
                .catch(error => console.log("Debug log: ", error.message));
        } else {
            loadCategories
                .then(response => this.setState({
                    source: fromJS(response.source),
                    destination: fromJS(response.destination)
                }))
                .catch(error => console.log("Debug log: ", error.message));
        }
    };

    handleChannelChanged = toSource => channel => this.setState(prevState => {
        let {link, source, sourcePath, destination, destinationPath} = prevState;
        let id = null;
        let name = null;
        let newPath = null;
        if (channel !== undefined && channel !== null) {
            id = channel.get(CHANNEL.ID);
            name = channel.get(CHANNEL.NAME);
            newPath = channel.get(CHANNEL.PATH);
        }
        if (toSource) {
            link = link.set(LINK.SOURCE_ID, id);
            link = link.set(LINK.SOURCE_NAME, name);
            if (sourcePath !== null) {
                source = source.setIn(sourcePath.push(CHANNEL.SELECTED), false);
            }
            if (newPath !== null) {
                source = source.setIn(newPath.push(CHANNEL.SELECTED), true);
            }
            sourcePath = newPath;
        } else {
            link = link.set(LINK.DESTINATION_ID, id);
            link = link.set(LINK.DESTINATION_NAME, name);
            if (destinationPath !== null) {
                destination = destination.setIn(destinationPath.push(CHANNEL.SELECTED), false);
            }
            if (newPath !== null) {
                destination = destination.setIn(newPath.push(CHANNEL.SELECTED), true);
            }
            destinationPath = newPath;
        }

        return {
            link,
            source,
            sourcePath,
            destination,
            destinationPath
        };
    });

    render() {
        const {classes} = this.props;
        const {link, source, destination} = this.state;

        return (
            <div className={classes.root}>
                <Drawer variant={"permanent"}
                        anchor={"left"}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper
                        }}>
                    <ControlDeck link={link}
                                 handleSourceDelete={this.handleSource}
                                 handleDestinationDelete={this.handleDestination}/>
                </Drawer>
                <main className={classes.contentContainer}>
                    <Grid container
                          className={classes.contentGrid}
                          spacing={16} justify={"center"} alignItems={"stretch"}>
                        <Grid item xs>
                            <ChannelsDeck categories={source}
                                          handleChannelClick={this.handleSource}/>
                        </Grid>
                        <Grid item xs>
                            <ChannelsDeck categories={destination}
                                          handleChannelClick={this.handleDestination}/>
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(DashboardScreen);