export interface IExpenses {
    _id?: String,
    _idUser: string,
    _idCategory: string,
    value: number,
    valueDate: Date,
    obs: string,
    createAt: Date
}