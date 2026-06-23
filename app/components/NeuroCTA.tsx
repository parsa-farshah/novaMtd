import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NeuroCTA = () => {
  return (
    <section className="flex flex-col items-center mt-20 gap-5 px-3 md:px-6">
      <h2 className="text-2xl font-black text-center">
        برای دریافت مشاوره با ما تماس بگیرید
      </h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="rounded-2xl bg-white text-foreground border border-border shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            تماس با ما
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md rounded-3xl border border-white/20 bg-blue-600 text-white shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-white">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </DialogTitle>
            <DialogDescription className="pt-2 text-white/80">
              برای تماس کارشناسان ما، شماره‌تان را وارد کنید
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            <Input
              type="tel"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              className="text-right rounded-2xl focus:!border-[1px] border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white focus-visible:border-white"
              dir="rtl"
            />
            <Button className="w-full rounded-2xl bg-white text-blue-700 hover:bg-white/90 shadow-md cursor-pointer">
              ثبت شماره
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NeuroCTA;
