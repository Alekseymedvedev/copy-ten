export interface Server {
    id: number;
    title: string;
    type: number;
}

export interface Graph {
    uv: number;
    pv: number;
}

export interface Gain {
    value: number;
    percent: number;
}

export interface IBalance {
    graph: Graph[];
    value: number;
    gain: Gain;
}

export interface Stats {
    balance: IBalance;
}

export interface ProductData {
    title: string;
    sub_title: string;
    slug: string;
}

export interface Product {
    assigned: boolean;
    product_data: ProductData;
}

export interface IUserAccounts {
    id: number;
    name?: any;
    login: string | number | undefined;
    password: string;
    reject_reason?: any;
    server: Server;
    stats: Stats;
    product: Product;
    status: number;
}


