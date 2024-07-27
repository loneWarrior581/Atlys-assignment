import { X } from 'lucide-react'
import { forwardRef, ReactNode } from 'react'

export type ModalProps = {
  children?: ReactNode
  onBackdropClick?: () => void
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, onBackdropClick }, ref) => {
    return (
      <dialog ref={ref} className='modal '>
        <div className='fixed inset-0 bg-black-bg bg-opacity-30 backdrop-blur-sm justify-center items-center'>
          <span className='absolute flex justify-center items-center h-8 w-8 rounded-full bg-black my-2 mx-2 top-10 right-1/4'>
            <X
              width={16}
              className=' text-white cursor-pointer'
              onClick={() => {
                onBackdropClick && onBackdropClick()
              }}
            />
          </span>
          {children}
        </div>
      </dialog>
    )
  },
)
