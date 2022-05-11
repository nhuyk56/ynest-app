import { Module, forwardRef } from '@nestjs/common';
import { Myout } from './myOut';
import { ExDEDog } from './de-Dog.m';

@Module({
  imports: [forwardRef(() => ExDEDog)],
  exports: [Myout],
  providers: [Myout],
})
export class ExMyOut {}