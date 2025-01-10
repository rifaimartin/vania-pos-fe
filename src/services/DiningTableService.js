import { BASE_URL } from '../constants/api';

export async function fetchDiningTable() {
    return await fetch(`${BASE_URL}/dining-tables`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitDiningTable(payload) {
    return await fetch("${BASE_URL}/dining-table",
        {
            method: payload.idDiningTable !== "" ? "POST" : "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then((response) => {
            return response.json();
        })
}

export async function getDataDiningTableById(id) {
    return await fetch(`${BASE_URL}/dining-table/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function deleteDiningTableById(id) {
    return await fetch(`${BASE_URL}/dining-table/${id}`, {method: "DELETE"})
}
