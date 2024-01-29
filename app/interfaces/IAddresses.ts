export default interface IAddresses {
    id: number;
    city?: string,
    street?: string,
    number?: string,
    neighborhood?: string,
    zipcode?: string,
    venalValue?: string,
    type?: string,
    situation?: string,
    iptu?: number,
    realRight?: string,
    debt?: string,
    owner?: string,
    lat: number,
    lng: number
}