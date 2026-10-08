import { describe, expect, it } from 'vitest';

import { contact, services, siteContent } from './site';

describe('Seaguntech site content', () => {
  it('exposes the approved company identity and contact details', () => {
    expect(siteContent.name).toBe('Seaguntech');
    expect(siteContent.experience).toContain('10+');
    expect(contact.email).toBe('admin@seaguntech.com');
    expect(services).toHaveLength(4);
  });
});
