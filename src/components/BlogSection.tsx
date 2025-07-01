// src/components/BlogSection.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { type EntryFieldTypes } from 'contentful'; // 1. Importe os tipos de campo
import PostCard from './PostCard';
import CTAButton from './CTAButton';
import { contentfulClient } from '../services/contentful';
import type BlogPost from '../constants/blogPosts.constants';

// 2. Defina o "esqueleto" do seu tipo de conteúdo
// Isso ajuda o TypeScript a entender os campos disponíveis
export interface BlogPostSkeleton {
  contentTypeId: 'blogPost',
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    summary: EntryFieldTypes.Text,
    image: EntryFieldTypes.AssetLink,
    author: EntryFieldTypes.Text,
    publishedDate: EntryFieldTypes.Date,
    content: EntryFieldTypes.RichText,
  }
}

// ... (seus styled-components continuam os mesmos) ...
const BlogSectionContainer = styled.section`/* ... */`;
const SectionTitle = styled.h2`/* ... */`;
const PostsGrid = styled.div`/* ... */`;
const ViewAllButtonWrapper = styled.div`/* ... */`;

const BlogSection: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        // 3. Passe o tipo do esqueleto para a função getEntries
        const response = await contentfulClient.getEntries<BlogPostSkeleton>({
          content_type: 'blogPost',
          limit: 3,
        });

        // O restante do código de mapeamento continua igual
        const fetchedPosts = response.items.map((item) => ({
          id: item.sys.id,
          slug: item.fields.slug,
          title: item.fields.title,
          summary: item.fields.summary,
          // Note que a imagem agora é um AssetLink, então o acesso é um pouco diferente
          imageUrl: (item.fields.image as any)?.fields.file.url,
          author: item.fields.author,
          publishedDate: new Date(item.fields.publishedDate).toLocaleDateString('pt-BR', {
            year: 'numeric', month: 'long', day: 'numeric'
          }),
          content: item.fields.content,
        }));

        setRecentPosts(fetchedPosts);
      } catch (error) {
        console.error("Erro ao buscar posts recentes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <BlogSectionContainer id="blog">
      <SectionTitle>Nosso Blog</SectionTitle>
      <PostsGrid>
        {loading ? (
          <p>Carregando posts...</p>
        ) : (
          recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </PostsGrid>
      <ViewAllButtonWrapper>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
            <CTAButton text="Ver todos os posts" onClick={() => {}} />
        </Link>
      </ViewAllButtonWrapper>
    </BlogSectionContainer>
  );
};

export default BlogSection;