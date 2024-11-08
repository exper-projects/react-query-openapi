import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.services';
import { CreateUserPayload, UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiOkResponse({ type: UserDto })
  @Post('/')
  async createUser(@Body() body: CreateUserPayload) {
    return this.userService.createUser(body);
  }
}
