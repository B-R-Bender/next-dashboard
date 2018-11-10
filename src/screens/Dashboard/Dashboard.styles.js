const drawerWidth = 300;

export default theme => ({
    root: {
        display: 'flex',
        height: "100vh"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    contentGrid: {
        flexGrow: 1
    },
});