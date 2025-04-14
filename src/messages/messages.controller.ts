import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Message } from './entities/message.entity';
import { PaginatedResult } from './interfaces/paginated-result.interface';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new message' })
  @ApiResponse({ status: 201, description: 'Message created successfully', type: Message })
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all messages with pagination' })
  @ApiResponse({ status: 200, description: 'Return paginated messages', type: PaginatedResult })
  findAll(@Query() paginationDto: PaginationDto): Promise<PaginatedResult<Message>> {
    return this.messagesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a message by id' })
  @ApiResponse({ status: 200, description: 'Return the message', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a message' })
  @ApiResponse({ status: 200, description: 'Message updated successfully', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto): Promise<Message> {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a message' })
  @ApiResponse({ status: 200, description: 'Message deleted successfully' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.messagesService.remove(+id);
  }
}
