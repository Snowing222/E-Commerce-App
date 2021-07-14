import React, {useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'

import {commerce} from '../../lib/commerce'

import FormInput from './CustomTextField'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm()
    return (
        <>
            <Typography variant = 'h6' gutterButtom>Shipping Address</Typography>
            <FormProvider {...methods}> 
                <form onSubmit=''>
                    <Grid container spacing = {3}>
                        <FormInput name = 'firstName' label = 'First Name'  required/>
                        <FormInput name = 'lastName' label = 'Last Name'  required/>
                        <FormInput name = 'address' label = 'Address'  required/>
                        <FormInput name = 'email' label = 'Email'  required/>
                        <FormInput name = 'city' label = 'City'  required/>
                        <FormInput name = 'zipcode' label = 'Zipcode'  required/>
                    </Grid>
                    {/* <Grid item xs = {12} sm = {6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value = {} fullWidth onChange = {}>
                            <MenuItem key = {} value = {}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs = {12} sm = {6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value = {} fullWidth onChange = {}>
                            <MenuItem key = {} value = {}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs = {12} sm = {6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value = {} fullWidth onChange = {}>
                            <MenuItem key = {} value = {}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                </form>

            </FormProvider>
        </>
    )
}

export default AddressForm
