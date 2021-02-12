// import logo from './logo.svg';
import React from 'react';

class DelButton extends React.Component {

    constructor(props) {
        super(props);
        this.removInformation = this.removInformation.bind(this);
    }

    removInformation(e) {
        let numDiv = e.target.parentElement.className;
        this.props.filter(numDiv);
    }

    render() {
        return (
            < input onClick={this.removInformation} style={{ marginLeft: 50 }} type="button" id="but" value="удалить" />
        )
    }
}

const OneTask = (props) => {
    return (<input type="checkbox" checked={props.check} />)
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            tasks: [],
        };

        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.delTask = this.delTask.bind(this);
    }

    delTask(numDiv) {
        Number(numDiv);
        this.state.tasks.splice(numDiv, 1)
        this.setState({ tasks: this.state.tasks })
    }

    changeStyle(e) {
        let classIndex = Number(e.target.parentElement.className);
        let textInfo = e.target.parentElement.textContent.slice(1);
        let textDecor = (e.target.parentElement.style.textDecoration === 'none') ?
            {
                task: textInfo, styles: { textDecoration: 'line-through' },
                checkBoxStatus: true,
                component: <DelButton filter={this.delTask} />
            } :
            {
                task: textInfo, styles: { textDecoration: "none" }, checkBoxStatus: false,
                component: null
            };

        this.state.tasks[classIndex] = textDecor;
        this.setState({ tasks: this.state.tasks })
    }

    add() {

        let text = document.getElementById('string').value;
        this.state.tasks.push({
            task: text, styles: { textDecoration: "none" },
            checkBoxStatus: false, component: null
        });

        this.setState({ tasks: this.state.tasks });
        document.getElementById('string').value = null;
    }

    clear() {
        this.setState({ tasks: [] })
    }

    render() {

        return <div>
            <p> {this.state.title}</p>
            <div onChange={this.changeStyle}>
                {
                    this.state.tasks.map(function (item, ind) {
                        return <div className={ind} style={item.styles} key={ind} > < OneTask check={item.checkBoxStatus} />{item.task}{item.component}</div>
                    })
                }
            </div>
            <p>
                <input type="text" id="string" />
                < input onClick={this.add} type="button" id="but" value="добавить" />
                <input onClick={this.clear} type="button" id="clear" value="clear" />
            </p >
        </div >
    }
}

export default App;
