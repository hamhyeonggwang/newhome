import { NextRequest, NextResponse } from 'next/server';
import { BlogPost, CreateBlogPost } from '../../lib/blog-types';
import fs from 'fs';
import path from 'path';

const BLOG_DATA_FILE = path.join(process.cwd(), 'data', 'blog-posts.json');

// 데이터 디렉토리 생성
const ensureDataDirectory = () => {
  const dataDir = path.dirname(BLOG_DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// 블로그 게시글 읽기
const readBlogPosts = (): BlogPost[] => {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(BLOG_DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(BLOG_DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
};

// 블로그 게시글 저장
const saveBlogPosts = (posts: BlogPost[]) => {
  try {
    ensureDataDirectory();
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error('Error saving blog posts:', error);
  }
};

// 이미지 저장
const saveImage = async (file: File): Promise<string> => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const uploadDir = path.join(process.cwd(), 'public', 'blog-images');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);
  
  fs.writeFileSync(filePath, buffer);
  return `/blog-images/${fileName}`;
};

export async function GET() {
  try {
    const posts = readBlogPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as string;
    const author = formData.get('author') as string;
    const tags = (formData.get('tags') as string).split(',').map(tag => tag.trim());
    const image = formData.get('image') as File | null;

    if (!title || !excerpt || !content || !category || !author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 이미지 저장
    let imagePath = '';
    if (image && image.size > 0) {
      imagePath = await saveImage(image);
    }

    // 새 게시글 생성
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      excerpt,
      content,
      image: imagePath,
      date: new Date().toISOString().split('T')[0],
      category,
      readTime: Math.ceil(content.length / 500).toString() + '분',
      author,
      tags,
      published: true
    };

    // 기존 게시글 읽기
    const posts = readBlogPosts();
    posts.unshift(newPost); // 새 게시글을 맨 앞에 추가
    saveBlogPosts(posts);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 