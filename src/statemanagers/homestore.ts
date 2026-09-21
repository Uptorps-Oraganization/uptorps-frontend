/* eslint-disable @typescript-eslint/no-explicit-any */
import { testimonialsData } from "@/lib/datalib";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const homeStore = create((set) => ({
  testimonialIndex: 0,
  subscribeButtIcon: false,

  setTestimonialIndex: (position: number) => set(() => ({ testimonialIndex: position })),
  prevTestimonial: () => set((state: any) => ({ testimonialIndex: state.testimonialIndex > 0 ? state.testimonialIndex - 1 : testimonialsData.length - 1 })),
  nextTestimonial: () => set((state: any) => ({ testimonialIndex: state.testimonialIndex < testimonialsData.length - 1 ? state.testimonialIndex + 1 : 0 })),

  changeSubscribeButtIcon: () => set((state: any) => ({ subscribeButtIcon: !state.subscribeButtIcon })),
}));

export const useHomeStore = () => homeStore(
    useShallow((state: any) => ({
      testimonialIndex: state.testimonialIndex,
      subscribeButtIcon: state.subscribeButtIcon,

      setTestimonialIndex: state.setTestimonialIndex,
      prevTestimonial: state.prevTestimonial,
      nextTestimonial: state.nextTestimonial,

      changeSubscribeButtIcon: state.changeSubscribeButtIcon,
    })),
  );
