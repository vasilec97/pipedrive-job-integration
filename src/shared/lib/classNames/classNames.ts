export type Mods = Record<string, boolean | undefined>

export const classNames = (
  cls: string = '',
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter(key => Boolean(mods[key])),
  ].join(' ')
}
