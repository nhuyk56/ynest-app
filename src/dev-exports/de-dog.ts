import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Myout } from './myOut';

@Injectable()
export class DEDog {
  private vMyout: Myout
  constructor(
    @Inject(forwardRef(() => Myout))
    pMyout: Myout
  ) {
    this.vMyout = pMyout
    // this.vApp = app
  }
  getDEDog(): string {
    this.vMyout.getMyout()
    // console.log(this.vApp)
    console.log('Gô Gô Gô')
    return 'Gô Gô Gô'
  }
}
