-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile_number" INTEGER NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProfileDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profile" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bio" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "source_code" TEXT NOT NULL,
    "live_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectSkills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skill_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "ProjectSkills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectSkills_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
