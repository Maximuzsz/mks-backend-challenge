import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:process.env.DB_HOST,
      port:Number(process.env.DB_PORT),
      database:process.env.DB_DATABASE,
      username: 'postgres',  //process.env.DB_USERNAME,
      password: 'root', //process.env.DB_PASSWORD,
      synchronize: true,
      entities:[__dirname +'/**/*.entity{.js, .ts}']
  }),
    UserModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
