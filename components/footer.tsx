import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-800 text-white mt-32 border-t border-slate-700">
      
      {/* --- CHARACTER IMAGE (The "Pop Out" Effect) --- */}
      {/* - absolute: Takes it out of the normal flow
         - -top-24: Pulls it UP by 6rem (approx 96px) above the footer line
         - left-10: Positions it slightly from the left (adjust as needed)
         - z-10: Ensures it sits ON TOP of the content above the footer
         - pointer-events-none: Allows clicks to pass through the empty parts of the image
      */}
      <div className="absolute -top-24 left-4 md:left-20 w-48 h-48 z-10 pointer-events-none">
        <Image 
          src="/character.png"
          alt="Game Character"
          width={700}
          height={700}
          className="object-contain drop-shadow-lg"
        />
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* --- SUPPORT LINKS (Hover Zoom Effect) --- */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8 z-20">
          
          {/* Patreon Link */}
          <Link 
            href="https://patreon.com" 
            target="_blank" 
            className="group" // "group" allows us to style the image when the link is hovered
          >
            <div className="relative w-64 h-20 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <Image 
                src="/patreon-button.png" // Place your button image in /public
                alt="Support on Patreon"
                fill // Automatically fills the parent container (w-64 h-20)
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </Link>

          {/* Itch.io Link */}
          <Link 
            href="https://itch.io" 
            target="_blank" 
            className="group"
          >
            <div className="relative w-64 h-20 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <Image 
                src="/itch-button.png" // Place your button image in /public
                alt="Get it on Itch.io"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </Link>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="text-slate-400 text-sm mt-4">
          ©Pligh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}