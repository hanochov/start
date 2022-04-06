import React from "react";
import Button from '@mui/material/Button';
import { galleryActions } from "../../store/gallery-slice";
import { useDispatch } from "react-redux";

const GalleryView = () => {

    const dispatch = useDispatch();
    const changeColorBlueHandler = () =>{
        dispatch(galleryActions.changeColor('Blue'))
    }
    const changeColorGreenHandler = () =>{
        dispatch(galleryActions.changeColor('Green'))
    }

    return (
        <div>
          <h1>Gallery</h1>
          <Button variant="contained" onClick={changeColorBlueHandler}>Blue</Button>
          <Button variant="contained" color="success" onClick={changeColorGreenHandler}>Green</Button>

        </div>
      );
};

export default GalleryView;
