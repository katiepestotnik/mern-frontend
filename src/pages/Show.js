import { useParams, useNavigate } from "react-router-dom"
import { useState } from 'react'

const Show = ({ people, updatePerson, deletePerson }) => {
    //navigate user when button or submit
    const navigate = useNavigate()
    const { id } = useParams()
    const person = people.find((p) => p._id === id)
    //use found person to set state
   
    const [editForm, setEditForm] = useState(person)
    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updatePerson(editForm, id)
        navigate('/')

    }
    const removePerson = () => {
        deletePerson(id)
        navigate('/')
    }
    return (
            <div className="person">
                <h1>{person.name}</h1>
                <img src={person.image} alt={person.name}></img>
                <h2>{person.title}</h2>

            <button id="delete" onClick={removePerson}>DELETE</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={editForm.name}
                    placeholder={person.name}
                    name="name"
                />
                               <input
                    type="url"
                    onChange={handleChange}
                    value={editForm.image}
                    placeholder={person.image}
                    name="image"
                />
                               <input
                    type="text"
                    onChange={handleChange}
                    value={editForm.title}
                    placeholder={person.title}
                    name="title"
                />
                <input type="submit" value="UPDATE"/>
                </form>
                </div>
    )

}
export default Show