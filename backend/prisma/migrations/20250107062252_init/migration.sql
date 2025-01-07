-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `rarity` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `elementId` INTEGER NOT NULL,
    `pathId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Element` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Path` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_elementId_fkey` FOREIGN KEY (`elementId`) REFERENCES `Element`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_pathId_fkey` FOREIGN KEY (`pathId`) REFERENCES `Path`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
