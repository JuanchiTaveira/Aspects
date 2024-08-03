export default interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    alt?: string;
    category?: string
}