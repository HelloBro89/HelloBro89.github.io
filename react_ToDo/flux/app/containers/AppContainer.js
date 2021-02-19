import AppView from "../views/AppView.js";
import { Container } from "flux/utils";
import React from "react";
import TaskStore from "../data/TaskStore.js";
import Actions from "../data/Actions.js";
import ActionTypes from "../data/ActionTypes.js";
import { get } from "immutable";

class AppContainer extends React.Component {
    static getStores() {
        return [TaskStore];
    }
    static calculateState(prevState) {

        return {
            tasks: TaskStore.getState(),
            onAddItem: Actions.addItem,
            onRemoveAllItem: Actions.removeAllItem,
            onChangeItem: Actions.changeItemStyle
            // ,
            // onRemoveItem: Actions.removeItem
        };
    }
    render() {
        return <AppView tasks={this.state.tasks}
            onChangeItem={this.state.onChangeItem}
            // onRemoveItem={this.state.onRemoveItem}
            onRemoveAllItem={this.state.onRemoveAllItem}
            onAddItem={this.state.onAddItem} />;

    }
}
export default Container.create(AppContainer);