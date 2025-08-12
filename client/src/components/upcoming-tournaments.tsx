import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import TournamentTimeDisplay from "@/components/tournament-time-display";

interface TournamentSummary {
  id: string;
  name: string;
  startDate: string;
  location: string;
  backgroundImage?: string | null;
}

function UpcomingTournaments() {
  const { data: tournaments = [] } = useQuery<TournamentSummary[]>({
    queryKey: ["/api/tournaments"],
  });

  const upcoming = tournaments
    .filter(t => new Date(t.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  if (upcoming.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {upcoming.map(t => (
        <Link key={t.id} href={`/tournament/${t.id}`}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            {t.backgroundImage && (
              <div
                className="h-32 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${t.backgroundImage})` }}
              />
            )}
            <CardHeader>
              <CardTitle className="text-lg font-bold">{t.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-mtta-green" />
                <TournamentTimeDisplay startDate={t.startDate} />
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-mtta-green" />
                <span>{t.location}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default UpcomingTournaments;

