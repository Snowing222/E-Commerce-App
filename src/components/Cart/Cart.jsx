import React from 'react'
import { Container, Button, Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles()

    const EmptyCart = () => (
        <div  style = {{fontFamily: 'Playfair Display', paddingLeft: "5px"}}>
            You have no items in your shopping cart
            <p> <Link to ="/" className = {classes.link}>Start adding some!</Link></p>
           

        </div>
    )

    const FilledCart = () =>(
        <>
            <Grid container spacing = {3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs = {12} sm = {3} key = {item.id}>
                        <CartItem item = {item} onUpdateCartQty = {handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className = {classes.cardDetails}>
                <div>Subtotal: {cart.subtotal.formatted_with_symbol}</div>
                <div>
                    <Button className = {classes.emptyButton} size = "large" type = "button" variant ="contained" color = "secondary" onClick = {handleEmptyCart}>Empty Cart</Button>
                    <Button component = {Link} to = '/checkout' className = {classes.checkoutButton} size = "large" type = "button" variant ="primary" color = "secondary">Check Out</Button>
                </div>
            </div>
        </>
    )
    if(!cart.line_items) return "Loading..."
    return (
        <Container>
            <div className = {classes.toolbar} />
            <div className = {classes.title}  gutterBottom>
                Your Shopping Cart
            </div>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart
