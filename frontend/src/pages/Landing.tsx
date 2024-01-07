import NavBar from '@/components/nav-bar';

export default function Landing() {
  return (
    <div className="container">
      <div className="flex flex-col h-[100vh] overflow-hidden">
        <header className="min-h-24 p-2">
          <NavBar />
        </header>

        <div className="flex-1 p-2 h-full">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] font-geist">
              Empower Change: Donate to Inspiring Nonprofit Organizations
            </h1>
            <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
              Transforming Generosity into Impact: Explore and Support Causes That Matter
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
