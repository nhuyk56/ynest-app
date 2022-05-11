import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorsController } from './errors/errors.controller';
import { ExDEDog } from './dev-exports/de-Dog.m';
import { ExMyOut } from './dev-exports/myOut.m';
import { ServeStaticModule } from '@nestjs/serve-static'; // New
import { join } from 'path'; // New

@Module({
  imports: [
    forwardRef(() => ExDEDog),
    forwardRef(() => ExMyOut),
    ServeStaticModule.forRoot({
      // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }), // New
  ],
  controllers: [ErrorsController],
  providers: [ErrorsController],
})
export class AppModule {}
