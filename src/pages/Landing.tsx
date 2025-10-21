import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImg from '@/assets/hero-plants.jpg';
import { Leaf, Sparkles, Heart } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Beautiful indoor plant nursery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bring Nature
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Into Your Home
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Discover our curated collection of aromatic and medicinal plants. Transform your space into a natural paradise.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate('/products')}
              className="text-lg px-8 py-6 h-auto shadow-[var(--shadow-elegant)]"
            >
              <Leaf className="mr-2" />
              Explore Our Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Selection</h3>
              <p className="text-muted-foreground">
                Carefully curated plants that thrive in home environments
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-card transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
              <p className="text-muted-foreground">
                Plants with proven aromatic and medicinal properties
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-card transition-all hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Care</h3>
              <p className="text-muted-foreground">
                Perfect for beginners and experienced plant parents alike
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
