import { Injectable } from '@nestjs/common';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rsvp } from './entities/rsvp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RsvpsService {
  constructor(
    @InjectRepository(Rsvp)
    private rsvpsRepository: Repository<Rsvp>,
  ) {}
  create(createRsvpDto: CreateRsvpDto): Promise<Rsvp> {
    const data = this.rsvpsRepository.create(createRsvpDto);
    return this.rsvpsRepository.save(data);
  }

  findAll(): Promise<Rsvp[]> {
    return this.rsvpsRepository.find();
  }

  findOne(rsvpId: string): Promise<Rsvp> {
    return this.rsvpsRepository.findOneBy({ rsvpId });
  }

  async update(rsvpId: string, updateRsvpDto: UpdateRsvpDto) {
    const data = await this.findOne(rsvpId);
    const updated = this.rsvpsRepository.merge(data, updateRsvpDto);
    return await this.rsvpsRepository.save(updated);
  }

  async remove(rsvpId: string) {
    const data = await this.findOne(rsvpId);
    return await this.rsvpsRepository.delete(data);
  }
}
