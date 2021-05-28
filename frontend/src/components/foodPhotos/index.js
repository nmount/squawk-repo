import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFoodPhotos } from '../../store/foodPhotos';
import {deletefoodPhoto} from '../../store/foodPhotos';
import img from './img/img.png'
import './foodPhotos.css';

const FoodPhotos = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getFoodPhotos())
    },[dispatch])
    console.log('bomdiggtybrashsky');
    const foodPhotos = useSelector(state => state.foods);

    if(!foodPhotos.length) return null;
    else {
    return (
      <div className="foodPhotos">
        <div className="cardContainer">
          {foodPhotos?.map((photo) => (
            <div className="photoMap">
              <Link key={photo} to={`/foodPhotos/${photo.id}`}>
                <img className="card" src={photo.imageUrl} />
              </Link>
              <button value={photo.id} onClick={e => {dispatch(deletefoodPhoto(photo.id))}}>Delete</button>
            </div>
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
