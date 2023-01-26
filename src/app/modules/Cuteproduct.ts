export class Cuteproduct {
    id : number;
    title : string;
    description : string;
    price : number;
    rating : number;
    stock : number;
    brand : string;
    category : string;
    thumbnail : string;
    images : string[];
    
    constructor(id: number, title: string, description: string, price: number, rating: number, stock: number, brand: string, category: string, thumbnail: string, images: string[]) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.rating = rating;
      this.stock = stock;
      this.brand = brand;
      this.category = category;
      this.thumbnail = thumbnail;
      this.images = images;
    }
}