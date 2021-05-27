import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFoodPhoto, getFoodPhotos } from '../store/foodPhotos';
import { useHistory } from 'react-router-dom';

const CreateFoodPhotoForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const userId = useSelector((state) => state.session.user.id);

  useEffect(() => {
    dispatch(getFoodPhotos());
  }, [dispatch]);

  const onSubmit = async e => {
    e.preventDefault();
    const data = {imageUrl, userId, caption}

    await dispatch(createFoodPhoto(data));
    history.replace('/foodPhotos');
  }

  return (
    <div className="main">
      <div className="createFoodPhotoDiv">
        <h2 className="foodPhotoTitle">Add A Food Photo</h2>
        <input
          type="text"
          placeholder="photo link..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>Caption</label>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Caption..."
        />
        <button className='createBtn' onClick={onSubmit}>Create</button>
      </div>
    </div>
  );
};

export default CreateFoodPhotoForm;
