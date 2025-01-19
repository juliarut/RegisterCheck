using System.ComponentModel.DataAnnotations;

namespace backend.DTOs
{
    public class CreateEmployeeDto
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public DateTime ExpiryDate { get; set; }
    }
}
