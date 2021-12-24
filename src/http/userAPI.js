import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const login = async (email, password) => {
    const {data} = await $host.post('/api/login', {email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('user_id', jwt_decode(data.token)['iss'])
    return jwt_decode(data.token)
}

export const registration = async (email, password) => {
    const {data} = await $host.post('/api/registration', {email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('user_id', jwt_decode(data.token)['iss'])
    return jwt_decode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('/api/private/auth')
    console.log(data)
}

export const changepw = async(id, old_password, password) => {
   await $authHost.put('/api/forgot-password', {id, old_password, password})
}

export const recoverpw = async(email) => {
   await $host.post('/api/recover-password', {email})
}

export const validaterecoverpw = async(password, id, evpw) => {
   await $host.post('/api/validate-password-recovery/?id=' + id + '&evpw=' + evpw, {password})
}

export const logout = async() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
}