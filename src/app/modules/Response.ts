import { Cuteproduct } from "./Cuteproduct";

export class Response{

    products : Array<Cuteproduct> = [];

    public constructor(products: Array<Cuteproduct>) {
        this.products=products;
    }
}
