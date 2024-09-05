-- AlterTable
ALTER TABLE `User` ADD COLUMN `plan` ENUM('FREE', 'PREMIUM') NOT NULL DEFAULT 'FREE';

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `noteText` VARCHAR(191) NULL,
    `informationText` VARCHAR(191) NULL,
    `reviewText` VARCHAR(191) NULL,
    `thanksText` VARCHAR(191) NULL,
    `backgroundColor` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `ip` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NULL,
    `audio` VARCHAR(191) NULL,
    `socialLink` VARCHAR(191) NULL,
    `socialType` ENUM('LINKEDIN', 'TWITTER') NULL,
    `name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
