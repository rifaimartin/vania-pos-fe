import { BASE_URL } from '../constants/api';


export async function getOrderById(id){
    return await fetch(`${BASE_URL}/order/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function getUnpaidOrder(){
    return await fetch(`${BASE_URL}/unpaid-order/`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}
export async function submitOrder(payload, orderDetails) {
    const order = {...payload, orderDetails: orderDetails};
    return await fetch(`${BASE_URL}/order`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then((response) => {
            return response.json();
        })
}