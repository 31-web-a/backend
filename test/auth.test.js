import supertest from 'supertest';
import api from '../api.js';
// import '../config/database.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(
    'mongodb://APP-USERNAME:APP-PASSWORD@localhost:27017/APP-DB'
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  const collectionP = collections.map((collection) => {
    return collection.deleteMany({});
  });

  await Promise.all(collectionP);
});

describe('API /auth', () => {
  test('/auth/register', async () => {
    const response = await supertest(api).post('/auth/register').send({
      firstName: 'Fernando',
      lastName: 'Servín',
      gender: 'male',
      birthday: '1998-10-23',
      email: 'fernando@correo.com',
      password: 'Testing123.',
      weight: '80',
      height: '180',
      goal: 'Cargar 100kg',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe('User created');

    const duplicatedResponse = await supertest(api)
      .post('/auth/register')
      .send({
        firstName: 'Fernando',
        lastName: 'Servín',
        gender: 'male',
        birthday: '1998-10-23',
        email: 'fernando@correo.com',
        password: 'Testing123.',
        weight: '80',
        height: '180',
        goal: 'Cargar 100kg',
      });

    expect(duplicatedResponse.statusCode).toBe(409);
  });
});
