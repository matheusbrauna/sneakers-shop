import * as Tabs from '@radix-ui/react-tabs'

type TabContentProps = Tabs.TabsContentProps

export function TabContent({ ...props }: TabContentProps) {
  return (
    <Tabs.Content
      className="grid grid-cols-1 gap-8 pr-4 ml-40 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      {...props}
    />
  )
}
