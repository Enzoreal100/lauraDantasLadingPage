// src/pages/BlogPostPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { contentfulClient } from '../services/contentful';
import type { BlogPost } from '../constants/blogPosts.constants';

// ... (os styled-components continuam os mesmos) ...
const PostContainer = styled.main` /* ... */ `;
const PostTitle = styled.h1` /* ... */ `;
const PostMeta = styled.div` /* ... */ `;
const PostImage = styled.img` /* ... */ `;
const PostContent = styled.div` /* ... */ `;
const BackLink = styled(Link)` /* ... */ `;

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug, // Busca pelo campo 'slug'
          limit: 1,
        });

        if (response.items.length > 0) {
          const item: any = response.items[0];
          setPost({
            id: item.sys.id,
            slug: item.fields.slug,
            title: item.fields.title,
            summary: item.fields.summary,
            imageUrl: item.fields.image?.fields.file.url,
            author: item.fields.author,
            publishedDate: new Date(item.fields.publishedDate).toLocaleDateString('pt-BR', {
              year: 'numeric', month: 'long', day: 'numeric'
            }),
            content: item.fields.content,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <PostContainer><h1>Carregando...</h1></PostContainer>;
  }

  if (!post) {
    return (
      <PostContainer>
        <h1>Post não encontrado</h1>
        <BackLink to="/blog">Voltar para o Blog</BackLink>
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>
        Por {post.author} em {post.publishedDate}
      </PostMeta>
      <PostImage src={post.imageUrl} alt={post.title} />
      <PostContent>{documentToReactComponents(post.content)}</PostContent>
      <BackLink to="/blog">← Voltar para todos os posts</BackLink>
    </PostContainer>
  );
};

export default BlogPostPage;