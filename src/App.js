import React, {useState, useEffect} from 'react'
// import Products from './components/Products'
// import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/commerce'
import {Products, Navbar, Cart, Checkout, ProductDetail} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import './App.css'
import { Container } from '@material-ui/core';



const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('');



    const fetchProducts = async () =>{
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) =>{
        const {cart} = await commerce.cart.add(productId, quantity)
        setCart(cart)
    }

    const handleUpdateCartQty = async (lineItemId, quantity) =>{
        const {cart} = await commerce.cart.update(lineItemId, { quantity} )
        setCart(cart)
    }

    const handleRemoveFromCart = async (lineItemId) =>{
        const {cart} = await commerce.cart.remove(lineItemId);
        setCart(cart)
    }

    const handleEmptyCart = async ()=>{
        const {cart} = await commerce.cart.empty()
        setCart(cart)

    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      
          setOrder(incomingOrder);
       
          refreshCart();
     
        
        } catch (error) {
         
          setErrorMessage(error.data.error.message);
        }
      };

    useEffect(() =>{
        fetchProducts();
        fetchCart()
    },[])



    return (
        <Router>
          
            <Container style = {{overflow: "hidden"}}>
                <Navbar totalItems = {cart.total_items} />
                <Switch>
                    <Route exact path = "/">
                        <Products products = {products} onAddToCart = {handleAddToCart} />  
                    </Route>
                    
                    <Route exact path = '/cart'>
                    <Cart 
                    cart = {cart}  
                    handleRemoveFromCart = { handleRemoveFromCart}
                    handleEmptyCart = { handleEmptyCart }
                    handleUpdateCartQty = {handleUpdateCartQty}
                    />
                    </Route>
                    <Route exact path = '/checkout'>
                        <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>

                    <Route path = '/:id'>
                        <ProductDetail products = {products} onAddToCart = {handleAddToCart}/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App
