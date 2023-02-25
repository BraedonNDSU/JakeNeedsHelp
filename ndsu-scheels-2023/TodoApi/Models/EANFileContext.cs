using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models;

public class EANFileContext : DbContext
{
    public EANFileContext(DbContextOptions<EANFileContext> options)
        : base(options)
    {
    }

    public DbSet<EANFILE> EANFILE { get; set; } = null!;
}