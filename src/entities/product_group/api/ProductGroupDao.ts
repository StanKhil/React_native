import type { ProductGroup } from "../model/ProductGroup";

export default class ProductGroupDao {
    static getGroups() {
        return new Promise<Array<ProductGroup>>((resolve, reject) => {
            fetch("https://localhost:7072/api/product-group")
            .then(r => {
                let ct = r.headers.get("Content-Type");
                if(ct?.startsWith("application/json")){
                    r.json().then(j => {
                        if(j.status.isOk) {
                            resolve(j.data.productGroups as Array<ProductGroup>);
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

    static getGroup(slug: string) {
        return new Promise<ProductGroup>((resolve, reject) => {
        fetch(`https://localhost:7072/api/product-group/${slug}`)
            .then((r) => {
            const ct = r.headers.get("Content-Type");
            if (ct?.startsWith("application/json")) {
                r.json().then((j) => {
                if (j.status.isOk) {
                    resolve(j.data as ProductGroup);
                } else {
                    reject(j);
                }
                });
            } else {
                reject("Invalid CT: " + ct);
            }
            })
            .catch(reject);
        });
    }
}