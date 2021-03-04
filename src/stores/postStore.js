import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";



const CHANGE_EVENT = "change";
let _properties = [];
let _poperty = {}


class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getProperties() {
        return _properties;
    }
    getAproperty() {

        return _poperty
    }
}


const store = new PostStore();


dispatcher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_PROPERTIES:
            _properties = action.properties;
            store.emitChange();
            break;
        default:
        case actionTypes.GET_A_PROPERTY:
            _poperty = action.property


            store.emitChange();
            break

    }
});

export default store;