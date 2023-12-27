-- DropIndex
DROP INDEX `bookmars_userId_fkey` ON `bookmars`;

-- AddForeignKey
ALTER TABLE `bookmars` ADD CONSTRAINT `bookmars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
