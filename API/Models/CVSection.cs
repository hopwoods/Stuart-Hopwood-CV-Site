namespace API.Models
{
    /// <summary>
    /// A CV Content section. Contains the Title and Content values for display on the UI. 
    /// </summary>
    public class CvSection
    {
        /// <summary>
        /// Unique Id of the section.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Title of the section.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// HTML Content for the section.
        /// </summary>
        public string Content { get; set; }
    }
}
