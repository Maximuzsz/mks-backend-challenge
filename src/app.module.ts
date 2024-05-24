import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { UserModule } from './user/user.module';

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
    AuthModule,
    CatalogoModule
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}
