import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown, ShoppingBag } from 'lucide-react';

const mockProducts = [
  { id: 1, name: "Royal Blue Silk Lehenga", category: "Bridal", price: 45000, image: "https://images.unsplash.com/photo-1596386461350-326ccbc93761?q=80&w=800" },
  { id: 2, name: "Ivory Georgette Saree", category: "Party Wear", price: 12000, image: "https://images.unsplash.com/photo-1585250482435-950c05876359?q=80&w=800" },
  { id: 3, name: "Maroon Bridal Set", category: "Bridal", price: 65000, image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800" },
  { id: 4, name: "Gold Sequin Gown", category: "Rental", price: 8000, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800" },
  { id: 5, name: "Peach A-Line Kurta", category: "Party Wear", price: 5500, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800" },
  { id: 6, name: "Emerald Rental Lehengha", category: "Rental", price: 15000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800" },
];

const CollectionDetail = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const categories = ['All', 'Bridal', 'Rental', 'Party Wear'];

  useEffect(() => {
    let result = [...mockProducts];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortOption === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    }
    // Newest would typically rely on a date field, skipping for mock

    setFilteredProducts(result);
  }, [activeCategory, sortOption]);

  return (
    <div className="min-h-screen pt-24 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Our Collections</h1>
            <p className="text-gray-400">Discover handpicked designs for every occasion.</p>
        </div>

        <div className="container mx-auto px-4 relative flex items-start gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block w-64 glass-card p-6 sticky top-28 shrink-0">
                <div className="mb-8">
                    <h3 className="text-miorah-gold font-serif text-xl mb-4 border-b border-white/10 pb-2">Category</h3>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                                    activeCategory === cat ? 'bg-miorah-gold/20 text-miorah-gold' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-miorah-gold font-serif text-xl mb-4 border-b border-white/10 pb-2">Sort By</h3>
                    <div className="space-y-2">
                         {[
                            { label: 'Newest Arrivals', val: 'newest' },
                            { label: 'Price: Low to High', val: 'price-low' },
                            { label: 'Price: High to Low', val: 'price-high' },
                        ].map(opt => (
                            <button
                                key={opt.val}
                                onClick={() => setSortOption(opt.val)}
                                className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                                    sortOption === opt.val ? 'bg-miorah-gold/20 text-miorah-gold' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Mobile Filter Toggle & Sort */}
            <div className="lg:hidden w-full flex justify-between items-center mb-6">
                <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 glass-card text-white hover:text-miorah-gold"
                >
                    <Filter size={18} /> Filters
                </button>
                <div className="relative">
                     <select 
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-miorah-navy border border-white/10 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-miorah-gold appearance-none pr-8"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                     </select>
                     <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card overflow-hidden group relative"
                            >
                                <div className="h-[300px] overflow-hidden relative">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    
                                    <button className="absolute bottom-4 right-4 p-3 bg-miorah-gold text-miorah-navy rounded-full translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-white">
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="text-xs text-miorah-gold uppercase tracking-wider mb-1">{product.category}</div>
                                    <h3 className="text-white font-serif text-lg mb-2 truncate">{product.name}</h3>
                                    <div className="text-gray-300">₹{product.price.toLocaleString()}</div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
            {isFilterOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 lg:hidden"
                        onClick={() => setIsFilterOpen(false)}
                    />
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed top-0 right-0 bottom-0 w-[300px] bg-miorah-dark-navy z-50 p-6 overflow-y-auto lg:hidden border-l border-white/10"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-serif text-white">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-miorah-gold font-medium mb-4 uppercase text-sm tracking-wider">Category</h3>
                                <div className="space-y-3">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center gap-3 text-gray-300">
                                            <input 
                                                type="radio" 
                                                name="mobile-category"
                                                checked={activeCategory === cat}
                                                onChange={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                                                className="accent-miorah-gold w-4 h-4"
                                            />
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
  );
};

export default CollectionDetail;
