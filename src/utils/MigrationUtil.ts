import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export default class MigrationUtil {
  public static getIdColumn(): TableColumnOptions[] {
    const columns: TableColumnOptions[] = [];

    columns.push({
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      isNullable: false,
      generationStrategy: 'increment',
    });
    return columns;
  }

  public static getVarCharColumn({
    name,
    length = '255',
    isPrimary = false,
    isNullable = false,
    isUnique = false,
    defaultValue = null,
  }): TableColumnOptions {
    return {
      name,
      length,
      isPrimary,
      isNullable,
      isUnique,
      default: `'${defaultValue}'`,
      type: 'varchar',
    };
  }
}
