using IdleGod.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdleGod.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Player> Player { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            Player player = new Player
            {
                UserId = Guid.NewGuid().ToString(),
                Level = 1,
                Money = 0,
                Salary = 25,
                Experience = 0,
                XpToLevel = 500,
                XpGain = 10,
                XpBumpPrice = 500,
                SalaryBumpPrice = 750,
                TimerDecreasePrice = 10000,
                Timer = 20
            };

            modelBuilder.Entity<Player>().HasData(player);
        }
    }
}
