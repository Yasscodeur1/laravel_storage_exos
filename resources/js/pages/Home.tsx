
import Navbar from '@/components/Navbar';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function Home() {
    const { auth, files } = usePage<SharedData>().props;

    const images = (files as any[]).filter((f: { type: string; }) => f.type.startsWith('image/'));
    const others = (files as any[]).filter((f: { type: string; }) => !f.type.startsWith('image/'));

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossOrigin="anonymous"></link> */}
            </Head>

            <div className="flex flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <Navbar />
                </header>

                <h1 className="mb-4 text-white text-2xl font-bold">Fichiers disponibles</h1>

                <h2 className="mb-2 text-white text-xl font-semibold">Images</h2>
                <div className="grid grid-cols-3 gap-4">
                    {images.map((file: { id: Key | null | undefined; path: any; name: string | undefined; }) => (
                        <img key={file.id} src={`/storage/${file.path}`} alt={file.name} className="h-auto w-full" />
                    ))}
                </div>

                <h2 className="mt-6 text-white mb-2 text-xl font-semibold">Autres fichiers</h2>
                <ul>
                    {others.map((file: { id: Key | null | undefined; path: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                        <li key={file.id}>
                            <a href={`/storage/${file.path}`} target="_blank" className="text-blue-600 underline">
                                {file.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
