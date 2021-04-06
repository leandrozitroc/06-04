-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: fixxdb
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (48),(48),(48),(48);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_grupo`
--

DROP TABLE IF EXISTS `tbl_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_grupo` (
  `id_grupo` bigint(20) NOT NULL,
  `txt_descricao` varchar(255) NOT NULL,
  `txt_nome` varchar(255) NOT NULL,
  `taxa_id_taxa` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_grupo`),
  KEY `FK3r0mgiiuey1fri0xd65vm3bio` (`taxa_id_taxa`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_grupo`
--

LOCK TABLES `tbl_grupo` WRITE;
/*!40000 ALTER TABLE `tbl_grupo` DISABLE KEYS */;
INSERT INTO `tbl_grupo` VALUES (3,'Teste descrição 02','Teste 02',NULL),(8,'Descrição 007','Grupo 02',NULL),(12,'Descrição jarm2801','Teste jarm2801 ed',NULL),(14,'Teste descrição 0101 edição','Jarm0101 edição',NULL),(22,'Teste 02032021 ed','Jarm0201 ed',NULL);
/*!40000 ALTER TABLE `tbl_grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_permissao`
--

DROP TABLE IF EXISTS `tbl_permissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_permissao` (
  `id_permissao` bigint(20) NOT NULL,
  `txt_regra` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_permissao`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_permissao`
--

LOCK TABLES `tbl_permissao` WRITE;
/*!40000 ALTER TABLE `tbl_permissao` DISABLE KEYS */;
INSERT INTO `tbl_permissao` VALUES (0,'ADMINISTRADOR'),(1,'CLIENTE'),(2,'PROFISSIONAL');
/*!40000 ALTER TABLE `tbl_permissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_profissional`
--

DROP TABLE IF EXISTS `tbl_profissional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_profissional` (
  `id` bigint(20) NOT NULL,
  `txt_email` varchar(255) DEFAULT NULL,
  `txt_endereco` varchar(255) DEFAULT NULL,
  `txt_nome` varchar(255) DEFAULT NULL,
  `txt_telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_profissional`
--

LOCK TABLES `tbl_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_profissional` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_servico`
--

DROP TABLE IF EXISTS `tbl_servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_servico` (
  `id_servico` bigint(20) NOT NULL,
  `txt_descricao` varchar(255) NOT NULL,
  `txt_nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id_servico`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_servico`
--

LOCK TABLES `tbl_servico` WRITE;
/*!40000 ALTER TABLE `tbl_servico` DISABLE KEYS */;
INSERT INTO `tbl_servico` VALUES (15,'Descrição serviço 0101','Teste jarm2801 ed'),(16,'Descrição 0101','Teste jarm0101 '),(23,'Descrição do serviço','Serviço 0202'),(24,'Descrição serviço 0203 ','Serviço 0203'),(27,'Login jarm','Serviço login jarm'),(28,'Descrição','Eletrônica'),(29,'Descrição chuveiro','Chuveiro'),(30,'Bica','Bica'),(31,'Descrição 0101','Interruptor'),(32,'Instalação','Tomada'),(33,'Descrição ','Chuveirão');
/*!40000 ALTER TABLE `tbl_servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_servico_grupo`
--

DROP TABLE IF EXISTS `tbl_servico_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_servico_grupo` (
  `grupo_id` bigint(20) DEFAULT NULL,
  `servico_id` bigint(20) NOT NULL,
  PRIMARY KEY (`servico_id`),
  KEY `FKc03wnosk0m1rbibngq4tommox` (`grupo_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_servico_grupo`
--

LOCK TABLES `tbl_servico_grupo` WRITE;
/*!40000 ALTER TABLE `tbl_servico_grupo` DISABLE KEYS */;
INSERT INTO `tbl_servico_grupo` VALUES (12,15),(3,16),(22,23),(8,24),(22,27),(22,28),(22,29),(22,30),(22,31),(22,32),(22,33);
/*!40000 ALTER TABLE `tbl_servico_grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_taxa`
--

DROP TABLE IF EXISTS `tbl_taxa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_taxa` (
  `id_taxa` bigint(20) NOT NULL,
  `dbl_valor` double NOT NULL,
  `grupo_id_grupo` bigint(20) DEFAULT NULL,
  `dbl_percentual` double NOT NULL,
  PRIMARY KEY (`id_taxa`),
  KEY `FKm1xqj7n3yx7m41uw9s8kxdw5d` (`grupo_id_grupo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_taxa`
--

LOCK TABLES `tbl_taxa` WRITE;
/*!40000 ALTER TABLE `tbl_taxa` DISABLE KEYS */;
INSERT INTO `tbl_taxa` VALUES (9,10,3,0),(11,50,3,0),(35,195,NULL,23),(36,679,NULL,23),(37,987,NULL,26);
/*!40000 ALTER TABLE `tbl_taxa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_taxa_servico`
--

DROP TABLE IF EXISTS `tbl_taxa_servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_taxa_servico` (
  `servico_id` bigint(20) DEFAULT NULL,
  `taxa_id` bigint(20) NOT NULL,
  PRIMARY KEY (`taxa_id`),
  KEY `FK4omfdkrydut55wqji843sbbc3` (`servico_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_taxa_servico`
--

LOCK TABLES `tbl_taxa_servico` WRITE;
/*!40000 ALTER TABLE `tbl_taxa_servico` DISABLE KEYS */;
INSERT INTO `tbl_taxa_servico` VALUES (33,35),(28,36),(31,37);
/*!40000 ALTER TABLE `tbl_taxa_servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuario`
--

DROP TABLE IF EXISTS `tbl_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_usuario` (
  `id_usuario` bigint(20) NOT NULL,
  `fl_ativo` bit(1) NOT NULL,
  `txt_email` varchar(255) NOT NULL,
  `txt_endereco` varchar(255) DEFAULT NULL,
  `txt_nome` varchar(255) NOT NULL,
  `txt_senha` varchar(255) NOT NULL,
  `txt_telefone` varchar(255) DEFAULT NULL,
  `txt_cpf` varchar(255) DEFAULT NULL,
  `dt_nascimento` date DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `UK_328dixr48xt9n8q7mnpwe9w6y` (`txt_email`),
  UNIQUE KEY `UK_sg8wqoy2gdg1jo32haqfm9uaj` (`txt_telefone`),
  UNIQUE KEY `UK_mlr0itettck8hv65bcs2so3g9` (`txt_cpf`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario`
--

LOCK TABLES `tbl_usuario` WRITE;
/*!40000 ALTER TABLE `tbl_usuario` DISABLE KEYS */;
INSERT INTO `tbl_usuario` VALUES (1,_binary '','rafaelsousalima@live.com','Rua Conselheiro Galvão','Rafael de Sousa Lima','$2a$10$GpjjY93isSU4XUaOzxwQ/et2SQGnbuVKQ.jIwahCE.qypOdsbOAMa','+5521974752188',NULL,NULL),(5,_binary '','Login','Endereço 01','Jarm','$2a$10$tqOFrEymuPfyuUx9YRqHQ./eyJiWsFgzql6uoandJAjTXIRgNWFSa','21 99999999999999999',NULL,NULL),(6,_binary '','adm@gmail.com','End edição','Prof adm edição 02','$2a$10$ClfuVz.ZBUTzD4AZq6AjF.MO6TZgBARzUn3wQ7dNcJr3RVySiZrKi','11111111111','61920396071','1998-12-30'),(10,_binary '','br.alves.jessica@gmail.com','endereço','Jessica Rodrigues','$2a$10$TDUjnVnXH2AQi4B0CKjut.hCG24T/vAHT5LnEDjykxS90LmIzu5PO','21988221991',NULL,NULL),(13,_binary '','jarm@gmail.com','Teste','Jessica','$2a$10$5RU6spVynuqH4O6IYkpvhulz4lylThfDRpC.FEUdriDloLpYTNLnG','111111111111111','11111111111','1991-09-19'),(25,_binary '\0','1@gmail.com','Endereço','Usuário 0201','$2a$10$dNlUf2IKbT6KBC8YaWizPOFJSEV/U/caEwtinaWt.3vzgHiBNsIpq','45939236030','45939236030','2021-03-24'),(43,_binary '','cliente0701@gmail.com','1','cliente novo 0701','$2a$10$ZO4/4FRMxKhfqE.eVMSZXe/DTjLGo.2c7ThfsF2mpSD/YcmYJ5cty','11133333333','58317722090','2021-02-01'),(44,_binary '\0','prof0701@gmail.com','2','Profissional 0701','$2a$10$c8LHHYGiD3sq.T/5rwlEruhnDa4y70S0UVTX6RwK.k6CwgSFnigSK','22221111111','18942686010','2020-11-02'),(45,_binary '','cliente0702@gmail.com','a','cliente via adm 0702','$2a$10$k.67coIPn51oaBZssipCuO4GVVvheWgqVS.ACATsgFYrj0enavWHK','22211113333','75599133001','2021-03-07'),(46,_binary '','cliente@dev.com.br','---','Dev Cliente','$2a$10$rcol3rtVQJZ32v0j59sp8uVUZWxYlo19WBz8GdSBHDwtifiO/N1Z.','00000000000','03455836046','2021-03-10'),(47,_binary '','profissional@dev.com.br','---','Dev Profissional','$2a$10$9zakR1cge7gxMqVn.FaqQOSUbYjKdvBL.aEGbHiZwa4B44MyZEpaa','00000000001','85847491018','2021-03-10');
/*!40000 ALTER TABLE `tbl_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuario_permissao`
--

DROP TABLE IF EXISTS `tbl_usuario_permissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_usuario_permissao` (
  `usuario_id` bigint(20) NOT NULL,
  `permissao_id` bigint(20) NOT NULL,
  PRIMARY KEY (`usuario_id`,`permissao_id`),
  KEY `FKot2pihjdtxosep761plkcn9pe` (`permissao_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario_permissao`
--

LOCK TABLES `tbl_usuario_permissao` WRITE;
/*!40000 ALTER TABLE `tbl_usuario_permissao` DISABLE KEYS */;
INSERT INTO `tbl_usuario_permissao` VALUES (1,0),(5,2),(6,0),(10,1),(13,0),(25,1),(43,1),(44,2),(45,1),(46,1),(47,2);
/*!40000 ALTER TABLE `tbl_usuario_permissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fixxdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-31 15:50:19
