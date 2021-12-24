import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const login = async (email, password) => {
    const {data} = await $host.post('/api/login', {email, password})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const todo = async (title, body) => {
    const {data} = await $authHost.post('/api/todo',  { title, body})
    console.log(data)
}
export const todos = async () => {
    const {data} = await $authHost.get('/api/todos')
    return data
}
export const todoID = async (id) => {
    const {data} = await $authHost.get('/api/todo/' + id)
    return data
}

export const todoPublicCreate = async(id) => {
    const {data} = await $authHost.post('/api/todo/' + id)
    console.log(data)
    return data
}

export const todoPublic = async (link) => {
    const {data} = await $host.get('/api/todo/public/' + link)
    return data
}

export const todoDelete = async (id) => {
    const {data} = await $authHost.delete('/api/todo/' + id)
    return data
}

export const todoFavourite = async (id) => {
    await $authHost.put('/api/todo/' + id, {type:'favourite'})
}

export const todoDone = async (id) => {
    await $authHost.put('/api/todo/' + id, {type:'done'})
}

export const todoUpdate = async(id, title, body) => {
    await $authHost.put('/api/todo/' + id,
        {
            type:'upd',
            title:title,
            body:body
        }
    )
}