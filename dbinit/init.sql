-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: movieDb
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.23.04.1

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
-- Table structure for table `actor_movie`
--

DROP TABLE IF EXISTS `actor_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actor_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `actor_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `actor_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `actor_movie_idfk_2` (`actor_id`) USING BTREE,
  CONSTRAINT `actor_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `actor_movie_ibfk_4` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`actor_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actor_movie`
--

LOCK TABLES `actor_movie` WRITE;
/*!40000 ALTER TABLE `actor_movie` DISABLE KEYS */;
INSERT INTO `actor_movie` VALUES (17,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(18,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(19,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(20,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(21,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(22,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(23,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(24,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(26,NULL,2,'2023-07-29 00:55:42','2023-07-29 00:55:42'),(27,NULL,2,'2023-07-29 00:57:45','2023-07-29 00:57:45'),(28,NULL,2,'2023-07-29 00:59:04','2023-07-29 00:59:04'),(35,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(36,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(37,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(38,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(39,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(40,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(41,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(42,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(43,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(44,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(45,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(46,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(47,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(48,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(49,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(50,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(51,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(52,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(53,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(54,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(55,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(56,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(57,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(58,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(59,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(60,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(61,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(62,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(63,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(64,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(65,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(66,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(67,8,4,'2023-07-31 08:56:49','2023-07-31 08:56:49'),(68,8,5,'2023-07-31 08:56:49','2023-07-31 08:56:49'),(69,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(70,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(71,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(72,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(73,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(74,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(75,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(76,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(79,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(80,33,5,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `actor_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `actor_id` int NOT NULL AUTO_INCREMENT,
  `actor_name` varchar(255) NOT NULL,
  `gender` tinyint DEFAULT '0',
  `age` int DEFAULT '0',
  `avartar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`actor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Hồng Nam 1',1,23,'public/avatar/actor-1-Screenshot from 2023-03-20 19-48-49.png','2023-07-26 10:21:34','2023-07-28 20:23:15'),(2,'Nguyễn Hoàng Nam',1,23,'public/avatar/ff436a1ce61d5aafd77fd34b73d9b136','2023-07-26 18:13:11','2023-07-26 19:04:45'),(3,'Hoàng Trung Nguyên',1,23,'public/avatar/Screenshot from 2023-05-30 19-59-36.png','2023-07-26 18:13:22','2023-07-26 18:13:22'),(4,'Trần Hà Linh',0,23,'public/avatar/Screenshot from 2023-05-30 19-59-36.png','2023-07-26 18:13:36','2023-07-26 18:13:36'),(5,'Nguyễn Bá Nam',1,23,'public/avatar/Screenshot from 2023-05-30 19-59-36.png','2023-07-26 18:13:44','2023-07-26 18:13:44'),(6,'Dương Quang Minh',1,23,'public/avatar/Screenshot from 2023-05-30 19-59-36.png','2023-07-26 18:13:52','2023-07-26 18:13:52'),(7,'Trâm Anh',0,23,'actor-7-public/avatar/Screenshot from 2023-03-02 20-45-08.png','2023-07-28 10:01:30','2023-07-28 10:01:30'),(8,'Trâm Anh 1',0,23,'actor-8-public/avatar/Screenshot from 2023-03-02 20-45-08.png','2023-07-28 10:02:34','2023-07-28 10:02:34'),(9,'Trâm Anh 1',0,23,'actor-9-public/avatar/Screenshot from 2023-03-23 16-23-09.png','2023-07-28 10:02:49','2023-07-28 10:02:49'),(10,'Trâm Anh 2',0,23,'actor-10-Screenshot from 2023-03-23 16-23-09.png','2023-07-28 10:09:56','2023-07-28 10:09:56'),(11,'Trâm Anh 2',0,23,'actor-11-Screenshot from 2023-03-07 08-06-04.png','2023-07-28 10:10:28','2023-07-28 10:10:28'),(12,'Trâm Anh 3',0,23,'public/avatar/actor-12-Screenshot from 2023-03-23 16-23-44.png','2023-07-28 10:13:14','2023-07-28 10:16:10');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_movie`
--

DROP TABLE IF EXISTS `company_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `company_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `company_movie_idfk_2` (`company_id`) USING BTREE,
  CONSTRAINT `company_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `company_movie_ibfk_4` FOREIGN KEY (`company_id`) REFERENCES `companys` (`company_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_movie`
--

LOCK TABLES `company_movie` WRITE;
/*!40000 ALTER TABLE `company_movie` DISABLE KEYS */;
INSERT INTO `company_movie` VALUES (7,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(8,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(9,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(10,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(11,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(12,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(13,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(14,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(15,8,4,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(16,8,5,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(17,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(18,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(19,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(20,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(21,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(22,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(23,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(24,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(25,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(26,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(27,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(28,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(29,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(30,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(31,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(32,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(33,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(34,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(35,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(36,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(37,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(38,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(39,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(40,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(41,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(42,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(43,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(44,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(45,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(46,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(47,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(48,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(49,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(50,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(51,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(52,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(53,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(54,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(55,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(56,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(59,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(60,33,5,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `company_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companys`
--

DROP TABLE IF EXISTS `companys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companys` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companys`
--

LOCK TABLES `companys` WRITE;
/*!40000 ALTER TABLE `companys` DISABLE KEYS */;
INSERT INTO `companys` VALUES (2,'Galaxy play','2023-07-27 21:17:19','2023-07-27 21:17:19'),(3,'BHD','2023-07-27 21:17:31','2023-07-27 21:17:31'),(4,' VAC Group Holding','2023-07-27 21:17:38','2023-07-27 21:17:38'),(5,' HK Films','2023-07-27 21:17:48','2023-07-27 21:17:48'),(6,'Chánh Phương Films','2023-07-27 21:17:57','2023-07-27 21:17:57'),(7,'ABC Pictures','2023-07-27 21:18:07','2023-07-27 21:18:07'),(8,'CJ HK','2023-07-27 21:18:14','2023-07-27 21:18:14'),(9,'Vietcom Films','2023-07-27 21:18:22','2023-07-27 21:19:39'),(10,'Hãng phim Xanh','2023-07-27 21:18:31','2023-07-27 21:18:31'),(11,'Film Clinic','2023-07-27 21:18:46','2023-07-27 21:18:46');
/*!40000 ALTER TABLE `companys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (2,'Việt Nam','2023-07-27 20:12:22','2023-07-27 20:12:52'),(3,'Âu mỹ ','2023-07-27 20:13:11','2023-07-27 20:13:11'),(4,'Nhật Bản ','2023-07-27 20:13:20','2023-07-27 20:13:20'),(5,'Thái Lan ','2023-07-27 20:13:29','2023-07-27 20:13:29'),(6,'Hàn Quốc ','2023-07-27 20:13:42','2023-07-27 20:13:42'),(7,'Đài Loan ','2023-07-27 20:13:49','2023-07-27 20:13:49'),(8,'Ấn Độ ','2023-07-27 20:13:58','2023-07-27 20:13:58'),(9,'Trung Quốc ','2023-07-27 20:14:08','2023-07-27 20:14:08'),(10,'Hồng Kông ','2023-07-27 20:14:17','2023-07-27 20:14:17'),(11,'Singapore ','2023-07-27 20:14:24','2023-07-27 20:14:24');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country_movie`
--

DROP TABLE IF EXISTS `country_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `country_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `country_movie_idfk_2` (`country_id`) USING BTREE,
  CONSTRAINT `country_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `country_movie_ibfk_4` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_movie`
--

LOCK TABLES `country_movie` WRITE;
/*!40000 ALTER TABLE `country_movie` DISABLE KEYS */;
INSERT INTO `country_movie` VALUES (7,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(8,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(9,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(10,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(11,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(12,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(13,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(14,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(15,8,4,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(16,8,5,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(17,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(18,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(19,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(20,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(21,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(22,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(23,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(24,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(25,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(26,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(27,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(28,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(29,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(30,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(31,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(32,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(33,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(34,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(35,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(36,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(37,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(38,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(39,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(40,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(41,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(42,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(43,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(44,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(45,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(46,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(47,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(48,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(49,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(50,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(51,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(52,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(53,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(54,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(55,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(56,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(59,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(60,33,5,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `country_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director_movie`
--

DROP TABLE IF EXISTS `director_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `director_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `director_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `director_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `director_movie_idfk_2` (`director_id`) USING BTREE,
  CONSTRAINT `director_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `director_movie_ibfk_4` FOREIGN KEY (`director_id`) REFERENCES `directors` (`director_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director_movie`
--

LOCK TABLES `director_movie` WRITE;
/*!40000 ALTER TABLE `director_movie` DISABLE KEYS */;
INSERT INTO `director_movie` VALUES (7,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(8,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(9,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(10,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(11,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(12,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(13,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(14,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(15,8,4,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(16,8,5,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(17,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(18,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(19,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(20,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(21,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(22,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(23,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(24,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(25,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(26,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(27,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(28,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(29,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(30,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(31,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(32,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(33,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(34,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(35,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(36,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(37,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(38,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(39,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(40,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(41,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(42,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(43,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(44,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(45,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(46,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(47,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(48,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(49,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(50,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(51,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(52,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(53,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(54,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(55,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(56,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(59,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(60,33,5,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `director_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directors`
--

DROP TABLE IF EXISTS `directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directors` (
  `director_id` int NOT NULL AUTO_INCREMENT,
  `director_name` varchar(255) NOT NULL,
  `gender` tinyint DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`director_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES (1,'Nguyễn Hoàng Nam',0,'2023-07-27 20:58:53','2023-07-27 20:59:37'),(2,'Đức Cường',1,'2023-07-27 20:59:56','2023-07-27 20:59:56'),(3,'Tấn Quý',1,'2023-07-27 21:00:03','2023-07-27 21:00:03'),(4,'Trung Hiếu',1,'2023-07-27 21:00:08','2023-07-27 21:00:08'),(5,'Thanh Tùng',1,'2023-07-27 21:00:17','2023-07-27 21:00:17'),(6,'Viết Tài',1,'2023-07-27 21:00:24','2023-07-27 21:00:24');
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `episodes`
--

DROP TABLE IF EXISTS `episodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `episodes` (
  `episodes_id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `episode` int DEFAULT NULL,
  `runtime` int DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `url_video` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`episodes_id`),
  KEY `episodes_movie_idfk` (`movie_id`) USING BTREE,
  CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `episodes`
--

LOCK TABLES `episodes` WRITE;
/*!40000 ALTER TABLE `episodes` DISABLE KEYS */;
INSERT INTO `episodes` VALUES (3,8,1,20,'2023-08-15 21:31:22','public/movies/video-movie8-episode1-Screenshot from 2023-03-23 16-23-02.png','2023-07-30 00:25:42','2023-07-30 19:27:17'),(4,8,2,21,'2023-07-29 21:31:22','public/movies/video-movie8-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 00:25:42','2023-07-30 00:25:42'),(5,9,1,20,'2022-07-29 21:31:22','public/movies/video-movie9-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:06:23','2023-07-30 23:06:23'),(6,9,2,21,'2022-07-29 21:31:22','public/movies/video-movie9-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:06:23','2023-07-30 23:06:23'),(7,10,1,20,'2021-07-29 21:31:22','public/movies/video-movie10-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:06:38','2023-07-30 23:06:38'),(8,10,2,21,'2021-07-29 21:31:22','public/movies/video-movie10-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:06:38','2023-07-30 23:06:38'),(9,11,1,20,'2020-07-29 21:31:22','public/movies/video-movie11-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:06:50','2023-07-30 23:06:50'),(10,11,2,21,'2020-07-29 21:31:22','public/movies/video-movie11-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:06:50','2023-07-30 23:06:50'),(11,12,1,20,'2019-07-29 21:31:22','public/movies/video-movie12-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:01','2023-07-30 23:07:01'),(12,12,2,21,'2019-07-29 21:31:22','public/movies/video-movie12-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:01','2023-07-30 23:07:01'),(13,13,1,20,'2023-07-29 21:31:22','public/movies/video-movie13-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:14','2023-07-30 23:07:14'),(14,13,2,21,'2023-07-29 21:31:22','public/movies/video-movie13-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:14','2023-07-30 23:07:14'),(15,14,1,20,'2023-07-29 21:31:22','public/movies/video-movie14-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:18','2023-07-30 23:07:18'),(16,14,2,21,'2023-07-29 21:31:22','public/movies/video-movie14-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:18','2023-07-30 23:07:18'),(17,15,1,20,'2023-07-29 21:31:22','public/movies/video-movie15-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:20','2023-07-30 23:07:20'),(18,15,2,21,'2023-07-29 21:31:22','public/movies/video-movie15-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:20','2023-07-30 23:07:20'),(19,16,1,20,'2023-07-29 21:31:22','public/movies/video-movie16-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:24','2023-07-30 23:07:24'),(20,16,2,21,'2023-07-29 21:31:22','public/movies/video-movie16-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:24','2023-07-30 23:07:24'),(21,16,1,20,'2020-07-29 21:31:22','public/movies/video-movie16-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:34','2023-07-30 23:07:34'),(22,16,2,21,'2020-07-29 21:31:22','public/movies/video-movie16-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:34','2023-07-30 23:07:34'),(23,17,1,20,'2020-07-29 21:31:22','public/movies/video-movie17-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:42','2023-07-30 23:07:42'),(24,17,2,21,'2020-07-29 21:31:22','public/movies/video-movie17-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:42','2023-07-30 23:07:42'),(25,18,1,20,'2020-07-29 21:31:22','public/movies/video-movie18-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:47','2023-07-30 23:07:47'),(26,18,2,21,'2020-07-29 21:31:22','public/movies/video-movie18-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:47','2023-07-30 23:07:47'),(27,19,1,20,'2020-07-29 21:31:22','public/movies/video-movie19-episode1-Screenshot from 2023-05-30 19-48-46.png','2023-07-30 23:07:50','2023-07-30 23:07:50'),(28,19,2,21,'2020-07-29 21:31:22','public/movies/video-movie19-episode2-Screenshot from 2023-05-30 15-22-40.png','2023-07-30 23:07:50','2023-07-30 23:07:50');
/*!40000 ALTER TABLE `episodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_movie`
--

DROP TABLE IF EXISTS `genre_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genre_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `genre_movie_idfk_2` (`genre_id`) USING BTREE,
  CONSTRAINT `genre_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `genre_movie_ibfk_4` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_movie`
--

LOCK TABLES `genre_movie` WRITE;
/*!40000 ALTER TABLE `genre_movie` DISABLE KEYS */;
INSERT INTO `genre_movie` VALUES (7,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(8,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(9,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(10,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(11,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(12,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(13,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(14,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(15,8,4,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(16,8,5,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(17,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(18,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(19,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(20,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(21,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(22,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(23,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(24,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(25,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(26,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(27,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(28,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(29,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(30,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(31,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(32,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(33,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(34,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(35,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(36,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(37,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(38,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(39,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(40,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(41,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(42,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(43,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(44,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(45,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(46,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(47,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(48,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(49,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(50,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(51,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(52,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(53,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(54,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(55,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(56,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(59,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(60,33,5,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `genre_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Người lớn','2023-07-27 15:38:47','2023-07-27 15:44:29'),(2,'Kinh dị','2023-07-27 15:44:07','2023-07-27 15:44:45'),(3,'Chiếu rạp','2023-07-27 15:44:55','2023-07-27 15:44:55'),(4,'Tình cảm','2023-07-27 15:45:02','2023-07-27 15:45:02'),(5,'Hành động','2023-07-27 15:45:08','2023-07-27 15:45:08'),(6,'Chiến tranh','2023-07-27 15:45:16','2023-07-27 15:45:16'),(7,'Bạo lực','2023-07-27 15:45:31','2023-07-27 15:45:31'),(8,'Gia đình','2023-07-27 15:45:38','2023-07-27 15:45:38'),(9,'Hoạt hình','2023-07-27 15:45:45','2023-07-27 15:45:45'),(10,'Cổ trang','2023-07-27 15:45:54','2023-07-27 15:45:54'),(11,'Bí ẩn','2023-07-27 15:46:00','2023-07-27 15:46:00'),(12,'Võ thuật ','2023-07-27 15:46:09','2023-07-27 15:46:09'),(13,'Phiêu lưu ','2023-07-27 15:46:16','2023-07-27 15:46:16'),(14,'Khoa học ','2023-07-27 15:46:25','2023-07-27 15:46:25'),(15,'Âm nhạc ','2023-07-27 15:46:31','2023-07-27 15:46:31'),(16,'Tâm lý ','2023-07-27 15:46:46','2023-07-27 15:46:46'),(17,'Kịch tính ','2023-07-27 15:47:00','2023-07-27 15:47:00'),(18,'Hài','2023-07-27 15:47:05','2023-07-27 15:47:05'),(19,'Hình sự','2023-07-27 15:47:15','2023-07-27 15:47:15'),(20,'Viễn tưởng','2023-07-27 15:47:22','2023-07-27 15:47:22'),(21,'Thần thoại','2023-07-27 15:47:32','2023-07-27 15:47:32');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language_movie`
--

DROP TABLE IF EXISTS `language_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int DEFAULT NULL,
  `language_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `language_movie_idfk_1` (`movie_id`) USING BTREE,
  KEY `language_movie_idfk_2` (`language_id`) USING BTREE,
  CONSTRAINT `language_movie_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `language_movie_ibfk_4` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_movie`
--

LOCK TABLES `language_movie` WRITE;
/*!40000 ALTER TABLE `language_movie` DISABLE KEYS */;
INSERT INTO `language_movie` VALUES (7,9,2,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(8,9,3,'2023-07-28 15:21:48','2023-07-28 15:21:48'),(9,10,2,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(10,10,3,'2023-07-28 15:22:18','2023-07-28 15:22:18'),(11,11,2,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(12,11,3,'2023-07-28 15:23:41','2023-07-28 15:23:41'),(13,12,2,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(14,12,3,'2023-07-28 20:08:22','2023-07-28 20:08:22'),(15,8,3,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(16,8,4,'2023-07-29 21:09:48','2023-07-29 21:09:48'),(17,13,2,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(18,13,3,'2023-07-30 22:23:41','2023-07-30 22:23:41'),(19,14,3,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(20,14,2,'2023-07-30 22:23:59','2023-07-30 22:23:59'),(21,15,2,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(22,15,3,'2023-07-30 22:24:04','2023-07-30 22:24:04'),(23,16,2,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(24,16,3,'2023-07-30 22:24:08','2023-07-30 22:24:08'),(25,17,2,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(26,17,3,'2023-07-30 22:24:12','2023-07-30 22:24:12'),(27,18,2,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(28,18,3,'2023-07-30 22:24:17','2023-07-30 22:24:17'),(29,19,2,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(30,19,3,'2023-07-30 22:24:26','2023-07-30 22:24:26'),(31,20,2,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(32,20,3,'2023-07-30 22:24:31','2023-07-30 22:24:31'),(33,21,2,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(34,21,3,'2023-07-30 22:24:35','2023-07-30 22:24:35'),(35,22,2,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(36,22,3,'2023-07-30 22:24:38','2023-07-30 22:24:38'),(37,23,2,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(38,23,3,'2023-07-30 22:24:43','2023-07-30 22:24:43'),(39,24,2,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(40,24,3,'2023-07-30 22:24:47','2023-07-30 22:24:47'),(41,25,2,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(42,25,3,'2023-07-30 22:24:51','2023-07-30 22:24:51'),(43,26,2,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(44,26,3,'2023-07-30 22:24:57','2023-07-30 22:24:57'),(45,27,2,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(46,27,3,'2023-07-30 22:25:02','2023-07-30 22:25:02'),(47,28,2,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(48,28,3,'2023-07-30 22:25:07','2023-07-30 22:25:07'),(49,29,2,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(50,29,3,'2023-08-05 23:10:25','2023-08-05 23:10:25'),(51,30,2,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(52,30,3,'2023-08-05 23:31:54','2023-08-05 23:31:54'),(53,31,2,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(54,31,3,'2023-08-05 23:35:45','2023-08-05 23:35:45'),(55,32,2,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(56,32,3,'2023-08-05 23:36:50','2023-08-05 23:36:50'),(59,33,3,'2023-08-05 23:40:20','2023-08-05 23:40:20'),(60,33,4,'2023-08-05 23:40:20','2023-08-05 23:40:20');
/*!40000 ALTER TABLE `language_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `language_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'vietnamese','2023-07-27 21:28:52','2023-07-27 21:28:52'),(2,'american','2023-07-27 21:28:59','2023-07-27 21:28:59'),(3,'english','2023-07-27 21:29:05','2023-07-27 21:29:05'),(4,'portugal','2023-07-27 21:29:23','2023-07-27 21:30:37');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `movie_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` text,
  `poster_url` varchar(255) DEFAULT NULL,
  `trailer_url` varchar(255) DEFAULT NULL,
  `view` bigint NOT NULL DEFAULT '0',
  `vote_avg` float NOT NULL DEFAULT '0',
  `vote_count` bigint NOT NULL DEFAULT '0',
  `isSeries` tinyint DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cover_photo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (8,'Hoàng Nam1232','dep zai','public/movies/poster-movie-8-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-8-Screenshot from 2023-03-23 16-22-30.png',3,5,3,1,'2023-07-28 15:13:15','2023-07-31 08:56:49',NULL),(9,'Harry Potter 2','Chiếc cốc lửa',NULL,NULL,0,0,0,0,'2023-07-28 15:21:48','2023-07-28 15:21:48',NULL),(10,'Harry Potter 2','Chiếc cốc lửa',NULL,'public/movies/trailer-movie-10-Screenshot from 2023-03-23 16-22-30.png',0,0,0,0,'2023-07-28 15:22:18','2023-07-28 15:22:18',NULL),(11,'Harry Potter 2','Chiếc cốc lửa','public/movies/poster-movie-11-Screenshot from 2023-03-23 16-23-02.png',NULL,0,0,0,0,'2023-07-28 15:23:41','2023-07-28 15:23:41',NULL),(12,'Harry Potter 4','Chiếc cốc lửa 5','public/movies/poster-movie-12-Screenshot from 2023-03-23 16-22-30.png',NULL,0,0,0,0,'2023-07-28 20:08:22','2023-07-28 20:08:22',NULL),(13,'Harry Potter 5','Chiếc cốc lửa 5','public/movies/poster-movie-13-Screenshot from 2023-03-23 16-22-30.png',NULL,0,0,0,0,'2023-07-30 22:23:41','2023-07-30 22:23:41',NULL),(14,'Harry Potter 6','Chiếc cốc lửa 6','public/movies/poster-movie-14-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-14-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:23:59','2023-07-30 22:23:59',NULL),(15,'Harry Potter 7','Chiếc cốc lửa 7','public/movies/poster-movie-15-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-15-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:04','2023-07-30 22:24:04',NULL),(16,'Harry Potter 8','Chiếc cốc lửa 8','public/movies/poster-movie-16-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-16-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:08','2023-07-30 22:24:08',NULL),(17,'Harry Potter 9','Chiếc cốc lửa 9','public/movies/poster-movie-17-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-17-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:12','2023-07-30 22:24:12',NULL),(18,'Harry Potter 10','Chiếc cốc lửa 10','public/movies/poster-movie-18-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-18-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:17','2023-07-30 22:24:17',NULL),(19,'Harry Potter 11','Chiếc cốc lửa 11','public/movies/poster-movie-19-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-19-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:26','2023-07-30 22:24:26',NULL),(20,'Harry Potter 12','Chiếc cốc lửa 12','public/movies/poster-movie-20-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-20-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:31','2023-07-30 22:24:31',NULL),(21,'Harry Potter 13','Chiếc cốc lửa 13','public/movies/poster-movie-21-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-21-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:35','2023-07-30 22:24:35',NULL),(22,'Harry Potter 14','Chiếc cốc lửa 14','public/movies/poster-movie-22-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-22-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:38','2023-07-30 22:24:38',NULL),(23,'Harry Potter 15','Chiếc cốc lửa 15','public/movies/poster-movie-23-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-23-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:43','2023-07-30 22:24:43',NULL),(24,'Harry Potter 16','Chiếc cốc lửa 16','public/movies/poster-movie-24-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-24-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:47','2023-07-30 22:24:47',NULL),(25,'Harry Potter 17','Chiếc cốc lửa 17','public/movies/poster-movie-25-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-25-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:51','2023-07-30 22:24:52',NULL),(26,'Harry Potter 18','Chiếc cốc lửa 18','public/movies/poster-movie-26-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-26-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:24:57','2023-07-30 22:24:57',NULL),(27,'Harry Potter 19','Chiếc cốc lửa 19','public/movies/poster-movie-27-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-27-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:25:02','2023-07-30 22:25:02',NULL),(28,'Harry Potter 20','Chiếc cốc lửa 20','public/movies/poster-movie-28-Screenshot from 2023-03-23 16-22-30.png','public/movies/trailer-movie-28-Screenshot from 2023-03-28 07-49-58.png',0,0,0,0,'2023-07-30 22:25:07','2023-07-30 22:25:07',NULL),(29,'Harry Potter 20','Chiếc cốc lửa 20','public/movies/poster-movie-29-Screenshot from 2023-03-29 20-15-38.png','public/movies/trailer-movie-29-Screenshot from 2023-03-29 14-42-51.png',0,0,0,0,'2023-08-05 23:10:25','2023-08-05 23:10:25',NULL),(30,'Harry Potter 20','Chiếc cốc lửa 20','public/movies/poster-movie-30-Screenshot from 2023-04-24 11-22-12.png','public/movies/trailer-movie-30-Screenshot from 2023-03-29 14-42-51.png',0,0,0,0,'2023-08-05 23:31:54','2023-08-05 23:31:54',NULL),(31,'Harry Potter 24','Chiếc cốc lửa 20','public/movies/poster-movie-31-Screenshot from 2023-04-24 11-22-12.png','public/movies/trailer-movie-31-Screenshot from 2023-03-29 14-42-51.png',0,0,0,0,'2023-08-05 23:35:45','2023-08-05 23:35:46',NULL),(32,'Harry Potter 25','Chiếc cốc lửa 20','public/movies/poster-movie-32-Screenshot from 2023-04-24 11-22-12.png','public/movies/trailer-movie-32-Screenshot from 2023-03-29 14-42-51.png',0,0,0,0,'2023-08-05 23:36:50','2023-08-05 23:36:50',NULL),(33,'Hoàng Nam1232','dep zai','public/movies/poster-movie-33-Screenshot from 2023-04-24 11-22-12.png','public/movies/trailer-movie-33-Screenshot from 2023-03-29 14-42-51.png',0,0,0,1,'2023-08-05 23:38:08','2023-08-05 23:40:40','public/movies/cover_photo-movie-33-Screenshot from 2023-03-28 07-49-58.png');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('A','admin','2023-07-25 23:16:31','2023-07-25 23:16:31'),('U','user','2023-07-25 23:17:27','2023-07-25 23:17:27');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(10) NOT NULL,
  `refresh_token` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_ibfk_1` (`role_id`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@gmail.com','user1','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:08','2023-07-25 23:18:08'),(2,'user2@gmail.com','user2','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:26','2023-07-25 23:18:26'),(3,'user3@gmail.com','user3','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:32','2023-07-25 23:18:32'),(4,'user4@gmail.com','user4','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:39','2023-07-25 23:18:39'),(5,'user5@gmail.com','user5','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:46','2023-07-25 23:18:46'),(6,'user6@gmail.com','user6','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:53','2023-07-25 23:18:53'),(7,'user7@gmail.com','user7','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:18:59','2023-07-25 23:18:59'),(8,'user8@gmail.com','user8','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:19:05','2023-07-25 23:19:05'),(9,'user9@gmail.com','user9','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:19:11','2023-07-25 23:19:11'),(10,'user10@gmail.com','user10','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','U',NULL,'2023-07-25 23:19:17','2023-07-25 23:19:17'),(11,'hntreant23@gmail.com','hntreant23','$2a$10$ByWfBHzVlwH2rIEyLYQ8ve1rgdOjwI.FL.uCmRv6q40jas3J9qDP6','A','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaG50cmVhbnQyMyIsInJvbGVfaWQiOiJBIiwidXNlcl9pZCI6MTF9LCJpYXQiOjE2OTMxNTA4MzksImV4cCI6MTcxOTA3MDgzOX0.QaW7wYgXa791uW8q5AwpH7kIWxNhIHkhR1PpddbxgaQ','2023-07-25 23:19:39','2023-08-27 22:40:39');
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

-- Dump completed on 2024-01-12  0:33:10
