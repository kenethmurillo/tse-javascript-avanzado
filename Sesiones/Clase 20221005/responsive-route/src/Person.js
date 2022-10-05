import { useParams } from 'react-router-dom'
import people from './people'
import './Person.css'

const Person = () => {
  const { id } = useParams()
  const person = people.filter((p) => p.id === id)[0]

}

export default Person
