using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    mobileNumber = table.Column<long>(type: "bigint", nullable: true),
                    userRole = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Admin__A9D10535A2233830", x => x.email);
                });

            migrationBuilder.CreateTable(
                name: "Institutes",
                columns: table => new
                {
                    instituteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    instituteName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    instituteDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    instituteAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    mobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Institutes", x => x.instituteId);
                });

            migrationBuilder.CreateTable(
                name: "Login",
                columns: table => new
                {
                    email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Login__A9D105356207150E", x => x.email);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    username = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    mobileNumber = table.Column<long>(type: "bigint", nullable: true),
                    userRole = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Users__A9D10535E29D705B", x => x.email);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropTable(
                name: "Institutes");

            migrationBuilder.DropTable(
                name: "Login");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
