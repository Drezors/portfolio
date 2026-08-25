'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ExternalLink, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface TimelineItem {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description?: string;
  type: 'education' | 'work';
  current?: boolean;
  logo?: string;
  link?: string;
  details?: {
    fullDescription?: string;
    skills?: {
      label: string;
      href?: string;
    }[];

    achievements?: {
      label: string;
      href?: string;
    }[];
  };
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  return (
    <>
      <div className={cn('relative', className)}>
        {/* Ligne verticale */}
        <div className='absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px' />

        <div className='space-y-12'>
          {items.map((item, index) => (
            <TimelineEntry key={index} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {/* Dialog pour les détails */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className='sm:max-w-lg max-h-[85vh] overflow-hidden flex flex-col'>
          {selectedItem && (
            <>
              <DialogHeader>
                <div className='flex items-center gap-4 mb-2'>
                  {selectedItem.logo && selectedItem.link ? (
                    <a href={selectedItem.link} target='_blank' rel='noopener noreferrer' aria-label={`Visiter le site de ${selectedItem.subtitle}`} onClick={(e) => e.stopPropagation()} className='block'>
                      <img src={selectedItem.logo} alt={`Logo ${selectedItem.subtitle}`} className='w-12 h-12 rounded-lg object-contain bg-foreground/5 p-1' />
                    </a>
                  ) : (
                    <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center', selectedItem.current ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground')}>
                      {selectedItem.type === 'education' ? <GraduationCap className='w-6 h-6' /> : <Briefcase className='w-6 h-6' />}
                    </div>
                  )}
                  <div>
                    <span className='text-xs font-medium text-primary uppercase tracking-wider'>{selectedItem.type === 'education' ? 'Formation' : 'Expérience'}</span>
                    {selectedItem.current && (
                      <span className='ml-2 inline-flex items-center gap-1 text-xs font-medium text-primary'>
                        <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                        En cours
                      </span>
                    )}
                  </div>
                </div>
                <DialogTitle className='text-xl'>{selectedItem.title}</DialogTitle>
                <DialogDescription asChild>
                  <div className='space-y-1'>
                    <p className='font-medium text-foreground'>{selectedItem.subtitle}</p>
                    <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                      <span className='flex items-center gap-1.5'>
                        <MapPin className='w-3.5 h-3.5' />
                        {selectedItem.location}
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <Calendar className='w-3.5 h-3.5' />
                        {selectedItem.period}
                      </span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className='space-y-4 pt-2 overflow-y-auto'>
                {/* Description */}
                {(selectedItem.details?.fullDescription || selectedItem.description) && (
                  <div>
                    <h4 className='text-sm font-medium text-foreground mb-2'>Description</h4>
                    <p className='text-sm text-muted-foreground leading-relaxed'>{selectedItem.details?.fullDescription || selectedItem.description}</p>
                  </div>
                )}

                {/* Compétences */}
                {selectedItem.details?.skills && selectedItem.details.skills.length > 0 && (
                  <div>
                    <h4 className='text-sm font-medium text-foreground mb-2'>Compétences</h4>
                    <div className='flex flex-wrap gap-2'>
                      {selectedItem.details.skills.map((skill, i) =>
                        skill.href ? (
                          <Link key={i} href={skill.href} onClick={() => setSelectedItem(null)} className='px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors'>
                            {skill.label}
                          </Link>
                        ) : (
                          <span key={i} className='px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary'>
                            {skill.label}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Réalisations */}
                {selectedItem.details?.achievements && selectedItem.details.achievements.length > 0 && (
                  <div>
                    <h4 className='text-sm font-medium text-foreground mb-2'>Réalisations</h4>
                    <ul className='space-y-1.5'>
                      {selectedItem.details.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                          <span className='w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0' />

                          {achievement.href ? (
                            <Link href={achievement.href} onClick={() => setSelectedItem(null)} className='hover:text-primary transition-colors underline underline-offset-4'>
                              {achievement.label}
                            </Link>
                          ) : (
                            achievement.label
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Lien */}
                {selectedItem.link && (
                  <a href={selectedItem.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'>
                    <ExternalLink className='w-4 h-4' />
                    Visiter le site
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function TimelineEntry({ item, index, onClick }: { item: TimelineItem; index: number; onClick: () => void }) {
  const isLeft = index % 2 === 0;

  return (
    <div className='relative'>
      {/* Point sur la ligne */}
      <div className={cn('absolute left-6 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10', 'md:left-1/2', item.current ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground border border-border')}>
        {item.type === 'education' ? <GraduationCap className='w-5 h-5' /> : <Briefcase className='w-5 h-5' />}
      </div>

      {/* Contenu */}
      <div className={cn('ml-20 md:ml-0 md:w-[calc(50%-3rem)]', isLeft ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8')}>
        <button
          onClick={onClick}
          className={cn(
            'w-full text-left p-5 rounded-lg bg-card border border-border',
            'transition-all duration-300',
            'hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
            'cursor-pointer group',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
            item.current && 'border-primary/30',
            isLeft && 'md:text-right',
          )}
        >
          <div className='flex items-center justify-between gap-2'>
            <span className='text-xs font-medium text-primary uppercase tracking-wider'>{item.period}</span>
            <span className={cn('text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity', 'flex items-center gap-1', isLeft && 'md:order-first')}>
              Voir plus
              <ExternalLink className='w-3 h-3' />
            </span>
          </div>
          <h3 className='mt-2 text-lg font-semibold text-foreground leading-snug text-balance'>{item.title}</h3>
          <div className={cn('mt-2 flex items-center gap-2', isLeft && 'md:flex-row-reverse')}>
            {item.logo &&
              (item.link ? (
                <a href={item.link} target='_blank' rel='noopener noreferrer' aria-label={`Visiter le site de ${item.subtitle}`} onClick={(e) => e.stopPropagation()} className='block'>
                  <img src={item.logo} alt={`Logo ${item.subtitle}`} className='h-6 w-6' />
                </a>
              ) : (
                <img src={item.logo} alt={`Logo ${item.subtitle}`} className='h-6 w-6' />
              ))}
            <p className='text-sm font-medium text-muted-foreground'>{item.subtitle}</p>
          </div>
          <p className='mt-1 text-xs text-muted-foreground/70'>{item.location}</p>
          {item.description && <p className='mt-3 text-sm text-muted-foreground'>{item.description}</p>}
          {item.current && (
            <span className={cn('inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-primary', isLeft && 'md:flex-row-reverse')}>
              <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
              En cours
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
