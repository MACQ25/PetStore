import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link, Routes, Route, NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { List } from '@mui/material';


function HomePage(props){

    var pets = props.pets;
    console.log(pets)

    return(
        <div>
            <h1>Hello, this is a home page</h1>

            <h2>Pets</h2>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Animal</th>
                    <th>Description</th>
                    <th>Age</th>
                    <th>Price</th>
                </tr>
                {pets.map(pet => (
                    <tr key={pet.id}>
                    <td>{pet.id}</td> 
                    <td>{pet.animal}</td> 
                    <td>{pet.description}</td>
                    <td>{pet.age}</td>
                    <td>{pet.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}


export { HomePage }

