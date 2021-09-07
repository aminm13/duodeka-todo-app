import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    root: {
        paddingBottom: '16px'
    },
    title: {
        display: 'flex',

    },
    pos: {
        marginBottom: 12,
    },
});
const TodoDetails = ({ todo }) => {
    const classes = useStyles();

    const { dispatch } = useContext(TodoContext)
    return (
        <Box className={classes.root} >
            <CardContent>
                <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                    {todo.title}
                    <Button size="small" color="secondary" onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}><DeleteIcon /></Button>

                </Typography>

                <Typography variant="body2" component="p">
                    {todo.description}
                </Typography>
            </CardContent>

        </Box>

    );
}

export default TodoDetails;