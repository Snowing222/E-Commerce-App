import React from 'react'
import { Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

import useStyles from './styles'


const Product = ({product, onAddToCart} )=> {
    const classes = useStyles()
    
    return (
        <Card className = {classes.root} >
            <CardMedia className = {classes.media} image = {product.media.source} title = {product.name} component = {Link} to = {product.id}/>

            <CardContent>
                <div className = {classes.cardContent}>
                    <div>
                        {product.name}
                    </div>
                    <div>
                        {product.price.formatted_with_symbol}
                    </div>
                    <div style = {{paddingTop: "10px"}}>
                    <Button className = {classes.button} size = "small" type = "button" variant ="contained" color = "secondary" onClick = {()=>onAddToCart(product.id, 1)}>Add to Cart</Button>
                    </div>
                </div>
                    
            </CardContent>

            {/* <CardActions disbleSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Add to Card" onClick = {()=>onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>    */}
        </Card>
    )
}

export default Product
