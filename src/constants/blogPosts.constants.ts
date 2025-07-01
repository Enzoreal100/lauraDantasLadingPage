// src/data/blogPosts.ts

import { type Document } from '@contentful/rich-text-types'; // 1. Importe o tipo Document

export default interface BlogPost {
  id: string; // O ID do contentful é uma string
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  author: string;
  publishedDate: string;
  content: Document; 
}
