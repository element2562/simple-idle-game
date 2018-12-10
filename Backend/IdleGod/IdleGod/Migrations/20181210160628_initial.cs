using Microsoft.EntityFrameworkCore.Migrations;

namespace IdleGod.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Player",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    Level = table.Column<int>(nullable: false),
                    Money = table.Column<int>(nullable: false),
                    Salary = table.Column<int>(nullable: false),
                    Experience = table.Column<int>(nullable: false),
                    XpToLevel = table.Column<int>(nullable: false),
                    XpGain = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Player", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "Player",
                columns: new[] { "UserId", "Experience", "Level", "Money", "Salary", "XpGain", "XpToLevel" },
                values: new object[] { "94304935-d4ad-41fa-9eea-8a9c7d206dee", 0, 1, 0, 25, 10, 500 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Player");
        }
    }
}
