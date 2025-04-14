import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    description: 'The message content',
    example: 'Hello, this is a message'
  })
  @IsString()
  message: string;

  @ApiProperty({
    description: 'Items related to the message',
    example: 'item1,item2,item3'
  })
  @IsString()
  items: string;
}
