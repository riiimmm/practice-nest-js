import { BigIntType, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Example {
  @PrimaryKey({ type: BigIntType })
  id: string;

  @Property()
  name!: string;

  @Property()
  name_test!: string;
}
