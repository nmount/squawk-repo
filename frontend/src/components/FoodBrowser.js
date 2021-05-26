import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import FoodDetail from './FoodDetail';
import CreateFoodForm from './CreateFoodForm';
import Fab from './Fab';
import { getFood } from '../store/foods';

const FoodBrowser = () => {
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const foods = useSelector(state => {
    return state.foods.list.map(foodId => state.foods[foodId]);
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);

  if (!foods) {
    return null;
  }

  return (
    <main>
      <nav>
        <Fab hidden={showForm} onClick={() => setShowForm(true)} />
        {foods.map((food) => {
          return (
            <NavLink key={food.name} to={`/foods/${food.id}`}>
              <div
                className={
                  Number.parseInt(foodId) === food.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }
              >
                <div>
                  <div className="primary-text">{food.name}</div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
      {showForm ? (
        <CreateFoodForm hideForm={() => setShowForm(false)} />
      ) : (
        <Route path="/foods/:foodId">
          <FoodDetail/>
        </Route>
      )}
    </main>
  );
};

export default FoodBrowser;
