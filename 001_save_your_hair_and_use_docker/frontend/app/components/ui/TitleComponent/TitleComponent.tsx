import { cn } from '@/lib/utils'

type TitleComponentProps = {
  children: React.ReactNode
  className?: string
}

const TitleComponent = ({ children, className }: TitleComponentProps) => {
  return (
    <h2 className={cn('font-impact', className)}>
      {children}
    </h2>
  )
}

export default TitleComponent
