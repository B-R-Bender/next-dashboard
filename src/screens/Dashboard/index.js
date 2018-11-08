import React from "react";

import {generateMockDataWithPrefix} from "../../resources/data";

import ControlDeck from "../../components/ControlDeck";
import FilesDeck from "../../components/FilesDeck";
import Grid from "@material-ui/core/Grid/Grid";

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
            <Grid container spacing={16} justify={"center"} alignItems={"stretch"} style={{flexGrow: 1, padding: "1em"}}>
                <Grid item xs>
                    <FilesDeck/>
                </Grid>
                <Grid item xl={1} lg={1} md={2} sm={2} xs={2}>
                    <ControlDeck/>
                </Grid>
                <Grid item xs>
                    <FilesDeck/>
                </Grid>
            </Grid>
        );
    }
}

export default DashboardScreen;