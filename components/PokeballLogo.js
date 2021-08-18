import pokeballLogo from "../public/pokeball-logo.png";
import Image from "next/image";

const PokeballLogo = () => {
	return (
		<div
			style={{ zIndex: -10, top: -100, right: -100 }}
			className="absolute right-0 top-0 filter grayscale opacity-20"
		>
			<Image
				objectFit="contain"
				width={300}
				height={300}
				src={pokeballLogo}
				alt="Pokemon-logo"
			/>
		</div>
	);
};

export default PokeballLogo;