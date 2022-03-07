export interface IIncomes{
    _id?: String,
    _idUser: string,
    _idCategory: string,
    value: number,
    valueInterest: number,
    valueDateExpiration: Date,
    datePay: Date,
    obs: string,
    createAt: Date
}