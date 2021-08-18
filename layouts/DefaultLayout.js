import TabBottom from "../components/TabBottom";
import PokeballLogo from "../components/PokeballLogo";
import PokemonLogo from "../components/PokemonLogo";

const DefaultLayout = ({ children }) => {
	return (
		<div className="flex flex-col overflow-x-hidden relative">
			<PokeballLogo></PokeballLogo>
			<PokemonLogo></PokemonLogo>
			{children}
			<TabBottom></TabBottom>
		</div>
	);
};

export default DefaultLayout;
