import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getConversationLogs, getAssistants, type ConversationLog, type Assistant } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MessageSquare, Clock, SmilePlus, Meh, Frown, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sentimentIcons = {
  positive: <SmilePlus className="h-4 w-4 text-accent" />,
  neutral: <Meh className="h-4 w-4 text-muted-foreground" />,
  negative: <Frown className="h-4 w-4 text-destructive" />,
};

const ConversationLogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterAssistant = searchParams.get("assistant") || "all";
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState<ConversationLog[]>([]);
  const [assistants, setAssistants] = useState<Assistant[]>([]);

  useEffect(() => {
    setAssistants(getAssistants());
    const allLogs = filterAssistant === "all"
      ? getConversationLogs()
      : getConversationLogs(filterAssistant);
    setLogs(allLogs);
  }, [filterAssistant]);

  const filtered = logs.filter(
    (l) =>
      l.userMessage.toLowerCase().includes(search.toLowerCase()) ||
      l.agentResponse.toLowerCase().includes(search.toLowerCase()) ||
      l.assistantName.toLowerCase().includes(search.toLowerCase())
  );

  const formatTime = (ts: string) => {
    const d = new Date(ts);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">Conversation Logs</h2>
        <p className="text-sm text-muted-foreground">Track all conversations across your assistants.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={filterAssistant}
          onValueChange={(v) => setSearchParams(v === "all" ? {} : { assistant: v })}
        >
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="All assistants" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All assistants</SelectItem>
            {assistants.map((a) => (
              <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
            <MessageSquare className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="font-display font-semibold text-foreground mb-1">No conversation logs</h3>
          <p className="text-sm text-muted-foreground">Logs will appear here once your assistants start handling conversations.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assistant</TableHead>
                <TableHead>User Message</TableHead>
                <TableHead>Agent Response</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium text-sm">{log.assistantName}</TableCell>
                  <TableCell className="max-w-[200px] truncate text-sm">{log.userMessage}</TableCell>
                  <TableCell className="max-w-[200px] truncate text-sm text-muted-foreground">{log.agentResponse}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{log.channel}</Badge>
                  </TableCell>
                  <TableCell>{sentimentIcons[log.sentiment]}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{log.duration}s</span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground whitespace-nowrap">{formatTime(log.timestamp)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ConversationLogs;
