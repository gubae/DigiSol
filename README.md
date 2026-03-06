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

- [Node.js](https://nodejs.org/) v18 or later (download from https://nodejs.org — choose the **LTS** version)

### Opening the Portal in Your Browser

**Step 1 – Install dependencies** (only needed the first time):

```bash
npm install
```

**Step 2 – Start the server:**

```bash
npm start
```

Your default browser will open automatically at **http://localhost:3000**.

If the browser does not open automatically, copy **http://localhost:3000** and paste it into the address bar of any browser (Chrome, Firefox, Edge, Safari, etc.).

> **To stop the server**, press <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal.

### Custom Port

If port 3000 is already in use, pick a different one:

```bash
PORT=8080 npm start
```

Then open **http://localhost:8080** in your browser.

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
