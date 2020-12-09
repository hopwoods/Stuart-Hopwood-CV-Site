using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Application.Interfaces;
using Core.Entities;
using Marten;
using Marten.Linq;

namespace Infrastructure.Repositories
{
    public class SkillRepository<TEntity> : ISkillRepository<TEntity> where TEntity : Skill
    {
        private readonly IDocumentStore _documentStore;

        public SkillRepository(IDocumentStore documentStore)
        {
            _documentStore = documentStore;
        }

        public async Task Delete(TEntity entityToDelete)
        {
            using var session = _documentStore.OpenSession();
            session.Delete(entityToDelete);
            await session.SaveChangesAsync();
            session.Dispose();
        }

        public async Task Delete(int id)
        {
            using var session = _documentStore.OpenSession();
            var entityToDelete = Get(s => s.Id == id).SingleOrDefault();
            if (entityToDelete != null)
            {
                session.Delete(entityToDelete);
                await session.SaveChangesAsync();
            }
            session.Dispose();
        }

        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IMartenQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null)
        {
            using var session = _documentStore.QuerySession();
            var query = session.Query<TEntity>();

            if (filter != null)
            {
                query = query.Where(filter) as IMartenQueryable<TEntity>;

            }

            if (query != null)
            {
                return orderBy != null
                    ? orderBy(query).ToList()
                    : query.ToList();
            }

            return null;
        }

        public TEntity GetById(int id)
        {
            using var session = _documentStore.QuerySession();
            var skill = session
                .Query<TEntity>()
                .FirstOrDefault(s => s.Id == id);

            return skill;
        }

        public async Task Insert(TEntity entity)
        {
            using var session = _documentStore.OpenSession();
            session.Insert(entity);
            await session.SaveChangesAsync();
            session.Dispose();
        }

        public async Task Update(TEntity entityToUpdate)
        {
            using var session = _documentStore.OpenSession();
            session.Update(entityToUpdate);
            await session.SaveChangesAsync();
            session.Dispose();
        }
    }
}