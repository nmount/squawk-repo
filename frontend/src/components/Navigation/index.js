import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import ProfileButton from "./ProfileButton";
// import styles from "./Navigation.css";
import {searchFoodPhoto} from '../../store/foodPhotos';
import { useHistory } from "react-router-dom";
import search from './image/search.png';


function Navigation({ isLoaded }) {
  const [searchContent, setSearchContent] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <Link className="links" to="/login">
          Log In &nbsp;
        </Link>
        <Link className="links" to="/signup">
          Sign Up
        </Link>
        <Link className="links" to="/foodPhotos">
          Foods Page
        </Link>
      </>
    );
  }
  const handleClick=async(e)=>{
    e.preventDefault();
    await dispatch(searchFoodPhoto(searchContent))
    history.push('/searchResult')
  }

  return (
    <ul className="navBar">
      <li className="navContainer">
        <Link className="links" exact to="/">
          Squawk &nbsp;
        </Link>
        <span className='search'>
          <input
            type="text"
            name="searchContent"
            className="searchInput"
            placeholder="Search Keyword..."
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
          />
          <button
            type="button"
            className='searchSubmit'
            disabled={searchContent === ""}
            onClick={handleClick}
          ><img className='searchImage' src={`${search}`} /></button>
        </span>

        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
