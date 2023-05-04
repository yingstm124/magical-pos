import ProductModel from "../Models/Product";
import Book1 from '../stories/assets/products/book/1.png'
import Book2 from '../stories/assets/products/book/2.png'
import Book3 from '../stories/assets/products/book/3.png'
import Book4 from '../stories/assets/products/book/4.png'
import Book5 from '../stories/assets/products/book/5.png'
import Book6 from '../stories/assets/products/book/6.png'
import Book7 from '../stories/assets/products/book/7.png'
import Book8 from '../stories/assets/products/book/8.png'
import Book9 from '../stories/assets/products/book/9.png'

import Cloth1 from '../stories/assets/products/clothing/creatures_socks_large.png'
import Cloth2 from '../stories/assets/products/clothing/gryffindor_house_spirit.png'
import Cloth3 from '../stories/assets/products/clothing/gryffindor_robe.png'
import Cloth4 from '../stories/assets/products/clothing/hufflepuff_house_spirit.png'
import Cloth5 from '../stories/assets/products/clothing/hufflepuff_robe.png'
import Cloth6 from '../stories/assets/products/clothing/london_iconic_gringotts_hoodie.png'
import Cloth7 from '../stories/assets/products/clothing/london_iconic_hogwart_hoodie.png'
import Cloth8 from '../stories/assets/products/clothing/london_iconic_hogwart_shirt.png'
import Cloth9 from '../stories/assets/products/clothing/ravenclaw_house_spirit.png'
import Cloth10 from '../stories/assets/products/clothing/ravenclaw_robe.png'
import Cloth11 from '../stories/assets/products/clothing/slytherin_house_spirit.png'

import Potion1 from '../stories/assets/products/potion/harry_potter_potion_lignt.png'

import Sweet1 from '../stories/assets/products/sweet-trolley/bertie_bott_flavour_beans.png'
import Sweet2 from '../stories/assets/products/sweet-trolley/butterbeer_1_large.png'
import Sweet3 from '../stories/assets/products/sweet-trolley/Caramel-and-Seasalt-Fudge_large.png'
import Sweet4 from '../stories/assets/products/sweet-trolley/Dark-Choc-Honeycomb-1_large.png'
import Sweet5 from '../stories/assets/products/sweet-trolley/frogbox_large.png'
import Sweet6 from '../stories/assets/products/sweet-trolley/Milk-Choc-Honeycomb-1_large.png'

import Wand1 from '../stories/assets/products/wand/draco_malfoy_wand.png'
import Wand2 from '../stories/assets/products/wand/Dumbledore2_large.png'
import Wand3 from '../stories/assets/products/wand/Hermione2_large.png'
import Wand4 from '../stories/assets/products/wand/micolas_flamel_wand.png'
import Wand5 from '../stories/assets/products/wand/narcissa_malfoy_wand.png'
import Wand6 from '../stories/assets/products/wand/Voldemort1_Product_large.png'


export const products: ProductModel[] = [
    // Book
    {
        imag: Book1,
        name: "The magic of minalima",
        price: 40,
        menuType: "book",
        recommend: true,
        sold: false
    },
    {
        imag: Book2,
        name: "Harry potter and the chamber of secrets",
        price: 7,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book3,
        name: "Harry Potter and the Philosopher's Stone",
        price: 7,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book4,
        name: "New Edition Harry Potter and the Goblet of fire",
        price: 8,
        menuType: "book",
        recommend: false,
        sold: true
    },
    {
        imag: Book5,
        name: "Warner Bros. Studio Tour London Souvenir Guidebook",
        price: 9,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book7,
        name: "New Edition Harry Potter and the Order of the Phoenix",
        price: 7,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book6,
        name: "New Edition Harry Potter and the Half-Blood Prince",
        price: 7,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book8,
        name: "New Edition Harry Potter and the Philosopher's Stone",
        price: 7,
        menuType: "book",
        recommend: false,
        sold: false
    },
    {
        imag: Book9,
        name: "New Edition Harry Potter and the Prisoner of Azkaban",
        price: 7,
        menuType: "book",
        recommend: true,
        sold: true
    },

    // clothing
    {
        imag: Cloth1,
        name: "Creatures sock",
        price: 2,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth1,
        name: "Creatures sock",
        price: 2,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth2,
        name: "Gryffindor house spirit",
        price: 12,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth3,
        name: "Gryffindor robe",
        price: 23,
        menuType: "clothing",
        recommend: true,
        sold: false
    },
    {
        imag: Cloth4,
        name: "Hufflepuff house spirit",
        price: 12,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth5,
        name: "Hufflepuff robe",
        price: 23,
        menuType: "clothing",
        recommend: true,
        sold: false
    },
    {
        imag: Cloth6,
        name: "London iconic gringotts",
        price: 20,
        menuType: "clothing",
        recommend: true,
        sold: true
    },
    {
        imag: Cloth7,
        name: "London iconic hogwart hoodie",
        price: 20,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth8,
        name: "London iconic hogwart shirt",
        price: 18,
        menuType: "clothing",
        recommend: true,
        sold: false
    },
    {
        imag: Cloth9,
        name: "Revenclaw shirt",
        price: 15,
        menuType: "clothing",
        recommend: false,
        sold: false
    },
    {
        imag: Cloth10,
        name: "Revenclaw robe",
        price: 20,
        menuType: "clothing",
        recommend: true,
        sold: false
    },
    {
        imag: Cloth11,
        name: "Slytherin house spirit",
        price: 12,
        menuType: "clothing",
        recommend: false,
        sold: false
    },

    // Potion
    {
        imag: Potion1,
        name: "Harry potter potion light",
        price: 120,
        menuType: "potion",
        recommend: true,
        sold: false
    },

    // Sweet
    {
        imag: Sweet1,
        name: "Bertie bott flavour beans",
        price: 5,
        menuType: "sweet-trolley",
        recommend: false,
        sold: false
    },
    {
        imag: Sweet2,
        name: "Butter beer",
        price: 8,
        menuType: "sweet-trolley",
        recommend: true,
        sold: false
    },
    {
        imag: Sweet3,
        name: "Caramel & Sea salt fudge",
        price: 9,
        menuType: "sweet-trolley",
        recommend: false,
        sold: false
    },
    {
        imag: Sweet4,
        name: "Dark choc honey comb",
        price: 5,
        menuType: "sweet-trolley",
        recommend: false,
        sold: false
    },
    {
        imag: Sweet5,
        name: "Frogbox",
        price: 5,
        menuType: "sweet-trolley",
        recommend: false,
        sold: false
    },
    {
        imag: Sweet6,
        name: "Milk choc honey comb",
        price: 5,
        menuType: "sweet-trolley",
        recommend: false,
        sold: false
    },

    // Wand
    {
        imag: Wand1,
        name: "Draco malfoy wand",
        price: 50,
        menuType: "wand",
        recommend: false,
        sold: false
    },
    {
        imag: Wand2,
        name: "Dumbledore wand",
        price: 59,
        menuType: "wand",
        recommend: false,
        sold: false
    },
    {
        imag: Wand3,
        name: "Hermione wand",
        price: 80,
        menuType: "wand",
        recommend: false,
        sold: false
    },
    {
        imag: Wand4,
        name: "Micolas flamel wand",
        price: 25,
        menuType: "wand",
        recommend: false,
        sold: false
    },
    {
        imag: Wand5,
        name: "Narcissa Malfoy wand",
        price: 75,
        menuType: "wand",
        recommend: false,
        sold: false
    },
    {
        imag: Wand6,
        name: "Voldemort wand",
        price: 450,
        menuType: "wand",
        recommend: false,
        sold: true
    },
]