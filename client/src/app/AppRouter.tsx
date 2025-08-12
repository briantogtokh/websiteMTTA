import { Router, Route } from 'wouter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import React from 'react';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container py-6">
        <Route path="/" component={HomePage} />
      </main>
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
