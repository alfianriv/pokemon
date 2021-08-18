import { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList";

function Home(props) {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		refreshData()
	}, []);

    function refreshData(){
        const pokemonList = JSON.parse(localStorage.getItem("pokemon")) || {};
		let pokes = [];
		for (let key of Object.keys(pokemonList)) {
			pokes = pokes.concat(pokemonList[key]);
		}
		setPokemons(pokes);
    }

	return (
		<div className="flex flex-col px-5 pb-5 gap-5">
            <span className="text-center text-2xl font-bold">My Pokemons</span>
			{pokemons.map((val, i) => {
				return <PokemonList key={`pokemon-${i}`} index={i} {...val} refresh={() => refreshData()} />;
			})}
		</div>
	);
}

Home.layout = "default";

export default Home;
