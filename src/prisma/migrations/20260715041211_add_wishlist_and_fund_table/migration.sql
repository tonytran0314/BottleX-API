-- CreateTable
CREATE TABLE `Wishlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL DEFAULT 'wishlist item',
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `reserved` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `image` VARCHAR(191) NOT NULL DEFAULT '#',
    `description` VARCHAR(191) NOT NULL DEFAULT 'description for the wishlist item',
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fund` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL DEFAULT 'fund item',
    `reserved` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `image` VARCHAR(191) NOT NULL DEFAULT '#',
    `description` VARCHAR(191) NOT NULL DEFAULT 'description for the fund item',
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wishlist` ADD CONSTRAINT `Wishlist_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fund` ADD CONSTRAINT `Fund_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
