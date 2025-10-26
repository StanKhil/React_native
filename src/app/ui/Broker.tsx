import type { BrokerData } from "../../features/types/BrokerData";

export default class Broker{
    static #instance: Broker|null = null;
    timeout : number;
    static get instance(): Broker {
        if(Broker.#instance == null){
            Broker.#instance = new Broker();
        }
        return Broker.#instance;
    }

    constructor(){
        this.timeout = 0;
    }

    enqueueTask(data: BrokerData){
        if (data.type === "toast" && data.toastData) {
        const toastTime = data.toastData.timeout ?? 2000;
        const delay = this.timeout;

        setTimeout(() => {
            data.action(); 
            this.timeout += toastTime;
        }, delay);

        setTimeout(() => {
            data.callback(data, undefined); 
            this.timeout -= toastTime;
        }, delay + toastTime);
        }
    }
}