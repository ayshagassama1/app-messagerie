-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 15 fév. 2022 à 23:06
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `messagerie`
--

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `destinataire` varchar(32) NOT NULL,
  `origine` varchar(32) NOT NULL,
  `contenu` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `destinataire`, `origine`, `contenu`, `date`) VALUES
(1, '1', '2', 'mmmmmmmm', '2022-02-02 00:00:00'),
(32, '4', '2', 'koko', '2022-02-15 14:27:39'),
(3, '2', '4', 'saly1', '2022-02-02 00:00:00'),
(29, '1', '3', 'oooooooo', '2022-02-15 14:17:39'),
(5, '4', '2', 'fatou2', '2022-02-02 00:00:00'),
(6, '1', '2', 'hello', '2022-02-14 00:00:00'),
(7, '1', '3', 'world', '2022-02-14 00:00:00'),
(8, '1', '2', 'world', '2022-02-14 00:00:00'),
(9, '1', '3', 'ddddddddddd', '2022-02-14 00:00:00'),
(28, '1', '3', 'gogo', '2022-02-15 14:15:48'),
(26, '2', '3', 'bbq', '2022-02-15 11:51:02'),
(12, '1', '2', 'lp', '2022-02-15 07:53:43'),
(13, '1', '2', 'gogo', '2022-02-15 07:55:50'),
(30, '1', '3', 'lp', '2022-02-15 14:26:40'),
(15, '1', '2', 'tadaa', '2022-02-23 08:22:37'),
(16, '1', '2', 'oooooooo', '2022-02-15 08:28:47'),
(17, '3', '2', 'zzzzzzzzzz', '2022-02-15 08:28:56'),
(31, '1', '2', 'ttttttt', '2022-02-15 14:27:28'),
(19, '1', '2', 'lp', '2022-02-15 10:32:08'),
(20, '1', '2', 'ttttttt', '2022-02-15 10:43:25'),
(21, '1', '2', 'non', '2022-02-15 10:45:50'),
(22, '1', '2', 'oui', '2022-02-15 10:46:01'),
(23, '1', '2', 'bibi', '2022-02-15 10:52:34'),
(24, '1', '2', 'test RECHARGEMENT', '2022-02-15 11:00:58'),
(25, '1', '2', 'fin', '2022-02-15 11:02:32'),
(33, '3', '2', 'narutoo', '2022-02-15 14:27:53'),
(34, '1', '2', 'non', '2022-02-15 14:28:05'),
(35, '1', '2', 'oooooooo', '2022-02-15 14:28:24'),
(36, '1', '2', 'diouli', '2022-02-15 14:28:37'),
(37, '1', '3', 'oui', '2022-02-15 14:30:37'),
(38, '2', '3', 'bbq', '2022-02-15 14:31:11'),
(39, '1', '4', 'gogo', '2022-02-15 14:34:26'),
(40, '2', '4', 'bbq', '2022-02-15 14:34:35'),
(41, '2', '4', 'nini', '2022-02-15 14:34:51'),
(42, '3', '2', 'aaaaaaaaaa', '2022-02-15 15:26:19'),
(43, '3', '2', 'hello', '2022-02-15 15:26:36'),
(44, '1', '2', 'bibi', '2022-02-15 17:13:35'),
(45, '1', '2', 'vd', '2022-02-15 21:36:47');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `prenom` varchar(32) NOT NULL,
  `nom` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `prenom`, `nom`, `email`, `pass`) VALUES
(1, 'Groupe', ' ', ' ', ' '),
(2, 'Fatou', 'Dia', 'fatou@dia.com', 'password'),
(3, 'Aicha', 'Gassama', 'aicha@gassama.com', 'password'),
(4, 'Saly', 'Samake', 'saly@samake.com', 'password'),
(5, 'Modou', 'modou', 'modou@modou.com', 'password'),
(6, 'nana', 'diaby', 'nana@diaby.com', 'password');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
