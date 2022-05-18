import React, {useState, useEffect} from 'react';
import ExercisesList from '../components/ExercisesList';

const HomePage = () => {
   const [exercises, setExercises] = useState([]);
   useEffect(() => {
     async function fetchExercises()
     {
        try {
            const response = await fetch('http://localhost:3000/exercises');
            const fetchedExercises= await response.json();
            console.log('here are the exercises that we fetched', fetchedExercises) ;
            setExercises(fetchExercises);
        } catch (error) {
            console.log(error);
        }
     }
     fetchExercises();
   }, []);

    return (
        <div>
            <ExercisesList exercises = {exercises}/>
        </div>
    );
};

export default HomePage;