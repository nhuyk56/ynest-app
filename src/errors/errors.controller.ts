import {
  Injectable,
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Redirect,
  Res,
} from '@nestjs/common';
import { DEDog } from '../dev-exports/de-dog';

const message = 'message out class';

@Injectable()
@Controller()
export class ErrorsController {
  private v1DEDog: DEDog;
  private v2DEDog: DEDog;
  private isEnabled;
  constructor(private pv1DEDog: DEDog, private pv2DEDog: DEDog) {
    this.v1DEDog = pv1DEDog;
    this.v2DEDog = pv2DEDog;
    this.isEnabled = 5 > 3;
  }

  @HttpCode(503)
  @Get('getDEDog')
  getDEDog() {
    if (this.isEnabled) {
      console.log(message);
    }
    console.log(message);
    this.v1DEDog.getDEDog();
    return this.v2DEDog.getDEDog();
  }

  @Get('sync')
  synchronous() {
    if (!this.isEnabled) {
      console.log('ádfafd');
    }
    this.throwError();
  }

  @Get('async')
  async asynchronous() {
    this.throwError();
  }

  @Get('300')
  // @Redirect('/home', 404)
  async s30(@Res() res) {
    // res
    //   .set({
    //     'Content-Type': 'text/plain',
    //     'Content-Length': '123',
    //     ETag: '12345',
    //   })
    //   .status(404)
    //   .send('123')
    // @Res() res: ParameterDecorator
    // return res.
    // console.log(res.name)
    // res.redirect('/getDEDog')
    // res.s
    // return 2
    // return { url: '/async', statusCode: 500 };
    // return 111
  }

  throwError() {
    throw new BadRequestException({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Integration test',
    });
  }
}
