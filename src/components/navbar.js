import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { AppBar, Toolbar, Badge, Typography } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
const Navbar = () => {
    const { todos } = useContext(TodoContext)

    return (
        <Badge badgeContent={todos.length} color="secondary" />

    )
}

export default Navbar