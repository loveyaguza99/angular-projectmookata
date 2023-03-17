-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 12, 2023 at 04:12 PM
-- Server version: 8.0.23
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muta`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int NOT NULL,
  `menu` text COLLATE utf8mb4_unicode_ci,
  `price` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `ref_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `menu`, `price`, `count`, `total_price`, `ref_id`) VALUES
(1, 'เครื่องดื่มไม่อั้น', 200, 2, 400, 1),
(2, 'ไอศกรีมไม่อั้น', 300, 2, 600, 2),
(3, '1', 2, 3, 4, 5),
(4, '1', 2, 3, 4, 5),
(7, 'ไอศกรีมไม่อั้น', 30, 2, 60, 5),
(8, 'ไอศกรีมไม่อั้น', 30, 2, 60, 1),
(9, 'ไอศกรีมไม่อั้น', 30, 2, 60, 2),
(10, 'ไอศกรีมไม่อั้น', 30, 2, 60, 3),
(11, 'ไอศกรีมไม่อั้น', 30, 2, 60, 6),
(12, 'เครื่องดื่มไม่อั้น', 30, 2, 60, 1),
(13, 'เครื่องดื่มไม่อั้น', 30, 2, 60, 2),
(14, 'เครื่องดื่มไม่อั้น', 30, 2, 60, 3),
(15, 'เครื่องดื่มไม่อั้น', 30, 2, 60, 4),
(16, 'เครื่องดื่มไม่อั้น', 30, 2, 60, 5),
(17, 'ชุดเล็กอิ่มคุ้ม', 59, 1, 59, 1),
(18, 'ชุดเล็กอิ่มคุ้ม', 59, 1, 59, 2),
(19, 'ชุดเล็กอิ่มคุ้ม', 59, 1, 59, 3),
(20, 'ชุดเล็กอิ่มคุ้ม', 59, 1, 59, 4),
(21, 'ชุดใหญ่อิ่มคุ้ม', 129, 1, 129, 1),
(22, 'ชุดใหญ่อิ่มคุ้ม', 129, 1, 129, 2),
(23, 'บุฟเฟต์ผู้ใหญ่', 159, 1, 159, 2),
(24, 'บุฟเฟต์ผู้ใหญ่', 159, 1, 159, 3),
(25, 'บุฟเฟต์ผู้ใหญ่', 159, 1, 159, 4),
(26, 'บุฟเฟต์ผู้ใหญ่', 159, 1, 159, 5);

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `ref_id` int NOT NULL,
  `date_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `table_id` int DEFAULT NULL,
  `total_price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `receipts`
--

INSERT INTO `receipts` (`ref_id`, `date_time`, `table_id`, `total_price`) VALUES
(1, '2023-03-12 20:20:33', 2, 200),
(2, '2023-03-12 21:06:41', 1, 900),
(3, '2023-03-12 23:08:26', 3, 100),
(4, '2023-03-12 23:08:50', 4, 200),
(5, '2023-03-12 23:08:57', 5, 300),
(7, '2023-03-12 23:11:01', 6, 400);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`ref_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `ref_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
