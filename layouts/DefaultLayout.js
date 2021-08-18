import TabBottom from "../components/TabBottom";
import Image from "next/image";
import pokemonLogo from "../public/pokemon-logo.png";
import pokeballLogo from "../public/pokeball-logo.png";

const DefaultLayout = ({ children }) => {
	return (
		<div className="flex flex-col overflow-x-hidden relative">
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
			<div className="flex flex-col items-center p-5">
				<Image
					objectFit="contain"
					width={500}
					height={100}
					src={pokemonLogo}
					alt="Pokemon-logo"
				/>
			</div>
			{children}
			<TabBottom></TabBottom>
		</div>
	);
};

export default DefaultLayout;
