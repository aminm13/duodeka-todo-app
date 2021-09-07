import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoDetails from './todoDetails';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const TodoList = () => {
    const { todos } = useContext(TodoContext)
    return todos.length ? (
        <Box width="85%">
            {todos.map(todo => {
                return (<TodoDetails todo={todo} key={todo.id} />)
            })}
        </Box>
    ) : (
        <Box width="85%">
            <CardContent>
                <Typography variant="p" component="p" color="textSecondary" gutterBottom >
                    No Item to show!
                </Typography>
            </CardContent>
        </Box>
    );
}

export default TodoList;
