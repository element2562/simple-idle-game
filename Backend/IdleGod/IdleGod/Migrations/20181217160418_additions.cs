using Microsoft.EntityFrameworkCore.Migrations;

namespace IdleGod.Migrations
{
    public partial class additions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "94304935-d4ad-41fa-9eea-8a9c7d206dee");

            migrationBuilder.AddColumn<int>(
                name: "SalaryBumpPrice",
                table: "Player",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "XpBumpPrice",
                table: "Player",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "SalaryBumpPrice", "XpBumpPrice", "XpGain", "XpToLevel" },
                values: new object[] { "7c24acb2-125c-4f10-bdce-1bbb152e20e9", 0, 1, 0, 25, 750, 500, 10, 500 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "7c24acb2-125c-4f10-bdce-1bbb152e20e9");

            migrationBuilder.DropColumn(
                name: "SalaryBumpPrice",
                table: "Player");

            migrationBuilder.DropColumn(
                name: "XpBumpPrice",
                table: "Player");

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "XpGain", "XpToLevel" },
                values: new object[] { "94304935-d4ad-41fa-9eea-8a9c7d206dee", 0, 1, 0, 25, 10, 500 });
        }
    }
}
