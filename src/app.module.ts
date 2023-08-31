import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './Cats/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';
import { UserModule } from './User/user.module';
import{ConfigModule} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
  
    type: 'postgres',
    host: process.env.HOSTNAME,
    port: 5433,
    username: 'postgres',
    password: 'testpass',
    database: 'contact_book',
    entities: [User ],
    synchronize: true,
  }), UserModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
