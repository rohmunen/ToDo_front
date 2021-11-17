import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const login = async (email, password) => {
    const {data} = await $host.post('/login', {email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('user_id', jwt_decode(data.token)['iss'])
    return jwt_decode(data.token)
}

export const registration = async (email, password) => {
    const {data} = await $host.post('/user', {email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('user_id', jwt_decode(data.token)['iss'])
    return jwt_decode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('/private/auth')
    console.log(data)
}

export const changepw = async(id, old_password, password) => {
   await $authHost.put('/changepw', {id, old_password, password})
}

export const recoverpw = async(email) => {
   await $host.post('/recoverpw', {email})
}

export const validaterecoverpw = async(password, id, evpw) => {
    console.log('/password/?id=' + id + '&evpw=' + evpw)
   await $host.post('/password/?id=' + id + '&evpw=' + evpw, {password})
}

export const logout = async() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
}