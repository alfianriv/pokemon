import Image from "next/image";
import pokemonLogo from "../public/pokemon-logo.png";

const PokemonLogo = () => {
	return (
		<div className="flex flex-col items-center p-5">
			<Image
				objectFit="contain"
				width={500}
				height={100}
				src={pokemonLogo}
				alt="Pokemon-logo"
			/>
		</div>
	);
};

export default PokemonLogo;
