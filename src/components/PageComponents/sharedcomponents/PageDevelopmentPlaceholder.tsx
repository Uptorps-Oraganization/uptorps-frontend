import { CodeXmlIcon } from "@animateicons/react/lucide";

export const PageDevelopmentPlaceholder = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <section className="flex flex-col justify-center items-center">
          <CodeXmlIcon className="[&_svg]:size-40! text-destructive" />

          <p className="text-xl py-2">Page now under development</p>
          <span className="text-sm">Content will be available when pushed to production</span>
        </section>
      </div>
    </>
  );
};
