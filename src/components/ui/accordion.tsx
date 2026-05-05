import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import * as accordion from "@zag-js/accordion";
import { type Props } from "@zag-js/accordion";
import { useMachine, normalizeProps } from "@zag-js/react";
import { ChevronDown, FilePenLine } from "lucide-react";
import { useId, createContext, useContext } from "react";

const AccordionContext = createContext<ReturnType<
  typeof accordion.connect
> | null>(null);
const AccordionValueContext = createContext<{
  value: string;
}>({ 
  value: "",
});

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }
  return context;
}

function AccordionRoot({
  children,
  className,
  id,
  ...rest
}: React.ComponentProps<"div"> & Omit<Props, "id">) {
  const service = useMachine(accordion.machine, {
    id: useId(),
    collapsible: true,
    ...rest,
  });
  const api = accordion.connect(service, normalizeProps);

  return (
    <AccordionContext.Provider value={api}>
      <div
        className={twMerge(["flex flex-col gap-3", className])}
        {...api.getRootProps()}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  children,
  className,
  value,
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const api = useAccordion();

  return (
    <AccordionValueContext.Provider
      value={{
        value,
      }}
    >
      <div
        className={twMerge([
          "relative px-6 pt-3 pb-6 data-[state=open]:drop-shadow-[0_0px_24px_var(--color-primary)]",
          "[--color-frame-1-stroke:var(--color-primary)]",
          "[--color-frame-1-fill:var(--color-primary)]/30",
          "[--color-frame-2-stroke:var(--color-primary)]",
          "[--color-frame-2-fill:transparent]",
          "bg-background-elevated/30 backdrop-blur-sm",
          className,
        ])}
        {...api.getItemProps({ value })}
      >
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","15","0"],["L","100% - 0","0"],["L","100% - 0","100% - 7"],["L","0% + 0","100% - 7"],["L","0% + 0","0% + 15"],["L","15","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","7","100% - 7"],["L","100% - 8","100% - 7"],["L","100% - 14","100% + 0"],["L","12","100% + 0"],["L","7","100% - 7"]]}]'
          )}
        />
        <div className="relative">{children}</div>
      </div>
    </AccordionValueContext.Provider>
  );
}

function AccordionTrigger({
  children,
  className,
}: React.ComponentProps<"div">) {
  const api = useAccordion();
  const context = useContext(AccordionValueContext);

  return (
    <h3>
      <button
        className={twMerge([
          "flex items-center data-[state=open]:text-shadow-lg text-shadow-primary font-bold cursor-pointer w-full group py-3 -my-2 data-[state=open]:pt-4 transition-[padding] duration-100 min-h-[44px]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          className,
        ])}
        {...api.getItemTriggerProps({
          value: context.value,
        })}
      >
        <FilePenLine className="size-5 me-3" /> {children}
        <ChevronDown className="ms-auto size-5 group-data-[state=open]:rotate-180 transition-transform" />
      </button>
    </h3>
  );
}

function AccordionContent({
  children,
  className,
}: React.ComponentProps<"div">) {
  const api = useAccordion();
  const context = useContext(AccordionValueContext);

  return (
    <div
      className={twMerge([
        "py-3 mt-2 text-muted-foreground data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className,
      ])}
      {...api.getItemContentProps({ value: context.value })}
    >
      {children}
    </div>
  );
}

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
