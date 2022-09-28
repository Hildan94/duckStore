import {makeObservable, observable} from "mobx";

class GiraffeStore {

    giraffes = ["Marius", "Melman"];

    constructor( ) {
        makeObservable(this, {
            giraffes: observable,
        })
    }

    addGiraffe = (giraffe) => {
        this.giraffes.push(giraffe);
    }

}

export const giraffeStore = new GiraffeStore();