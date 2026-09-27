export type HomeStoreType = {
  testimonialIndex: number;
  subscribeButtIcon: boolean;

  setTestimonialIndex: (position: number) => void;
  prevTestimonial: () => void;
  nextTestimonial: () => void;

  changeSubscribeButtIcon: () => void;
};
