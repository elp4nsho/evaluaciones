-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-06-2019 a las 01:16:53
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `evaluaciones`
--
CREATE DATABASE IF NOT EXISTS `evaluaciones` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `evaluaciones`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion`
--

CREATE TABLE `evaluacion` (
  `id` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fechaInicio` varchar(255) NOT NULL,
  `fechaFin` varchar(255) NOT NULL,
  `total` int(255) NOT NULL,
  `nroPreguntas` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `evaluacion`
--

INSERT INTO `evaluacion` (`id`, `nombre`, `fechaInicio`, `fechaFin`, `total`, `nroPreguntas`) VALUES
(1, 'Evaluacion Satisfaccion', '01/06/2019', '10/06/2019', 0, 15),
(2, 'Evaluación satisfacción MAYO', '01/06/2019', '01/06/2019', 0, 10),
(3, 'Evaluación satisfacción JUNIO', '01/06/2019', '01/06/2019', 0, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacionAContestar`
--

CREATE TABLE `evaluacionAContestar` (
  `id` int(255) NOT NULL,
  `idEvaluacion` int(255) NOT NULL,
  `fechaInicio` varchar(255) NOT NULL,
  `fechaFin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacionesRespondidas`
--

CREATE TABLE `evaluacionesRespondidas` (
  `id` int(255) NOT NULL,
  `idEvaluacionAContestar` varchar(255) NOT NULL,
  `idUsuario` varchar(255) NOT NULL,
  `fecha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id` int(11) NOT NULL,
  `idEvaluacion` int(11) NOT NULL,
  `negativa` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id`, `idEvaluacion`, `negativa`, `titulo`) VALUES
(3, 1, 0, 'Crees que tu jefe trata de enseñarte nuevas cosas'),
(4, 1, 0, 'Cuando sales con tu jefe, suele pagarte el almuerzo'),
(5, 1, 0, 'Cuando tu jefe te saluda, sientes temor'),
(6, 1, 1, 'Tu jefe suele llamarte la atencion'),
(7, 2, 0, 'Arremete contra su jefe cuando algo sale mal'),
(8, 2, 0, 'Su jefe lo contacta antes de una mala noticia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntasRespondidas`
--

CREATE TABLE `preguntasRespondidas` (
  `id` int(11) NOT NULL,
  `idEvaluacionRespondida` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  `idUsuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `rut` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `tipoUsuario` int(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `id` int(255) NOT NULL,
  `evaluacionesRespondidas` varchar(255) NOT NULL,
  `evaluacionesDisponibles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`rut`, `nombre`, `apellido`, `correo`, `tipoUsuario`, `clave`, `id`, `evaluacionesRespondidas`, `evaluacionesDisponibles`) VALUES
('194991992', 'ignacio', 'cisternas', 'icisternas@hotmail.com', 1, '1234', 58, '29', ''),
('198754832', 'leo', 'berrios', 'lberrios@hotmail.com', 1, '1234', 59, '15', '29'),
('administrador', 'administrador', 'administrador', 'administrador', 0, 'admin', 60, '', '18'),
('194991940', 'francisco', 'cisternas', 'fcisternasu@gmail.com', 1, '1234', 61, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariosAContestar`
--

CREATE TABLE `usuariosAContestar` (
  `idEvaluacionAContestar` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `evaluacion`
--
ALTER TABLE `evaluacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `evaluacionAContestar`
--
ALTER TABLE `evaluacionAContestar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `evaluacionesRespondidas`
--
ALTER TABLE `evaluacionesRespondidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntasRespondidas`
--
ALTER TABLE `preguntasRespondidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evaluacion`
--
ALTER TABLE `evaluacion`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `evaluacionAContestar`
--
ALTER TABLE `evaluacionAContestar`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `evaluacionesRespondidas`
--
ALTER TABLE `evaluacionesRespondidas`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `preguntasRespondidas`
--
ALTER TABLE `preguntasRespondidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
