import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/db/drizzle-client';
import { usersTable } from '../db/schema';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  async createUser(dto: CreateUserDto) {
    const result = await db.insert(usersTable).values(dto).returning();
    return result[0];
  }

  async getUsers() {
    try {
      const result = await db.query.usersTable.findMany();
      return result;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch users');
    }
  }
}
