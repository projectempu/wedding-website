import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rsvps' })
export class Rsvp {
  @PrimaryGeneratedColumn('uuid', { name: 'rsvp_id' })
  rsvpId: string;

  @Column({ name: 'guest_name', type: 'varchar' })
  guestName: string;

  @Column({ name: 'is_attending', type: 'boolean', default: true })
  isAttending: boolean;

  @Column({ name: 'guest_count', type: 'int', unsigned: true, default: 0 })
  guestCount: number;

  @Column({ name: 'guest_message', type: 'text', nullable: true })
  guestMessage: string | null;
}
