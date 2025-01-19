using backend.Data;
using backend.DTOs;
using backend.Models;

namespace backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            if (context.Employees.Any())
            {
                return;
            }

            var employeeDtos = new List<CreateEmployeeDto>
            {
                new CreateEmployeeDto
                {
                    Name = "Karin Svensson",
                    Email = "karin.svensson@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(90)
                },
                new CreateEmployeeDto
                {
                    Name = "Fatima Al-Hassan",
                    Email = "fatima.alhassan@barnomsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(30)
                },
                new CreateEmployeeDto
                {
                    Name = "Anders Johansson",
                    Email = "anders.johansson@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(-10)
                },
                new CreateEmployeeDto
                {
                    Name = "Amina Mohammed",
                    Email = "amina.mohammed@förskola.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(60)
                },
                new CreateEmployeeDto
                {
                    Name = "Eva Karlsson",
                    Email = "eva.karlsson@omsorgsboende.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(30)
                },
                new CreateEmployeeDto
                {
                    Name = "Leyla Ahmed",
                    Email = "leyla.ahmed@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(90)
                },
                new CreateEmployeeDto
                {
                    Name = "Maria Santos",
                    Email = "maria.santos@omsorgsboende.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(15)
                },
                new CreateEmployeeDto
                {
                    Name = "Nadja Ivanova",
                    Email = "nadja.ivanova@förskola.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(50)
                },
                new CreateEmployeeDto
                {
                    Name = "Sara Andersson",
                    Email = "sara.andersson@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(78)
                },
                new CreateEmployeeDto
                {
                    Name = "Lars Pettersson",
                    Email = "lars.pettersson@förskola.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(35)
                },
                new CreateEmployeeDto
                {
                    Name = "Hanna Nguyen",
                    Email = "hanna.nguyen@barnomsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(45)
                },
                new CreateEmployeeDto
                {
                    Name = "Mariam Hussein",
                    Email = "mariam.hussein@barnomsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(-10)
                },
                new CreateEmployeeDto
                {
                    Name = "Helena Lindberg",
                    Email = "helena.lindberg@omsorgsboende.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(90)
                },
                new CreateEmployeeDto
                {
                    Name = "Ali Reza",
                    Email = "ali.reza@barnomsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(10)
                },
                new CreateEmployeeDto
                {
                    Name = "Sofia Eriksson",
                    Email = "sofia.eriksson@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(20)
                },
                new CreateEmployeeDto
                {
                    Name = "Ahmed Abdullahi",
                    Email = "ahmed.abdullahi@förskola.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(-20)
                },
                new CreateEmployeeDto
                {
                    Name = "Petra Hansson",
                    Email = "petra.hansson@barnomsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(60)
                },
                new CreateEmployeeDto
                {
                    Name = "Fatma Yildiz",
                    Email = "fatma.yildiz@omsorg.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(90)
                },
                new CreateEmployeeDto
                {
                    Name = "Johanna Gustafsson",
                    Email = "johanna.gustafsson@förskola.se",
                    ExpiryDate = DateTime.UtcNow.AddDays(40)
                }
            };

        
            var employees = employeeDtos.Select(dto => new Employee
            {
                Name = dto.Name,
                Email = dto.Email,
                RegisterDate = DateTime.UtcNow,
                Extracts = new List<Extract>
                {
                    new Extract
                    {
                        ValidFrom = DateTime.UtcNow,
                        ValidTo = dto.ExpiryDate
                    }
                }
            }).ToList();

            
            context.Employees.AddRange(employees);

            
            context.SaveChanges();
        }
    }
}
