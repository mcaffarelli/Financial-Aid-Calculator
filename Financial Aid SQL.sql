-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2022 at 04:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `counselor`
--

CREATE TABLE `counselor` (
  `EMP_NUM` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `STUDENT_ID` varchar(25) NOT NULL,
  `EMP_NUM` varchar(25) NOT NULL,
  `GRADE_LEVEL` varchar(25) NOT NULL,
  `LPSD` varchar(25) NOT NULL,
  `LPED` varchar(25) NOT NULL,
  `CREDITS_WEEKS` varchar(25) NOT NULL,
  `COA` varchar(25) NOT NULL,
  `UNSUB_AMOUNT` varchar(25) NOT NULL,
  `SUB_AMOUNT` varchar(25) NOT NULL,
  `PELL_AMOUNT` varchar(25) NOT NULL,
  `TEACH_AMOUNT` varchar(25) NOT NULL,
  `DATE` date NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `counselor`
--
ALTER TABLE `counselor`
  ADD PRIMARY KEY (`EMP_NUM`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD KEY `EMP_NUM` (`EMP_NUM`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`EMP_NUM`) REFERENCES `counselor` (`EMP_NUM`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
