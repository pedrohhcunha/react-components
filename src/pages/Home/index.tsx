import { useEffect, useState } from 'react';
import { Backdrop } from '../../components/Backdrop';
import { Button } from '../../components/Button';
import { Spinner } from '../../components/Spinner/Spinner';
import styles from './styles.module.scss';

export function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStopLoading = () => {
    setIsLoading(false);
  }
  
  const handleStartLoading = () => {
    setIsLoading(true);
    setTimeout(handleStopLoading, 5000)
  };

  return (
    <main className={styles.main}>
      <Button
        onClick={handleStartLoading}
      >
        Start loading
      </Button>
      <Backdrop
        active={isLoading}
      >
        <Spinner />
      </Backdrop>
    </main>
  )
}