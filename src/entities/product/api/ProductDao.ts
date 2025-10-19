import type { Product } from "../model/Product";

export default class ProductDao {
    static getProducts(slug: string | undefined) {
        return new Promise<Array<Product>>((resolve, reject) => {
            fetch(`https://localhost:7072/api/product-group/${slug}`)
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json")){
                    r.json().then(j => {
                        if(j.status.isOk) {
                            resolve(j.data.products as Array<Product>);
                        }
                        else{
                            reject(j);
                        }
                    })
                }
                else{
                    reject("Invalid CT: " + ct);
                }
            }).catch(reject);
        });
    }
}