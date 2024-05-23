import React, { FC, ReactNode } from 'react'
import cls from './FormCard.module.css'
import { classNames } from '@/shared/lib/classNames/classNames'

type FormCardProps = {
  children: ReactNode
  title?: string
  className?: string
}

export const FormCard: FC<FormCardProps> = ({ children, title, className }) => {
  return (
    <div className={classNames(cls.FormCard, {}, [className])}>
      <h2 className={cls.title}>{title}</h2>
      {children}
    </div>
  )
}