import {defineStore} from 'pinia'

let useCounter: any;
useCounter = defineStore('counter', {
    state: () => {
        return{
            count: 99
        }
    },
    actions:{
        Addcount(){
            this.count--
        }
    }
});

export default useCounter
