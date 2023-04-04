using Microsoft.AspNetCore.Mvc;
using Mission14.Data;

namespace Mission14.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) 
        {
            context = temp;
        }
       public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(r => r.Edited == "Yes")
                .OrderBy(r => r.Title)
                .ToArray();
            return x;
        }
       
    }
}
