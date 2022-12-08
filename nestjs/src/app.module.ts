import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'; //追加
import { BookModule } from './book/book.module';
// import Example from '../mikro-orm.config'; //追加
// import Example from '../dist/src/entities/user.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      // entities: ['../dist/src/entities'],
      // // entitiesTs: ['./src/entities'],
      // dbName: 'postgres',
      // type: 'postgresql',
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
