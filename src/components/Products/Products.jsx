import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product'
import useStyles from './styles'
import Banner_bs from './Banner_bs'
import YoutubeEmbed from './YoutubeEmbed'


const Products = ( {products, onAddToCart} ) => {
    const classes = useStyles()
    return (
        <>
        <div className = {classes.toolbar} />
        <Banner_bs /> 
        <div height = "600px" />
        <main className = {classes.root}> 
            <div className = {classes.content}/>
            <Grid container justifyContent = "center" spacing = {2}>
                {products.map(product => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {3} large = {3}>
                        <Product product = {product} onAddToCart ={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
            
        </main>
        <YoutubeEmbed embedId="1CRihg1X89A" />
        </>

    )
}

export default Products
