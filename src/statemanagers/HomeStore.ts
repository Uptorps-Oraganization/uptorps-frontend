import { testimonialsData } from "@/lib/datalib";
import type { HomeStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const homeStore = create<HomeStoreType>((set) => ({
  testimonialIndex: 0,
  subscribeLoadingState: false,

  setTestimonialIndex: (position: number) => set(() => ({ testimonialIndex: position })),
  prevTestimonial: () => set((state) => ({ testimonialIndex: state.testimonialIndex > 0 ? state.testimonialIndex - 1 : testimonialsData.length - 1 })),
  nextTestimonial: () => set((state) => ({ testimonialIndex: state.testimonialIndex < testimonialsData.length - 1 ? state.testimonialIndex + 1 : 0 })),

  setSubscribeLoadingState: () => set((state) => ({ subscribeLoadingState: !state.subscribeLoadingState })),
}));

export const useHomeStore = () =>
  homeStore(
    useShallow((state) => ({
      testimonialIndex: state.testimonialIndex,
      subscribeLoadingState: state.subscribeLoadingState,
      setTestimonialIndex: state.setTestimonialIndex,
      prevTestimonial: state.prevTestimonial,
      nextTestimonial: state.nextTestimonial,
      setSubscribeLoadingState: state.setSubscribeLoadingState,
    })),
  );
