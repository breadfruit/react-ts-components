import * as React from 'react'

interface ModalProps {
  title?: React.ReactNode
  content?: React.ReactNode
  onOk?: (...arg: any[]) => any
  onCancel: (...arg: any[]) => any
  visible?: boolean
}

export const Modal: React.FunctionComponent<ModalProps> = props => {
  return <></>
}
