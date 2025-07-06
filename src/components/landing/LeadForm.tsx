import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'

export default function LeadForm() {
  const { register, handleSubmit, reset, formState } = useForm()
  const { isSubmitting } = formState

  const onSubmit = async (data: Record<string, string>) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      alert('Dados enviados com sucesso!')
      reset()
    } catch (err) {
      alert('Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('nome', { required: true })}
        placeholder="Nome"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="E-mail corporativo"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        {...register('empresa')}
        placeholder="Empresa"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        {...register('telefone')}
        placeholder="Telefone"
        className="w-full border px-3 py-2 rounded"
      />
      <Button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-600">
        {isSubmitting ? 'Enviando...' : 'Quero falar com especialista'}
      </Button>
    </form>
  )
}
