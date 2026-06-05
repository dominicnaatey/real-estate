"use client";

import { useEffect } from "react";
import { Bold, Italic, List, Info } from "lucide-react";
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

const HOA_OPTIONS = [
  { value: "0", label: "$0" },
  { value: "100", label: "$100/mo" },
  { value: "200", label: "$200/mo" },
  { value: "500", label: "$500/mo" },
];

const BUILDING_YEARS = [
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2020", label: "2020" },
  { value: "2010", label: "2010" },
  { value: "2000", label: "2000" },
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
            <div className="flex items-center gap-3">
              <span className="text-admin-label-color text-admin-label-size font-admin-label">
                HOA
              </span>
              <Info className="w-4 h-4 text-gray-400" />
              <label className="flex items-center gap-1.5 cursor-pointer group">
                <div className="w-4 h-4 rounded border-2 border-[#E5E7EB] bg-[#E5E7EB] group-hover:border-gray-300 transition-colors" />
                <span className="text-sm font-semibold text-gray-500">N/A</span>
              </label>
            </div>
            <AdminDropdown
              value={state.highlightHoa}
              onChange={state.setHighlightHoa}
              options={HOA_OPTIONS}
              placeholder="Select fee..."
            />
          </div>

          <AdminDropdown
            label="Building Year"
            value={state.highlightBuildingYear}
            onChange={state.setHighlightBuildingYear}
            options={BUILDING_YEARS}
            placeholder="Select year..."
          />

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
