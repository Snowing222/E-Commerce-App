import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core' 
import { AddShoppingCart } from "@material-ui-icons"

const Product = ({product}) => {
    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = '' title = {product.name} />
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = "h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant = "h5" >
                        {product.price}
                    </Typography>
                     <Typography variant = "h2" color="textSecondart">
                        {product.description}
                    </Typography>
                    
                </div>

            </CardContent>
            <CardActions disbleSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Add to Card">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

            
        </Card>
    )
}

export default Product
