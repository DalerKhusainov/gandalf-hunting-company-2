import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.component";
import Header from "./components/header/Header.component";
import CardList from "./components/card-list/CardList.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  console.log(monsters);

  const onSearchChange = (e) => {
    const newSeachField = e.target.value.toLocaleLowerCase();
    setSearchField(newSeachField);
  };

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField]);

  return (
    <>
      <Navbar />
      <Header onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </>
  );
}

export default App;
