// Client-side photo prep for the lead form (2026-11-23).
//
// Phone photos run 3–8 MB; a server action on Vercel accepts about 4.5 MB in
// total. So every photo is resized in the browser before it is attached. If a
// photo can't be shrunk and is too big to send, it is dropped and the form
// still submits: a lost photo is fine, a lost lead is not.

export const MAX_PHOTOS = 3;
export const MAX_TOTAL_BYTES = 3 * 1024 * 1024; // stay well under the 4 MB action limit
const MAX_EDGE = 1600; // px, long side: plenty to read a storefront and size a sign
const QUALITY = 0.82;

async function decode(file) {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch {
      // fall through to the <img> path (older Safari, odd formats)
    }
  }
  return await new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("decode failed"));
    };
    img.src = url;
  });
}

// Returns a JPEG File no longer than MAX_EDGE on its long side, or null if the
// browser can't read the image.
export async function shrinkPhoto(file, index = 0) {
  try {
    const src = await decode(file);
    const w = src.width || src.naturalWidth;
    const h = src.height || src.naturalHeight;
    if (!w || !h) return null;
    const scale = Math.min(1, MAX_EDGE / Math.max(w, h));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext("2d");
    // White underlay so transparent PNGs don't turn black as JPEG.
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(src, 0, 0, canvas.width, canvas.height);
    if (typeof src.close === "function") src.close();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", QUALITY));
    if (!blob) return null;
    return new File([blob], `photo-${index + 1}.jpg`, { type: "image/jpeg" });
  } catch {
    return null;
  }
}

// Shrinks the chosen files and applies the count and size caps.
// Returns { files, dropped } where `dropped` counts photos that could not be kept.
export async function preparePhotos(fileList) {
  const picked = Array.from(fileList || []).filter((f) => f.type.startsWith("image/") || /\.(heic|heif)$/i.test(f.name));
  const kept = [];
  let dropped = Math.max(0, picked.length - MAX_PHOTOS);
  let total = 0;
  for (const [i, original] of picked.slice(0, MAX_PHOTOS).entries()) {
    const small = await shrinkPhoto(original, i);
    // If the browser couldn't shrink it, the original only rides along when it is already small.
    const candidate = small || (original.size <= 1024 * 1024 ? original : null);
    if (!candidate || total + candidate.size > MAX_TOTAL_BYTES) {
      dropped += 1;
      continue;
    }
    kept.push(candidate);
    total += candidate.size;
  }
  return { files: kept, dropped };
}

// Puts prepared files back on the <input type="file"> so the native form
// submit (and the server action's FormData) carries the small versions.
// Returns false where the browser can't do that.
export function setInputFiles(input, files) {
  try {
    const dt = new DataTransfer();
    for (const f of files) dt.items.add(f);
    input.files = dt.files;
    return true;
  } catch {
    return false;
  }
}
