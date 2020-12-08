using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CvSectionsController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly ICvSectionRepository<CvSection> _repository;
        

        public CvSectionsController(DatabaseContext context, ICvSectionRepository<CvSection> repository)
        {
            _context = context;
            _repository = repository;
        }

        // GET: api/CvSections
        [HttpGet]
        public ActionResult<IEnumerable<CvSection>> GetCvSections()
        {
            var sections = _repository.Get();
            return sections.ToList();
        }

        // GET: api/CvSections/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CvSection>> GetCvSection(int id)
        {
            var cvSection = await _repository.GetById(id);

            if (cvSection == null)
            {
                return NotFound();
            }

            return cvSection;
        }

        // PUT: api/CvSections/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCvSection(int id, CvSection cvSection)
        {
            if (id != cvSection.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.Update(cvSection);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CvSectionExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // POST: api/CvSections
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CvSection>> PostCvSection(CvSection cvSection)
        {
            await _repository.Insert(cvSection);

            return CreatedAtAction("GetCvSection", new { id = cvSection.Id }, cvSection);
        }

        // DELETE: api/CvSections/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCvSection(int id)
        {
            var cvSection = await _repository.GetById(id);
            if (cvSection == null)
            {
                return NotFound();
            }

            await _repository.Delete(id);

            return NoContent();
        }

        private bool CvSectionExists(int id)
        {
            var section = _repository.Get(e => e.Id == id);
            return section != null;
        }
    }
}
