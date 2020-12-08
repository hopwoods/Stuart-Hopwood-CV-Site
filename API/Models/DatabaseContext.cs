using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<CvSection> CvSections { get; set; }
    }
}