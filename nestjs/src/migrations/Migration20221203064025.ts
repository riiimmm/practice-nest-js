import { Migration } from '@mikro-orm/migrations';

export class Migration20221203064025 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "example" ("id" bigserial primary key, "name" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "example" cascade;');
  }

}
