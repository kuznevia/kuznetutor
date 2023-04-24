/*
  Warnings:

  - You are about to drop the column `name` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Review` table. All the data in the column will be lost.
  - Added the required column `imageLink` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageLink" TEXT NOT NULL
);
INSERT INTO "new_Review" ("id") SELECT "id" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
