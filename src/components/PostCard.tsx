import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLOR from '../constants/colors.constants';
import type { BlogPost } from '../constants/blogPosts.constants';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3em;
  color: ${COLOR.TEXT.TITLE || '#333'};
  margin-bottom: 10px;
`;

const CardSummary = styled.p`
  font-size: 1em;
  color: ${COLOR.TEXT.SUBTITLE || '#555'};
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  font-weight: bold;
  color: ${COLOR.CTABUTTON || '#128C7E'};
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <CardContainer>
      <CardImage src={post.imageUrl} alt={post.title} />
      <CardContent>
        <CardTitle>{post.title}</CardTitle>
        <CardSummary>{post.summary}</CardSummary>
        <ReadMoreLink to={`/blog/${post.slug}`}>Ler Mais →</ReadMoreLink>
      </CardContent>
    </CardContainer>
  );
};

export default PostCard;