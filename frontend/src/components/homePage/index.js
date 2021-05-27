import React from 'react';
import {getFoodPhotos} from '../../store/foodPhotos';
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";

export default function Home() {
    return (
        <div>
            Welcome to Squawk
            <div className="backgroundImage">
                <img src="https://wallpaperaccess.com/full/19034.jpg"></img>
            </div>
        </div>
    )
}
