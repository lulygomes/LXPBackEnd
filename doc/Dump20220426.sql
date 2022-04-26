-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: lxp
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('145e47e5-67a0-48fa-8be4-9f0cfa45f25f','006a16ed585c49005df04c92e52b6ccfeff5f09af593ab0223cb96e9fecd97fa','2022-04-26 16:39:20.884','20220426163119_create_data_base',NULL,NULL,'2022-04-26 16:39:03.831',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `questionId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacherId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `answers_teacherId_fkey` (`teacherId`),
  KEY `answers_questionId_fkey` (`questionId`),
  CONSTRAINT `answers_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `answers_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES ('834bd019-a590-4fb5-8f8f-2ba80f5a6dcb','\n\nE – =SE(E(Algo for Verdadeiro, Outra coisa será Verdadeira), Valor se Verdadeiro, Valor se Falso)\n\nOU – =SE(OU(Algo for Verdadeiro, Outra coisa será Verdadeira), Valor se Verdadeiro, Valor se Falso)\n\nNÃO – =SE(NÃO(Algo for Verdadeiro), Valor se Verdadeiro, Valor se Falso)','637918a3-b819-44ed-9937-01f642d1950b','d5ed7ea1-f924-4aca-ae90-73ea0787ff44');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacherId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `durationInMinutes` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_teacherId_fkey` (`teacherId`),
  CONSTRAINT `courses_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('2918f5b3-21ab-414b-a5ab-92ba34b801b8','PowerPoint 2','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',160,'2022-04-26 17:06:18.676','2022-04-26 17:06:18.677'),('29da69b4-a511-4e46-b48e-07a6d33513b9','TypeScript','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',200,'2022-04-26 17:09:11.835','2022-04-26 17:09:11.836'),('2a6d742f-8fc5-45ab-98ad-e57f6e6eacbd','Windows ','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',120,'2022-04-26 17:06:47.394','2022-04-26 17:06:47.395'),('3115ccf4-bb74-4361-80b7-270e9a9ace46','ReactJs','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',140,'2022-04-26 17:09:52.793','2022-04-26 17:09:52.794'),('351c007e-9943-4415-b1d8-fdd9b17080b1','JavaScript 3','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',124,'2022-04-26 17:08:59.460','2022-04-26 17:08:59.461'),('37ea6865-4316-4e3e-b9ad-888d6b23497c','Excel 2','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',120,'2022-04-26 16:58:23.002','2022-04-26 16:58:23.003'),('3842fd0e-be3e-410c-98ee-a332408b7ecc','CSS 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',120,'2022-04-26 17:08:21.879','2022-04-26 17:08:21.880'),('3e3ab8f6-5ede-4b5d-81f6-0fea8e30c2cd','HTML 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',150,'2022-04-26 17:07:47.598','2022-04-26 17:07:47.598'),('6634d21a-d6e3-4ce4-86e2-95383c728762','NodeJs','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',125,'2022-04-26 17:09:32.414','2022-04-26 17:09:32.415'),('77003f59-10ea-455b-b775-399745d8575f','NodeJs 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',125,'2022-04-26 17:09:40.379','2022-04-26 17:09:40.380'),('83ce3500-246b-44e6-886d-e9f6f98cada0','Windows','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',200,'2022-04-26 17:07:01.978','2022-04-26 17:07:01.979'),('a337271d-8818-46fb-8672-a1154d605cb7','HTML 3','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',100,'2022-04-26 17:07:55.206','2022-04-26 17:07:55.207'),('a757602c-46b9-4159-a21c-60da59644871','Word 2','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',320,'2022-04-26 17:05:49.612','2022-04-26 17:05:49.613'),('c3850287-e594-4bf8-862f-d8c6483f8303','JavaScript 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',123,'2022-04-26 17:08:48.384','2022-04-26 17:08:48.385'),('ca2c2ea3-d1af-4fe1-a9eb-749c3df87a2e','JavaScript','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',320,'2022-04-26 17:08:41.782','2022-04-26 17:08:41.783'),('d7008024-8a44-44d6-902e-46c25a9d5212','TypeScript 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',125,'2022-04-26 17:09:19.921','2022-04-26 17:09:19.921'),('d876e959-ce5d-4ce2-b02a-2a9ff06d9c37','ReactJs 2','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',154,'2022-04-26 17:09:58.996','2022-04-26 17:09:58.996'),('dcbff30f-8693-4bd5-b7b3-402877c5de0b','CSS ','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',300,'2022-04-26 17:08:12.754','2022-04-26 17:08:12.754'),('e3fc702a-8205-4bf7-8f46-0714ca08a8e0','HTML','3f4c2017-a6c5-4a94-83b4-c2351f34e5ee',120,'2022-04-26 17:07:38.194','2022-04-26 17:07:38.195'),('ec3c0900-42c9-4291-81c3-43999dc6c57e','Excel','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',250,'2022-04-26 16:57:06.452','2022-04-26 16:57:06.453'),('f952948a-8a8c-4067-bd02-17d53cb7ab8b','PowerPoint','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',125,'2022-04-26 17:06:10.151','2022-04-26 17:06:10.152'),('fae25549-9b7a-45b2-9607-fdb3b71edf33','Word','d5ed7ea1-f924-4aca-ae90-73ea0787ff44',140,'2022-04-26 17:05:36.037','2022-04-26 17:05:36.038');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `studentId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `open` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `questions_studentId_fkey` (`studentId`),
  KEY `questions_courseId_fkey` (`courseId`),
  CONSTRAINT `questions_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `questions_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES ('637918a3-b819-44ed-9937-01f642d1950b','9f545bf7-4271-4d15-aae7-75cb45a1f4b2','ec3c0900-42c9-4291-81c3-43999dc6c57e','Não entendi a função SE, quando utilizados com \'E\' e \'OU\'',0);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('3f4c2017-a6c5-4a94-83b4-c2351f34e5ee','Joao Teacher','joao-teacher@mail.com','$2b$08$SXMRnqfFCx.M4L7qPX2Yxu5tjhubfRmeFFLPAX0pyqNZZoN.U6d1S','teacher','2022-04-26 16:58:52.062','2022-04-26 16:58:52.062'),('9f545bf7-4271-4d15-aae7-75cb45a1f4b2','Luiz Student','luiz-student@mail.com','$2b$08$cMfyc0/aoNqemn6jq2eOteCK.ICe4BufmonoZ0S4iO7hxDe0jszre','student','2022-04-26 16:55:32.083','2022-04-26 16:55:32.083'),('d5ed7ea1-f924-4aca-ae90-73ea0787ff44','Ana Teacher','ana-teacher@mail.com','$2b$08$egAaS3dBiuETmUoqlivnleIsXtNYRkzlEF4KIu8KKJkyLqsFLuOGS','teacher','2022-04-26 16:54:38.924','2022-04-26 16:54:38.924'),('fd3adbbd-34cf-4afc-902d-dd1ca7fcf581','Lucas ADM','lucas-adm@mail.com','$2b$08$N3F85crsmYaomHFJQJltH.rVqLe7G8fMLi9WTWNQhGO9H0ekwKWK2','adm','2022-04-26 16:53:41.043','2022-04-26 16:53:41.001');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-26 14:17:06
