import { test, expect } from '@playwright/test';

test('User can submit sell with us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@test.com');
  await page.getByPlaceholder('Your Phone Number').fill('0967453434');
  await page.getByPlaceholder('Your Business Brand').fill('Test');
  await page.getByPlaceholder('Please Describe Your Business').fill('Test_test_test');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});