using System.Collections.Generic;

namespace Core.Entities
{
    public class Skill
    {
        public int Id { get; set; }

        public string SkillName { get; set; }

        public IEnumerable<SkillExample> SkillExamples { get; set; }

        public int Percentage { get; set; }
    }
}
