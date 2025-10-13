import { type User, type InsertUser, type Lead, type InsertLead, leads } from "@shared/schema";
import { db } from "./db";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    // Not implemented for this MVP
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    // Not implemented for this MVP
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Not implemented for this MVP
    throw new Error("Not implemented");
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }
}

export const storage = new DbStorage();
