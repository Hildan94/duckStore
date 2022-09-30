import {makeAutoObservable, runInAction} from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

class DuckStore {

    ducks = ["Loading ducks"];

    constructor( ) {
        makeAutoObservable(this,
            {},
            {autoBind:true});
        this.fetchDucks();
    }

    fetchDucks(){
        fetch(baseUrl + "api/ducks").then(
            (response)=> response.json().then(
                (json)=> runInAction(()=> this.ducks=json)
            )
        )
    }

    addDucks = (ducks) => {
        this.ducks.push(ducks);
    }

}

export const duckStore = new DuckStore();