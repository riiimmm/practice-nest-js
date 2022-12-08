import { Migration } from '@mikro-orm/migrations';

export class Migration20221203064621 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "example" add column "name_test" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "example" drop column "name_test";');
  }

}
