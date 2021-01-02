using BackApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BackApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {}

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
        
    }
}