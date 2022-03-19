namespace BackApp.API.Helpers
{
    public class UserParams
    {
        private const int maxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 1;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > maxPageSize ? maxPageSize : value); }
        }
    }
}