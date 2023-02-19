import { forwardRef } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref) => {
    return (
      <button {...props} ref={ref}>
        {children}
      </button>
    )
  },
)

export default Button
