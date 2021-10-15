import { Module } from '@nestjs/common';
import { DtodemoService } from './dtodemo.service';
import { DtodemoController } from './dtodemo.controller';

@Module({
  controllers: [DtodemoController],
  providers: [DtodemoService]
})
export class DtodemoModule {}
