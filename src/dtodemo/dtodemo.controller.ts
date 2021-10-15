import { Body, Controller, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { DtodemoService } from './dtodemo.service';

@Controller('dtodemo')
export class DtodemoController {
  constructor(private readonly dtodemoService: DtodemoService) { }

  @Get('/user/:id')
  getParamRoute(@Param('id',) id: string): string {
    console.log(' type of id ', typeof (id));

    return 'ok';
  }
  @Get('/user')
  getParamQuery(@Query('id',) id: number): number {
    console.log(' type of id ', typeof (id));
    return id;
  }
  @Post('/user')
  getBodyParam(@Body() dto: UserDto): UserDto {
    console.log(' type of id ', typeof (dto));
    return dto;
  }
}



