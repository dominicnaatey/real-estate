"use client";

import { useEffect, useState } from "react";
import { Bold, Italic, List } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { AdminDropdown } from "../../ui/AdminDropdown";
import type { ListingFormState } from "./types";

type DescriptionHighlightsSectionProps = {
  state: ListingFormState;
};

const PROPERTY_TYPES = [
  { value: "Villa", label: "Villa" },
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Condo", label: "Condo" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Single-Family Home", label: "Single-Family Home" },
];

const OUTSIDE_VIEWS = [
  { value: "Ocean View", label: "Ocean View" },
  { value: "City View", label: "City View" },
  { value: "Mountain View", label: "Mountain View" },
  { value: "Park View", label: "Park View" },
];

const GARDEN_OPTIONS = [
  { value: "Private Garden", label: "Private Garden" },
  { value: "Shared Garden", label: "Shared Garden" },
  { value: "Terrace", label: "Terrace" },
  { value: "Balcony", label: "Balcony" },
  { value: "None", label: "None" },
];

const PARKING_OPTIONS = [
  { value: "1 Space", label: "1 Space" },
  { value: "2 Spaces", label: "2 Spaces" },
  { value: "Garage", label: "Garage" },
  { value: "Street Parking", label: "Street Parking" },
  { value: "None", label: "None" },
];

export function DescriptionHighlightsSection({
  state,
}: DescriptionHighlightsSectionProps) {
  const [hoaNa, setHoaNa] = useState(state.highlightHoa === "N/A");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Experience elevated urban living in this sun-drenched, 1,400-square-foot corner suite. Located in the heart of the financial district, this premium property offers a perfect blend of modern luxury and functional design.",
      }),
    ],
    content: state.description,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      state.setDescription(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "format focus:outline-none min-h-[140px] max-w-none text-admin-field-text text-sm",
      },
    },
  });

  useEffect(() => {
    if (
      editor &&
      !editor.isDestroyed &&
      state.description &&
      editor.getHTML() !== state.description
    ) {
      editor.commands.setContent(state.description);
    }
  }, [state.description, editor]);

  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Description &amp; Highlights
        </h3>
      </div>

      <div className="space-y-6">
        {/* Property Overview */}
        <div className="space-y-2">
          <span className="block text-admin-label-color text-admin-label-size font-admin-label">
            Property Overview
          </span>
          <div className="bg-(--admin-field-bg) rounded-(--admin-field-radius) border border-[#ECECEC] overflow-hidden">
            <div className="border-b border-[#ECECEC] p-2 flex gap-2">
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBold().run()}
                disabled={!editor?.can().chain().focus().toggleBold().run()}
                aria-label="Bold"
                className={`p-1 rounded transition-colors ${editor?.isActive("bold") ? "bg-black/10 text-[#181d1a]" : "hover:bg-black/5 text-gray-600"}`}
              >
                <Bold className="w-4.5 h-4.5" />
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                disabled={!editor?.can().chain().focus().toggleItalic().run()}
                aria-label="Italic"
                className={`p-1 rounded transition-colors ${editor?.isActive("italic") ? "bg-black/10 text-[#181d1a]" : "hover:bg-black/5 text-gray-600"}`}
              >
                <Italic className="w-4.5 h-4.5" />
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                disabled={!editor?.can().chain().focus().toggleBulletList().run()}
                aria-label="List"
                className={`p-1 rounded transition-colors ${editor?.isActive("bulletList") ? "bg-black/10 text-[#181d1a]" : "hover:bg-black/5 text-gray-600"}`}
              >
                <List className="w-4.5 h-4.5" />
              </button>
            </div>
            <div className="w-full p-4">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        {/* 3x2 Grid for dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AdminDropdown
            label="Property Type"
            value={state.highlightType}
            onChange={state.setHighlightType}
            options={PROPERTY_TYPES}
            placeholder="Select property type"
          />

          {/* HOA */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-admin-label-color text-admin-label-size font-admin-label">
                HOA
              </span>
              <button
                type="button"
                onClick={() => {
                  const next = !hoaNa;
                  setHoaNa(next);
                  state.setHighlightHoa(next ? "N/A" : "");
                }}
                className={`text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                  hoaNa
                    ? "bg-[#005C45] text-white"
                    : "bg-(--admin-field-bg) text-[#3e4944] border border-[#ECECEC] hover:border-[#008060]/40"
                }`}
              >
                N/A
              </button>
            </div>
            <input
              type="text"
              value={hoaNa ? "" : state.highlightHoa}
              onChange={(e) => state.setHighlightHoa(e.target.value)}
              disabled={hoaNa}
              placeholder={hoaNa ? "N/A" : "eg. $200/mo"}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20 disabled:text-gray-400 disabled:cursor-not-allowed"
            />
          </div>

          {/* Building Year */}
          <div className="space-y-2">
            <span className="block text-admin-label-color text-admin-label-size font-admin-label">
              Building Year
            </span>
            <input
              type="number"
              value={state.highlightBuildingYear}
              onChange={(e) => state.setHighlightBuildingYear(e.target.value)}
              placeholder="eg. 2018"
              min={1800}
              max={new Date().getFullYear()}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20"
            />
          </div>

          <AdminDropdown
            label="Outside View"
            value={state.highlightOutside}
            onChange={state.setHighlightOutside}
            options={OUTSIDE_VIEWS}
            placeholder="Select view..."
          />

          <AdminDropdown
            label="Garden"
            value={state.highlightGarden}
            onChange={state.setHighlightGarden}
            options={GARDEN_OPTIONS}
            placeholder="Select garden..."
          />

          <AdminDropdown
            label="Parking"
            value={state.highlightParking}
            onChange={state.setHighlightParking}
            options={PARKING_OPTIONS}
            placeholder="Select parking..."
          />
        </div>
      </div>
    </div>
  );
}
