import React from 'react';
import noImage from '../../assets/images/images.png';
import {apiUrl} from "../../constants";
import './PublicationImage.css';

const PublicationImage = (props) => {
    let image = noImage;
    if (props.image){
        image = apiUrl + '/uploads/'  +  props.image;
        return  <img className="img" src={image} alt={props.author}/>
    }else{
        return <p style={{"color" : "white", "fontSize" : "20px"}}>No image</p>
    }
};

export default PublicationImage;