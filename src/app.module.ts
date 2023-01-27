import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongoadmin:bdung@localhost/store', {
      authSource: 'admin',
    }),
    ProductModule,
    UserModule,
    AuthModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
