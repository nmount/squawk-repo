// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getOneFood } from '../store/foods';
// import FoodAdditives from './FoodAdditives';
// import EditFoodForm from './EditFoodForm';
// import EditAdditiveForm from './EditAdditiveForm';

// const FoodDetail = () => {
//   const { foodId } = useParams();
//   const food = useSelector(state => state.food[foodId]);
//   const dispatch = useDispatch();
//   const [showEditFoodForm, setShowEditFoodForm] = useState(false);
//   const [editAdditiveId, setEditAdditiveId] = useState(null);

//   useEffect(() => {
//     dispatch(getOneFood(foodId));
//     setShowEditFoodForm(false);
//     setEditAdditiveId(null);
//   }, [dispatch, foodId]);

//   let content = null;

//   if (editAdditiveId) {
//     content = (
//       <EditAdditiveForm food={food} additiveId={editAdditiveId} hideForm={() => setEditAdditiveId(null)} />
//     )
//   } else if (showEditFoodForm) {
//     content = (
//       <EditFoodForm food={food} hideForm={() => setShowEditFoodForm(false)} />
//     )
//   } else {
//     content = (
//       <div className="food-detail-lists">
//         <div>
//           <h2>Items</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Happiness</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               <FoodAdditives food={food} setEditAdditiveId={setEditAdditiveId} />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="food-detail">
//       <div className={`food-detail-image-background`}>
//         <div>
//           <h1 className="bigger">{food.name}</h1>
//           {(!showEditFoodForm) && (
//             <button onClick={() => setShowEditFoodForm(true)}>Edit</button>
//           )}
//         </div>
//       </div>
//       {content}
//     </div>
//   );
// };

// export default FoodDetail;
