import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import * as redis from 'redis'
import * as connectRedis from 'connect-redis'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const redisClient = redis.createClient({
    url: 'redis://localhost:6379'
  })
  const RedisStore = connectRedis(session)
  redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
  });
  redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
  });
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api')
  app.use((session({
    cookie: {
      maxAge: 8640000,
      httpOnly: true
    },
    secret: "124cdsfj34n23",
    saveUninitialized: false,
    resave: false,
    store: new RedisStore({ client: redisClient })
  })))

  app.use(passport.initialize())
  app.use(passport.session())
  app.useGlobalPipes(new ValidationPipe({
    transform: true, //whatever you define in query or param as type it will automatically transofrm to it
    disableErrorMessages: true //disables detail error message
  }))
  await app.listen(Number.parseInt(process.env.PORT));
}
bootstrap();
