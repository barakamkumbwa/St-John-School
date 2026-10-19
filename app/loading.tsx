import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream-50">
      <Loader2 className="h-10 w-10 animate-spin text-gold-500 mb-4" />
      <p className="text-sm font-medium text-navy-600">Loading...</p>
    </div>
  );
}
