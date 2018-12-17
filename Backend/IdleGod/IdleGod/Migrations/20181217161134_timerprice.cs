using Microsoft.EntityFrameworkCore.Migrations;

namespace IdleGod.Migrations
{
    public partial class timerprice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "7c24acb2-125c-4f10-bdce-1bbb152e20e9");

            migrationBuilder.AddColumn<int>(
                name: "TimerDecreasePrice",
                table: "Player",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "SalaryBumpPrice", "TimerDecreasePrice", "XpBumpPrice", "XpGain", "XpToLevel" },
                values: new object[] { "c0e87b50-1ad0-4e82-a180-67de25c36628", 0, 1, 0, 25, 750, 10000, 500, 10, 500 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Player",
                keyColumn: "UserId",
                keyValue: "c0e87b50-1ad0-4e82-a180-67de25c36628");

            migrationBuilder.DropColumn(
                name: "TimerDecreasePrice",
                table: "Player");

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "SalaryBumpPrice", "XpBumpPrice", "XpGain", "XpToLevel" },
                values: new object[] { "7c24acb2-125c-4f10-bdce-1bbb152e20e9", 0, 1, 0, 25, 750, 500, 10, 500 });
        }
    }
}
