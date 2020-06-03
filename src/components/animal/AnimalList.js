import React, { useEffect, useState } from "react";
import AnimalManager from "../modules/AnimalManager";
import AnimalCard from "./AnimalCard";

const AnimalList = (props) => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return AnimalManager.getExpanded("employee").then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };

    // const getEmployee = async(id) => {
    //     let name =  await EmployeeManager.getOne(id)
    //     return name
    // }


    // Delete function. No return
    const deleteAnimal = async (id) => {
        await AnimalManager.delete(id)
        await AnimalManager.getAll().then(animalAPI => setAnimals(animalAPI))
    }

    // got the animals from the API on the component's first render
    useEffect(() => {
        getAnimals();
    }, []);

    // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (<>
        <section className="section-content">
            <button type="button" className="btn" onClick={() => { props.history.push("/animals/new") }}>Admit Animal</button>
        </section>
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} delete={deleteAnimal} animal={animal} {...props}/>)}
        </div>
    </>
    );
};
export default AnimalList