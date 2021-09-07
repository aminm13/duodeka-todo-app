import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Button, Box, TextField, CardContBoxent } from '@material-ui/core';
import { sizing } from '@material-ui/system';

const NewTodo = () => {
    const { dispatch } = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', todo: { title, description } });
        setTitle('')
        setDescription('')
    }
    return (
        <form onSubmit={handleSubmit} >
            <Box width="85%">
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="outlined-basic" helperText="New Task Title." variant="outlined" value={title}
                    onChange={(e) => setTitle(e.target.value)} required />
            </Box>
            <Box width="85%">
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="outlined-basic" variant="outlined" helperText="Task Description." value={description}
                    onChange={(e) => setDescription(e.target.value)} required />
            </Box>
            <Button ariant="contained" color="secondary" type="submit" >Add New Task </Button>
        </form>

    )
}

export default NewTodo