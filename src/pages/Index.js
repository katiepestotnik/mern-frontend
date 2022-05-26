import { Link } from 'react-router-dom'
import { useState } from 'react'

const Index = ({ people, createPeople }) => {
    //state to hodl form data
    const [form, setForm] = useState({
        name: '',
        image: '',
        title:''
    })
    //handleChange
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        createPeople(form)
        setForm({
                name: '',
                image: '',
                title:''
        })
    }

    const loaded = () => {
        return people.map((person => (
            <div
                key={person._id}
                className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3>

            </div>
        )))
    }
    const loading = () => {
        return(<h1>Loading</h1>)
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='NAME'
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="url"
                    name="image"
                    placeholder='IMAGE URL'
                    value={form.image}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder='TITLE'
                    value={form.title}
                    onChange={handleChange}
                />
                <input type="submit" value="ADD"/>
            </form>
            {people ? loaded() : loading()}
        </section>
    )
    

}
export default Index