import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../homes.json"

export function getProperties() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_PROPERTIES,
        properties: data["properties"],
    });
}



export function getAproperty(id) {
    const propID = id

    dispatcher.dispatch({
        actionTypes: actionTypes.GET_A_PROPERTY,
        property: data.properties[propID - 1],
    });
}