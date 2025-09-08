import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Loading your order...</p>}>
      <ThankYouContent />
    </Suspense>
  );
}
