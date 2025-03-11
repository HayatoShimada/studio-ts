import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="営業担当" invert={invert}>
          吉田和弥
          <br />
          kazuya_yoshida@amu-lab.com
        </Office>
      </li>
      <li>
        <Office name="開発担当" invert={invert}>
          島田迅人
          <br />
          info@amu-lab.com
        </Office>
      </li>
    </ul>
  )
}
