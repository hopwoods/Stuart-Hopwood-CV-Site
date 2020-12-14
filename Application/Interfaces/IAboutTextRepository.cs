using Core.Entities;

namespace Application.Interfaces
{
    public interface IAboutTextRepository<TEntity> : IRepository<TEntity> where TEntity : AboutText
    {
    }
}
