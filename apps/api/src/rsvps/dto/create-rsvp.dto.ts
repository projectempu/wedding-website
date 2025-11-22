import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateRsvpDto {
  @IsNotEmpty()
  @IsString()
  guestName: string;

  @IsNotEmpty()
  isAttending: boolean;

  @IsInt()
  @Min(0)
  @Max(100)
  guestCount: number;

  @IsString()
  guestMessage: string | null;
}
