using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly ISkillRepository<Skill> _repository;

        public SkillsController(DatabaseContext context, ISkillRepository<Skill> repository)
        {
            _context = context;
            _repository = repository;
        }

        // GET: api/Skills
        [HttpGet]
        public ActionResult<IEnumerable<Skill>> GetSkills()
        {
            return _repository.Get().ToList();
        }

        // GET: api/Skills/5
        [HttpGet("{id}")]
        public ActionResult<Skill> GetSkill(int id)
        {
            var skill = _repository.GetById(id);

            if (skill == null)
            {
                return NotFound();
            }

            return skill;
        }

        // PUT: api/Skills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkill(int id, Skill skill)
        {
            if (id != skill.Id)
            {
                return BadRequest();
            }

            if (!SkillExists(id))
            {
                return NotFound();
            }

            try
            {
                await _repository.Update(skill);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // POST: api/Skills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Skill>> PostSkill(Skill skill)
        {
            await _repository.Insert(skill);
            return CreatedAtAction("GetSkill", new { id = skill.Id }, skill);
        }

        // DELETE: api/Skills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(int id)
        {
            var skill = _repository.GetById(id);
            if (skill == null)
            {
                return NotFound();
            }

            await _repository.Delete(skill);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SkillExists(int id)
        {
            var skill = _repository.GetById(id);
            return skill != null;
        }
    }
}
