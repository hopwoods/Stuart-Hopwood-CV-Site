using System.Collections.Generic;

namespace API.Models
{
    public class Skill
    {
        public int Id { get; set; }

        public string SkillName { get; set; }

        public IEnumerable<SkillExample> SkillExamples { get; set; }
    }
}
