import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import {Link, useLocation} from 'react-router-dom'

import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()

    
    return (
        <>
            <AppBar position = "fixed" className = {classes.appBar} color = "inherit" >
                <Toolbar>
                    <Typography component = {Link}  to = '/' variant = "h1" className={classes.title} color = "inherit">
                    SCENTED
                    </Typography>
                   
                    {(location.pathname !== '/checkout' || location.pathname !== '/cart') && (
                    <div className = {classes.button}>
                        <IconButton component = {Link} to ='/cart' aria-label = "Show cart items" color = "inherit">
                            <Badge badgeContent = {totalItems} color = "secondary"></Badge>
                                <ShoppingCart />
                        </IconButton>

                    </div>)}
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar
