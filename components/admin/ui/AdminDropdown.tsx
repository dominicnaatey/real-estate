"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export type DropdownOption = {
  value: string;
  label: string;
};

type AdminDropdownProps = {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
};

export function AdminDropdown({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
}: AdminDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="space-y-2">
      {label && (
        <span className="block text-admin-label-color text-admin-label-size font-admin-label">
          {label}
        </span>
      )}

      <div ref={containerRef} className="relative" id={id}>
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`w-full h-11 px-4 flex items-center justify-between rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm transition-colors ${
            selected ? "text-admin-field-text" : "text-gray-300"
          } ${open ? "ring-2 ring-[#008060]/20 border-[#008060]/30" : ""}`}
        >
          <span className="truncate font-medium">
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 text-gray-400 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown panel */}
        {open && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-[#ECECEC] rounded-(--admin-field-radius) shadow-lg overflow-hidden">
            <ul role="listbox" className="py-1 max-h-60 overflow-y-auto">
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`px-4 py-2.5 text-sm cursor-pointer select-none transition-colors rounded-lg mx-1 ${
                      isSelected
                        ? "bg-[#005C45] text-white font-medium"
                        : "text-[#005C45] hover:bg-[#F0FAF7]"
                    }`}
                  >
                    {opt.label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
