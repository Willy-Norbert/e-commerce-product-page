import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Cart from './Cart';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  // Listen for dark mode preference changes
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "py-5 bg-muted"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/search" className="font-medium hover:text-primary transition-colors">Products</Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        {/* Search, Cart, and User Icons */}
        <div className="flex items-center gap-2">
  
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleDarkMode}
            className="transition-transform hover:rotate-12"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
    
          
          {/* Cart Component */}
          <Cart />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg border-t animate-slide-in">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="font-medium hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/search" className="font-medium hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
          
            <Link to="/contact" className="font-medium hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
