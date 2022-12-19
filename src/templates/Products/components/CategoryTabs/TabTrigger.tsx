import * as Tabs from '@radix-ui/react-tabs'

type TabTriggerProps = Tabs.TabsTriggerProps

export function TabTrigger({ ...props }: TabTriggerProps) {
  return (
    <Tabs.Trigger
      className="h-12 px-5 text-xl font-bold leading-8 tabs-trigger text-neutral-900"
      {...props}
    />
  )
}
