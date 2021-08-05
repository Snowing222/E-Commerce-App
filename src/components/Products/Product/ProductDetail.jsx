import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CardMedia, CardContent, Grid, Typography , Button} from '@material-ui/core';
import useStyles from './styles'

const ProductDetail = ({match, products, onAddToCart}) => {
    const productId = match.params.id
    const product = products.find(product => product.id === productId)
    const classes = useStyles()

    const renderContent = product ?  (
    <div classesName = {classes.detailRoot}>
    <div className = {classes.toolbar} />
    <Link className = {classes.beforeGrid} to = '/'>
    <ArrowBackIcon fontSize="small" />
    <div>
          back to home
    </div>
    </Link>
   
    <Grid container justifyContent = "center" spacing = {5} >
        <Grid item xs = {10} sm = {10} md = {5} large = {7}>
            <Grid container>
                <img src = {product.media.source} className = {classes.imageDetail} />
            </Grid>
        </Grid>
        
            
           
        <Grid className = {classes.imageContent} item xs = {10} sm = {10} md = {7} large = {4}>
            <Grid container direction ="column" style = {{height:"100%"}}>
                    <div style = {{fontSize: "22px",fontWeight:"bolder",paddingBottom: "8px"}}>
                        {product.name}
                    </div>
                    <div>
                        {product.price.formatted_with_symbol}
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} fontSize = {16} color="textSecondary" />
                    <div className = {classes.wrapper}>
                    <Button className = {classes.button} size = "large" type = "button" variant ="contained" color = "secondary" onClick = {()=>onAddToCart(product.id, 1)}>Add to Cart</Button>
                    </div>
                   
            </Grid>
        </Grid>

    </Grid>
    </div>
    ):null
   
    return (
        <>
         <div className = {classes.toolbar} />
    
        {renderContent}
         
        </>

           
        
    )
}

export default withRouter(ProductDetail)
