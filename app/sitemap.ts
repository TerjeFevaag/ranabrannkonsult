import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.ranabrannkonsult.no'
const LAST_UPDATED = new Date('2026-07-11')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/brannkonsept`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/brannprosjektering`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/branninspeksjon`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/uavhengig-kontroll`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/kontakt-oss`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/artikler`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/artikler/pipebrann`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/brannslokker`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/roykvarsler`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
