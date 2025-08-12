import { Link } from 'wouter';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface Event {
  id: number;
  title: string;
  date: string;
  status: string;
  fee: number;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'MTTA Open 2024',
    date: '2024-10-01',
    status: 'Бүртгэл нээлттэй',
    fee: 0,
    image: 'https://picsum.photos/seed/e1/400/200',
  },
  {
    id: 2,
    title: 'City Championship',
    date: '2024-11-15',
    status: 'Бүртгэл нээлттэй',
    fee: 5000,
    image: 'https://picsum.photos/seed/e2/400/200',
  },
  {
    id: 3,
    title: 'Youth League Finals',
    date: '2024-12-20',
    status: 'Шинэ',
    fee: 0,
    image: 'https://picsum.photos/seed/e3/400/200',
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-soft">
      <img
        src={event.image}
        alt={event.title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{event.title}</h3>
          <Badge variant="secondary" className="text-xs">
            {event.status}
          </Badge>
        </div>
        <p className="text-sm text-slate-400">{event.date}</p>
        {event.fee === 0 && (
          <Badge className="bg-accent text-accent-foreground">Үнэгүй</Badge>
        )}
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="mb-10">
        <Card className="rounded-2xl bg-gradient-to-br from-brand to-brand/70 p-10 text-center">
          <h1 className="mb-6 text-3xl font-bold">Монголын ширээний теннисний холбоо</h1>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-brand text-white hover:bg-teal-700">
              <Link href="/events">Тэмцээнүүд</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-brand text-brand hover:bg-brand/10"
            >
              <Link href="/register">Бүртгүүлэх</Link>
            </Button>
          </div>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Шинэ тэмцээнүүд</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((ev) => (
            <EventCard event={ev} key={ev.id} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Сүүлийн мэдээ</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card key={i} className="overflow-hidden rounded-2xl shadow-soft">
              <div className="h-40 w-full bg-slate-700" />
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold">Placeholder мэдээ {i}</h3>
                <p className="text-sm text-slate-400">Товч тайлбар...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
