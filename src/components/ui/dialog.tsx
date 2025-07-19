import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import * as dialog from "@zag-js/dialog";
import { useMachine, normalizeProps } from "@zag-js/react";
import { X } from "lucide-react";
import { useId, createContext, useContext, type ReactNode, forwardRef, type ComponentPropsWithoutRef } from "react";

const DialogContext = createContext<ReturnType<typeof dialog.connect> | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

function DialogRoot({ children, ...rest }: { children: ReactNode } & Omit<dialog.Props, 'id'>) {
  const service = useMachine(dialog.machine, {
    id: useId(),
    ...rest,
  });
  const api = dialog.connect(service, normalizeProps);

  return (
    <DialogContext.Provider value={api}>
      {children}
    </DialogContext.Provider>
  );
}

const DialogTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  const api = useDialog();
  return (
    <button {...api.getTriggerProps()} {...props} ref={ref}>
      {children}
    </button>
  );
});
DialogTrigger.displayName = 'DialogTrigger';

function DialogContent({ children, className }: { children: ReactNode, className?: string }) {
  const api = useDialog();

  if (!api.open) return null;

  return (
    <div {...api.getBackdropProps()} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in-0">
      <div {...api.getPositionerProps()} className={twMerge("relative", className)}>
        <div {...api.getContentProps()}>
          <Frame
            enableBackdropBlur
            className="w-full h-full drop-shadow-lg drop-shadow-primary/30"
            paths={[
              {
                show: true,
                style: {
                  strokeWidth: '1.5',
                  stroke: 'var(--color-primary)/50',
                  fill: 'var(--color-primary)/10',
                },
                path: [
                  ['M', '15', '0'],
                  ['L', '100% - 15', '0'],
                  ['L', '100%', '15'],
                  ['L', '100%', '100% - 15'],
                  ['L', '100% - 15', '100%'],
                  ['L', '15', '100%'],
                  ['L', '0', '100% - 15'],
                  ['L', '0', '15'],
                  ['L', '15', '0'],
                ],
              },
            ]}
          />
          <div className="relative p-8">
            {children}
            <DialogCloseTrigger />
          </div>
        </div>
      </div>
    </div>
  );
}

function DialogTitle({ children, className }: { children: ReactNode, className?: string }) {
  const api = useDialog();
  return <h2 {...api.getTitleProps()} className={twMerge("text-2xl font-bold text-white", className)}>{children}</h2>;
}

function DialogDescription({ children, className }: { children: ReactNode, className?: string }) {
  const api = useDialog();
  return <p {...api.getDescriptionProps()} className={twMerge("mt-2 text-gray-400", className)}>{children}</p>;
}

function DialogCloseTrigger({ className }: { className?: string }) {
  const api = useDialog();
  return (
    <button {...api.getCloseTriggerProps()} className={twMerge("absolute top-4 right-4 text-gray-400 hover:text-white transition-colors", className)}>
      <X size={24} />
    </button>
  );
}

export { DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogCloseTrigger };
