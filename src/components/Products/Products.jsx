import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: "Running shoes.", price:"$10", image: "https://i.ibb.co/9y9SVVK/Capture.jpg" },
    {id: 1, name: 'Macbook', description: "Apple Macbook.", price: "$5", image:"https://i.ibb.co/x5rjcb5/image.png"},
]

const Products = () => {
    const classes = useStyles()
    return (
        <main className = {classes.content}>
            <div className = {classes.content}/>
            <Grid container justify = "center" spacing = {4}>
                {products.map(product => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {4} large = {3}>
                        <Product product = {product}/>
                    </Grid>
                ))}

            </Grid>
            
        </main>
    )
}

export default Products
