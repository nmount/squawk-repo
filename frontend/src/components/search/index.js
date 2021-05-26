import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodPhotos } from "../../store/foodPhotos";

const Search = () => {
  const dispatch = useDispatch();
  const foodPhotos = useSelector((state) => Object.values(state.foodPhoto));



  return (
    <div className='resultOuter'>
      <div className="foodPhotoContainer">
        {foodPhotos.map((image) => (
          <Link key={image} to={`/foodPhoto/${image.id}`}>
            <img className="image" src={image.imageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
