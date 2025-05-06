import { Link } from '@inertiajs/react'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default function Files({ files }: { files: any[] }) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Liste des fichiers</h1>
      <Link href="/admin/files/create" className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter un fichier</Link>

      <ul className="mt-4">
        {files.map((file: { id: Key | null | undefined; path: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
          <li key={file.id} className="border-b py-2">
            <a href={`/storage/${file.path}`} className="text-blue-600 underline" target="_blank">{file.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
