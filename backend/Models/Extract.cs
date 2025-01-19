namespace backend.Models
{
    public class Extract
    {
        public int Id { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidTo { get; set; }
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}
