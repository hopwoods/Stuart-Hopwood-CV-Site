using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using API.Models;

namespace API.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task Delete(TEntity entityToDelete);

        Task Delete(int id);

        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null);

        TEntity GetById(int id);

        IEnumerable<TEntity> GetWithRawSql(string query, params object[] parameters);

        Task Insert(TEntity entity);

        Task Update(TEntity entityToUpdate);
    }
}
