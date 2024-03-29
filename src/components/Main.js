import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'
const Main = () => {
    const [people, setPeople] = useState(null)
    
    const URL = "https://mern-222-backend.herokuapp.com/people/"

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data)
    }
    const createPeople = async (person) => {
        //post to create
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(person)
        })
        //update list of people
        getPeople()
    }
    const updatePerson = async (person, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person)
        })
        getPeople()
    }
    const deletePerson = async (id) => {
        console.log(id)
        await fetch(URL + id, {
            method: "DELETE"
        } )
        getPeople()
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Index
                        people={people}
                        createPeople={createPeople}/>} 
                        />
                <Route
                    path="/people/:id"
                    element={
                        <Show
                        people={people}
                        updatePerson={updatePerson}
                        deletePerson={deletePerson} />} 
                        />
            </Routes>
        </div>
    )
}
export default Main