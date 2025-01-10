import { BASE_URL } from '../constants/api';

export async function getPayments() {
    return await fetch(`${BASE_URL}/payments`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function getTotalIncome() {
    return await fetch(`${BASE_URL}/reports`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}