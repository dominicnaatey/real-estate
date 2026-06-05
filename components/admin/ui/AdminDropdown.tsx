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
          className={`w-full h-11 px-4 flex items-center justify-between rounded-(--admin-field-radius) border border-[#ECECEC] transition-colors text-sm ${
            open
              ? "bg-[#005C45] text-white border-[#005C45]"
              : selected
              ? "bg-(--admin-field-bg) text-admin-field-text"
              : "bg-(--admin-field-bg) text-gray-300"
          }`}
        >
          <span className="truncate font-medium">
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180 text-white" : "text-gray-400"
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
                    className={`px-4 py-2.5 text-sm cursor-pointer select-none transition-colors ${
                      isSelected
                        ? "bg-[#E6F4F0] text-[#005C45] font-medium rounded-lg mx-1"
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
