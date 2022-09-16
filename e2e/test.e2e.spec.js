const { test, expect } = require('@playwright/test');

test.describe('Test suite', () => {
    test('Should not be run by any projects @annotation1', async ({ page }) => {
        expect(42).toBe(42);
    });
    test('Should only be run by chrome @annotation2', async ({ page }) => {
        expect(42).toBe(42);
    });
});
