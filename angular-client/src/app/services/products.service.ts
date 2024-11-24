import { Injectable } from '@angular/core';
import axios from "axios"

const API = "http://localhost:4500/api/products"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    getProductsApi() {
        return axios.get(API)
    }

}
