export interface Client {
    id?: number;
    user_id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    created_at?: Date;
}
