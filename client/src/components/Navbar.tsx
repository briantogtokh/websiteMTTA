import React from 'react';
import { Link } from 'wouter';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-slate-800">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/">Нүүр</Link>
          <Link href="/news">Мэдээ</Link>
          <Link href="/events">Тэмцээн</Link>
          <Link href="/rankings">Зэрэглэл</Link>
          <Link href="/players">Тамирчид</Link>
        </div>
        <Button asChild className="bg-brand text-white hover:bg-teal-700">
          <Link href="/register">Бүртгүүлэх</Link>
        </Button>
      </div>
    </nav>
  );
}
