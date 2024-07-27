import { ReactNode, useRef } from 'react'
import { Modal } from '../components/common/Modal.tsx'

export interface UseModalResp {
  modal: ReactNode
  closeModal: () => void
  openModal: () => void
  modalBoxClassName?: string
}
export interface UseModalProps {
  shouldAllowBackdropClick?: boolean
  onModalOpen?: () => void
  onModalClose?: () => void
  children?: React.ReactNode
}

export const useModal = ({
  children,
  shouldAllowBackdropClick = true,
  onModalClose,
  onModalOpen,
}: UseModalProps): UseModalResp => {
  const ref = useRef<HTMLDialogElement | null>(null)

  const closeModal = () => {
    onModalClose && onModalClose()
    ref.current?.close()
  }

  const openModal = () => {
    onModalOpen && onModalOpen()
    ref.current?.showModal()
  }

  const modal: ReactNode = (
    <Modal
      onBackdropClick={() => {
        if (shouldAllowBackdropClick) {
          closeModal()
        }
      }}
      ref={ref}
    >
      {children}
    </Modal>
  )

  return {
    closeModal,
    openModal,
    modal,
  }
}
