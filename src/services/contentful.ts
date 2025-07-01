// src/services/contentful.ts
import { createClient } from 'contentful';

// Valida se as variáveis de ambiente foram carregadas
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful Space ID e Access Token precisam ser definidos no arquivo .env'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});