// user/user.controller.ts
import { Controller, Post, Get, Body, Param, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.findOne(createUserDto.username);
    if (user) {
      throw new BadRequestException('Username already exists');
    }
    return this.userService.create(createUserDto);
  }

  @Post('saveTree')
  async saveTree(@Body() body: { username: string; tree: any }) {
    console.log(body.username, body.tree);
    return this.userService.saveTree(body.username, body.tree);
  }

  @Get('getTree/:username')
  async getTree(@Param('username') username: string) {
    return this.userService.getTree(username);
  }
}
