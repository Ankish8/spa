"use client"

import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const statuses = [
  { value: "open", label: "Open", color: "bg-red-500" },
  { value: "in-progress", label: "In Progress", color: "bg-yellow-500" },
  { value: "resolved", label: "Resolved", color: "bg-green-500" },
] as const

interface IssueStatusDropdownProps {
  initialStatus: string;
  onStatusChange: (status: string) => void;
}

export function IssueStatusDropdown({ initialStatus, onStatusChange }: IssueStatusDropdownProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(initialStatus.toLowerCase() || "open")

  const currentStatus = statuses.find((status) => status.value === value) || statuses[0]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between font-normal"
        >
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${currentStatus.color}`} />
            {currentStatus.label}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandGroup>
            {statuses.map((status) => (
              <CommandItem
                key={status.value}
                onSelect={() => {
                  setValue(status.value)
                  setOpen(false)
                  onStatusChange(status.value)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === status.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${status.color}`} />
                  {status.label}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
