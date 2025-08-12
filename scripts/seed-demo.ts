import { db, pool } from "../server/db.ts";
import { users, clubs, tournaments } from "../shared/schema.ts";

async function seed() {
  const insertedUsers = await db.insert(users).values([
    {
      email: "admin@example.com",
      password: "$2b$10$C6UzMDM.H6dfI/f/IKcEe.Pw1YwIV/pY5Pja/qvpDMAYA9Yg3.xu", // bcrypt hash for "password"
      role: "admin",
      firstName: "Alice",
      lastName: "Admin",
    },
    {
      email: "player@example.com",
      password: "$2b$10$7sY4Fq9WlH0g5xIdYvrFneK7pHgIuAeGHNirMRHkRkNv1dVQVw1Uu", // bcrypt hash for "secret"
      role: "player",
      firstName: "Bob",
      lastName: "Player",
    },
  ]).returning({ id: users.id });

  const adminId = insertedUsers[0].id;

  const [club] = await db.insert(clubs).values({
    name: "Central Table Tennis Club",
    ownerId: adminId,
    address: "123 Main St",
    phone: "555-0001",
    email: "central@example.com",
  }).returning({ id: clubs.id });

  await db.insert(tournaments).values({
    name: "Spring Invitational",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-04-03"),
    location: "Ulaanbaatar",
    organizerId: adminId,
    clubId: club.id,
    isPublished: true,
  });

  console.log("Seeding completed");
}

seed().catch((err) => {
  console.error(err);
}).finally(async () => {
  await pool.end();
});
