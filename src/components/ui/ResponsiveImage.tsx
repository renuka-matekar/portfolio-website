import { useState } from "react";
import Image from "next/image";
import clsx from "clsx"; // Install: npm install clsx

export default function LoadingImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 flex justify-center items-center bg-gray-100 overflow-hidden">
      {/* Skeleton Loader (Shimmer Effect) */}
      <div 
        className={clsx(
          "absolute w-full h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 animate-pulse",
          { "hidden": isLoaded } // Hide when image is loaded
        )}
      />

      {/* Next.js Image */}
      <Image
        src="/your-image.jpg"
        alt="Loading Effect Image"
        width={500} 
        height={300} 
        className={clsx(
          "object-contain transition-opacity duration-700 ease-in-out",
          { "opacity-0 translate-y-[-20px]": !isLoaded, "opacity-100 translate-y-0": isLoaded }
        )}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  );
}





// import Image from 'next/image';

// const ResponsiveImage = () => {
//   // Original dimensions
//   const originalWidth = 2661;
//   const originalHeight = 4094;

//   // Calculate aspect ratio
//   const aspectRatio = originalWidth / originalHeight;

//   // Calculate new dimensions to fit within 500x500 while maintaining aspect ratio
//   let width = 700;
//   let height = 700;

//   if (aspectRatio > 1) {
//     // Image is wider than tall
//     height = width / aspectRatio;
//   } else {
//     // Image is taller than wide
//     width = height * aspectRatio;
//   }

//   return (
//     <div className="relative w-[400px] h-[500px] flex items-center justify-center bg-gray-100">
//       <Image
//       fetchPriority='high'
//         src="https://media-hosting.imagekit.io//72bf826bbbad4f83/WhatsApp%20Image%202025-02-19%20at%209.35.24%20AM.jpeg?Expires=1834554622&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wZnqUYe5o4IhUsBgjfHlY06zik3fWLa0uuNPxC7XYeTKGp1yw4vFGD7KdWkgpFY~ZUaZHL56vyd8gO1EFNm0JEyFftP2~EwgjIjiITypGeON-dMO46gJr9lY176DKGZUkAibQBGWx7qpneBYgdGj1zMihvp7OsAGxw6uP06QbWPATHxvg5hlKfTOX7BW3h-Ny2TRO8-AKKO8hzC1O9vVa4Z4rWWmtkJWThhX0kq4MKiiqCag~as5itaruR9XpS3hWrwJ0fK3kXJV0ErDafpJW~TjrYDIeNX32DPAfBzdjR0raS7CHMl3WPVjKKVE~URIF70GmtufjYbbGLDSAw1OdQ__"
//         width={Math.round(width)}
//         height={Math.round(height)}
//         alt="Scaled image"
//         className="object-contain"
//       />
//     </div>
//   );
// };

// export default ResponsiveImage;