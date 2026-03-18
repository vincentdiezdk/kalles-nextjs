import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md">
        <h1 className="font-sans font-extrabold text-6xl text-primary mb-4">
          404
        </h1>
        <h2 className="font-sans font-bold text-2xl text-foreground mb-4">
          Siden blev ikke fundet
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Den side du leder efter findes ikke eller er blevet flyttet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Gå til forsiden
        </Link>
      </div>
    </div>
  );
}
