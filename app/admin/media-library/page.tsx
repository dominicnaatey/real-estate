import { MediaLibraryControls } from "../../../components/admin/mediaLibrary/MediaLibraryControls";
import { MediaGallery } from "../../../components/admin/mediaLibrary/MediaGallery";
import { MediaLibraryHeader } from "../../../components/admin/mediaLibrary/MediaLibraryHeader";
import type { MediaItem } from "../../../components/admin/mediaLibrary/types";

export default function AdminMediaLibraryPage() {
  const items: MediaItem[] = [
    {
      id: "hero",
      kind: "hero",
      type: "image",
      title: "789_Atherton_Ext_Dusk.raw",
      subtitle: "42.5 MB • 8256 × 5504 • Oct 12, 2023",
      badge: { icon: "photo", label: "Hero Shot" },
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5tj1lTFKCbqqSDSePWzbSbb7ew0yid05dae10FmGBvWyuPW5blHVxkLythmlfUJDS9u2zObXnGXo4RaAeD3SSuxeJn5HRP14DhYl5gFoYMveAebtAcFYACtEX_UP-IpFRxXd5SYfO53rypbaShK5ZVUqd6TFTM7mT67fQjIPeP3eRPo7cu2XZvxxRVylTNhatOXbq7GtK5jL60pQf3noYVLXa1Kfx0czoCKLFonouQ19KkCIXAXvNjXQXV7WzkBGC7FDFcF_9owJc",
        alt: "Luxury Estate Front",
      },
    },
    {
      id: "living-room",
      kind: "standard",
      type: "image",
      title: "Living_Room_01.jpg",
      subtitle: "8.2 MB • 4K Resolution",
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDebPblueifMz1T0nW7T7cvk2ZLBPCBPZC8-wiVWWlbkGsPYiGjHg667j1m2aNcZg-sterLVSW0CXaiLjAwS5t8VN7UZmwFeZ1E0NhZl3pDe_tJrEMeme2_3i7mPqVJgxEPaCuENpzPJ5MyUaYgtHywmZscDKwnjCXZwGjo1dk3g678cXTe219k91ZdSgq6ea3e-S0mp1Xykn2CQryiMfHCy0rNWfyT0HWf2joeCOrnaeUKiq6L721opdL_0heusey1Ir9DIMgbqG5-",
        alt: "Modern Living Room",
      },
    },
    {
      id: "drone",
      kind: "standard",
      type: "video",
      title: "Drone_Tour_Final.mp4",
      subtitle: "450 MB • 4K 60fps",
      badge: { icon: "videocam", label: "02:45" },
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO7oTJAUP_JwwDwLsjy9leztpCZRkWpGAdH830cng7CaQiBN4MciENlbabxXU1Z7jAT7FrMRmOfdydxSsi2Tu8E0auNvhUL8jYJu9CK1Gq9fCS1Rn7uuuhNDZj0V1wlFXAzwh6aTa4PlKXit5yp5qAkiHHufnZNNtI6BTx1DMkAG2FPQFTY-yJaMNzSt2QBkQx-B5COhxHZn9U9Ppr-5vmlmDzL7OayCJ96GfdxogXEQ1Hi2k70QeiLvJOcW3bg06bP2vHazsR3Xgm",
        alt: "Aerial Property View",
      },
    },
    {
      id: "floorplan",
      kind: "standard",
      type: "document",
      title: "Floorplan_Level1.pdf",
      subtitle: "2.1 MB • 3 Pages",
      badge: { icon: "pdf", label: "PDF" },
    },
    {
      id: "kitchen",
      kind: "standard",
      type: "image",
      title: "Kitchen_Detail.jpg",
      subtitle: "7.5 MB • 4K Resolution",
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Q-y9Ttmos3I-M88h47w7PAi2Km9Tc-jGZjovfKmSFnMtiCwK59rJAXP0BgZp9Jv4ljFNvnhdVoYUtX_W4Ut-w3JIu7-ZaTXKdAM4JelesBWF2Ri-8k_ctEEP1oTHWr2lp7h2a9MZ3_LvcrZrBTeDGQrlB5Ub7LtAd1gir6zCBE8tTMj7t8nfcg7pw7buo_v7zrs7um-EswVokB_c6r-L22wCbmyqto8X_nq42yejBMsgqTVZ3zJ5zMG3DaCAOLfmGRtPQHzQvWvE",
        alt: "Luxury Kitchen",
      },
    },
  ];

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <MediaLibraryHeader />
      <MediaLibraryControls activeTab="all" activeView="grid" />
      <MediaGallery items={items} />
    </div>
  );
}
