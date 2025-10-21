import PlantCard from '@/components/PlantCard';
import { plants } from '@/data/plants';
import { Flower2, Pill } from 'lucide-react';

const Products = () => {
  const aromaticPlants = plants.filter((plant) => plant.category === 'aromatic');
  const medicinalPlants = plants.filter((plant) => plant.category === 'medicinal');

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plant Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of aromatic and medicinal plants, perfect for enhancing your home and well-being.
          </p>
        </div>

        {/* Aromatic Plants Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Flower2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Aromatic Plants</h2>
              <p className="text-muted-foreground">
                Fill your home with natural fragrances and culinary delights
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aromaticPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        {/* Medicinal Plants Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Pill className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Medicinal Plants</h2>
              <p className="text-muted-foreground">
                Natural remedies and healing botanicals for your wellness
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicinalPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
