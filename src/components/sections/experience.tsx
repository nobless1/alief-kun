import { experience } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="border-b flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Perjalanan Saya di Dunia Kopi
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Dari tegukan pertama hingga menjadi kepala barista, inilah momen-momen penting yang telah membentuk karir dan hasrat saya terhadap kopi.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          {experience.map((item, index) => (
            <div key={item.title} className="relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'text-right pr-8 ml-auto' : 'text-left pl-8 mr-auto'}`}>
                  <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                    <h3 className="text-lg font-bold font-headline">{item.title}</h3>
                    <p className="text-sm font-semibold text-primary">{item.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
