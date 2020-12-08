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
        public DbSet<Skill> Skills { get; set; }
        public DbSet<SkillExample> SkillExamples { get; set; }

    }
}