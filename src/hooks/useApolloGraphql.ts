import {useQuery} from "@apollo/client";
import {charactersQuery} from "../services/get-data";
import {CharacterType, GetUsersType} from "../types";

type UsersQueryType = {
  loading: boolean
  data: CharacterType[]
  pages: number
}



export function useApolloGraphql(): any {
  const getUsers = (request: GetUsersType): any => {
    const {data, loading} = useQuery(charactersQuery, {
      variables: {
        page: request.currentPage,
        name: request.name,
        status: request.status,
        species: request.species,
        type: request.type,
        gender: request.gender
      }
    })

    return {loading, pages: data?.characters?.info.pages | 1, characters: data?.characters?.results}
  }

  // const getUserDetails = () => {
  // }
  //
  // const getLocations = () => {
  // }
  //
  // const getEpisodes = () => {
  // }

  return {
    getUsers,
    // getUserDetails,
    // getLocations,
    // getEpisodes
  }
}
