import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/90 p-3 shadow-[0_-18px_40px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-xl gap-3">
        <Button href="/contact" className="flex-1 text-center">
          Free Audit
        </Button>
        <Button href="/contact" variant="ghost" className="flex-1 text-center">
          Strategy Call
        </Button>
      </div>
    </div>
  );
}
