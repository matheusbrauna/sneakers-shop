import * as Tabs from '@radix-ui/react-tabs'

type TabRootProps = Tabs.TabsProps

export function TabRoot({ ...props }: TabRootProps) {
  return <Tabs.Root className="" {...props} />
}
