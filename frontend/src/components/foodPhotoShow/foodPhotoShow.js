import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFoodPhoto, getFoodPhotos } from "../../store/foodPhotos";
import styles from "./foodPhotoShow.css";

export default function foodPhotoShow() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const foodPhotos = useSelector((state) => Object.values(state.foodPhoto));
    const displayPhotoUrl= foodPhotos[0]



    useEffect(()=>{
      dispatch(getSingleFoodPhoto(id))
    },[dispatch])


    return (
      <div className='container'>
        <img className="selectedPhoto" src={displayPhotoUrl.source} />
      </div>
    );
};
