import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import Actions from "./Actions.js";
import ActionTypes from "./ActionTypes.js";
import TasksDispatcher from "./TasksDispatcher.js";

class TaskStore extends ReduceStore {
    constructor() {
        super(TasksDispatcher);
    }
    getInitialState() {
        return Immutable.List.of();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return state.push(action.text);
                }
                return state;

            case ActionTypes.REMOVE_ALL_ITEM:

                return state.splice(0);

            case ActionTypes.CHANGE_STYLE_ITEM:

                return state.splice(action.num, 1, action.decore);

            // case ActionTypes.REMOVE_ITEM:
            //     let index = state.indexOf(action.text);
            //     if (index > -1) {
            //         return state.delete(index);
            //     }
            //     return state;

            default:
                return state;
        }
    }
}
export default new TaskStore();