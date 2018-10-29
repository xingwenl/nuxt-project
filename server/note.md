```mysql
CREATE TABLE topic(
	id int auto_increment not null PRIMARY KEY,
	title CHAR(255) NOT NULL,
	content VARCHAR(10000) NOT NULL,
	author CHAR(64) NOT NULL,
	intro CHAR(255),
	create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	modify_time TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);
```

```mysql
CREATE TABLE account(
	id int NOT NULL PRIMARY KEY,
	name CHAR(20) NOT NULL,
	age INT,
	sex INT COMMENT '0女 1男',
	qq CHAR(12) NOT NULL,
	email CHAR(30),
	phone CHAR(30),
	avatar CHAR(255),
	region CHAR(60),
	password CHAR(16),
	last_login_time DATETIME,
	create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	modify_time TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);
```