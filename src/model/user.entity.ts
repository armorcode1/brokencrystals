// item.entity.ts
import { Entity, Property } from '@mikro-orm/core';
import { Base } from './base.entity';

@Entity()
export class User extends Base {
  @Property()
  email: string;

  @Property()
  password: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  isAdmin: boolean;
}
