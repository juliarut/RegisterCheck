namespace backend.Models
{
    public class Notification
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
        public int EmployeeId { get; set; }

        // Navigationsprop för relation
        public Employee Employee { get; set; }
    }
}
