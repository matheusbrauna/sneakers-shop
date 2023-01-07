import * as Tabs from '@radix-ui/react-tabs'

type TabListProps = Tabs.TabsListProps

export function TabList({ ...props }: TabListProps) {
  return <Tabs.List className="flex flex-col" {...props} />
}
