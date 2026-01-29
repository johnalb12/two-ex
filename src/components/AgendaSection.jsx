import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, UtensilsCrossed, Users, Moon, Dumbbell, Briefcase, MapPin, Music, Coffee, Tv, PartyPopper, BookOpen, Trophy, Heart, Wind } from 'lucide-react';
import { itinerary } from '../data/itinerary';

const iconMap = {
  UtensilsCrossed,
  Users,
  Moon,
  Dumbbell,
  Briefcase,
  MapPin,
  Music,
  Coffee,
  Tv,
  PartyPopper,
  BookOpen,
  Trophy,
  Heart,
  Wind,
  Sandwich: UtensilsCrossed
};

const AgendaSection = () => {
  const [expandedDays, setExpandedDays] = useState({});

  const toggleDay = (date) => {
    setExpandedDays(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  return (
    <section id="agenda" className="py-20 px-4 bg-gradient-to-b from-white to-fog-sf">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas text-navy-seahawks mb-4">
            Weekend Agenda
          </h2>
          <p className="text-xl text-grey-seahawks">
            Your epic Super Bowl weekend itinerary
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {itinerary.map((day, dayIndex) => {
            const isExpanded = expandedDays[day.date];
            const isHighlight = day.isHighlight;

            return (
              <div
                key={day.date}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-8 transition-all duration-300 ${
                  isHighlight
                    ? 'border-green-seahawks'
                    : 'border-navy-seahawks'
                }`}
              >
                {/* Day Header */}
                <button
                  onClick={() => toggleDay(day.date)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      isHighlight ? 'bg-green-seahawks' : 'bg-navy-seahawks'
                    }`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-poppins font-bold text-navy-seahawks">
                        {day.dayOfWeek}
                      </h3>
                      <p className={`text-lg ${
                        isHighlight ? 'text-green-seahawks font-semibold' : 'text-grey-seahawks'
                      }`}>
                        {day.dayName}
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-navy-seahawks" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-navy-seahawks" />
                  )}
                </button>

                {/* Day Events */}
                {isExpanded && (
                  <div className="p-6 pt-0 space-y-4">
                    {day.events.map((event, eventIndex) => {
                      const Icon = iconMap[event.icon] || Calendar;
                      const isMainEvent = event.isMainEvent;

                      return (
                        <div
                          key={eventIndex}
                          className={`flex gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                            isMainEvent
                              ? 'bg-gradient-to-r from-green-seahawks to-navy-seahawks text-white scale-105'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          {/* Timeline Dot */}
                          <div className="flex flex-col items-center">
                            <div className={`p-2 rounded-full ${
                              isMainEvent
                                ? 'bg-white'
                                : event.color === 'green-seahawks'
                                ? 'bg-green-seahawks'
                                : event.color === 'golden-gate'
                                ? 'bg-golden-gate'
                                : 'bg-navy-seahawks'
                            }`}>
                              <Icon className={`w-5 h-5 ${
                                isMainEvent ? 'text-green-seahawks' : 'text-white'
                              }`} />
                            </div>
                            {eventIndex < day.events.length - 1 && (
                              <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                            )}
                          </div>

                          {/* Event Details */}
                          <div className="flex-1">
                            <div className={`text-sm font-semibold mb-1 ${
                              isMainEvent ? 'text-white' : 'text-grey-seahawks'
                            }`}>
                              {event.time}
                            </div>
                            <h4 className={`text-lg font-poppins font-bold mb-1 ${
                              isMainEvent ? 'text-white' : 'text-navy-seahawks'
                            }`}>
                              {event.title}
                            </h4>
                            <p className={`text-sm ${
                              isMainEvent ? 'text-white opacity-90' : 'text-gray-600'
                            }`}>
                              {event.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Go Hawks Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-navy-seahawks text-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-2xl font-bebas tracking-wider">
              GO HAWKS! 🏈
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
