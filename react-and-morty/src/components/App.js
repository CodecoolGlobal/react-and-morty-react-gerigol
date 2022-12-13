import "./App.css";
import Home from "./Home";
import CharacterList from "./CharacterList";
import LocationList from "./LocationList";
import useFetch from "../api/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const planetTest =
    "https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets";
  const { data: characters } = useFetch(
    "https://rickandmortyapi.com/api/character/?page="
  );
  const { data: locations } = useFetch(
    "https://rickandmortyapi.com/api/location/?page="
  );
  const { data: example } = useFetch(
    "https://private-anon-80febb1f68-starhub.apiary-mock.com/api/planets"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            characters && <CharacterList characters={characters.results} />
          }
        />
        <Route
          path="/locations"
          element={
            locations && <LocationList locations={locations.results} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;