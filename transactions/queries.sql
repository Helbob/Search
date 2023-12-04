DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id             INTEGER,
    user_name           TEXT,
    user_last_name      TEXT,
    user_balance        TEXT,
    PRIMARY KEY(user_id)
);

INSERT INTO users VALUES(null, "A", "Aa", 10);
INSERT INTO users VALUES(null, "B", "Bb", 20);

