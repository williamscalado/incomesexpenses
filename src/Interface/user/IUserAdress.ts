export interface IUserAddress{
    _id: string,
    _idUser: string,
    zipcode?: string,
    adress: string,
    number: string,
    district: string,
    city: string,
    country: string,
    active: boolean,
    createAt: Date
}