import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/getter";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from 'next/link'

function Home(props) {
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(40);
	const [hasMore, setHasMore] = useState(true);

	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit: limit,
			offset: offset,
		},
	});

	useEffect(() => {
		if (data) {
			if (data.pokemons.results.length > 0) {
				setPokemons([...pokemons, ...data.pokemons.results]);
			} else {
				setHasMore(false);
			}
		}
	}, [data]);

	return (
		<div className="flex flex-col px-5 pb-5">
			<InfiniteScroll
				className="grid xl:grid-cols-4 grid-cols-1 gap-5"
				dataLength={pokemons.length}
				next={() => setOffset(pokemons.length)}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
			>
				{pokemons.map((val, i) => {
					return (
						<Link key={`pokemon-${i}`} passHref href={`/pokemon/${val.name}`}>
							<a>
								<PokemonList index={i} {...val} />
							</a>
						</Link>
					);
				})}
			</InfiniteScroll>
		</div>
	);
}

Home.layout = "default";

export default Home;
