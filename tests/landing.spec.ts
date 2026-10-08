import { expect, test } from '@playwright/test';

test.describe('Seaguntech landing page', () => {
  test('shows the positioning, planning story, and contact paths', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /Build what matters/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Make the next technical decision easier/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Make the work discoverable/ })).toBeVisible();
    await expect(page.locator('a[href="mailto:admin@seaguntech.com"]').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Book a consultation' }).first()).toBeVisible();
  });

  test('uses crawlable anchors and exact email target', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL(/#services$/);
    await page.getByRole('link', { name: 'Work' }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect(page.locator('a[href="mailto:admin@seaguntech.com"]')).toHaveCount(3);
  });

  test('exposes baseline SEO metadata and crawl support', async ({ page, request }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Seaguntech | International technology consulting');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /helps ambitious teams turn complex ideas into dependable software/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://seaguntech.com/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Seaguntech/);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);

    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain('Sitemap: https://seaguntech.com/sitemap.xml');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain('https://seaguntech.com/');
  });

  test('stays usable at mobile width and reduced motion', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    expect(await page.locator('body').evaluate((body) => body.scrollWidth <= document.documentElement.clientWidth)).toBeTruthy();
    await expect(page.getByRole('heading', { name: /Build what matters/ })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Book a consultation' }).first()).toBeVisible();
  });
});
