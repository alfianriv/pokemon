import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
	query GetPokemons($limit: Int!, $offset: Int!) {
		pokemons(limit: $limit, offset: $offset) {
			results {
				name
				image
			}
		}
	}
`;

export const GET_POKEMON = gql`
	query GetPokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
            sprites {
                front_default
            }
			moves {
				move {
					name
				}
			}
			types {
				type {
					name
				}
			}
            species {
                name
            }
            height
            weight
		}
	}
`;
