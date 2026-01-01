import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background mt-20">
      <div className="mx-auto max-w-[120rem] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl text-primary mb-4">
              Step Up Shoes
            </h3>
            <p className="font-paragraph text-base text-background opacity-90">
              Premium footwear designed by Knox. Step into style and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/store" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/return-policy" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-xl text-background mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/delivery" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link 
                  to="/payment-methods" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="font-paragraph text-base text-background opacity-90 hover:text-primary transition-colors"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-xl text-background mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-brandaccent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-brandaccent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-brandaccent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background border-opacity-20 mt-8 pt-8">
          <p className="font-paragraph text-sm text-background opacity-75 text-center">
            © 2026 Step Up Shoes Online Shop. Designed by Knox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
