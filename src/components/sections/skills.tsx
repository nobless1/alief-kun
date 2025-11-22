import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 border-b">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            My Technical Skills
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have a diverse skill set that allows me to tackle challenges across the full stack, from crafting beautiful UIs to architecting robust backend systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">{skill.level}%</p>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
