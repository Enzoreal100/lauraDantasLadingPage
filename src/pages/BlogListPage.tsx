// src/pages/BlogListPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import COLOR from '../constants/colors.constants';
import { contentfulClient } from '../services/contentful';
import type { BlogPost } from '../constants/blogPosts.constants';

const PageContainer = styled.main`
  padding: 120px 20px 60px;
  background-color: ${COLOR.BG.SECONDARY || '#f8f8f8'};
  min-height: 80vh;
`;

const PageTitle = styled.h1` /* ... */ `;
const PostsGrid = styled.div` /* ... */ `;

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost', // A ID do seu Content Model
        });

        // Mapeia a resposta do Contentful para o formato da sua interface BlogPost
        const fetchedPosts = response.items.map((item: any) => ({
          id: item.sys.id,
          slug: item.fields.slug,
          title: item.fields.title,
          summary: item.fields.summary,
          imageUrl: item.fields.image?.fields.file.url,
          author: item.fields.author,
          publishedDate: new Date(item.fields.publishedDate).toLocaleDateString('pt-BR', {
            year: 'numeric', month: 'long', day: 'numeric'
          }),
          content: item.fields.content, // O Rich Text virá aqui
        }));

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Erro ao buscar posts do Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <PageContainer><PageTitle>Carregando posts...</PageTitle></PageContainer>;
  }

  return (
    <PageContainer>
      <PageTitle>Blog</PageTitle>
      <PostsGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsGrid>
    </PageContainer>
  );
};

export default BlogListPage;