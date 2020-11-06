import * as types from './actionTypes';
import axios from 'axios';
import moment from "moment";
import {sevenDays} from "../../../Helpers/LastDays";

const fetchGraphicRequest = () => ({
  type: types.FETCH_GRAPHIC_REQUEST
})
const fetchGraphicSuccess = (payload) => ({
  type: types.FETCH_GRAPHIC_SUCCESS,
  payload
})

const fetchGraphicFailure = () => ({
  type: types.FETCH_GRAPHIC_FAILURE
})

export const fetchCost = (base, symbol) => (dispatch) => {
  dispatch(fetchGraphicRequest());
  axios.get(`https://api.exchangeratesapi.io/history?start_at=${moment(sevenDays()).format('YYYY-MM-DD')}&end_at=${moment(new Date()).format('YYYY-MM-DD')}&symbols=${symbol}&base=${base}`)
    .then((result) => {
      const labels = [];
      const data = []
      for (let item in result.data.rates){
        labels.push(item)
        data.push(result.data.rates[item][symbol])
      }
      dispatch(fetchGraphicSuccess({labels, data}))
    })
    .catch(() => dispatch(fetchGraphicFailure()))
}
