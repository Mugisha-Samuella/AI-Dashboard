import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge, MoveVerticalIcon, ClipboardListIcon, ClockIcon, CircleCheckIcon, MessageCircleIcon } from "lucide-react";

export function Evals() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r border-border p-4 flex flex-col gap-4">
        <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <LayoutGridIcon className="w-6 h-6" />
          <span>AI Evaluations</span>
        </Link>
        <nav className="flex flex-col gap-2">
          {["All Evaluations", "In Progress", "Completed", "Feedback"].map((label, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              {iconMap[index]}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-background border-b border-border p-4 flex items-center gap-4">
          <h1 className="text-2xl font-bold">AI Evaluations</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <SearchIcon className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-6 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Evaluations</CardTitle>
              <CardDescription>Review and manage the performance of your AI models.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Home</TableHead>
                    <TableHead>VideCall</TableHead>
                    <TableHead>Chatbox</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {evaluationData.map((evaluation, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <Link
                          href="#"
                          className="hover:underline"
                          prefetch={false}
                        >
                          {evaluation.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant={evaluation.statusVariant}>
                          {evaluation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{evaluation.date}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoveVerticalIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Download Report</DropdownMenuItem>
                            <DropdownMenuItem>Provide Feedback</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

function LayoutGridIcon(props) {
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
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

const iconMap = [
  <ClipboardListIcon className="w-5 h-5" />,
  <ClockIcon className="w-5 h-5" />,
  <CircleCheckIcon className="w-5 h-5" />,
  <MessageCircleIcon className="w-5 h-5" />,
];

const evaluationData = [
  { name: "Evaluation 1", status: "In Progress", statusVariant: "warning", date: "2024-08-01" },
  { name: "Evaluation 2", status: "Completed", statusVariant: "success", date: "2024-07-28" },
  // More evaluation data...
];
