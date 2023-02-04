import Head from 'next/head';
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter();

    router.push('/couches');

    return (
        <>
            <Head>
                <title>Диваны</title>
                <meta name="title" content="Диваны" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        </>
    )
};

export default index;