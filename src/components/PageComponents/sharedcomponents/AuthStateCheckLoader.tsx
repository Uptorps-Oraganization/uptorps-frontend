import { Spinner } from "@/components/ui/spinner";

export const AuthStateCheckLoader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-primary">
        <Spinner className="size-6 md:size-8 lg:size-10" />

        <section className="mt-4">
          <h1 className="text-sm md:text-lg font-bold">Checking authentication state.....</h1>
        </section>
      </div>
    </>
  );
};
