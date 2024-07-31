"use client"
import React, { useEffect, useState } from 'react';


const MealsData = () => {
    const [search, setSearch] = useState("a");
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);
    const handler = (e) => {
      //console.log(e.target.value);
      setSearch(e.target.value);
    };
    //console.log(search);
    const loadData = async () => {
      try {
          const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
            );
            const data = await res.json();
            //console.log(data.meals);
            setMeals(data.meals);
            setError('')
      } catch (error) {
          console.log(error)
          setError(error)
      }
    };
  //   if(meals.length ===0){
  //     return <h2>no meals found</h2>
  //   }
    useEffect(() => {
      loadData();
    }, [search]);
    //console.log(meals);
    return (
      <div>
        <input
          onChange={handler}
          type="text"
          className="input px-4 py-2 mx-2 border"
          placeholder="search"
        />
        <button className="btn bg-red-500 text-white px-4 py-2">Search</button>
        <div className="grid grid-cols-4 gap-6 border-2">
        {meals.length>0 && !error && meals?.map((meal) => (
          <div key={meal.id}>
              <h2>{meal.strMeal}</h2>
          </div>
        ))}
          {
              error &&  <h2>no meals found</h2>
          }
        </div>
      </div>
    );
  };

export default MealsData;