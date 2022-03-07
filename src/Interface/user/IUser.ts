export interface IUser{
    _id?: string,
    name: string,
    lastName: string,
    _idAddress?: string[],
    cpf: string,
    email: string,
    password: string,
    phone: string,
    createAt: Date,
    active: boolean,

}