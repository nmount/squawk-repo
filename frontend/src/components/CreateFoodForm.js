// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createFood } from '../store/foods';
// import { useHistory } from 'react-router-dom';

// const CreateFoodForm = ({ hideForm }) => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [name, setName] = useState('');

//   const updateName = (e) => setName(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       name
//     };

//     const food = await dispatch(createFood(payload));
//     if (food) {
//       history.push(`/foods/${food.id}`);
//       hideForm();
//     }
//   };

//   const handleCancelClick = (e) => {
//     e.preventDefault();
//     hideForm();
//   };

//   return (
//     <section className="new-form-holder centered middled">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={updateName} />
//         <button type="submit">Create new Food</button>
//         <button type="button" onClick={handleCancelClick}>Cancel</button>
//       </form>
//     </section>
//   );
// };

// export default CreateFoodForm;
