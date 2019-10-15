import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppInfoTable from './AppInfoTable'
import IntegrationInfoTable from './IntegrationInfoTable'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="App One"  {...a11yProps(0)} />
                    <Tab label="App Two"  {...a11yProps(1)} />
                    <Tab label="App Three"  {...a11yProps(2)} />
                    <Tab label="App Four"  {...a11yProps(3)} />
                    <Tab label="App Five"  {...a11yProps(4)} />
                    <Tab label="App Six" {...a11yProps(5)} />
                    <Tab label="App Seven" {...a11yProps(6)} />
                    <Tab label="App Eight" {...a11yProps(7)} />
                    <Tab label="App Nine" {...a11yProps(8)} />
                    <Tab label="App Ten" {...a11yProps(9)} />
                    <Tab label="App Eleven" {...a11yProps(10)} />
                    <Tab label="App Twelve" {...a11yProps(11)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
      </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                <AppInfoTable />
                <IntegrationInfoTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>
            <TabPanel value={value} index={4}>
                <AppInfoTable />
                <IntegrationInfoTable />
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
      </TabPanel>
        </div>
    );
}
