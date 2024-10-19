import { test, expect } from '@playwright/test';

test('User can submit "Contact us" form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Test');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@test.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('Hello my first test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('You Full Name')).toBeEmpty();
});

test('User can NOT submit "Contact us" form with email that was used before', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
    await page.getByPlaceholder('You Full Name').fill('Test');
    await page.getByPlaceholder('Your Email Address').fill('test3456@test.com');
    await page.getByPlaceholder('Please Describe Your Message').fill('Hello my first test');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', {name: 'Please Try Again!'})).toBeVisible();
    await expect(page.getByText ('A request already existed for same email address')).toBeVisible();
  });