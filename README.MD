### Project Name: Asynchronous Task Processing System

#### Overview

This project is a client-server application designed to handle asynchronous tasks efficiently using a queue system and worker processes. The system allows clients to submit tasks to the server, which are then processed asynchronously by worker processes.

#### Features

- **Client Interface**: Provides a user-friendly interface for clients to interact with the system.
- **Server**: Handles incoming client requests, authenticates users, and interacts with the queue system and database.
- **Queue System**: Manages tasks that need to be processed asynchronously.
- **Worker Processes**: Consume tasks from the queue and process them independently.
- **Database**: Stores persistent data, such as task status and logs.
- **Logging System**: Logs requests and task processing events for monitoring and debugging.

#### System Architecture

The system follows a client-server model, with the server acting as the intermediary between clients and worker processes. Requests from clients are processed asynchronously using a queue system, which distributes tasks to worker processes for execution.

![System Architecture Diagram](SystemArchitecture.txt)

#### Detailed Process Flow

![Detailed Process Flow Diagram](FlowDiagrams.txt)

#### Code Structure

- **Server**: Contains the main server application (`server.js`) responsible for handling client requests and interacting with the queue system and database.
- **Worker**: Includes worker processes (`worker.js`) responsible for consuming tasks from the queue and processing them.
- **Configuration**: Contains environment and configuration settings for the server and worker processes.
- **Unit Tests**: Includes unit tests (`server.test.js`) to verify the functionality of the server components.

#### Deployment

The system can be deployed using Docker containers for each component. Docker Compose is used to manage and deploy the containers.

- **Dockerfile**: Defines the Docker images for the server and worker processes.
- **docker-compose.yml**: Defines the services and dependencies for the Docker containers, including the server, worker, RabbitMQ, and MongoDB.

#### Running the Application

1. Install Docker and Docker Compose.
2. Clone the repository.
3. Navigate to the project directory.
4. Run `docker-compose up --build` to build and start the Docker containers.

#### Testing

Unit tests can be run using Mocha and Chai:

```sh
npm install --save-dev mocha chai
npm test
```

#### Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

#### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

#### Authors

- Abhishek Prajapat