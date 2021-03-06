import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = ( {item, onUpdateCartQty, onRemoveFromCart} ) => {
    const classes = useStyles()

    return (
        <Card>
            <CardMedia image = {item.media.source} alt = {item.name} className = {classes.media}/>
            <CardContent className = {classes.cardContent}>
                <div variant = 'h6'>{item.name}</div>
                <div variant = 'h6'>{item.line_total.formatted_with_symbol}</div>
            </CardContent>
            <CardActions className = {classes.CardActions}>
                <div className = {classes.cardActions}>
                    <Button type = "button" size = "small" onClick = {()=>onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
  
                    <typography>{item.quantity}</typography>
                    <Button type = "button" size = "small" onClick = {()=>onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant = "contained" type = "button" color = "secondary" onClick = {()=>onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
            
        </Card>
    )
}

export default CartItem
