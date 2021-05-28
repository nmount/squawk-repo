import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import foodReducer, {getSingleFoodPhoto} from "../../store/foodPhotos";

function FoodPhotoShow() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const foodPhotos = useSelector((state) => state?.foods.foodPhoto);
    // const foodPhotoCaption = useSelector((state) => state?.foodReducer)


    useEffect(()=>{
      dispatch(getSingleFoodPhoto(id))
    },[dispatch])

    if (!foodPhotos) return null;
    return (
      <div className='container'>
        <img className="card" src={foodPhotos?.imageUrl} />
      </div>
    );
};

export default FoodPhotoShow;
