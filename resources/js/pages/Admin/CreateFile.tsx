import { useForm } from '@inertiajs/react'

export default function CreateFile() {
  const { data, setData, post, processing, errors } = useForm({ file: null })

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    post('/admin/files', { forceFormData: true })
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Ajouter un fichier</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setData('file', e.target.files?.[0])} />
        {errors.file && <div className="text-red-600">{errors.file}</div>}
        <button className="bg-green-500 text-white px-4 py-2 mt-2" disabled={processing}>
          {processing ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </>
  )
}
