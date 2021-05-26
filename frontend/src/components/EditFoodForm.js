import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFood } from '../store/foods';

const EditFoodForm = ({ foods, hideForm }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(foods.name);

  const updateName = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...foods,
      name,
    };

    const updatedFood = await dispatch(updateFood(payload));
    if (updatedFood) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edit-form-holder centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <button type="submit">Update Food</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditFoodForm;
