import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Message {
  @ApiProperty({
    description: 'The auto-generated ID of the message',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The message content',
    example: 'Hello, this is a message'
  })
  @Column('text')
  message: string;

  @ApiProperty({
    description: 'Items related to the message',
    example: 'item1,item2,item3'
  })
  @Column()
  items: string;
}
