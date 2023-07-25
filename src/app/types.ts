export interface Medicine {
    id: number,
    name: string,
    type: string,
    expDate: Date,
    seller?: string
}

export interface Batch {
    id: number,
    receiptNum: number,
    batchDate: Date,
    amount: number,
    medicine: string,
    employee: string,
    provider: string,
}