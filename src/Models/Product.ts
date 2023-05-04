import { ProductType } from "./ProductType";

export default interface ProductModel {
    imag: string,
    name: string,
    price: number,
    menuType: ProductType,
    recommend: boolean,
    sold: boolean
}