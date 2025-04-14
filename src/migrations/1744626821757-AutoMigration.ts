import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1744626821757 implements MigrationInterface {
    name = 'AutoMigration1744626821757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`message\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`message\` varchar(255) NOT NULL`);
    }

}
