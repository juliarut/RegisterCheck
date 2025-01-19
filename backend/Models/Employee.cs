namespace backend.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime RegisterDate { get; set; }
        public ICollection<Extract> Extracts { get; set; }
    }

    
}
