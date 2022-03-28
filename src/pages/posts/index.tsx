import { Head } from 'next/document';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>


            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>25 de março de 2022</time>
                        <strong>Olá Mundo</strong>
                        <p>Essa é uma postagem de exemplo de um ola mundo utizando as tecnologias javascript, typescrit, react, nextjs, prismic. O objetivo desse post é ser uma postagem fictia a fins de listagem estática na página que está em desenvolvimento.</p>
                    </a>
                    <a href="#">
                        <time>25 de março de 2022</time>
                        <strong>Olá Mundo</strong>
                        <p>Essa é uma postagem de exemplo de um ola mundo utizando as tecnologias javascript, typescrit, react, nextjs, prismic. O objetivo desse post é ser uma postagem fictia a fins de listagem estática na página que está em desenvolvimento.</p>
                    </a>
                    <a href="#">
                        <time>25 de março de 2022</time>
                        <strong>Olá Mundo</strong>
                        <p>Essa é uma postagem de exemplo de um ola mundo utizando as tecnologias javascript, typescrit, react, nextjs, prismic. O objetivo desse post é ser uma postagem fictia a fins de listagem estática na página que está em desenvolvimento.</p>
                    </a>
                    <a href="#">
                        <time>25 de março de 2022</time>
                        <strong>Olá Mundo</strong>
                        <p>Essa é uma postagem de exemplo de um ola mundo utizando as tecnologias javascript, typescrit, react, nextjs, prismic. O objetivo desse post é ser uma postagem fictia a fins de listagem estática na página que está em desenvolvimento.</p>
                    </a>
                    <a href="#">
                        <time>25 de março de 2022</time>
                        <strong>Olá Mundo</strong>
                        <p>Essa é uma postagem de exemplo de um ola mundo utizando as tecnologias javascript, typescrit, react, nextjs, prismic. O objetivo desse post é ser uma postagem fictia a fins de listagem estática na página que está em desenvolvimento.</p>
                    </a>
                </div>
            </main>
        </>
    );
}