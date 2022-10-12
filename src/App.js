import { useState } from "react"
import "./App.css"
import DogBreed from './DogBreed'

function App() {
  const [newBreed, setNewBreed] = useState("")
  const [dogBreeds, setDogBreeds] = useState(['Husky', 'Chihuahua'])
  const [favoriteBreed, setFavoriteBreed] = useState('Undetermind')

  const handleChange = element => {
    element.preventDefault()
    setNewBreed(element.target.value)
  }
  const handleSubmit = element => {
    element.preventDefault()
    setDogBreeds([...dogBreeds, newBreed])
    setNewBreed("")
  }
  const updateFavorite = newFav => {
    setFavoriteBreed(newFav)
  }

  console.log(dogBreeds)

  return (
    <div className="App">
      <p>My favorite breed is {favoriteBreed}</p>
      <form onSubmit={element => handleSubmit(element)}>
        <label>New dog breed</label>
        <input value={newBreed} onChange={element => handleChange(element)} />
      </form>
      <DogBreed dogBreed={dogBreeds[0]} updateFavorite={updateFavorite}/>
      <DogBreed dogBreed={dogBreeds[1]} updateFavorite={updateFavorite}/>

    </div>
  )
}

export default App