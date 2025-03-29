export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}