import { createClient } from '@sanity/client';
/* empty css                                */

const sanityClient = createClient(
            {"apiVersion":"2024-07-24","projectId":"tzo5r4as","dataset":"production","useCdn":false,"studioBasePath":"/studio"}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
