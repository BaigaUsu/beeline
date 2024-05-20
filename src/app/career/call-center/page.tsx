import Bottom from '@/components/CallCenter/Bottom/Bottom';
import styles from './CallCenter.module.scss';
import Head from '@/components/CallCenter/Head/Head';
import Picture from '@/components/CallCenter/Picture/Picture';
import Questions from '@/components/CallCenter/Questions/Questions';

export default function CallCenter () {
  return (
        <>
            <Head/>
            <Picture/>
            <Questions/>
            <Bottom/>
        </>
    );
};