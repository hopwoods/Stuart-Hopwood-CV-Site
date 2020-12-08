using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class updateskillsrelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SkillExamples_Skills_SkillId",
                table: "SkillExamples");

            migrationBuilder.AlterColumn<int>(
                name: "SkillId",
                table: "SkillExamples",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SkillExamples_Skills_SkillId",
                table: "SkillExamples",
                column: "SkillId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SkillExamples_Skills_SkillId",
                table: "SkillExamples");

            migrationBuilder.AlterColumn<int>(
                name: "SkillId",
                table: "SkillExamples",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_SkillExamples_Skills_SkillId",
                table: "SkillExamples",
                column: "SkillId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
