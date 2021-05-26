import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getSingleFoodPhoto} from "../../store/foodPhotos";

function FoodPhotoShow() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const foodPhotos = useSelector((state) => state?.foodReducer.foodPhoto);
  console.log("FOOD PHOTOS MOTHERFUCKAAAAHH", foodPhotos)


    useEffect(()=>{
      dispatch(getSingleFoodPhoto(id))
    },[dispatch])


    return (
      <div className='container'>
        <img className="selectedPhoto" src={foodPhotos?.imageUrl} />
      </div>
    );
};

export default FoodPhotoShow;
