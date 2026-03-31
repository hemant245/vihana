export interface Assistant {
  id: string;
  name: string;
  category: string;
  greetingMessage: string;
  language: string;
  tone: "friendly" | "professional" | "casual";
  systemPrompt: string;
  knowledgeBaseUrl: string;
  fallbackMessage: string;
  maxResponseLength: number;
  escalationEmail: string;
  status: "draft" | "active" | "paused";
  createdAt: string;
  updatedAt: string;
}

export interface ConversationLog {
  id: string;
  assistantId: string;
  assistantName: string;
  userMessage: string;
  agentResponse: string;
  channel: string;
  timestamp: string;
  duration: number; // seconds
  sentiment: "positive" | "neutral" | "negative";
}

export const PREDEFINED_CATEGORIES = [
  "Collections",
  "Healthcare",
  "Sales",
  "Customer Support",
  "Real Estate",
  "Education",
  "Finance",
  "E-commerce",
  "Legal",
  "HR & Recruiting",
];

export const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Hindi",
  "Arabic",
  "Mandarin",
  "Portuguese",
  "Japanese",
  "Korean",
];

const ASSISTANTS_KEY = "vehana_assistants";
const LOGS_KEY = "vehana_conversation_logs";
const CUSTOM_CATEGORIES_KEY = "vehana_custom_categories";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Assistants
export function getAssistants(): Assistant[] {
  return read<Assistant[]>(ASSISTANTS_KEY, []);
}

export function getAssistant(id: string): Assistant | undefined {
  return getAssistants().find((a) => a.id === id);
}

export function saveAssistant(assistant: Omit<Assistant, "id" | "createdAt" | "updatedAt" | "status">): Assistant {
  const all = getAssistants();
  const now = new Date().toISOString();
  const newAssistant: Assistant = {
    ...assistant,
    id: crypto.randomUUID(),
    status: "draft",
    createdAt: now,
    updatedAt: now,
  };
  all.push(newAssistant);
  write(ASSISTANTS_KEY, all);
  return newAssistant;
}

export function updateAssistant(id: string, updates: Partial<Assistant>): Assistant | undefined {
  const all = getAssistants();
  const idx = all.findIndex((a) => a.id === id);
  if (idx === -1) return undefined;
  all[idx] = { ...all[idx], ...updates, updatedAt: new Date().toISOString() };
  write(ASSISTANTS_KEY, all);
  return all[idx];
}

export function deleteAssistant(id: string) {
  const all = getAssistants().filter((a) => a.id !== id);
  write(ASSISTANTS_KEY, all);
  // Also remove logs
  const logs = getConversationLogs().filter((l) => l.assistantId !== id);
  write(LOGS_KEY, logs);
}

// Conversation logs
export function getConversationLogs(assistantId?: string): ConversationLog[] {
  const all = read<ConversationLog[]>(LOGS_KEY, []);
  return assistantId ? all.filter((l) => l.assistantId === assistantId) : all;
}

export function addConversationLog(log: Omit<ConversationLog, "id">): ConversationLog {
  const all = read<ConversationLog[]>(LOGS_KEY, []);
  const newLog: ConversationLog = { ...log, id: crypto.randomUUID() };
  all.unshift(newLog);
  write(LOGS_KEY, all);
  return newLog;
}

// Custom categories
export function getCustomCategories(): string[] {
  return read<string[]>(CUSTOM_CATEGORIES_KEY, []);
}

export function addCustomCategory(name: string) {
  const cats = getCustomCategories();
  if (!cats.includes(name)) {
    cats.push(name);
    write(CUSTOM_CATEGORIES_KEY, cats);
  }
}

export function getAllCategories(): string[] {
  return [...PREDEFINED_CATEGORIES, ...getCustomCategories()];
}

// Seed demo conversation logs
export function seedDemoLogs() {
  const assistants = getAssistants();
  if (assistants.length === 0 || getConversationLogs().length > 0) return;

  const channels = ["Web Chat", "WhatsApp", "Phone", "SMS"];
  const sentiments: ConversationLog["sentiment"][] = ["positive", "neutral", "negative"];
  const sampleMessages = [
    { user: "I need help with my account balance", agent: "I'd be happy to help you check your account balance. Could you please verify your account number?" },
    { user: "When is my next payment due?", agent: "Your next payment is due on the 15th of this month. Would you like me to set up a reminder?" },
    { user: "I want to speak with a manager", agent: "I understand your concern. Let me connect you with a manager right away." },
    { user: "Can you explain the charges on my bill?", agent: "Of course! Let me pull up your recent statement and walk you through each charge." },
  ];

  const a = assistants[0];
  sampleMessages.forEach((msg, i) => {
    addConversationLog({
      assistantId: a.id,
      assistantName: a.name,
      userMessage: msg.user,
      agentResponse: msg.agent,
      channel: channels[i % channels.length],
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
      duration: Math.floor(Math.random() * 120) + 15,
      sentiment: sentiments[i % sentiments.length],
    });
  });
}
