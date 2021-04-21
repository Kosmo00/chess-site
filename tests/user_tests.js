const test = require('ava')
const faker = require('faker')
const axios = require('axios')

test('should create a new user', async t => {
    const data = {
        name: faker.name.findName(),
        nick: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    const res = await axios.post('http://localhost:4000/api/register', data)

    t.deepEqual(res.status, 200)
})

test('should fail the log in', async t => {
    const data = {
        nick: 'Kosmo',
        password: '123456789'
    }

    const res = await axios.post('http://localhost:4000/api/login', data)
        .catch(err => {
            return err
        })

    t.deepEqual(res.response.status, 401)
})

test('should do a log in and log out', async t => {
    const data = {
        nick: 'Kosmo',
        password: '12345678'
    }

    const fetch_user = await axios.post('http://localhost:4000/api/login', data)

    const res = await axios.post('http://localhost:4000/api/logout', {}, {
        headers: {
            'x-token': fetch_user.headers['x-token']
        }
    })
        .then(data => data)
        .catch(err => err)

    t.deepEqual(res.data.message, 'logout succesfully')
})
