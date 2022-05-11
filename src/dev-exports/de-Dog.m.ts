import { Module, forwardRef } from '@nestjs/common';
import { DEDog } from './de-dog';
import { ExMyOut } from './myOut.m';

@Module({
  imports: [forwardRef(() => ExMyOut)],
  exports: [DEDog],
  providers: [DEDog],
})
export class ExDEDog {}