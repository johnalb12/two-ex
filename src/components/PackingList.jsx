import { Shirt, Music, Dumbbell, Backpack, Flag, CircleDot, Footprints, Wind, Sun, CreditCard, Cable, Beer, Circle, Pill, Cookie, Droplet, SquareStack, Paintbrush } from 'lucide-react';
import { packingList } from '../data/packingList';

const iconMap = {
  Shirt,
  Music,
  Dumbbell,
  Backpack,
  Flag,
  CircleDot,
  Footprints,
  Wind,
  Sun,
  CreditCard,
  Cable,
  Beer,
  Circle,
  Pill,
  Cookie,
  Droplet,
  SquareStack,
  Paintbrush
};

const PackingList = () => {
  // Color mapping for each category
  const colorClasses = {
    'navy-seahawks': {
      gradient: 'bg-gradient-to-br from-navy-seahawks to-navy-seahawks',
      icon: 'text-navy-seahawks'
    },
    'green-seahawks': {
      gradient: 'bg-gradient-to-br from-green-seahawks to-navy-seahawks',
      icon: 'text-green-seahawks'
    },
    'grey-seahawks': {
      gradient: 'bg-gradient-to-br from-grey-seahawks to-navy-seahawks',
      icon: 'text-grey-seahawks'
    },
    'golden-gate': {
      gradient: 'bg-gradient-to-br from-golden-gate to-navy-seahawks',
      icon: 'text-golden-gate'
    }
  };

  return (
    <section id="packing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas text-navy-seahawks mb-4">
            Packing List
          </h2>
          <p className="text-xl text-grey-seahawks">
            Don't forget these essentials!
          </p>
        </div>

        {/* Packing Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(packingList).map(([key, category]) => {
            const CategoryIcon = iconMap[category.icon] || Backpack;
            const colorClass = colorClasses[category.color] || colorClasses['navy-seahawks'];

            return (
              <div
                key={key}
                className={`${colorClass.gradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white rounded-full">
                    <CategoryIcon className={`w-6 h-6 ${colorClass.icon}`} />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3">
                  {category.items.map((item, index) => {
                    const ItemIcon = iconMap[item.icon] || Circle;

                    return (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-white group"
                      >
                        <ItemIcon className="w-4 h-4 flex-shrink-0 opacity-75 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                          {item.item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Coors Light Easter Egg Callout */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-coors-blue text-white px-8 py-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <Beer className="w-6 h-6" />
              <span className="text-lg font-poppins font-semibold">
                Pro tip: Don't forget those Coors Light koozies!
              </span>
              <span className="text-2xl">❄️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingList;
