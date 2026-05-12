"use client";

import { useEffect } from "react";
import { Bold, Italic, List, ChevronDown, Info } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextField, TextAreaField } from "./fields";
import type { ListingFormState } from "./types";

type DescriptionHighlightsSectionProps = {
  state: ListingFormState;
};

export function DescriptionHighlightsSection({ state }: DescriptionHighlightsSectionProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: state.description,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      state.setDescription(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "format focus:outline-none min-h-[140px] max-w-none text-(--admin-field-text-color) text-sm",
      },
    },
  });

  useEffect(() => {
    if (editor && !editor.isDestroyed && state.description && editor.getHTML() !== state.description) {
      editor.commands.setContent(state.description);
    }
  }, [state.description, editor]);

  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-(--admin-heading-color) text-(--admin-heading-size) font-(--admin-heading-weight)">
          Description &amp; Highlights
        </h3>
      </div>

      <div className="space-y-6">
        {/* Property Overview */}
        <div className="space-y-2">
          <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
            Property Overview
          </span>
          <div className="bg-(--admin-field-bg) rounded-(--admin-field-radius) overflow-hidden">
            <div className="border-b-4 border-white p-2 flex gap-2">
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBold().run()}
                disabled={!editor?.can().chain().focus().toggleBold().run()}
                aria-label="Bold"
                className={`p-1 rounded transition-colors ${editor?.isActive('bold') ? 'bg-black/10 text-[#181d1a]' : 'hover:bg-black/5 text-gray-600'}`}
              >
                <Bold className="w-4.5 h-4.5"/>
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                disabled={!editor?.can().chain().focus().toggleItalic().run()}
                aria-label="Italic"
                className={`p-1 rounded transition-colors ${editor?.isActive('italic') ? 'bg-black/10 text-[#181d1a]' : 'hover:bg-black/5 text-gray-600'}`}
              >
                <Italic className="w-4.5 h-4.5"/>
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                disabled={!editor?.can().chain().focus().toggleBulletList().run()}
                aria-label="List"
                className={`p-1 rounded transition-colors ${editor?.isActive('bulletList') ? 'bg-black/10 text-[#181d1a]' : 'hover:bg-black/5 text-gray-600'}`}
              >
                <List className="w-4.5 h-4.5" />
              </button>
            </div>
            <div className="w-full p-4 bg-transparent border-none text-(--admin-field-text-color) text-sm focus:ring-0 outline-none overflow-y-auto">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        {/* 3x2 Grid for dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property Type */}
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
              Property Type
            </span>
            <div className="relative">
              <select
                value={state.highlightType}
                onChange={(e) => state.setHighlightType(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightType === "" ? "text-gray-400 text-sm" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select property type</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* HOA */}
          <div className="block space-y-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
                  HOA
                </span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border-2 border-[#E5E7EB] bg-[#E5E7EB] group-hover:border-gray-300 transition-colors flex items-center justify-center">
                  {/* Simulate checkbox state if needed. Here we assume it's unlinked from state for now, or just static to match design */}
                </div>
                <span className="text-sm font-semibold text-gray-500">N/A</span>
              </label>
            </div>
            <div className="relative">
              <select
                value={state.highlightHoa}
                onChange={(e) => state.setHighlightHoa(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightHoa === "" ? "text-gray-300" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select fee...</option>
                <option value="0">$0</option>
                <option value="100">$100/mo</option>
                <option value="200">$200/mo</option>
                <option value="500">$500/mo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Building Year */}
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
              Building Year
            </span>
            <div className="relative">
              <select
                value={state.highlightBuildingYear}
                onChange={(e) => state.setHighlightBuildingYear(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightBuildingYear === "" ? "text-gray-300" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select year...</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2020">2020</option>
                <option value="2010">2010</option>
                <option value="2000">2000</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Outside View */}
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
              Outside View
            </span>
            <div className="relative">
              <select
                value={state.highlightOutside}
                onChange={(e) => state.setHighlightOutside(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightOutside === "" ? "text-gray-300" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select view...</option>
                <option value="Ocean View">Ocean View</option>
                <option value="City View">City View</option>
                <option value="Mountain View">Mountain View</option>
                <option value="Park View">Park View</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Garden */}
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
              Garden
            </span>
            <div className="relative">
              <select
                value={state.highlightGarden}
                onChange={(e) => state.setHighlightGarden(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightGarden === "" ? "text-gray-300" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select garden...</option>
                <option value="Private Garden">Private Garden</option>
                <option value="Shared Garden">Shared Garden</option>
                <option value="Terrace">Terrace</option>
                <option value="Balcony">Balcony</option>
                <option value="None">None</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Parking */}
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">
              Parking
            </span>
            <div className="relative">
              <select
                value={state.highlightParking}
                onChange={(e) => state.setHighlightParking(e.target.value)}
                className={`appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer ${state.highlightParking === "" ? "text-gray-300" : "text-(--admin-field-text-color)"}`}
              >
                <option value="" disabled>Select parking...</option>
                <option value="1 Space">1 Space</option>
                <option value="2 Spaces">2 Spaces</option>
                <option value="Garage">Garage</option>
                <option value="Street Parking">Street Parking</option>
                <option value="None">None</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>
        </div>

      </div>
    </div>
  );
}
