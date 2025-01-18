using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions<BackendDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Notification> Notifications { get; set; }
    }
}
