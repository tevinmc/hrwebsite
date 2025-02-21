import Link from "next/link"

interface MobileMenuProps {
  onItemClick?: () => void
}

export function MobileMenu({ onItemClick }: MobileMenuProps) {
  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
  ]

  return (
    <nav className="flex flex-col gap-4 mt-8">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-lg p-2 hover:bg-gray-100 rounded-md"
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

