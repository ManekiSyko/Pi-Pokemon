export const GET_TYPES = "GET_TYPES";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const FILTER = "FILTER";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER = "ORDER";
export const SET_ALL_CARDS = 'SET_ALL_CARDS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_ALL_TYPES = 'SET_ALL_TYPES';

const ReactApi = 'http://localhost:3001'

export const getAllPokemons = () => {
  return function (dispatch) {
    fetch(`${ReactApi}/pokemons`)
      .then((response) => response.json())
      .then((data) => dispatch(setAllCards(data)));
  };
};

export const getTypes = () => {
  return function (dispatch) {
    fetch(`${ReactApi}/types`)
      .then((response) => response.json())
      .then((data) => dispatch(setAllTypes(data)));
  };
};

export const searchPokemon = (pokemon) => {
  return {
    type: SEARCH_POKEMON,
    payload: pokemon,
  };
};

export const createPokemon = (pokemon) => {
  return function (dispatch) {
    console.log("createPokemon called with data:", pokemon);
    fetch(`${ReactApi}/pokemons`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(pokemon),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert(`Error al crear el pokemon: ${response.error}`);
        } 
        else {
          alert("Pokemon creado")
        }
      })
      .catch((error) => {
        console.error("Error de red al crear un nuevo pokemon:", error);
      });
  };
};

export const filterPokemons = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const filterPokemonsByType = (type) => {
  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
};

export const orderPokemons = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setAllCards = (cards) => ({
  type: SET_ALL_CARDS,
  payload: cards,
});

export const setAllTypes = (types) => ({
  type: SET_ALL_TYPES,
  payload: types,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

