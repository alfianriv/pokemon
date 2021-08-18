import client from "../../../graphql/apolloClient";
import { GET_POKEMON } from "../../../graphql/getter";
import Image from "next/image";
import LabelType from "../../../components/LabelType";
import Modal from "../../../components/Modal";
import numeral from "numeral";
import LoadingOverlay from "react-loading-overlay";
import { useState, useEffect } from "react";
import ModalFailed from "../../../components/ModalFailed";

const PokemonDetail = props => {
	const [catching, setCatching] = useState(false);
	const [modal, setModal] = useState(false);
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		console.log(modal)
	}, [modal])

	const onCatching = () => {
		setCatching(true);
		setTimeout(() => {
			setCatching(false);
			if(Math.random() < 0.5){
				setModal(true)
			}else{
				setFailed(true)
			}
		}, 2000);
	};

	return (
		<LoadingOverlay
			className={catching ? "overflow-y-hidden" : ""}
			active={catching}
			spinner
			text="Catching Pokemon"
		>
			<div className="h-screen flex flex-col bg-blue-400 gap-2">
				<div className="flex items-center p-10">
					<Image
						objectFit="cover"
						width={150}
						height={100}
						src={props.pokemon.sprites.front_default}
						alt={props.pokemon.name}
					/>
					<div className="flex flex-col capitalize">
						<span className="font-bold">
							#{("00000" + props.pokemon.id).slice(-5)}
						</span>
						<span className="font-bold text-xl text-white">
							{props.pokemon.name}
						</span>
						<div className="flex gap-2">
							{props.pokemon.types.map((val, i) => {
								return (
									<LabelType
										key={`type-${i}`}
										label={val.type.name}
									></LabelType>
								);
							})}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<button
						onClick={onCatching}
						className="px-5 py-2 bg-yellow-600 rounded font-bold text-white"
						type="button"
					>
						Catch
					</button>
				</div>
				<div className="h-full flex flex-col p-10 bg-white rounded-t-xl">
					<span className="text-xl font-bold">Pokedex Data</span>
					<table className="capitalize">
						<tr>
							<td width="30%">Species</td>
							<td>{props.pokemon.species.name}</td>
						</tr>
						<tr>
							<td>Height</td>
							<td>{`${numeral(props.pokemon.height / 10).format(
								"0.0"
							)}m`}</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>{`${numeral(props.pokemon.weight / 10).format(
								"0.0"
							)}kg`}</td>
						</tr>
					</table>
					<span className="text-xl font-bold mt-5">Moves</span>
					<div
						style={{ marginBottom: 50 }}
						className="grid grid-cols-2 capitalize gap-1"
					>
						{props.pokemon.moves.map((val, i) => {
							return (
								<span key={`move-${i}`}>
									{val.move.name.replace(/-/g, " ")}
								</span>
							);
						})}
					</div>
				</div>
				<Modal onClose={() => setModal(false)} open={modal} pokemon={{name: props.pokemon.name, image: props.pokemon.sprites.front_default}}></Modal>
				<ModalFailed onClose={() => setFailed(false)} open={failed} pokemon={props.pokemon.name}></ModalFailed>
			</div>
		</LoadingOverlay>
	);
};

PokemonDetail.layout = "detail";

export async function getServerSideProps({ params }) {
	const { data } = await client.query({
		query: GET_POKEMON,
		variables: {
			name: params.name,
		},
	});

	if (!data.pokemon.id) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			pokemon: data.pokemon,
		},
	};
}

export default PokemonDetail;
