import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET example', async () => {
    const response = await request(app.getHttpServer())
      .get('/example')
      .expect(200);

    expect(response.text).toBe('Hello World');
  });

  afterAll(async () => {
    await app.close();
  });
});
