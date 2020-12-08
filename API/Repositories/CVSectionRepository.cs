using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class CvSectionRepository<T> : ICvSectionRepository<T> where T : CvSection
    {
        private readonly DatabaseContext _context;
        private readonly DbSet<T> _dbSet;

        public CvSectionRepository(DatabaseContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }


        public async Task Delete(T entityToDelete)
        {
            _dbSet.Remove(entityToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(object id)
        {
            var section = await _dbSet.FindAsync(id);
            _dbSet.Remove(section);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<T> Get(
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, 
            string includeProperties = "")
        {

            IQueryable<T> query = _dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split
                    (new char[] {','}, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }


            return orderBy != null 
                ? orderBy(query).ToList() 
                : query.ToList();
        }

        public async Task<T> GetById(object id)
        {
            var cvSection = await _dbSet.FindAsync(id);

            return cvSection;
        }

        public IEnumerable<T> GetWithRawSql(string query, params object[] parameters)
        {
            throw new NotImplementedException();
        }

        public async Task Insert(T section)
        {
            await _dbSet.AddAsync(section);
            await _context.SaveChangesAsync();
        }

        public async Task Update(T sectionToUpdate)
        {
            _context.Entry(sectionToUpdate).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}