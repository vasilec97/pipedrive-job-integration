import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  memo,
  useState,
} from 'react'
import cls from './Input.module.css'
import { classNames } from '@/shared/lib/classNames/classNames'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputPropsType = DefaultInputPropsType & {
  error?: string
  full?: boolean
}

export const Input = memo(forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const {
    error,
    className,
    full,
    ...restProps
  } = props
  const inputMods = {
    [cls.full]: full,
    [cls.errorInput]: !!error,
  }

  return (
    <input
      ref={ref}
      className={classNames(cls.Input, inputMods, [className])}
      {...restProps}
      data-testid="input"
    />
  )
}))

Input.displayName = 'Input'
