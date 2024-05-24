import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'ep-autumn-bread-38038175-pooler.us-east-1.aws.neon.tech',
      port:5432,
      database:'verceldb',
      username: 'default',  //process.env.DB_USERNAME,
      password: '8O6CgWnxsrlJ', //process.env.DB_PASSWORD,
      synchronize: false,
      ssl:true,
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

