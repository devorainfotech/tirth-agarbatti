import { Leaf, Flame, Sun, Clock } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const values = [
  {
    icon: Leaf,
    title: 'Thoughtful Fragrances',
    description:
      'Fragrance profiles created with attention to how they complement different moods, spaces and moments throughout the day.',
  },
  {
    icon: Flame,
    title: 'Aromatic Experiences',
    description:
      'Incense designed around the complete sensory experience of fragrance — how a space feels, not just how it smells.',
  },
  {
    icon: Sun,
    title: 'For Everyday Rituals',
    description:
      'Suitable for peaceful mornings, meditation, prayer, or simply refreshing a living space with beautiful fragrance.',
  },
  {
    icon: Clock,
    title: 'Made for Every Moment',
    description:
      'Fragrance collections suited to different environments and occasions — from quiet contemplation to vibrant gatherings.',
  },
];

export default function WhyTirth() {
  return (
    <section id="why-tirth" className="section-py" style={{ background: 'var(--color-ivory)' }}>
      <div className="container-site">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-7">
            <div className="label-sm mb-4">Why Tirth</div>
            <h2
              className="font-display text-charcoal"
              style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Fragrance with
              <br />
              <HighlightedWord tone="maroon">Purpose</HighlightedWord> &amp; Intent
            </h2>
          </FadeUp>
          <FadeUp delay={0.12} className="lg:col-span-5">
            <p className="max-w-md font-body text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
              Four ideas shape every Tirth fragrance — how it is composed, how a room feels, and the moments it is made for.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="border-t border-[rgba(184,146,58,0.35)]">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <article
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 border-b py-7 transition-colors duration-300 hover:bg-[var(--color-cream)] md:grid-cols-12 md:gap-x-8 md:py-9 md:px-4 md:-mx-4"
                  style={{ borderColor: 'rgba(184, 146, 58, 0.35)' }}
                >
                  <div className="flex items-center gap-3 md:col-span-2">
                    <span
                      className="font-display italic leading-none text-[var(--color-gold)] transition-colors duration-300 group-hover:text-[var(--color-burgundy)]"
                      style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 md:col-span-4">
                    <Icon
                      size={16}
                      className="shrink-0 text-[var(--color-gold)] transition-colors duration-300 group-hover:text-[var(--color-burgundy)]"
                      aria-hidden="true"
                    />
                    <h3
                      className="font-display text-[1.55rem] leading-tight md:text-[1.85rem]"
                      style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}
                    >
                      {value.title}
                    </h3>
                  </div>

                  <p
                    className="col-span-2 font-body text-[0.98rem] leading-relaxed md:col-span-6 md:col-start-7"
                    style={{ color: 'var(--color-charcoal-light)' }}
                  >
                    {value.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
