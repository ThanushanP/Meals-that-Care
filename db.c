#include <mysql/mysql.h>
#include <stdio.h>
#include <string.h>

void connect_to_db(MYSQL *conn) {
    mysql_init(conn);
    if (mysql_real_connect(conn, "localhost", "username", "password", "database_name", 0, NULL, 0)) {
        printf("Database connection successful!\n");
    } else {
        printf("Database connection failed: %s\n", mysql_error(conn));
    }
}

int register_user(MYSQL *conn, const char *username, const char *email, const char *password) {
    char query[512];
    snprintf(query, sizeof(query), "INSERT INTO users (username, email, password) VALUES ('%s', '%s', '%s')", username, email, password);

    if (mysql_query(conn, query)) {
        fprintf(stderr, "User registration failed: %s\n", mysql_error(conn));
        return 0;  // Failure
    }
    return 1;  // Success
}

int login_user(MYSQL *conn, const char *username, const char *password) {
    char query[512];
    snprintf(query, sizeof(query), "SELECT * FROM users WHERE username='%s' AND password='%s'", username, password);

    if (mysql_query(conn, query)) {
        fprintf(stderr, "Login query failed: %s\n", mysql_error(conn));
        return 0;  // Failure
    }

    MYSQL_RES *result = mysql_store_result(conn);
    if (mysql_num_rows(result) > 0) {
        printf("Login successful!\n");
        return 1;  // Success
    } else {
        printf("Invalid username or password.\n");
        return 0;  // Failure
    }
}