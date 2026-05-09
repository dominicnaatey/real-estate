"use client";

/* ─── Reusable field primitives for admin listing forms ─── */

export type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  type?: "text" | "number" | "url";
  required?: boolean;
  disabled?: boolean;
  min?: number;
  step?: number;
};

export function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
  min,
  step,
}: TextFieldProps) {
  return (
    <label className="space-y-1 block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
        {label}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        step={step}
        className="w-full p-2 border border-admin-border admin-field-radius text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:ring-1 focus:ring-[#008060] focus:border-[#008060] outline-none bg-[var(--admin-field-bg)] disabled:bg-[#d6dbd7] disabled:text-[#3e4944]"
      />
    </label>
  );
}

export type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  rows?: number;
};

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaFieldProps) {
  return (
    <label className="space-y-1 block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
        {label}
      </span>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 border border-admin-border admin-field-radius text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:ring-1 focus:ring-[#008060] focus:border-[#008060] outline-none bg-[var(--admin-field-bg)] resize-y"
      />
    </label>
  );
}

export type RadioOption<TValue extends string> = {
  value: TValue;
  label: string;
};

export function RadioGroup<TValue extends string>({
  name,
  label,
  value,
  onChange,
  options,
  columns = 2,
}: {
  name: string;
  label: string;
  value: TValue;
  onChange: (next: TValue) => void;
  options: Array<RadioOption<TValue>>;
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
        {label}
      </legend>
      <div
        className={
          columns === 1
            ? "grid grid-cols-1 gap-2"
            : columns === 3
              ? "grid grid-cols-1 sm:grid-cols-3 gap-2"
              : columns === 4
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
                : "grid grid-cols-1 sm:grid-cols-2 gap-2"
        }
      >
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 border border-admin-border admin-field-radius bg-[var(--admin-field-bg)] px-3 py-2 text-sm text-[#181d1a] hover:border-[#008060]/40 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 border-gray-300 text-[#008060] focus:ring-[#008060]/30"
            />
            <span className="leading-none">{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
