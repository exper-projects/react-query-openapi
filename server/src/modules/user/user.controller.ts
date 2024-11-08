import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.services';
import { CreateUserPayload, UpdateUserPayload, UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    operationId: 'createUser',
    summary: 'Create a new user',
  })
  @ApiOkResponse({ type: UserDto })
  @Post('/')
  async createUser(@Body() body: CreateUserPayload) {
    return this.userService.createUser(body);
  }

  @ApiOperation({
    operationId: 'updateUser',
    summary: 'Update a user',
  })
  @ApiOkResponse({ type: UserDto })
  @Put('/:email')
  async updateUser(
    @Param('email') email: string,
    @Body() body: UpdateUserPayload,
  ) {
    return this.userService.updateUser(email, body);
  }
}
