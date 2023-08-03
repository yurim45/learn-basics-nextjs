type FlexArgsType = {
  justify?: 'center' | 'start' | 'end' | 'between' | 'around'
  align?: 'center' | 'end' | 'start'
  direction?: 'col' | 'row'
}

export const flexLayout = ({
  justify = 'center',
  align = 'center',
  direction = 'row',
}: FlexArgsType) => {
  return `flex justify-${justify} items-${align} flex-${direction}`
}
