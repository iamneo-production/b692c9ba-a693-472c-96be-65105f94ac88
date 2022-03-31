using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }
        public DataContext(DbContextOptions options) : base(options)
        {
        }
       public DbSet<User> Users { get; set; }
       public DbSet<Admin> Admins { get; set; }
       public DbSet<Login> Logins { get; set; }
       public DbSet<academy> Academies { get; set; }
       public DbSet<course> courses { get; set; }
       public DbSet<student> Students { get; set; }


       protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=chessacademyadmission;Integrated security=true;");
                //optionsBuilder.UseSqlServer("Server=0.0.0.0;Data Source=.;User id=sa;Password=examlyMssql@123;Initial Catalog=Airnet;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");


            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.email)
                    .HasName("PK__Admin__A9D10535A2233830");

                entity.ToTable("Admin");

                entity.Property(e => e.email).HasMaxLength(50);

                entity.Property(e => e.password).HasMaxLength(25);

                entity.Property(e => e.userRole).HasMaxLength(15);
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.HasKey(e => e.email)
                    .HasName("PK__Login__A9D105356207150E");

                entity.ToTable("Login");

                entity.Property(e => e.email).HasMaxLength(50);

                entity.Property(e => e.password).HasMaxLength(25);
            });


            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.email)
                    .HasName("PK__Users__A9D10535E29D705B");

                entity.Property(e => e.email).HasMaxLength(50);

                entity.Property(e => e.password).HasMaxLength(25);

                entity.Property(e => e.userRole).HasMaxLength(15);

                entity.Property(e => e.username).HasMaxLength(25);
            });

            OnModelCreatingPartial(modelBuilder);
        }
        void OnModelCreatingPartial(ModelBuilder modelBuilder){}
    }
}