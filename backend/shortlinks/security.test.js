import test from "node:test";
import assert from "node:assert/strict";
import { validateDestination, randomCode } from "./src/worker.js";

test("accepts ordinary HTTP and HTTPS destinations", () => {
  assert.equal(validateDestination("https://example.com"), "https://example.com/");
  assert.equal(validateDestination("http://example.com/path"), "http://example.com/path");
});

test("rejects blank, malformed, and unsupported-scheme destinations", () => {
  for (const value of ["", "   ", "ftp://example.com", "javascript:alert(1)", "data:text/html,test", "https://bad..example"]) {
    assert.throws(() => validateDestination(value));
  }
});

test("rejects credentials and local hostnames", () => {
  for (const value of [
    "https://user:pass@example.com",
    "http://localhost:8080",
    "http://printer.local",
    "http://service.internal",
  ]) assert.throws(() => validateDestination(value));
});

test("rejects private, loopback, link-local and carrier-grade IPv4", () => {
  for (const host of [
    "0.1.2.3", "10.0.0.1", "100.64.0.1", "127.0.0.1",
    "169.254.1.1", "172.16.0.1", "192.168.1.1",
    "198.18.0.1", "224.0.0.1", "240.0.0.1",
    "192.0.2.1", "198.51.100.1", "203.0.113.1",
    "192.0.0.9", "192.88.99.1",
  ]) assert.throws(() => validateDestination("http://" + host));
});

test("rejects unusual numeric forms that normalize to loopback", () => {
  for (const host of ["127.1", "2130706433", "0177.0.0.1"]) {
    assert.throws(() => validateDestination("http://" + host));
  }
});

test("rejects special and non-global IPv6 destinations", () => {
  for (const host of [
    "[::]", "[::1]", "[fc00::1]", "[fd00::1]", "[fe80::1]",
    "[ff02::1]", "[2001:db8::1]", "[::ffff:127.0.0.1]",
    "[64:ff9b::7f00:1]", "[2002:7f00:1::]",
  ]) assert.throws(() => validateDestination("http://" + host));
});

test("generated short codes use the configured alphabet and length", () => {
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 500; i++) {
    const code = randomCode();
    assert.equal(code.length, 7);
    assert.match(code, /^[A-Za-z0-9]+$/);
    for (const char of code) assert.ok(alphabet.includes(char));
  }
});
