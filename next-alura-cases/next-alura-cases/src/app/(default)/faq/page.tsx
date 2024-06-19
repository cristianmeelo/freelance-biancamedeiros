import { FaqList, PageProps } from '@/app/components/FaqList';
import { Link } from '../../components/Link';
import Head from 'next/head';

export default function Faq({ faq }: any) {
  return (
    <>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>FAQ1</h1>
      <FaqList />
      <Link href={'/'}>Ir para a Home</Link>
    </>
  );
}
