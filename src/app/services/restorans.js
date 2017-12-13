import { TYPE_KEY } from "../common/constant";
import history from "../common/history";
import rest from "../common/rest";

const DATA_LOADED = "DATA_LOADED";
const RESTORAN_LOADED = "RESTORAN_LOADED";

export const RESTORANS = "restorans";
export const RESTORAN = "restoran";

export const initialState = {
    [RESTORANS]: null,
    [RESTORAN]: null
};

export default function reducer( state = initialState, action ) {
    let newState;
    switch ( action[ TYPE_KEY ] ) {

        case DATA_LOADED:
            newState = {
                ...state,
                [RESTORANS]: action[ RESTORANS ]
            };
            break;
        case RESTORAN_LOADED:
            newState = {
                ...state,
                [RESTORAN]: action[ RESTORAN ]
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

// async func, return all restorans near 1km
export function findRestoransNearBy() {
    return async ( dispatch ) => {
        try {
            const search_value = await rest.doGet(`${window.com.cogent.BASE_URL}/search`);
            // When list is ready update state
            dispatch(dataLoadedSuccessful(search_value.response));
        } catch ( error ) {
            throw new Error(error);
        }
    };
}

// async func, return detail about restoran
export function restoranDetail( id ) {
    return async ( dispatch ) => {
        try {
            const search_value = await rest.doGet(`${window.com.cogent.BASE_URL}/${id}`);
            // When restoran is ready update state
            dispatch(restoranDataLoadedSuccessful(search_value.response));
            history.push("/restoran/detail");
        } catch ( error ) {
            throw new Error(error);
        }
    };
}

// async func, return filtered result  list
export function findDataFromQuery( query ) {
    return async ( dispatch ) => {
        try {
            const search_value = await rest.doSearch(`${window.com.cogent.BASE_URL}/search`, query);
            // When list is ready update state
            dispatch(dataLoadedSuccessful(search_value.response));
        } catch ( error ) {
            throw new Error(error);
        }
    };
}

function dataLoadedSuccessful( search_value ) {
    return {
        [TYPE_KEY]: DATA_LOADED,
        [RESTORANS]: search_value.venues
    };
}

function restoranDataLoadedSuccessful( search_value ) {
    return {
        [TYPE_KEY]: RESTORAN_LOADED,
        [RESTORAN]: search_value.venue
    };
}
