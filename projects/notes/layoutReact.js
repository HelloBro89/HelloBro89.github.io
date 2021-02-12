// import logo from './logo.svg';
import React from 'react';

class DelOneTask extends React.Component {

    constructor(props) {
        super(props);
        this.del = this.del.bind(this);
    }

    del(e) {
        let info = e.target.parentElement.textContent;
        this.props.poisk(info);
    }

    render() {
        return (
            < input onClick={this.del} type="button" id="but" value="удалить" />
        )
    }
}

class OneTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            decor: { textDecoration: "none", component: null }
        };
        this.change = this.change.bind(this);
        this.forwarding = this.forwarding.bind(this);
    }

    // Можно было подключить событие "change" к родительскому компоненту, и тогда надо
    // было бы при рендере род комп-а в создавать еще один ДИВ и в него подключать
    // это событие (не хотел плодить дивы ), ну и так показалось немножко трудней, есть
    // ли принципиальная разница ? 



    change(e) {
        console.log(e.target.parentElement)

        let textDecor = (e.target.parentElement.style.textDecoration === 'none') ?
            { textDecoration: 'line-through', component: <DelOneTask poisk={this.forwarding} /> } :
            { textDecoration: 'none', component: null };

        this.setState({ decor: textDecor });

    }

    forwarding(info) {
        this.props.search(info);
    }

    render() {

        return (

            <div id="KILL" style={this.state.decor} >
                <input onChange={this.change} type="checkbox" />{this.props.name}
                {this.state.decor.component}
            </div>
        )
    }
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
        this.delTask = this.delTask.bind(this);
    }

    delTask(info) {
        // let mas = this.state.tasks;
        this.state.tasks.map((item, ind) => {
            if (item.task === info) {
                this.state.tasks.splice(ind, 1);
            }
        })

        this.setState({ tasks: this.state.tasks })
    }

    add() {

        let text = document.getElementById('string').value;
        this.state.tasks.push({ task: text, fu: this.delTask });
        this.setState({ tasks: this.state.tasks });

        document.getElementById('string').value = '';
    }

    clear() {
        this.setState({ tasks: [] })
    }

    render() {

        return <div>

            <p> {this.state.title}</p>
            {
                this.state.tasks.map(function (item, ind) {

                    return < OneTask search={item.fu} key={ind} name={item.task} />
                })
            }

            <p>
                <input type="text" id="string" />
                < input onClick={this.add} type="button" id="but" value="добавить" />
                <input onClick={this.clear} type="button" id="clear" value="clear" />
            </p >
        </div >;
    }
}

export default App;
