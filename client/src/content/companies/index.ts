/**
 * Company-Specific Configurations Export
 *
 * This file exports all available company-specific pitch configurations.
 * Add new company configs here as they are created.
 */

export { sunshineAgedCareConfig } from './sunshine-aged-care.config';

// Future company configs (uncomment as they are created):
// export { exampleHealthcareConfig } from './example-healthcare.config';
// export { exampleConstructionConfig } from './example-construction.config';

import { sunshineAgedCareConfig } from './sunshine-aged-care.config';
import type { CompanyConfig } from '../types';

/**
 * All available company configurations
 * Used for routing, company selector, etc.
 */
export const ALL_COMPANIES: CompanyConfig[] = [
  sunshineAgedCareConfig,
  // Add more company configs here
];

/**
 * Get company configuration by slug
 * @param slug - Company slug (e.g., 'sunshine-aged-care')
 * @returns Company configuration or undefined if not found
 */
export function getCompanyBySlug(slug: string): CompanyConfig | undefined {
  return ALL_COMPANIES.find(company => company.companySlug === slug);
}

/**
 * Check if a company exists
 * @param slug - Company slug to check
 * @returns True if company exists
 */
export function companyExists(slug: string): boolean {
  return ALL_COMPANIES.some(company => company.companySlug === slug);
}

/**
 * Get all companies for a specific industry
 * @param industrySlug - Industry slug (e.g., 'aged-care')
 * @returns Array of company configs for that industry
 */
export function getCompaniesByIndustry(industrySlug: string): CompanyConfig[] {
  return ALL_COMPANIES.filter(company => company.baseIndustry === industrySlug);
}

/**
 * Get company count by industry
 * @param industrySlug - Industry slug
 * @returns Number of companies in that industry
 */
export function getCompanyCountByIndustry(industrySlug: string): number {
  return getCompaniesByIndustry(industrySlug).length;
}
