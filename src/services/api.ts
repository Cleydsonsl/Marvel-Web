import axios from 'axios';
import md5 from 'md5';

const publicKey = '0beec0fa84ab300c277c8010f71ae2f9';
const privateKey = '27096cf1e4f00fe1801102c7ca75db6847ae15ab';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey)

export const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    }
})