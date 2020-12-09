﻿using Application.Interfaces;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly ISkillRepository<Skill> _repository;

        public SkillsController( ISkillRepository<Skill> repository)
        {
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
        public IActionResult PutSkill(int id, Skill skill)
        {
            if (id != skill.Id)
            {
                return BadRequest();
            }

            if (!SkillExists(id))
            {
                return NotFound();
            }

            _repository.Update(skill);
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
        public IActionResult DeleteSkill(int id)
        {
            var skill = _repository.GetById(id);
            if (skill == null)
            {
                return NotFound();
            }

            _repository.Delete(skill);

            return NoContent();
        }

        private bool SkillExists(int id)
        {
            var skill = _repository.GetById(id);
            return skill != null;
        }
    }
}
