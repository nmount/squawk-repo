import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAdditive } from '../store/additive';

const EditPokemonForm = ({ additiveId, hideForm }) => {
  const additive = useSelector(state => state.additives[additiveId]);
  const dispatch = useDispatch();

  const [ingredient, setIngredient] = useState(additive.ingredient);

  const updateIngredient = (e) => setIngredient(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...additive,
      ingredient
    };

    const updatedAdditive = await dispatch(updateAdditive(payload));
    if (updatedAdditive) {
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
          placeholder="Ingredient"
          value={ingredient}
          onChange={updateIngredient} />
        <button type="submit">Update Additive</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditPokemonForm;
