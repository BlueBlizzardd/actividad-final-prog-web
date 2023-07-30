export interface Medicine {
    id?: number,
    amount: number,
    name: string,
    type: string,
    expDate: Date,
    seller?: string
}

export interface Batch {
    id: number,
    receiptNum: number,
    batchDate: Date,
    medicine: string,
    amount: number,
    provider: string,
    employee: string,  
}