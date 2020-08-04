export class Item{
    id:number
    name:string
    price:number
    rating?:number
    ratingCount?:number
}

export class Rating{
    id?:number
    itemId:number
    rating:number
}