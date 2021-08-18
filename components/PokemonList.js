import Image from "next/image";

const PokemonList = props => {
	const pokemonList = JSON.parse(localStorage.getItem("pokemon")) || {};

	const random_colors = [
		"bg-red-400",
		"bg-blue-400",
		"bg-yellow-400",
		"bg-green-400",
		"bg-indigo-400",
		"bg-purple-400",
		"bg-pink-400",
	];

	const random = () => {
		return random_colors[props.index % random_colors.length];
	};

    const remove = (pokemon) => {
        let index = pokemonList[pokemon.name].findIndex(val => val.nickname == pokemon.nickname)
        pokemonList[pokemon.name].splice(index, 1);
        localStorage.setItem('pokemon', JSON.stringify(pokemonList))
        props.refresh()
    }

	return (
		<div
			className={`flex items-center justify-between p-5 rounded-xl ${random()}`}
		>
			<div className="flex flex-col">
				<span className="text-white font-bold text-2xl capitalize">
					{props.name}
				</span>
				{props.nickname ? (
					<span className="text-xs text-white">{props.nickname}</span>
				) : (
					<span className="text-xs text-white">
						<span className="font-bold">
							{pokemonList[props.name]
								? pokemonList[props.name].length
								: 0}
						</span>{" "}
						Owned
					</span>
				)}
			</div>
			<div className="flex items-center gap-2">
				<Image
					width={50}
					height={50}
					src={props.image}
					alt={props.name}
				/>
				{props.nickname ? (
					<button
						onClick={() => remove(props)}
						style={{ height: 30, width: 30 }}
						type="button"
						className="flex items-center justify-center bg-red-600 p-2 rounded text-white"
					>
						<i className="las la-trash"></i>
					</button>
				) : null}
			</div>
		</div>
	);
};

export default PokemonList;
