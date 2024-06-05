import statsGet from '@/actions/stats-get';
import { ContaEstatisticas } from '@/components/conta/conta-estatisticas';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estatísticas | Minha conta',
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
