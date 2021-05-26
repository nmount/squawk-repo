import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFoodPhotos } from '../../store/foodPhotos';
import styles from './foodPhotos.css';
import img from './image/upload.png';

const foodPhotos = () =>{
    const dispatch = useDispatch();
    const foodPhotos = useSelector((state)=>Object.values(state.foodPhoto));

    useEffect(()=>{
        dispatch(getFoodPhotos())
    },[dispatch])


    return (
      <div className="foodPhotos">
        <Link to="/add">
          <img className="uploadImage" src={`${img}`} />
        </Link>
        <div className="foodPhotoHub">
          {foodPhotos.map((photo) => (
            <Link key={photo} to={`/foodPhotos/${photo.id}`}>
              <img className="photo" src={photo.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default foodPhotos;
