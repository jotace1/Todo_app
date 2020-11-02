import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPriorityToCard1604342105696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('cards', new TableColumn({
        name: 'priority',
        type: 'varchar',
        default: "'low'",
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('cards', 'priority')
    }

}
