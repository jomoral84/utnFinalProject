import * as api from "../api/index";
import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
  FETCH_EMOJI,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

export const getEmoji = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEmoji(id);
    dispatch({ type: FETCH_EMOJI, payload: { emoji: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getEmojis = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchEmojis(page);
    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getEmojisBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data},
    } = await api.fetchEmojisBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Hubo en error: ", error);
  }
};

export const deleteEmoji = (id) => async (dispatch) => {
  try {
    await api.deleteEmoji(id);
    dispatch({ type: DELETE, payload: id });
    console.log("Emoji Eliminado!");
  } catch (error) {
    console.log(error);
  }
};

export const likeEmoji = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeEmoji(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};




export const updateEmoji = (id, emoji) => async (dispatch) => {
  try {
    const { data } = await api.updateEmoji(id, emoji);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};