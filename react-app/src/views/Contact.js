import React, {Component} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default class Contact extends Component {
    name = { name:"", surname:'Szydło' }

    state = {
        users: [],
        names: this.name
    }

    constructor() {
        super();
        api.get('/users').then(response => response.data)
            .then((data) => {
                this.setState({users: data})
            })

        this.showName = this.showName.bind(this);
    }




    showName = event => {
        event.preventDefault();

        const showExample = {
            name: this.name.name,
            surname: this.name.surname
        };

        api.post("http://localhost:8080/names", showExample)
            .then(response => {
                if(response.data != null){
                    this.setState(this.name);
                    console.log("wysyłam = " + this.name.name +"     "+ this.name.surname);
                }
            })
    }

    onChange = (event) => {
        const state = this.name
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    render() {
        return (
        <div>
            {this.state.users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                    <p>{user.age}</p>
                </div>
            ))
        }


            <form onSubmit={this.showName}>
                <input type="text" name="name"  onChange={this.onChange} placeholder="janusz" />
                <button type="submit">Wyślij</button>
            </form>

            <input type="text" value={this.name.surname} required/>
            <button type="button" className="btn btn-outline-primary" onClick={this.showName} >Naciśnij</button>
        </div>


    )
    }
}

