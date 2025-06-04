import { Products } from "@/types/product";
import { products } from '@/data/products'
import { resolve } from "path";

export const getAllProducts = async (): Promise<Products[]> => {

    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 2000);
    });


}