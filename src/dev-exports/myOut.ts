import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { DEDog } from './de-dog'

@Injectable()
export class Myout {
  private vDEDog: DEDog

  constructor(
    @Inject(forwardRef(() => DEDog))
    private pDEDog: DEDog) {
    this.vDEDog = pDEDog
  }
  getMyout(): string {
    console.log('getMyout getMyout getMyout')
    return 'getMyout getMyout getMyout'
  }
}
