import * as types from '../Actions/Graphic/actionTypes';
const initialState = {
  optionsMixedChart: {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: []
    },
  },
  seriesMixedChart: [
    {
      name: "series-1",
      type: "line",
      data: []
    },
  ],
  failure: ''
};

const reducer = (state = initialState, action ) => {

  switch (action.type) {
    case types.FETCH_GRAPHIC_REQUEST:
      return {...state}
    case types.FETCH_GRAPHIC_SUCCESS:
      return {
        ...state,
        optionsMixedChart: {
          chart: {
            id: 'basic-bar',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: action.payload.labels.sort()
          },
        },
        seriesMixedChart: [
          {
            name: "series-1",
            type: "line",
            data: action.payload.data
          },
        ],
      }
    case types.FETCH_GRAPHIC_FAILURE:
      return {
        ...state,
        failure: 'something wrong'
      }
    default:
      return state
  }
}

export default reducer;
