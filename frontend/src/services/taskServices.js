import axios from 'axios';

const apiUrl = "http://localhost:3000/api/v1/tasks"

export function getTask() {
    return axios.get(apiUrl)
}

export function addTask(id, task) {
    return axios.post(apiUrl + '/' + id,task)
}

export function updateTask(id, task) {
    return axios.put(apiUrl + '/' + id, task)
}

export function deleteTask(id) {
    return axios.delete(apiUrl + '/' + id)
}