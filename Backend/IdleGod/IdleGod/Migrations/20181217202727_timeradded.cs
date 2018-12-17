using Microsoft.EntityFrameworkCore.Migrations;

namespace IdleGod.Migrations
{
    public partial class timeradded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "c0e87b50-1ad0-4e82-a180-67de25c36628");

            migrationBuilder.AddColumn<int>(
                name: "Timer",
                table: "Player",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "SalaryBumpPrice", "Timer", "TimerDecreasePrice", "XpBumpPrice", "XpGain", "XpToLevel" },
                values: new object[] { "5b9ee498-aad6-420b-8aaf-d8943f8cec11", 0, 1, 0, 25, 750, 20, 10000, 500, 10, 500 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "5b9ee498-aad6-420b-8aaf-d8943f8cec11");

            migrationBuilder.DropColumn(
                name: "Timer",
                table: "Player");

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "SalaryBumpPrice", "TimerDecreasePrice", "XpBumpPrice", "XpGain", "XpToLevel" },
                values: new object[] { "c0e87b50-1ad0-4e82-a180-67de25c36628", 0, 1, 0, 25, 750, 10000, 500, 10, 500 });
        }
    }
}
