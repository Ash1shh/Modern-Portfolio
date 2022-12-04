import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'production',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);