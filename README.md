# DigiSol – Digital Solutions Self-Learning Portal

A web server that hosts self-learning content for students studying
**Digital Solutions General Senior Subject (QLD)**.

## Topics Covered

| Unit | Topic |
|------|-------|
| Unit 1 | Digital Systems |
| Unit 1 | Data & Information |
| Unit 2 | Networks & Cybersecurity |
| Unit 3 | Algorithms & Programming |
| Unit 4 | HCI & UI Design |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Install and Run

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start
```

The learning portal will be available at **http://localhost:3000**.

### Custom Port

Set the `PORT` environment variable to use a different port:

```bash
PORT=8080 npm start
```

### Running Tests

```bash
npm test
```

## Project Structure

```
DigiSol/
├── server.js               # Express web server
├── package.json
├── public/
│   ├── index.html          # Home page
│   ├── css/
│   │   └── styles.css
│   └── topics/
│       ├── digital-systems.html
│       ├── data-and-information.html
│       ├── networks-and-cybersecurity.html
│       ├── algorithms-and-programming.html
│       └── hci-and-ui-design.html
└── README.md
```

## Curriculum Reference

Content aligns with the
[QCAA Digital Solutions General Senior Syllabus](https://www.qcaa.qld.edu.au/senior/senior-subjects/technologies/digital-solutions).
