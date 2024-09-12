TCP Socket Setup

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 8080
#define BUFFER_SIZE 1024

void handle_client(int client_socket, MYSQL *conn) {
    char buffer[BUFFER_SIZE];
    memset(buffer, 0, sizeof(buffer));

    // Read request from client
    read(client_socket, buffer, sizeof(buffer));
    printf("Received: %s\n", buffer);

    // Process request (assuming simple text commands like "LOGIN", "REGISTER")
    if (strncmp(buffer, "LOGIN", 5) == 0) {
        // Extract username and password
        char username[100], password[100];
        sscanf(buffer + 6, "%s %s", username, password);
        if (login_user(conn, username, password)) {
            write(client_socket, "Login successful", 16);
        } else {
            write(client_socket, "Login failed", 12);
        }
    } else if (strncmp(buffer, "REGISTER", 8) == 0) {
        // Extract username, email, and password
        char username[100], email[100], password[100];
        sscanf(buffer + 9, "%s %s %s", username, email, password);
        if (register_user(conn, username, email, password)) {
            write(client_socket, "Registration successful", 24);
        } else {
            write(client_socket, "Registration failed", 19);
        }
    }

    close(client_socket);
}

int main() {
    int server_fd, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t addr_len = sizeof(client_addr);
    MYSQL *conn;

    // Initialize and connect to the database
    conn = mysql_init(NULL);
    connect_to_db(conn);

    // Create socket
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Bind socket to IP/Port
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    if (bind(server_fd, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        perror("Bind failed");
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(server_fd, 3) < 0) {
        perror("Listen failed");
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d...\n", PORT);

    // Handle incoming connections
    while (1) {
        if ((client_socket = accept(server_fd, (struct sockaddr *)&client_addr, &addr_len)) < 0) {
            perror("Accept failed");
            exit(EXIT_FAILURE);
        }
        handle_client(client_socket, conn);
    }

    mysql_close(conn);
    return 0;
}