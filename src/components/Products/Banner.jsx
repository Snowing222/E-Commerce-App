import React, {useState} from 'react'
import useStyles from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Divider } from '@material-ui/core';

import {images} from '../../Helpers/BannerData'

const Banner = () => {
    const classes = useStyles()
    const [currImg, setCurrImg] = useState(0)

    return (
        <>
        <div className = {classes.banner}>
            <div className = {classes.bannerinner} style = {{backgroundImage : `url(${images[currImg].img})`, width: "1335px", height: "570px"}}>
                <div className = {classes.left} onClick = {() => {
                    if(currImg === 0){
                        setCurrImg(images.length - 1)
                    }else{
                        setCurrImg(currImg - 1)
                    }
                }} >
                  <ArrowBackIosIcon style = {{fontSize:30}}/>
                </div>
                <div className = {classes.center} >
                </div>
                <div className = {classes.right} onClick = {() => {
                     if(currImg === images.length - 1){
                        setCurrImg(0)
                    }else{
                        setCurrImg(currImg + 1)
                    }
                }}>
                   <ArrowForwardIosIcon style = {{fontSize:30}}/>
                 </div>
            </div>
           
            <div classname = {classes.afterbanner}>
                <p className={classes.caption}>{images[currImg].subtitle}</p>
            </div>
            <Divider />
        </div>
        </>
    )
}

export default Banner
