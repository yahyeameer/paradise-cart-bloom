import { Plant, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(plant);
    toast.success(`${plant.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{plant.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {plant.description}
        </CardDescription>
        <p className="text-2xl font-bold text-primary mt-4">
          ${plant.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="lg">
          <ShoppingCart className="mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
