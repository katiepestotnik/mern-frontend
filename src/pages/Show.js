import { useParams } from "react-router-dom"

const Show = ({ people, updatePerson }) => {
    const { id } = useParams()
    const person = people.find((p) => p._id === id)
    //use found person to set state
    const [editForm, setEditForm] = useState(person)
    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updatePerson(editForm)

    }


    return (
        <>
            <h1>{person.name}</h1>
            <img src={person.image} alt={person.name}></img>
            <h2>{person.title}</h2>
            <form onSubmit={handleSubmit}>

            </form>
        </>
    )

}
export default Show