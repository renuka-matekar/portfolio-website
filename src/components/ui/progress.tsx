import * as React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    return (
      <div ref={ref} className={`relative w-full h-2 bg-gray-700 rounded-full ${className}`} {...props}>
        <div
          className="absolute h-2 bg-green-400 rounded-full transition-all"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
export default Progress;
