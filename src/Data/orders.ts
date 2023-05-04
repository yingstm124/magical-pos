import { OrderModel } from "../Models/Order.model";
import Wand4 from '../stories/assets/products/wand/micolas_flamel_wand.png'
import Sweet5 from '../stories/assets/products/sweet-trolley/frogbox_large.png'

export const orders: OrderModel[] = [
    {
        image: Wand4,
        name: "Micolas flamel wand",
        price: 25,
        amouth: 1
    },
    {
        image: Sweet5,
        name: "Frogbox",
        price: 5,
        amouth: 2
    }
]