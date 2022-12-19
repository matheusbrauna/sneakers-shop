import * as Tabs from '@radix-ui/react-tabs'

type TabListProps = Tabs.TabsListProps

export function TabList({ ...props }: TabListProps) {
  return <Tabs.List className="fixed left-0 flex flex-col" {...props} />
}
