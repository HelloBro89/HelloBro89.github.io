import ActionTypes from "./ActionTypes.js";
import TasksDispatcher from "./TasksDispatcher.js";

const Actions = {
    addItem(text, num) {
        TasksDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            text,
        });

    },
    removeAllItem() {
        TasksDispatcher.dispatch({
            type: ActionTypes.REMOVE_ALL_ITEM
        })
    },
    changeItemStyle(num, decore) {
        TasksDispatcher.dispatch({
            type: ActionTypes.CHANGE_STYLE_ITEM,
            num,
            decore
        })

    }

    // ,
    // removeItem(text) {
    //     TasksDispatcher.dispatch({
    //         type: ActionTypes.REMOVE_ITEM,
    //         text,
    //     });
    // }
};

export default Actions;