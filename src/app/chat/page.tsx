"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from 'ai/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { ArrowUpIcon } from "lucide-react";

// Icons
function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M8 2h8M12 2v4M12 11v6" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5" />
    </svg>
  );
}

function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.94 18.94a10 10 0 1 0-13.88 0" />
      <circle cx="12" cy="12" r="3" />
      <path d="M16 16 22 22" />
    </svg>
  );
}

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 flex w-14 flex-col border-r bg-background sm:w-64 sm:flex">
        <div className="flex h-[60px] items-center border-b px-6 sm:px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <span className="text-2xl">Inzira</span>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-4 px-2 py-5 sm:items-start sm:px-6">
          <nav className="flex flex-col gap-1 sm:gap-2">
            <Link href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3 sm:py-2" prefetch={false}>
              <ClipboardListIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium sm:text-base">All Evaluations</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3 sm:py-2" prefetch={false}>
              <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium sm:text-base">In Progress</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3 sm:py-2" prefetch={false}>
              <CircleCheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium sm:text-base">Completed</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3 sm:py-2" prefetch={false}>
              <MessageCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium sm:text-base">Feedback</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 bg-primary text-primary-foreground transition-colors hover:bg-primary/90 sm:px-3 sm:py-2" prefetch={false}>
              <WebcamIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium sm:text-base">AI</span>
            </Link>
          </nav>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    AI Evaluations
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>AI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative flex-1 max-w-[336px]" />
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <img
                    src="/me2.jpeg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                    style={{ aspectRatio: "36/36", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <Card>
            <CardHeader>
              <CardTitle>AI Evaluations</CardTitle>
              <p className="text-muted-foreground">
                Type your question here and let our AI illuminate the path to your answers!
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {messages.map((m) => (
                  <div key={m.id} className="flex items-start gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{m.role === 'user' ? 'You' : 'AI Assistant'}</div>
                        <div className="text-xs text-muted-foreground">Just now</div>
                      </div>
                      <div className="prose text-muted-foreground">
                        <p>{m.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className="relative w-full">
                <Textarea
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  value={input}
                  name="message"
                  id="message"
                  rows={1}
                  className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute w-8 h-8 top-3 right-3"
                >
                  <ArrowUpIcon className="w-4 h-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
