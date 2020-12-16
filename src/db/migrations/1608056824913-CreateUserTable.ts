import MigrationUtil from 'src/utils/MigrationUtil';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1608056824913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(CreateUserTable1608056824913.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(CreateUserTable1608056824913.table);
  }

  public static readonly table = new Table({
    name: 'UserTable',
    columns: [
      ...MigrationUtil.getIdColumn(),
      MigrationUtil.getVarCharColumn({ name: 'username' }),
      MigrationUtil.getVarCharColumn({ name: 'email' }),
      MigrationUtil.getVarCharColumn({ name: 'password' }),
    ],
  });
}
