import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Clock, MessageSquare, ThumbsUp } from "lucide-react";

const stats = [
  { label: "Total Conversations", value: "2,847", change: "+12%", icon: MessageSquare },
  { label: "Active Assistants", value: "6", change: "+2", icon: Users },
  { label: "Avg. Response Time", value: "1.2s", change: "-0.3s", icon: Clock },
  { label: "Positive Sentiment", value: "78%", change: "+5%", icon: ThumbsUp },
];

const Analytics = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">Analytics</h2>
        <p className="text-sm text-muted-foreground">Monitor performance across all your assistants</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <p className="text-xs text-accent mt-1">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                {s.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversations Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center rounded-lg bg-muted/50">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-10 w-10 mx-auto mb-2" />
                <p className="text-sm">Chart will appear with real data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Positive", pct: 78, color: "bg-accent" },
                { label: "Neutral", pct: 15, color: "bg-muted-foreground" },
                { label: "Negative", pct: 7, color: "bg-destructive" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{s.label}</span>
                    <span className="text-muted-foreground">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Top Performing Assistants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Collections Agent", convos: 1240, sentiment: "82%" },
                { name: "Support Bot", convos: 890, sentiment: "76%" },
                { name: "Sales Qualifier", convos: 717, sentiment: "71%" },
              ].map((a, i) => (
                <div key={a.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary w-6">#{i + 1}</span>
                    <span className="font-medium text-foreground">{a.name}</span>
                  </div>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>{a.convos.toLocaleString()} convos</span>
                    <span>{a.sentiment} positive</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
