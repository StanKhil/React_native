type Product = {
    id: string,
    groupId: string | null,
    name: string,
    description: string,
    slug: string,
    imageUrl: string,
    deletedAt: string | null,
    price: number,
    stock: number,
};

export type { Product };