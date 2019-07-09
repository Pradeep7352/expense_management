import { Injectable } from '@angular/core';


@Injectable()
export class CommonService {

    constructor() { }


    postData(url, data) {
        console.log(url, data);
        localStorage.setItem(url, JSON.stringify(data));
    }

    getData(url) {
        return JSON.parse(localStorage.getItem(url));
    }
}