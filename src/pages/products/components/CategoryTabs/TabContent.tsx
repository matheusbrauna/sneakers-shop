import * as Tabs from '@radix-ui/react-tabs'

type TabContentProps = Tabs.TabsContentProps

export function TabContent({ ...props }: TabContentProps) {
  return (
    <Tabs.Content
      className="container grid grid-cols-1 gap-8 place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      {...props}
    />
  )
}
