import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFoodPhotos } from '../../store/foodPhotos';
import img from './img/img.png'

const FoodPhotos = () =>{
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getFoodPhotos())
    },[dispatch])


    const foodPhotos = useSelector((state) => state.foodReducer);

    if(!foodPhotos) return null;
    else {
    return (
      <div className="foodPhotos">
        <div className="foodPhotoHub">
          {foodPhotos.map((photo) => (
            <Link key={photo} to={`/foodPhotos/${photo.id}`}>
              <img className="photo" src={photo.imageUrl} />
            </Link>
          ))}
        </div>
        <Link to="/add">
          <img className="uploadImage" src={`${img}`} />
        </Link>
      </div>
    );
};
};
export default FoodPhotos;
