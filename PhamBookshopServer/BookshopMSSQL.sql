


CREATE TABLE "author" (
  [autnr] int CHECK ([autnr] > 0) NOT NULL IDENTITY,
  [firstname] varchar(255) DEFAULT NULL,
  [familyname] varchar(255) NOT NULL,
  PRIMARY KEY ([autnr])
)   ;

SET IDENTITY_INSERT "author" ON

INSERT INTO "author" ([autnr], [firstname], [familyname]) VALUES
(1, 'Patricia', 'Highsmith'),
(2, 'Iain M.', 'Banks'),
(9, 'Paul', 'Hudson'),
(6, 'Zadie', 'Smith'),
(8, 'Donald E.', 'Knuth'),
(13, 'Eugene', 'ONeill'),
(14, '', 'Ovid'),
(15, 'Percy Bysshe', 'Shelley'),
(16, 'James', 'Joyce'),
(19, 'William', 'Shakespeare');

SET IDENTITY_INSERT "author" OFF


CREATE TABLE book (
  [isbn] char(20) NOT NULL,
  [autnr] int CHECK ([autnr] > 0) NOT NULL,
  [title] varchar(255) NOT NULL,
  [price] float NOT NULL,
  PRIMARY KEY ([isbn])
)  ;




INSERT INTO book ([isbn], [autnr], [title], [price]) VALUES
('0099282976', 1, 'The Cry of the Owl', 10.91),
('0099283077', 1, 'Strangers on a Train', 11.2),
('1857231465', 2, 'The Player of Games', 11.97),
('185723457X', 2, 'Excession', 11.97),
('0099286599', 1, 'The Boy Who Followed Ripley', 11.2),
('1857232739', 2, 'Feersum Endjinn', 11.97),
('0140297782', 6, 'White Teeth', 6.89),
('0596100671', 9, 'PHP in a Nutshell', 29),
('0201485419', 8, 'The Art of Computer Programming 1-3', 94.89),
('1854591029', 13, 'Long Days Journey into Night', 11.95),
('014044789X', 14, 'The Metamorphoses', 13.85),
('0393977528', 15, 'Shelleys Poetry and Prose', 16.97),
('0141182806', 16, 'Ulysses', 13.89);


CREATE TABLE "order" (
  [ordernr] int CHECK ([ordernr] > 0) NOT NULL IDENTITY,
  [username] varchar(255) NOT NULL,
  [ordertime] datetime2(0) NOT NULL,
  [delivery] datetime2(0) DEFAULT NULL,
  PRIMARY KEY ([ordernr])
)   ;

SET IDENTITY_INSERT "order" ON


INSERT INTO "order" ([ordernr], [username], [ordertime], [delivery]) VALUES
(1, 'test', '2006-11-04 14:53:19', '2006-11-04 15:24:59'),
(2, 'test', '2006-11-04 15:11:02', '2006-11-04 15:12:44'),
(3, 'test', '2006-11-04 15:31:10', '2006-11-04 15:37:17'),
(4, 'test', '2006-11-04 15:31:31', '2014-11-26 19:41:01'),
(5, 'test', '2006-11-04 15:40:22', '2006-11-18 17:47:36'),
(6, 'test', '2006-11-18 17:40:21', '2014-11-26 19:41:01'),
(7, 'test', '2014-11-26 19:12:58', NULL),
(8, 'test', '2014-11-26 19:14:33', '2014-11-26 19:41:25'),
(9, 'test', '2014-11-26 19:14:58', '2014-11-26 19:41:25'),
(10, 'test', '2014-11-26 19:15:23', NULL),
(11, 'Josefine', '2014-11-26 19:20:07', NULL),
(12, 'test', '2014-11-26 19:38:18', NULL);


CREATE TABLE ordercontent (
  [ordernr] int CHECK ([ordernr] > 0) NOT NULL,
  [isbn] varchar(20) NOT NULL,
  PRIMARY KEY ([ordernr],[isbn])
)  ;


INSERT INTO ordercontent ([ordernr], [isbn]) VALUES
(1, '0099282976'),
(1, '0099286599'),
(1, '0596100671'),
(2, '0596100671'),
(2, '1857232739'),
(3, '0099283077'),
(3, '014044789X'),
(3, '1857231465'),
(4, '0141182806'),
(4, '0596100671'),
(4, '1857231465'),
(4, '1857232739'),
(5, '1857232739'),
(6, '0099283077'),
(6, '0140297782'),
(6, '0141182806'),
(6, '185723457X'),
(8, '1857232739'),
(9, '0141182806'),
(9, '0393977528'),
(9, '0596100671'),
(9, '1857232739'),
(10, '0099283077'),
(10, '0099286599'),
(11, '0099282976'),
(11, '0141182806'),
(12, '0141182806'),
(12, '53453534');


CREATE TABLE "user" (
  [username] varchar(20) NOT NULL,
  [password] char(60) NOT NULL,
  [email] varchar(60) NOT NULL,
  [admin] smallint NOT NULL DEFAULT 0,
  PRIMARY KEY ([username])
)  ;


INSERT INTO "user" ([username], [password], [email], [admin]) VALUES
('admin', '*4ACFE3202A5FF5CF467898FC58AAB1D615029441', 'admin@admin.com', 1),
('test', '*94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29', 'test@test.com', 0),
('Andreas', '*94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29', 'andreas@schenk.com', 0),
('Josefine', '*94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29', 'josefine@spenger.com', 0);
