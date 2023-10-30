// query {
//   characters(page: 2, filter: { name: "rick" }) {
//     info {
//       count
//     }
//     results {
//       name
//     }
//   }
//   location(id: 1) {
//     id
//   }
//   episodesByIds(ids: [1, 2]) {
//     id
//   }
// }

//name, location, status, origin, image


import {gql} from "@apollo/client";

export const API = 'https://rickandmortyapi.com/graphql'

export const charactersQuery = gql`
    query GetCharacters($page: Int){
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                location {
                    name
                }
                status,
                origin {
                    name
                }
                image
                species
            }
        }
    }
`

export const characterDetailQuery = gql`
    query GetCharacterDetails($id: ID!){
        character(id: $id) {
            id
            name
            status
            origin {
                name
            }
            location {
                name
            }
            image
            species
        }
    }
`
