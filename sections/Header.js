import Link from "next/link";

const Header = () => {

  const navigations = [
    { label: 'Home', path:'/'},
    { label: 'About', path:'/about'},
  ];

  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigations.map(nav => (
          <Link href={nav.path}><a 
            className="font-semibold text-gray-400 hover:text-gray-500">
            
            {nav.label}</a></Link>
          
        ))}
      </ul>
      <button>Icon</button>
    </header>
  )
}

export default Header;