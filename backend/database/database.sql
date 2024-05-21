/*
MySQL [database_1]> describe cards;
+--------+-------------+------+-----+---------+----------------+
| Field  | Type        | Null | Key | Default | Extra          |
+--------+-------------+------+-----+---------+----------------+
| id     | int         | NO   | PRI | NULL    | auto_increment |
| name   | varchar(50) | NO   |     | NULL    |                |
| power  | int         | NO   |     | NULL    |                |
| health | int         | NO   |     | NULL    |                |
+--------+-------------+------+-----+---------+----------------+
4 rows in set (0.004 sec)

MySQL [database_1]> describe users;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int         | NO   | PRI | NULL    | auto_increment |
| username | varchar(50) | NO   |     | NULL    |                |
| mana     | int         | YES  |     | 20      |                |
| hp       | int         | YES  |     | 75      |                |
+----------+-------------+------+-----+---------+----------------+
4 rows in set (0.003 sec)

MySQL [database_1]> describe games;
+-------------------+-----------+------+-----+-------------------+-------------------+
| Field             | Type      | Null | Key | Default           | Extra             |
+-------------------+-----------+------+-----+-------------------+-------------------+
| id                | int       | NO   | PRI | NULL              | auto_increment    |
| user1_id          | int       | YES  | MUL | NULL              |                   |
| user2_id          | int       | YES  | MUL | NULL              |                   |
| start_time        | timestamp | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| end_time          | timestamp | YES  |     | NULL              |                   |
| num_of_cards_used | int       | YES  |     | 0                 |                   |
| total_dmg_dealt   | int       | YES  |     | 0                 |                   |
| total_mana_used   | int       | YES  |     | 0                 |                   |
+-------------------+-----------+------+-----+-------------------+-------------------+
8 rows in set (0.005 sec)

MySQL [database_1]> select * from cards;
+----+-------------+-------+--------+
| id | name        | power | health |
+----+-------------+-------+--------+
|  1 | gigel       |     2 |      4 |
|  2 | mirel       |     1 |      1 |
|  3 | vasile      |     1 |      1 |
|  4 | george      |     1 |      1 |
|  5 | florin      |     1 |      1 |
|  6 | jesse_card1 |     2 |      3 |
|  7 | jesse_card2 |     2 |      2 |
|  8 | jesse_card3 |     1 |      1 |
|  9 | jesse_card4 |     1 |      1 |
| 10 | jesse_card5 |     1 |      1 |
+----+-------------+-------+--------+
10 rows in set (0.000 sec)

MySQL [database_1]> select * from users;
+----+----------+------+------+
| id | username | mana | hp   |
+----+----------+------+------+
|  1 | walter   |   20 |   75 |
|  2 | jesse    |   20 |   75 |
+----+----------+------+------+
2 rows in set (0.000 sec)

MySQL [database_1]> select * from games;
Empty set (0.001 sec)
*/