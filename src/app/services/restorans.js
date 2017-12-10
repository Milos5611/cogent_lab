import {TYPE_KEY} from "../common/constant";
import rest from "../common/rest";

const DATA_LOADED = "DATA_LOADED";

export const RESTORANS = "restorans";
export const initialState = {
    [RESTORANS]: null
};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action[TYPE_KEY]) {

        case DATA_LOADED:
            newState = {
                ...state,
                [RESTORANS]: action[RESTORANS]
            };
            break;
        default:
            newState = {
                ...state
            };
            break;
    }
    return newState;
}


// async func, return product list
export function findRestoransNearBy() {
    return async (dispatch) => {
        try {
            const search_value = await rest.doGet(`${window.com.cogent.BASE_URL}/search`);
            // When list is ready update state
            dispatch(dataLoadedSuccessful(search_value.response));
        } catch (error) {
            throw new Error(error);
        }
    };
}

function dataLoadedSuccessful(search_value) {
    return {
        [TYPE_KEY]: DATA_LOADED,
        [RESTORANS]: search_value.venues
    };
}
