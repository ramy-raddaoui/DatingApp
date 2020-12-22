using Microsoft.EntityFrameworkCore.Migrations;

namespace BackApp.API.Migrations
{
    public partial class AddingNameAttributeToValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "Values",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "Values");
        }
    }
}
