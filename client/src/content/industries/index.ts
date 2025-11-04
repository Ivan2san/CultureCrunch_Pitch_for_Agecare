/**
 * Industry Configurations Export
 *
 * This file exports all available industry configurations.
 * Add new industries here as they are created.
 */

export { agedCareConfig } from './aged-care.config';
export { healthcareConfig } from './healthcare.config';
export { constructionProfessionalServicesConfig } from './construction-professional-services.config';

// Future industries (uncomment as they are created):
// export { manufacturingConfig } from './manufacturing.config';
// export { retailConfig } from './retail.config';

import { agedCareConfig } from './aged-care.config';
import { healthcareConfig } from './healthcare.config';
import { constructionProfessionalServicesConfig } from './construction-professional-services.config';
import type { IndustryConfig } from '../types';

/**
 * All available industry configurations
 * Used for navigation, industry selector, etc.
 */
export const ALL_INDUSTRIES: IndustryConfig[] = [
  agedCareConfig,
  healthcareConfig,
  constructionProfessionalServicesConfig,
];

/**
 * Get industry configuration by slug
 * @param slug - Industry slug (e.g., 'aged-care')
 * @returns Industry configuration or undefined if not found
 */
export function getIndustryBySlug(slug: string): IndustryConfig | undefined {
  return ALL_INDUSTRIES.find(industry => industry.slug === slug);
}

/**
 * Check if an industry exists
 * @param slug - Industry slug to check
 * @returns True if industry exists
 */
export function industryExists(slug: string): boolean {
  return ALL_INDUSTRIES.some(industry => industry.slug === slug);
}
