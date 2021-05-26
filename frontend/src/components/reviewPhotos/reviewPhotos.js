import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getReviewPhotos } from '../../store/reviewPhotos';
import styles from './reviewPhotos.css';
import img from './image/upload.png';

const reviewPhotos = () =>{
    const dispatch = useDispatch();
    const reviewPhotos = useSelector((state)=>Object.values(state.reviewPhoto));

    useEffect(()=>{
        dispatch(getReviewPhotos())
    },[dispatch])


    return (
      <div className="reviewPhotos">
        <Link to="/add">
          <img className="uploadImage" src={`${img}`} />
        </Link>
        <div className="reviewPhotoHub">
          {reviewPhotos.map((photo) => (
            <Link key={photo} to={`/reviewPhotos/${photo.id}`}>
              <img className="photo" src={photo.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default reviewPhotos;
