using System.ComponentModel.DataAnnotations;

namespace BackApp.API.DTOs
{
    public class UserForRegisterDto
    {

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "The password must have between 4 and 16 chars.")]
        public string Password { get; set; }
    }
}