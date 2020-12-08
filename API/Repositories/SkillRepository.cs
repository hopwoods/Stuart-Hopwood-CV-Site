using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class SkillRepository<TEntity> : ISkillRepository<TEntity> where TEntity : Skill
    {
        private readonly DatabaseContext _context;
        private readonly DbSet<TEntity> _dbSet;

        public SkillRepository(DatabaseContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }


        public async Task Delete(TEntity entityToDelete)
        {
            _dbSet.Remove(entityToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var section = await _dbSet.FindAsync(id);
            _dbSet.Remove(section);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null)
        {
            IQueryable<TEntity> query = _dbSet.Include(s => s.SkillExamples);

            if (filter != null)
            {
                query = query.Where(filter);

            }

            return orderBy != null 
                ? orderBy(query).ToList() 
                : query.ToList();
        }

        public TEntity GetById(int id)
        {
            var skill = _dbSet
                .Where(s => s.Id == id)
                .Include(s => s.SkillExamples)
                .FirstOrDefault();

            return skill;
        }

        public IEnumerable<TEntity> GetWithRawSql(string query, params object[] parameters)
        {
            return _dbSet.FromSqlRaw(query, parameters).ToList();
        }

        public async Task Insert(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Update(TEntity entityToUpdate)
        {
            var skill = await _dbSet.FindAsync(entityToUpdate.Id);

            skill.SkillName = entityToUpdate.SkillName;
            skill.SkillExamples = entityToUpdate.SkillExamples;
            await _context.SaveChangesAsync();
        }
    }
}