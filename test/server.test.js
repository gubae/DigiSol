'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const app = require('../server');

function get(server, path) {
  return new Promise((resolve, reject) => {
    const { address, port } = server.address();
    const options = { hostname: address === '::' ? '127.0.0.1' : address, port, path, method: 'GET' };
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('serves the home page', async () => {
  const server = app.listen(0);
  try {
    const { status, body } = await get(server, '/');
    assert.equal(status, 200);
    assert.ok(body.includes('DigiSol'), 'homepage should contain "DigiSol"');
  } finally {
    server.close();
  }
});

test('serves the digital-systems topic page', async () => {
  const server = app.listen(0);
  try {
    const { status, body } = await get(server, '/topics/digital-systems.html');
    assert.equal(status, 200);
    assert.ok(body.includes('Digital Systems'));
  } finally {
    server.close();
  }
});

test('serves the data-and-information topic page', async () => {
  const server = app.listen(0);
  try {
    const { status } = await get(server, '/topics/data-and-information.html');
    assert.equal(status, 200);
  } finally {
    server.close();
  }
});

test('serves the networks-and-cybersecurity topic page', async () => {
  const server = app.listen(0);
  try {
    const { status } = await get(server, '/topics/networks-and-cybersecurity.html');
    assert.equal(status, 200);
  } finally {
    server.close();
  }
});

test('serves the algorithms-and-programming topic page', async () => {
  const server = app.listen(0);
  try {
    const { status } = await get(server, '/topics/algorithms-and-programming.html');
    assert.equal(status, 200);
  } finally {
    server.close();
  }
});

test('serves the hci-and-ui-design topic page', async () => {
  const server = app.listen(0);
  try {
    const { status } = await get(server, '/topics/hci-and-ui-design.html');
    assert.equal(status, 200);
  } finally {
    server.close();
  }
});

test('serves the stylesheet', async () => {
  const server = app.listen(0);
  try {
    const { status, body } = await get(server, '/css/styles.css');
    assert.equal(status, 200);
    assert.ok(body.includes('body'));
  } finally {
    server.close();
  }
});

test('unknown routes fall back to index.html', async () => {
  const server = app.listen(0);
  try {
    const { status, body } = await get(server, '/unknown-page');
    assert.equal(status, 200);
    assert.ok(body.includes('DigiSol'));
  } finally {
    server.close();
  }
});
