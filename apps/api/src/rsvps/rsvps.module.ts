import { Module } from '@nestjs/common';
import { RsvpsService } from './rsvps.service';
import { RsvpsController } from './rsvps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rsvp } from './entities/rsvp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rsvp])],
  controllers: [RsvpsController],
  providers: [RsvpsService],
})
export class RsvpsModule {}
