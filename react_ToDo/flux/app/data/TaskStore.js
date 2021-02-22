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
                console.log(state._tail.array[action.num].styles);
                state._tail.array[action.num].styles = action.decore.style;  // можно ли так подбираться(написано что нельзя изменять) ???
                // state._tail.array[action.num].styles.textDecoration = 'lineThrough'; // почему он принимает только объекты?

                state._tail.array[action.num].component = action.decore.component;
                // а нельзя прямиком поменять ?

                return state;

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