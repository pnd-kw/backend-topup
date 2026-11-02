# Backend Top-Up System

A backend engineering learning project focused on designing APIs and data models, ensuring transactional consistency, and exploring security, testing, scalability, observability, and deployment through a wallet and top-up system.

> **Status:** In Development 🚧

## About The Project

This project is an exploration of backend engineering principles through the development of a wallet and top-up system.

The main goal is not just to build functional APIs, but to understand how backend systems are designed, implemented, tested, and prepared for production environments.

This project will evolve incrementally, starting with a modular backend architecture and gradually exploring more advanced engineering concepts.

## Learning Objectives

The primary areas of exploration include:

- **API Design:** Designing RESTful APIs and consistent response structures.
- **Database Design:** Modeling relational data and managing database migrations.
- **Transaction Consistency:** Understanding database transactions, concurrency, and race conditions.
- **Security:** Implementing authentication, authorization, and input validation.
- **Testing:** Writing unit, integration, and end-to-end tests.
- **Scalability:** Exploring caching, asynchronous processing, and system performance.
- **Observability:** Implementing structured logging, metrics, and tracing.
- **Deployment:** Containerization, CI/CD pipelines, and deployment strategies.

## Tech Stack

### Currently Used

| Technology | Purpose                               |
| Node.js    | JavaScript runtime                    |
| TypeScript | Type-safe development                 |
| Prisma ORM | Database access and schema management |
| PostgreSQL | Relational database                   |
| Jest       | Automated testing                     |

### Planned Exploration

| Technology           | Purpose                                     |
| Redis                | Caching and distributed rate limiting       |
| RabbitMQ / Kafka     | Asynchronous messaging and event processing |
| Docker               | Application containerization                |
| GitHub Actions       | CI/CD automation                            |
| k6                   | Load and performance testing                |
| OpenTelemetry        | Distributed tracing                         |
| Prometheus & Grafana | Metrics and monitoring                      |

*Planned technologies may change based on project requirements and learning progress.*

## Project Architecture

The project currently follows a modular structure with separation of responsibilities between controllers, services, and repositories.

```text
src/
├── generated/
├── lib/
│   └── prisma.ts
├── middlewares/
├── modules/
│   ├── transaction/
│   │   └── transaction.service.ts
│   ├── user/
│   │   ├── user.controller.ts
│   │   ├── user.repository.ts
│   │   ├── user.service.ts
│   │   └── user.test.ts
│   └── wallet/
│       ├── wallet.controller.ts
│       ├── wallet.repository.ts
│       └── wallet.service.ts
├── utils/
├── app.ts
└── server.ts

prisma/
├── migrations/
└── schema.prisma
```

The architecture will evolve as the project grows.

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js (version 24)
- npm
- PostgreSQL
- Git

Docker Desktop will also be used in later development stages.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/backend-topup.git
```

2. Navigate to the project directory:

```bash
cd backend-topup
```

3. Install dependencies:

```bash
npm install
```

4. Configure environment variables.

Create a `.env` file in the project root and configure the database connection according to `prisma.config.ts`.

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/backend_topup?schema=public"
```

5. Validate the Prisma schema and generate the client:

```bash
npx prisma validate
npx prisma generate
```

6. Run database migrations:

```bash
npx prisma migrate dev
```

### Running the Application

Start the development server:

```bash
npm run dev
```

### Running Tests

Execute the test suite:

```bash
npm test
```

## Development Roadmap

The project is developed incrementally through the following milestones:

- [ ] **M0 — Project Setup:** Environment preparation, Git workflow, and project documentation.
- [ ] **M1 — Backend Foundations:** Application structure, configuration, error handling, and API fundamentals.
- [ ] **M2 — Database Design:** User, wallet, top-up, and transaction data models.
- [ ] **M3 — API & Authentication:** User authentication, authorization, and wallet APIs.
- [ ] **M4 — Transaction Consistency:** Database transactions, idempotency, and concurrency handling.
- [ ] **M5 — Automated Testing:** Unit, integration, and API testing.
- [ ] **M6 — Containerization:** Docker and reproducible development environments.
- [ ] **M7 — Asynchronous Processing:** Background jobs and message brokers.
- [ ] **M8 — CI/CD & Observability:** Automated pipelines, logging, metrics, and tracing.
- [ ] **M9 — Performance Testing:** Load testing and performance optimization.
- [ ] **M10 — Portfolio Release:** Complete documentation, architecture diagrams, and deployment.

## Engineering Principles

Throughout development, the following principles will guide technical decisions:

- Understand the problem before choosing a technology.
- Prefer simplicity over unnecessary complexity.
- Maintain clear separation of responsibilities.
- Prioritize data integrity and transactional correctness.
- Write testable and maintainable code.
- Measure performance instead of making assumptions.
- Document important architectural decisions.

## Project Documentation

Additional documentation will be maintained as the project evolves.

| Document                 | Description                                 |
| `docs/PROJECT-STATUS.md` | Current development progress and next steps |
| `docs/ROADMAP.md`        | Detailed development milestones             |
| `docs/ARCHITECTURE.md`   | System architecture and design              |
| `docs/DECISIONS/`        | Architecture Decision Records (ADR)         |

## Author

Developed as a personal backend engineering learning project.

GitHub: [@pnd-kw](https://github.com/pnd-kw)