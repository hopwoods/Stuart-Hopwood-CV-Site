using Application.Interfaces;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutTextController : ControllerBase
    {
        private readonly IAboutTextRepository<AboutText> _repository;
        private readonly ILogger<AboutTextController> _logger;
        

        public AboutTextController( IAboutTextRepository<AboutText> repository, ILogger<AboutTextController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        // GET: api/AboutText
        [HttpGet]
        public ActionResult<AboutText> GetAboutText()
        {
            return _repository.Get().FirstOrDefault();
        }

        // GET: api/AboutText/5
        [HttpGet("{id}")]
        public ActionResult<AboutText> GetAboutText(int id)
        {
            var aboutText = _repository.GetById(id);

            if (aboutText == null)
            {
                return NotFound();
            }

            return aboutText;
        }

        // PUT: api/AboutText/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutAboutText(int id, AboutText aboutText)
        {
            if (id != aboutText.Id)
            {
                return BadRequest();
            }

            if (!AboutTextExists(id))
            {
                return NotFound();
            }

            _repository.Update(aboutText);
            return NoContent();
        }

        // POST: api/AboutText
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AboutText>> PostAboutText(AboutText aboutText)
        {
            await _repository.Insert(aboutText);
            return CreatedAtAction("GetAboutText", new { id = aboutText.Id }, aboutText);
        }

        // DELETE: api/AboutText/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAboutText(int id)
        {
            var aboutText = _repository.GetById(id);
            if (aboutText == null)
            {
                return NotFound();
            }

            _repository.Delete(aboutText);

            return NoContent();
        }

        private bool AboutTextExists(int id)
        {
            var aboutText = _repository.GetById(id);
            return aboutText != null;
        }
    }
}
