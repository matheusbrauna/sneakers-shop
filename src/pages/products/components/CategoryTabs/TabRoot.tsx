import * as Tabs from '@radix-ui/react-tabs'

type TabRootProps = Tabs.TabsProps

export function TabRoot({ ...props }: TabRootProps) {
  return (
    <Tabs.Root className="relative flex flex-col py-8 sm:flex-row" {...props} />
  )
}
