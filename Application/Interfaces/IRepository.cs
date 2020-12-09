using Marten.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task Delete(TEntity entityToDelete);

        Task Delete(int id);

        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IMartenQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null);

        TEntity GetById(int id);

        Task Insert(TEntity entity);

        Task Update(TEntity entityToUpdate);
    }
}
