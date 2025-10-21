import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <Leaf className="w-7 h-7 text-primary" />
            Paradise Nursery
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
