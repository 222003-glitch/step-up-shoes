import { Link } from 'react-router-dom';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="w-full bg-secondary py-2">
        <p className="text-center text-sm font-paragraph text-secondary-foreground">
          Free Shipping on All Orders Over PKR 5000
        </p>
      </div>
      
      <div className="mx-auto max-w-[120rem] px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h2 className="font-heading text-3xl text-primary-foreground">
              Step Up Shoes
            </h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8 bg-background rounded-full px-8 py-3 shadow-md">
            <Link 
              to="/" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/store" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              About
            </Link>
            <Link 
              to="/return-policy" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              Return Policy
            </Link>
            <Link 
              to="/delivery" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              Delivery
            </Link>
            <Link 
              to="/payment-methods" 
              className="font-paragraph text-base text-foreground hover:text-brandaccent transition-colors"
            >
              Payment
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <MiniCart 
              cartIcon={ShoppingCart}
              cartIconClassName="cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-wrap items-center justify-center gap-4 mt-4 bg-background rounded-full px-6 py-3 shadow-md">
          <Link 
            to="/" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/store" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            About
          </Link>
          <Link 
            to="/return-policy" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            Return Policy
          </Link>
          <Link 
            to="/delivery" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            Delivery
          </Link>
          <Link 
            to="/payment-methods" 
            className="font-paragraph text-sm text-foreground hover:text-brandaccent transition-colors"
          >
            Payment
          </Link>
        </nav>
      </div>
    </header>
  );
}
