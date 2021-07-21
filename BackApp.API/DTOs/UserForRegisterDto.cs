using System;
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
        [Required]
        public string Gender { get; set; }

        [Required]
        public string KnownAs { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public UserForRegisterDto() {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}