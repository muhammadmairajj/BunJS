import { describe, expect, beforeAll, test } from "bun:test";

beforeAll(() => {
    // Setup Tests
});

describe("arithmetic", () => {
    test("addition", () => {
        expect(2+2).toBe(4);
    })
});

describe("arithmetic", () => {
    test("subtraction", () => {
        expect(10-4).toBe(6);
    })
});

describe("arithmetic", () => {
    test("multiplication", () => {
        expect(2*4).toBe(8);
    })
});

describe("arithmetic", () => {
    test("division", () => {
        expect(20/2).toBe(10);
    })
});