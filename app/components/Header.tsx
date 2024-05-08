'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { MdMenu } from "react-icons/md";

import useRoutes from '@/app/hooks/useRoutes';

import clsx from 'clsx'


export default function Header() {
  const pathname = usePathname();
  const routes = useRoutes();
  console.log(routes)
  return (
    <section 
      className={
        clsx(
          `
            w-full 
            absolute 
            z-20
          `, 
          pathname === '/register' && 'hidden'
        )
      }>
      <header className="max-w-[1240px] m-auto p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-7 w-8 relative opacity-70">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-fit rounded-sm"
            />
          </div>
          <Link href="/" className='text-white tracking-wide'>
            FicLibrary
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="text-gray-300 flex space-x-6 items-center font-normal">
            {routes.map((route, index) => (
              <li key={index} className='pb-1'>
                <Link 
                  className={clsx(
                    `
                      text-sm 
                      pb-1 
                      transition 
                      duration-300 
                      hover:border-b
                    `, 
                    route.active && 'border-b'
                  )}
                  href={route.path}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <div className="w-4 h-[1px] bg-white" />
            <li>
              <Link
                href="/register"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden text-gray-200 font-semibold">
          <MdMenu size={25}/>
        </div>
      </header>
    </section>
  );
}
