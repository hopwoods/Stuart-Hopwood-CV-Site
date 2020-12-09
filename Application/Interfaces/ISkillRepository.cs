using Core.Entities;

namespace Application.Interfaces
{
    public interface ISkillRepository<TEntity> : IRepository<TEntity> where TEntity : Skill
    {
    }
}
