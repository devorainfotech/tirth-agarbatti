import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const steps = [
  {
    number: '01',
    title: 'Inspiration',
    description:
      'Every fragrance begins with a feeling — a memory of sandalwood in morning air, the delicate lift of jasmine, or the depth of musk settling into the evening.',
  },
  {
    number: '02',
    title: 'Fragrance',
    description:
      'Fragrance notes are selected to build a complete aromatic story — from the first moment of light to the lingering warmth that remains in a space.',
  },
  {
    number: '03',
    title: 'Craft',
    description:
      'Our incense sticks are made with attention to the craft of fragrance-making — where skill and care are at the heart of every product in the Tirth range.',
  },
  {
    number: '04',
    title: 'Experience',
    description:
      'The final Tirth experience is designed to be complete — a fragrance that fills a space beautifully, consistently and memorably.',
  },
];

export default function CraftSection() {
  return (
    <section id="craft" className="section-py" style={{ background: 'var(--color-ivory-warm)' }}>
      <div className="container-site">
        {/* Header */}
        <FadeUp className="mx-auto mb-16 max-w-xl text-center">
          <div className="label-sm mb-3">Our Craft</div>
          <h2
            className="font-display text-charcoal mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
          >
            The Art Behind<br />
            the <HighlightedWord tone="maroon">Aroma</HighlightedWord>
          </h2>
          <p className="font-body" style={{ color: 'var(--color-charcoal-light)' }}>
            A thoughtful journey from inspiration to the final fragrance experience.
          </p>
        </FadeUp>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative group">
                {/* Connecting line (not on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute hidden h-px -translate-y-1/2 lg:block top-[3.5rem] left-[calc(1rem+3rem)] w-[calc(100%-3rem)] xl:left-[calc(2rem+3rem)]"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)', opacity: 0.55 }}
                    aria-hidden="true"
                  />
                )}

                <div className="px-2 lg:px-4 xl:px-8 py-8">
                  {/* Number circle */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center border font-display italic text-xl transition-all duration-300
                        group-hover:bg-[var(--color-burgundy)] group-hover:border-[var(--color-burgundy)] group-hover:text-white"
                      style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="flex-1 h-px lg:hidden"
                        style={{ background: 'var(--color-gold)', opacity: 0.3 }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3
                    className="font-display text-2xl mb-3"
                    style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
