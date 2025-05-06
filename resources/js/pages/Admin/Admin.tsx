import { Link } from '@inertiajs/react'


export default function Admin() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Administration</h1>
      <nav className="flex gap-4 mb-4">
        <Link href="/admin/files" className="text-blue-600 underline">Fichiers</Link>
      </nav>
    </>
  )
}
