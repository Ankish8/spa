import { Button } from "@/components/ui/button"

interface ActionButtonProps {
  children: React.ReactNode
}

export function ActionButton({ children }: ActionButtonProps) {
  return (
    <Button variant="outline" className="w-full">
      {children}
    </Button>
  )
}

