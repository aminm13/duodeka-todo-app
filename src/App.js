import React from 'react';
import Navbar from './components/navbar';
import NewTodo from './components/todoFrom';
import TodoList from './components/todoList';
import ToDoContextProvider from './context/TodoContext';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className="App">
      <ToDoContextProvider>
        <Grid container spacing={1} >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab label="Todo List " icon={<Navbar />} {...a11yProps(0)} >
            </Tab>
            <Tab {...a11yProps(1)} icon={<AddIcon />} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <TodoList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <NewTodo />
          </TabPanel>
        </Grid>
      </ToDoContextProvider>
    </div>
  );
}

export default App;


