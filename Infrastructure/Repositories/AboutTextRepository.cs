using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Application.Interfaces;
using Core.Entities;
using Marten;
using Marten.Linq;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Repositories
{
    public class AboutTextRepository<TEntity> : IAboutTextRepository<TEntity> where TEntity : AboutText
    {
        private readonly IDocumentStore _documentStore;
        private readonly ILogger<AboutTextRepository<TEntity>> _logger;

        public AboutTextRepository(IDocumentStore documentStore, ILogger<AboutTextRepository<TEntity>> logger)
        {
            _documentStore = documentStore;
            _logger = logger;
        }

        public async Task Delete(TEntity entityToDelete)
        {
            using var session = _documentStore.OpenSession();
            session.Delete(entityToDelete);
            await session.SaveChangesAsync();
            session.Dispose();
            _logger.LogInformation($"AboutText: {entityToDelete} was deleted.");
        }

        public async Task Delete(int id)
        {
            using var session = _documentStore.OpenSession();
            var entityToDelete = Get(s => s.Id == id).SingleOrDefault();
            if (entityToDelete != null)
            {
                session.Delete(entityToDelete);
                await session.SaveChangesAsync();
                _logger.LogInformation($"AboutText: {entityToDelete} was deleted.");
            }

            _logger.LogInformation($"AboutText: {entityToDelete} does not exist..");
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

            if (query == null)
            {
                _logger.LogInformation($"No Records found.");
                return null;
            }

            
            _logger.LogInformation($"AboutText: {query} was fetched.");
            return orderBy != null
                ? orderBy(query).ToList()
                : query.ToList();

        }

        public TEntity GetById(int id)
        {
            using var session = _documentStore.QuerySession();
            var skill = session
                .Query<TEntity>()
                .FirstOrDefault(s => s.Id == id);
            _logger.LogInformation($"AboutText: {skill} was fetched.");

            return skill;
        }

        public async Task Insert(TEntity entity)
        {
            using var session = _documentStore.OpenSession();
            session.Insert(entity);
            await session.SaveChangesAsync();
            _logger.LogInformation($"AboutText: {entity} was inserted.");
            session.Dispose();
        }

        public async Task Update(TEntity entityToUpdate)
        {
            using var session = _documentStore.OpenSession();
            session.Update(entityToUpdate);
            await session.SaveChangesAsync();
            _logger.LogInformation($"AboutText: {entityToUpdate} was updated.");
            session.Dispose();
        }
    }
}