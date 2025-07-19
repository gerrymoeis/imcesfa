import { forwardRef, useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { type Paths, setupSvgRenderer } from "@/utils/frame";
import { cva } from "class-variance-authority";

const frameVariants = cva(
  "absolute inset-0 w-full h-full transition-colors duration-500",
  {
    variants: {
      mode: {
        dark: "text-white",
        light: "text-black",
      },
    },
    defaultVariants: {
      mode: "dark",
    },
  }
);

interface FrameProps extends HTMLAttributes<SVGSVGElement> {
  paths: Paths;
  mode?: "dark" | "light";
  enableBackdropBlur?: boolean;
  enableViewBox?: boolean;
}

const Frame = forwardRef<SVGSVGElement, FrameProps>(
  ({ paths, className, mode, enableBackdropBlur, enableViewBox, ...props }, ref) => {
    const el = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
      const svgElement = el.current;
      if (!svgElement) return;

      const renderer = setupSvgRenderer({
        el: svgElement as any, // Cast to any to avoid render property issue
        paths,
        enableBackdropBlur,
        enableViewBox,
      });

      return () => {
        renderer.destroy();
      };
    }, [paths, enableBackdropBlur, enableViewBox]);

    return (
      <svg
        ref={(node) => {
          el.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn(frameVariants({ mode }), className)}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      ></svg>
    );
  }
);

Frame.displayName = "Frame";

export { Frame, type Paths };
