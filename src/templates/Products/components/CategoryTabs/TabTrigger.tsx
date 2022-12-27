import * as Tabs from '@radix-ui/react-tabs'

type TabTriggerProps = Tabs.TabsTriggerProps

export function TabTrigger({ ...props }: TabTriggerProps) {
  return (
    <Tabs.Trigger
      className="h-12 px-5 text-lg font-bold leading-8 md:text-xl tabs-trigger text-neutral-900"
      {...props}
    />
  )
}
