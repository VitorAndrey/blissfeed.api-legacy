import { User as PrismaUser, Prisma } from "@prisma/client";

export type User = PrismaUser;
export type CreateUser = Prisma.UserCreateInput;
