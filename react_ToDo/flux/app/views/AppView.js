import React from "react";

const ButDel = props =>
    <input style={{ marginLeft: 50 }} type="button" id="but" value="удалить" />;

class AppView extends React.Component {

    constructor(props) {

        super(props);
        this.state = { newTask: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    };

    changeStyle(e) {
        let ind = e.target.parentElement.className;

        let textDecore = (e.target.parentElement.style.textDecoration === "none") ?
            { style: { textDecoration: "line-through" }, component: <ButDel /> } :
            {
                style: { textDecoration: "none" }, component: null
            };

        // let textDecore = (e.target.parentElement.style.textDecoration === "none") ?
        //     { textDecoration: "line-through" } : { textDecoration: "none" };

        this.props.onChangeItem(ind, textDecore);
        this.setState({ newTask: "" })
    }

    onRemoveAll() {

        this.props.onRemoveAllItem();
    }

    onAdd() {

        if (this.state.newTask) {
            this.props.onAddItem({
                task: this.state.newTask,
                styles: { textDecoration: "none" },
                checkBoxStatus: false,
                component: null
            });
            this.setState({ newTask: "" });
        }
    }

    onInputChange(e) {
        this.setState({ newTask: e.target.value })
    }

    render() {

        return <div onChange={this.test} >
            <h2>My ToDo </h2>
            <div onChange={this.changeStyle} >
                {
                    this.props.tasks.map(function (item, ind) {

                        return <div className={ind} style={item.styles} key={ind}>
                            <input type="checkbox" />{item.task}{item.component}
                        </div>
                    })
                }
            </div>
            <p>
                <input type="text" value={this.state.newTask} onChange={this.onInputChange} />
                <button onClick={this.onAdd}>Добавить</button>
                <button onClick={this.onRemoveAll}>Очистить</button>
            </p >
        </div >
    }
}
export default AppView;
