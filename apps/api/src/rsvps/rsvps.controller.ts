import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RsvpsService } from './rsvps.service';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';

@Controller('rsvps')
export class RsvpsController {
  constructor(private readonly rsvpsService: RsvpsService) {}

  @Post()
  create(@Body() createRsvpDto: CreateRsvpDto) {
    return this.rsvpsService.create(createRsvpDto);
  }

  @Get()
  findAll() {
    return this.rsvpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') rsvpId: string) {
    return this.rsvpsService.findOne(rsvpId);
  }

  @Patch(':id')
  update(@Param('id') rsvpId: string, @Body() updateRsvpDto: UpdateRsvpDto) {
    return this.rsvpsService.update(rsvpId, updateRsvpDto);
  }

  @Delete(':id')
  remove(@Param('id') rsvpId: string) {
    return this.rsvpsService.remove(rsvpId);
  }
}
