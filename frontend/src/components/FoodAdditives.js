import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdditives } from "../store/additive";

const FoodAdditives = ({ food, setEditAdditiveId }) => {
  const additives = useSelector((state) => {
    if (!food.additives) return null;
    return food.additives.map(additiveId => state.additives[additiveId]);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditives(food.id));
  }, [dispatch, food.id]);

  if (!additives) {
    return null;
  }

  return additives.map((additive) => (
    <tr key={additive.id}>
      <td>{additive.ingredient}</td>
      {(
        <td className="centered">
          <button onClick={() => setEditAdditiveId(additive.id)}>
            Edit
          </button>
        </td>
      )}
    </tr>
  ));
};

export default FoodAdditives;
