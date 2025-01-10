import { BASE_URL } from '../constants/api';
export async function fetchMenuCategory() {
    return await fetch(`${BASE_URL}/menu-categories`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitMenuCategory(payload) {
    return await fetch("${BASE_URL}/menu-category",
        {
            method: payload.idMenuCategory !== "" ? "POST" : "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then((respond) => {
            return respond.json();
        });
}

export async function getMenuCategoryById(id) {
    return await fetch(`${BASE_URL}/menu-category/${id}`, {method: "GET"})
        .then((response) => {
            return response.json();
        });
}

export async function deleteMenuCategoryById(id) {
    return await fetch(`${BASE_URL}/menu-category/${id}`, {method: "DELETE"});
}