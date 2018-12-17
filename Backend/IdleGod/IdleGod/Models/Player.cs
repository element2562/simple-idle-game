using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IdleGod.Models
{
    public class Player
    {

        [Key]
        public string UserId { get; set; }

        public int Level { get; set; }

        public int Money { get; set; }

        public int Salary { get; set; }

        public int Experience { get; set; }
        
        public int XpToLevel { get; set; }

        public int XpGain { get; set; }

        public int SalaryBumpPrice { get; set; }

        public int XpBumpPrice { get; set; }

        public int TimerDecreasePrice { get; set; }

        public int Timer { get; set; }

    }
}
