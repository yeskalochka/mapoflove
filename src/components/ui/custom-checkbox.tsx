import { forwardRef } from "react";

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ id, label, checked, onChange, className = "" }, ref) => {
    return (
      <div className={`checkbox-wrapper ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="check"
        />
        <label htmlFor={id} className="label">
          <svg width="32" height="32" viewBox="0 0 95 95">
            <rect
              x="15"
              y="15"
              width="65"
              height="65"
              rx="8"
              stroke="hsl(var(--neon-red))"
              strokeWidth="3"
              fill="none"
              className="checkbox-bg"
            />
            <g transform="translate(0,-952.36222)">
              <path
                d="m 35,975 c -5,10 10,15 15,15 20,-20 25,-25 30,-30"
                stroke="hsl(var(--neon-red))"
                strokeWidth="4"
                fill="none"
                className="path1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <span className="text-sm font-medium text-foreground ml-2">{label}</span>
        </label>
      </div>
    );
  }
);

CustomCheckbox.displayName = "CustomCheckbox";

export { CustomCheckbox };