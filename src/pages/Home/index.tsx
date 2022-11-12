import { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { ModalBody } from '../../components/Modal/Body';
import { ModalFooter } from '../../components/Modal/Footer';
import { ModalHeader } from '../../components/Modal/Header';
import styles from './styles.module.scss';

export function Home(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <main className={styles.main}>
      <Button
        onClick={() => setModalIsOpen(true)}
      >
        Open Modal
      </Button>
      <Modal
        active={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        position='top-center'
        backdropBlur
        animation='shake'
      >
        <ModalHeader>
          Modal Header
        </ModalHeader>
        <ModalBody>
          Modal Body
        </ModalBody>
        <ModalFooter>
          Modal Footer
        </ModalFooter>
      </Modal>
    </main>
  )
}