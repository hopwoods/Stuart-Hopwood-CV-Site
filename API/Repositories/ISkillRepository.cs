using API.Models;

namespace API.Repositories
{
    public interface ISkillRepository<TEntity> : IRepository<TEntity> where TEntity : Skill
    {
    }
}
