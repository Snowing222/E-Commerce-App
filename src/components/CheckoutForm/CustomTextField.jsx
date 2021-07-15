import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({name, label, required}) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs = {12} sm={6}>
        <Controller
        defaultValue =''
        name={name}
        control={control}
        render={({ field }) => ( 
                <TextField {...field} label={label} required={required}/>)}
        />
     
            
        </Grid>
    
    )
}

export default FormInput
