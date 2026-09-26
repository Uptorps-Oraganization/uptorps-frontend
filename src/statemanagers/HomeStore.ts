/* eslint-disable @typescript-eslint/no-explicit-any */
import { testimonialsData } from "@/lib/datalib";
import type { HomeStoreType } from "@/typesninterfaces/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const homeStore = create<HomeStoreType>((set) => ({
  testimonialIndex: 0,
  subscribeButtIcon: false,

  setTestimonialIndex: (position: number) => set(() => ({ testimonialIndex: position })),
  prevTestimonial: () => set((state) => ({ testimonialIndex: state.testimonialIndex > 0 ? state.testimonialIndex - 1 : testimonialsData.length - 1 })),
  nextTestimonial: () => set((state) => ({ testimonialIndex: state.testimonialIndex < testimonialsData.length - 1 ? state.testimonialIndex + 1 : 0 })),

  changeSubscribeButtIcon: () => set((state) => ({ subscribeButtIcon: !state.subscribeButtIcon })),
}));

export const useHomeStore = () =>
  homeStore(
    useShallow((state) => ({
      testimonialIndex: state.testimonialIndex,
      subscribeButtIcon: state.subscribeButtIcon,
      setTestimonialIndex: state.setTestimonialIndex,
      prevTestimonial: state.prevTestimonial,
      nextTestimonial: state.nextTestimonial,
      changeSubscribeButtIcon: state.changeSubscribeButtIcon,
    })),
  );
