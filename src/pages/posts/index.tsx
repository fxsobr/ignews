import { GetStaticProps } from 'next';
import { Head } from 'next/document';
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

type Post = {
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string
}

interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <a key={post.slug} href="#">
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismicClient = getPrismicClient()

    const response = await prismicClient.get({
        predicates: prismic.predicate.at('document.type', 'post'),
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.Content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    })

    console.log(posts)

    return {
        props: {
            posts
        }
    }
}